#!/usr/bin/env bash

set -Eeuo pipefail

usage() {
  cat <<'EOF'
One-click deploy for the current workspace.

Default behavior matches the current production topology:
  - Build frontend from the current workspace
  - Upload static assets to the edge server
  - Switch /var/www/bambuddy/current to the new release
  - Reload nginx

It can also deploy to a real Docker host when requested.

Usage:
  ./scripts/deploy_current_workspace.sh [options]

Options:
  --mode <auto|edge-static|docker-host>
  --host <hostname>
  --user <username>
  --port <ssh-port>
  --domain <https-domain-for-verification>
  --release-id <release-id>
  --skip-build
  --skip-source-snapshot
  -h, --help

Environment:
  SSH_PASSWORD                Optional SSH password. If set, sshpass is used.
  SSHPASS                     Same as SSH_PASSWORD.
  DEPLOY_MODE                 Default: auto
  DEPLOY_HOST                 Default: public-server.example.com
  DEPLOY_USER                 Default: root
  DEPLOY_PORT                 Default: 22
  DEPLOY_DOMAIN               Default: bambuddy.example.com
  SITE_ROOT                   Default: /var/www/bambuddy
  REMOTE_SOURCE_ROOT          Default: /opt/bambuddy-source-releases
  REMOTE_WORKSPACE_ROOT       Default: /opt/bambuddy-workspaces
  BUILD_IN_DOCKER             Default: 1
  NODE_IMAGE                  Default: node:20-alpine
  BUILD_NODE_OPTIONS          Default: --max-old-space-size=2048 --max-semi-space-size=1
  BUILD_VITE_ARGS             Default: --minify=false
  BUILD_RETRY_ON_FAIL         Default: 1
  COS_BASE_URL                Optional. Example: https://bucket.cos.region.myqcloud.com/BAMBUDDY
  COS_RELEASE_PREFIX          Default: frontend-releases
  EDGE_BOOT_TIMEOUT_MS        Default: 2500
  REMOTE_PRIVILEGE_PREFIX     Optional. Example: sudo

Examples:
  SSH_PASSWORD='your-password' ./scripts/deploy_current_workspace.sh

  SSH_PASSWORD='your-password' \
  DEPLOY_MODE=docker-host \
  DEPLOY_HOST=192.168.1.10 \
  ./scripts/deploy_current_workspace.sh
EOF
}

log() {
  printf '[deploy] %s\n' "$*"
}

die() {
  printf '[deploy] ERROR: %s\n' "$*" >&2
  exit 1
}

require_cmd() {
  command -v "$1" >/dev/null 2>&1 || die "Missing required command: $1"
}

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
FRONTEND_DIR="${REPO_ROOT}/frontend"
STATIC_DIR="${REPO_ROOT}/static"

DEPLOY_MODE="${DEPLOY_MODE:-auto}"
DEPLOY_HOST="${DEPLOY_HOST:-public-server.example.com}"
DEPLOY_USER="${DEPLOY_USER:-root}"
DEPLOY_PORT="${DEPLOY_PORT:-22}"
DEPLOY_DOMAIN="${DEPLOY_DOMAIN:-bambuddy.example.com}"
SITE_ROOT="${SITE_ROOT:-/var/www/bambuddy}"
REMOTE_SOURCE_ROOT="${REMOTE_SOURCE_ROOT:-/opt/bambuddy-source-releases}"
REMOTE_WORKSPACE_ROOT="${REMOTE_WORKSPACE_ROOT:-/opt/bambuddy-workspaces}"
BUILD_IN_DOCKER="${BUILD_IN_DOCKER:-1}"
NODE_IMAGE="${NODE_IMAGE:-node:20-alpine}"
BUILD_NODE_OPTIONS="${BUILD_NODE_OPTIONS:---max-old-space-size=2048 --max-semi-space-size=1}"
BUILD_VITE_ARGS="${BUILD_VITE_ARGS:---minify=false}"
BUILD_RETRY_ON_FAIL="${BUILD_RETRY_ON_FAIL:-1}"
COS_BASE_URL="${COS_BASE_URL:-}"
COS_RELEASE_PREFIX="${COS_RELEASE_PREFIX:-frontend-releases}"
EDGE_BOOT_TIMEOUT_MS="${EDGE_BOOT_TIMEOUT_MS:-2500}"
REMOTE_PRIVILEGE_PREFIX="${REMOTE_PRIVILEGE_PREFIX:-}"
SKIP_BUILD=0
UPLOAD_SOURCE_SNAPSHOT=1
RELEASE_ID="${RELEASE_ID:-$(date +%Y%m%d-%H%M%S)}"
LOCAL_BUILD_OUT_DIR="../static"
COS_BUILD_OUT_DIR="../.deploy/cos-static/${RELEASE_ID}"
COS_STATIC_DIR="${REPO_ROOT}/.deploy/cos-static/${RELEASE_ID}"
COS_RELEASE_URL=""
LOCAL_MAIN_ASSET=""
LOCAL_CSS_ASSET=""
COS_MAIN_ASSET_URL=""
COS_CSS_ASSET_URL=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --mode)
      DEPLOY_MODE="$2"
      shift 2
      ;;
    --host)
      DEPLOY_HOST="$2"
      shift 2
      ;;
    --user)
      DEPLOY_USER="$2"
      shift 2
      ;;
    --port)
      DEPLOY_PORT="$2"
      shift 2
      ;;
    --domain)
      DEPLOY_DOMAIN="$2"
      shift 2
      ;;
    --release-id)
      RELEASE_ID="$2"
      shift 2
      ;;
    --skip-build)
      SKIP_BUILD=1
      shift
      ;;
    --skip-source-snapshot)
      UPLOAD_SOURCE_SNAPSHOT=0
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      die "Unknown argument: $1"
      ;;
  esac
done

case "$DEPLOY_MODE" in
  auto|edge-static|docker-host) ;;
  *)
    die "Unsupported mode: $DEPLOY_MODE"
    ;;
esac

if [[ -n "${COS_BASE_URL}" ]]; then
  COS_RELEASE_URL="${COS_BASE_URL%/}/${COS_RELEASE_PREFIX}/${RELEASE_ID}/"
fi

require_cmd git
require_cmd tar
require_cmd ssh
require_cmd curl

if [[ -n "${SSH_PASSWORD:-${SSHPASS:-}}" ]]; then
  require_cmd sshpass
  export SSHPASS="${SSH_PASSWORD:-${SSHPASS:-}}"
  SSH_PREFIX=(sshpass -e)
else
  SSH_PREFIX=()
fi

SSH_TARGET="${DEPLOY_USER}@${DEPLOY_HOST}"

ssh_run() {
  "${SSH_PREFIX[@]}" ssh -o StrictHostKeyChecking=no -p "${DEPLOY_PORT}" "${SSH_TARGET}" "$@"
}

remote_has_docker() {
  ssh_run "command -v docker >/dev/null 2>&1"
}

remote_compose_cmd() {
  if ssh_run "docker compose version >/dev/null 2>&1"; then
    printf 'docker compose'
  elif ssh_run "docker-compose version >/dev/null 2>&1"; then
    printf 'docker-compose'
  else
    die "Remote host has Docker but no docker compose command"
  fi
}

ensure_frontend_deps() {
  if [[ -x "${FRONTEND_DIR}/node_modules/.bin/vite" ]]; then
    return
  fi
  require_cmd npm
  log "frontend/node_modules missing, running npm install"
  (cd "${FRONTEND_DIR}" && npm install)
}

build_frontend_once() {
  local build_runner="$1"
  local node_options="$2"
  local vite_args="$3"
  local out_dir="$4"
  local asset_base="$5"
  local label="$6"
  local build_cmd="./node_modules/.bin/vite build --outDir ${out_dir}"
  local -a vite_args_array=()

  if [[ -n "${vite_args}" ]]; then
    # shellcheck disable=SC2206
    vite_args_array=(${vite_args})
    build_cmd+=" ${vite_args}"
  fi

  if [[ -n "${asset_base}" ]]; then
    build_cmd="VITE_ASSET_BASE='${asset_base}' ${build_cmd}"
  fi

  log "building ${label} via ${build_runner}: NODE_OPTIONS='${node_options}' ${build_cmd}"

  if [[ "${build_runner}" == "docker" ]]; then
    local -a docker_env=("-e" "NODE_OPTIONS=${node_options}")
    require_cmd docker
    if [[ -n "${asset_base}" ]]; then
      docker_env+=("-e" "VITE_ASSET_BASE=${asset_base}")
    fi
    docker run --rm \
      -v "${REPO_ROOT}:/repo" \
      -w /repo/frontend \
      "${docker_env[@]}" \
      "${NODE_IMAGE}" \
      sh -lc 'out_dir="$1"; shift; exec ./node_modules/.bin/vite build --outDir "$out_dir" "$@"' sh "${out_dir}" "${vite_args_array[@]}"
  else
    require_cmd node
    (
      cd "${FRONTEND_DIR}"
      if [[ -n "${asset_base}" ]]; then
        export VITE_ASSET_BASE="${asset_base}"
      else
        unset VITE_ASSET_BASE
      fi
      NODE_OPTIONS="${node_options}" ./node_modules/.bin/vite build --outDir "${out_dir}" "${vite_args_array[@]}"
    )
  fi
}

build_frontend_target() {
  local out_dir="$1"
  local output_dir="$2"
  local asset_base="$3"
  local label="$4"

  ensure_frontend_deps
  rm -rf "${output_dir}"
  mkdir -p "$(dirname "${output_dir}")"

  local -a build_runners=()
  if [[ "${BUILD_IN_DOCKER}" == "1" ]]; then
    build_runners+=(docker host)
  else
    build_runners+=(host docker)
  fi

  local -a build_profiles=("${BUILD_NODE_OPTIONS}|${BUILD_VITE_ARGS}")
  if [[ "${BUILD_RETRY_ON_FAIL}" == "1" ]]; then
    if [[ "${BUILD_VITE_ARGS}" != *"--minify=false"* ]]; then
      build_profiles+=("${BUILD_NODE_OPTIONS}|${BUILD_VITE_ARGS:+${BUILD_VITE_ARGS} }--minify=false")
    fi
    if [[ "${BUILD_NODE_OPTIONS}" != "--max-old-space-size=2048 --max-semi-space-size=1" || "${BUILD_VITE_ARGS}" != "--minify=false" ]]; then
      build_profiles+=("--max-old-space-size=2048 --max-semi-space-size=1|--minify=false")
    fi
  fi

  local -A seen_attempts=()
  local build_runner
  local build_profile
  local node_options
  local vite_args

  for build_runner in "${build_runners[@]}"; do
    if [[ "${build_runner}" == "docker" ]] && ! command -v docker >/dev/null 2>&1; then
      log "skipping docker build fallback because docker is not installed"
      continue
    fi
    if [[ "${build_runner}" == "host" ]] && ! command -v node >/dev/null 2>&1; then
      log "skipping host build fallback because node is not installed"
      continue
    fi

    for build_profile in "${build_profiles[@]}"; do
      if [[ -n "${seen_attempts["${build_runner}|${build_profile}"]:-}" ]]; then
        continue
      fi
      seen_attempts["${build_runner}|${build_profile}"]=1

      node_options="${build_profile%%|*}"
      vite_args="${build_profile#*|}"

      if build_frontend_once "${build_runner}" "${node_options}" "${vite_args}" "${out_dir}" "${asset_base}" "${label}"; then
        if [[ "${vite_args}" == *"--minify=false"* ]]; then
          log "${label} build completed with minification disabled to avoid Node OOM"
        fi
        return 0
      fi

      if [[ "${BUILD_RETRY_ON_FAIL}" == "1" ]]; then
        log "${label} build attempt failed; trying next fallback profile"
      else
        die "${label} build failed"
      fi
    done
  done

  die "${label} build failed after all OOM-safe fallback profiles"
}

extract_main_asset_path() {
  local index_file="$1"
  local asset
  asset="$(sed -nE 's#.*src="([^"]*/)?assets/([^"]*\.js)".*#assets/\2#p' "${index_file}" | head -n 1)"
  if [[ -z "${asset}" ]]; then
    asset="$(grep -oE '"/assets/[^"]*\.js"' "${index_file}" | head -n 1 | tr -d '"' | sed 's#^/##')"
  fi
  printf '%s' "${asset}"
}

extract_main_css_path() {
  local index_file="$1"
  local asset
  asset="$(sed -nE 's#.*href="([^"]*/)?assets/([^"]*\.css)".*#assets/\2#p' "${index_file}" | head -n 1)"
  if [[ -z "${asset}" ]]; then
    asset="$(grep -oE '"/assets/[^"]*\.css"' "${index_file}" | head -n 1 | tr -d '"' | sed 's#^/##')"
  fi
  printf '%s' "${asset}"
}

extract_main_asset_url() {
  local index_file="$1"
  grep -oE 'https://[^"]*assets/[^"]*\.js' "${index_file}" | head -n 1
}

extract_main_css_url() {
  local index_file="$1"
  grep -oE 'https://[^"]*assets/[^"]*\.css' "${index_file}" | head -n 1
}

generate_edge_bootstrap_index() {
  local local_index="$1"
  local output_index="$2"
  local cos_index="$3"
  local title
  local description
  local theme_color
  local cos_origin

  LOCAL_MAIN_ASSET="$(extract_main_asset_path "${local_index}")"
  LOCAL_CSS_ASSET="$(extract_main_css_path "${local_index}")"
  COS_MAIN_ASSET_URL="$(extract_main_asset_url "${cos_index}")"
  COS_CSS_ASSET_URL="$(extract_main_css_url "${cos_index}")"

  [[ -n "${LOCAL_MAIN_ASSET}" ]] || die "failed to extract local main JS asset from ${local_index}"
  [[ -n "${LOCAL_CSS_ASSET}" ]] || die "failed to extract local main CSS asset from ${local_index}"
  [[ -n "${COS_MAIN_ASSET_URL}" ]] || die "failed to extract COS main JS asset from ${cos_index}"
  [[ -n "${COS_CSS_ASSET_URL}" ]] || die "failed to extract COS main CSS asset from ${cos_index}"

  title="$(sed -n 's#.*<title>\(.*\)</title>.*#\1#p' "${local_index}" | head -n 1)"
  description="$(sed -nE 's#.*<meta name="description" content="([^"]*)".*#\1#p' "${local_index}" | head -n 1)"
  theme_color="$(sed -nE 's#.*<meta name="theme-color" content="([^"]*)".*#\1#p' "${local_index}" | head -n 1)"
  cos_origin="$(printf '%s' "${COS_MAIN_ASSET_URL}" | sed -E 's#^(https?://[^/]+)/.*#\1#')"

  [[ -n "${title}" ]] || title="Bambuddy"
  [[ -n "${description}" ]] || description="Monitor and manage your Bambu Lab 3D printers"
  [[ -n "${theme_color}" ]] || theme_color="#00ae42"

  cat > "${output_index}" <<EOF
<!doctype html>
<html lang="en" data-bambuddy-bootstrap="edge-cos-fallback">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>${title}</title>

    <meta name="description" content="${description}" />
    <meta name="theme-color" content="${theme_color}" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="${title}" />

    <link rel="manifest" href="/manifest.json" />
    <link rel="icon" type="image/png" sizes="32x32" href="/img/SYSU.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/img/SYSU.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/img/SYSU.png" />
    <link rel="apple-touch-startup-image" href="/img/SYSU.png" />
    <link rel="preconnect" href="${cos_origin}" crossorigin />

    <style>
      :root {
        color-scheme: dark;
        font-family: "Segoe UI", "PingFang SC", "Noto Sans SC", sans-serif;
        background: #08130d;
        color: #ecfff1;
      }
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        min-height: 100vh;
        background:
          radial-gradient(circle at top, rgba(0, 174, 66, 0.24), transparent 42%),
          linear-gradient(180deg, #0b1811 0%, #050a07 100%);
      }
      #root {
        min-height: 100vh;
      }
      .boot-shell {
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 24px;
      }
      .boot-card {
        width: min(420px, 100%);
        padding: 28px 24px;
        border-radius: 24px;
        background: rgba(7, 15, 10, 0.88);
        border: 1px solid rgba(96, 255, 154, 0.16);
        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
        backdrop-filter: blur(10px);
      }
      .boot-brand {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: 18px;
      }
      .boot-brand img {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.08);
        padding: 8px;
      }
      .boot-brand h1 {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 700;
      }
      .boot-brand p {
        margin: 4px 0 0;
        color: rgba(236, 255, 241, 0.72);
        font-size: 0.92rem;
      }
      .boot-status {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 18px 0 10px;
      }
      .boot-spinner {
        width: 18px;
        height: 18px;
        border-radius: 999px;
        border: 2px solid rgba(255, 255, 255, 0.14);
        border-top-color: #4cff9a;
        animation: boot-spin 0.9s linear infinite;
      }
      .boot-status strong {
        display: block;
        font-size: 0.98rem;
      }
      .boot-status span {
        display: block;
        margin-top: 4px;
        color: rgba(236, 255, 241, 0.72);
        font-size: 0.9rem;
        line-height: 1.4;
      }
      .boot-hint {
        margin: 18px 0 0;
        color: rgba(236, 255, 241, 0.58);
        font-size: 0.84rem;
        line-height: 1.5;
      }
      .boot-actions {
        margin-top: 18px;
      }
      .boot-actions button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 112px;
        padding: 10px 14px;
        border: 0;
        border-radius: 999px;
        background: #18c45f;
        color: #031108;
        font-size: 0.92rem;
        font-weight: 700;
        cursor: pointer;
      }
      .boot-actions button[hidden] {
        display: none;
      }
      @keyframes boot-spin {
        to {
          transform: rotate(360deg);
        }
      }
    </style>
  </head>
  <body>
    <div id="root">
      <div class="boot-shell">
        <div class="boot-card">
          <div class="boot-brand">
            <img src="/img/SYSU.png" alt="SYSU" />
            <div>
              <h1>${title}</h1>
              <p>服务器先返回入口，主资源优先走 COS</p>
            </div>
          </div>
          <div class="boot-status">
            <div class="boot-spinner" aria-hidden="true"></div>
            <div>
              <strong data-boot-status>正在连接 COS</strong>
              <span data-boot-detail>优先从边缘缓存加载前端主资源。</span>
            </div>
          </div>
          <p class="boot-hint">如果边缘缓存响应超时，页面会自动切换到服务器本地资源，避免一直白屏。</p>
          <div class="boot-actions">
            <button type="button" data-boot-retry hidden>重新加载</button>
          </div>
        </div>
      </div>
    </div>

    <script type="module">
      const release = {
        releaseId: "${RELEASE_ID}",
        cos: {
          js: "${COS_MAIN_ASSET_URL}",
          css: "${COS_CSS_ASSET_URL}",
          probe: "${COS_MAIN_ASSET_URL}",
        },
        local: {
          js: "/${LOCAL_MAIN_ASSET}",
          css: "/${LOCAL_CSS_ASSET}",
        },
        timeoutMs: ${EDGE_BOOT_TIMEOUT_MS},
      };

      const statusEl = document.querySelector('[data-boot-status]');
      const detailEl = document.querySelector('[data-boot-detail]');
      const retryBtn = document.querySelector('[data-boot-retry]');

      const setStatus = (title, detail) => {
        if (statusEl) statusEl.textContent = title;
        if (detailEl) detailEl.textContent = detail;
      };

      const loadStylesheet = (url) => new Promise((resolve, reject) => {
        const href = new URL(url, window.location.href).href;
        const existing = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).find((link) => link.href === href);
        if (existing) {
          if (existing.dataset.loaded === '1') {
            resolve(existing);
            return;
          }
          existing.addEventListener('load', () => resolve(existing), { once: true });
          existing.addEventListener('error', () => reject(new Error('Unable to load stylesheet ' + href)), { once: true });
          return;
        }

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        if (new URL(href).origin !== window.location.origin) {
          link.crossOrigin = '';
        }
        link.addEventListener('load', () => {
          link.dataset.loaded = '1';
          resolve(link);
        }, { once: true });
        link.addEventListener('error', () => reject(new Error('Unable to load stylesheet ' + href)), { once: true });
        document.head.appendChild(link);
      });

      const probeSource = async (url, timeoutMs) => {
        const controller = new AbortController();
        const timeout = window.setTimeout(() => controller.abort(), timeoutMs);
        try {
          const response = await fetch(url, {
            method: 'HEAD',
            mode: 'cors',
            cache: 'no-store',
            signal: controller.signal,
          });
          if (!response.ok) {
            throw new Error('HTTP ' + response.status);
          }
        } finally {
          window.clearTimeout(timeout);
        }
      };

      const loadEntry = async (source) => {
        await loadStylesheet(source.css);
        await import(source.js);
      };

      const showRetry = () => {
        if (!retryBtn) return;
        retryBtn.hidden = false;
        retryBtn.addEventListener('click', () => window.location.reload(), { once: true });
      };

      window.__BAMBUDDY_EDGE_BOOT__ = release;

      try {
        await probeSource(release.cos.probe, release.timeoutMs);
        setStatus('正在启动页面', 'COS 已响应，正在加载主应用。');
        await loadEntry(release.cos);
        document.documentElement.dataset.frontendSource = 'cos';
      } catch (cosError) {
        console.warn('[edge-bootstrap] COS load failed, falling back to local bundle', cosError);
        try {
          setStatus('切换服务器本地包', 'COS 响应较慢，正在使用服务器本地资源继续启动。');
          await loadEntry(release.local);
          document.documentElement.dataset.frontendSource = 'local';
        } catch (localError) {
          console.error('[edge-bootstrap] local fallback failed', localError);
          setStatus('页面启动失败', '前端资源未能成功加载，请检查网络后重试。');
          showRetry();
          throw localError;
        }
      }
    </script>

    <script>
      if ('serviceWorker' in navigator) {
        if (location.pathname.startsWith('/spoolbuddy')) {
          navigator.serviceWorker.getRegistrations().then((regs) => {
            if (regs.length > 0) {
              Promise.all([
                ...regs.map((r) => r.unregister()),
                caches.keys().then((names) => Promise.all(names.map((n) => caches.delete(n)))),
              ]).then(() => location.reload());
            }
          });
        } else {
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
              .then((registration) => {
                console.log('SW registered:', registration.scope);
              })
              .catch((error) => {
                console.log('SW registration failed:', error);
              });
          });
        }
      }
    </script>
  </body>
</html>
EOF
}

build_frontend() {
  build_frontend_target "${LOCAL_BUILD_OUT_DIR}" "${STATIC_DIR}" "" "local edge bundle"

  if [[ -z "${COS_RELEASE_URL}" ]]; then
    LOCAL_MAIN_ASSET="$(extract_main_asset_path "${STATIC_DIR}/index.html")"
    LOCAL_CSS_ASSET="$(extract_main_css_path "${STATIC_DIR}/index.html")"
    [[ -n "${LOCAL_MAIN_ASSET}" ]] || die "failed to extract main JS asset from ${STATIC_DIR}/index.html"
    return 0
  fi

  build_frontend_target "${COS_BUILD_OUT_DIR}" "${COS_STATIC_DIR}" "${COS_RELEASE_URL}" "cos edge bundle"

  log "publishing COS static assets to ${COS_RELEASE_URL}"
  STATIC_DIR="${COS_STATIC_DIR}" COS_BASE_URL="${COS_RELEASE_URL}" "${SCRIPT_DIR}/publish_static_to_cos.sh"

  log "generating server bootstrap index with COS-first loading and local fallback"
  generate_edge_bootstrap_index "${STATIC_DIR}/index.html" "${STATIC_DIR}/index.html" "${COS_STATIC_DIR}/index.html"
}

git_head() {
  git -C "${REPO_ROOT}" rev-parse HEAD 2>/dev/null || printf 'unknown'
}

workspace_status_summary() {
  git -C "${REPO_ROOT}" status --short
}

upload_source_snapshot() {
  [[ "${UPLOAD_SOURCE_SNAPSHOT}" == "1" ]] || return 0

  log "uploading source snapshot to remote"
  local snapshot_name="bambuddy-source-${RELEASE_ID}.tar.gz"
  local -a excludes=(
    --exclude='.git'
    --exclude='.venv'
    --exclude='node_modules'
    --exclude='frontend/node_modules'
    --exclude='archive'
    --exclude='data'
    --exclude='logs'
    --exclude='*.pyc'
    --exclude='__pycache__'
    --exclude='bambuddy.db'
    --exclude='bambuddy.db-shm'
    --exclude='bambuddy.db-wal'
  )

  ssh_run "mkdir -p '${REMOTE_SOURCE_ROOT}'"
  tar "${excludes[@]}" -czf - -C "${REPO_ROOT}" . \
    | ssh_run "cat > '${REMOTE_SOURCE_ROOT}/${snapshot_name}'"
}

deploy_edge_static() {
  log "deploy mode: edge-static"

  [[ -d "${STATIC_DIR}" ]] || die "static directory not found: ${STATIC_DIR}"
  [[ -f "${STATIC_DIR}/index.html" ]] || die "static/index.html not found; build may have failed"

  if [[ -z "${LOCAL_MAIN_ASSET}" ]]; then
    LOCAL_MAIN_ASSET="$(extract_main_asset_path "${STATIC_DIR}/index.html")"
  fi
  [[ -n "${LOCAL_MAIN_ASSET}" ]] || die "failed to determine local main JS asset from static/index.html"

  if [[ -n "${COS_RELEASE_URL}" && -z "${COS_MAIN_ASSET_URL}" && -f "${COS_STATIC_DIR}/index.html" ]]; then
    COS_MAIN_ASSET_URL="$(extract_main_asset_url "${COS_STATIC_DIR}/index.html")"
    COS_CSS_ASSET_URL="$(extract_main_css_url "${COS_STATIC_DIR}/index.html")"
  fi

  upload_source_snapshot

  log "uploading static release ${RELEASE_ID}"
  ssh_run "mkdir -p '${SITE_ROOT}/releases/${RELEASE_ID}' && rm -rf '${SITE_ROOT}/releases/${RELEASE_ID}'/*"
  tar -C "${STATIC_DIR}" -czf - . \
    | ssh_run "tar -xzf - -C '${SITE_ROOT}/releases/${RELEASE_ID}'"

  log "switching current release and reloading nginx"
  ssh_run "ln -sfn '${SITE_ROOT}/releases/${RELEASE_ID}' '${SITE_ROOT}/current' && ${REMOTE_PRIVILEGE_PREFIX:+${REMOTE_PRIVILEGE_PREFIX} }nginx -t && ${REMOTE_PRIVILEGE_PREFIX:+${REMOTE_PRIVILEGE_PREFIX} }systemctl reload nginx"

  log "verifying remote symlink"
  ssh_run "readlink -f '${SITE_ROOT}/current'"

  if [[ -n "${DEPLOY_DOMAIN}" ]]; then
    log "verifying deployed homepage and health endpoint"
    local homepage
    homepage="$(curl -fsSk "https://${DEPLOY_DOMAIN}/")"
    if [[ -n "${COS_RELEASE_URL}" ]]; then
      printf '%s' "${homepage}" | grep -q 'edge-cos-fallback' \
        || die "homepage is missing edge bootstrap marker"
      printf '%s' "${homepage}" | grep -q "${RELEASE_ID}" \
        || die "homepage is missing expected release id: ${RELEASE_ID}"
      curl -fsSk "https://${DEPLOY_DOMAIN}/${LOCAL_MAIN_ASSET}" >/dev/null \
        || die "local fallback asset check failed: ${LOCAL_MAIN_ASSET}"
      curl -fsSI "${COS_MAIN_ASSET_URL}" >/dev/null \
        || die "COS asset check failed: ${COS_MAIN_ASSET_URL}"
    else
      printf '%s' "${homepage}" | grep -q "${LOCAL_MAIN_ASSET}" \
        || die "homepage does not reference expected asset: ${LOCAL_MAIN_ASSET}"
    fi
    curl -fsSk "https://${DEPLOY_DOMAIN}/health" >/dev/null \
      || die "health endpoint check failed"
  fi

  log "edge-static deploy complete: ${RELEASE_ID} (${LOCAL_MAIN_ASSET})"
}

deploy_docker_host() {
  log "deploy mode: docker-host"
  upload_source_snapshot

  local remote_release_dir="${REMOTE_WORKSPACE_ROOT}/${RELEASE_ID}"
  local compose_cmd
  compose_cmd="$(remote_compose_cmd)"

  log "uploading workspace snapshot to remote Docker host"
  local -a excludes=(
    --exclude='.git'
    --exclude='.venv'
    --exclude='node_modules'
    --exclude='frontend/node_modules'
    --exclude='archive'
    --exclude='data'
    --exclude='logs'
    --exclude='*.pyc'
    --exclude='__pycache__'
    --exclude='bambuddy.db'
    --exclude='bambuddy.db-shm'
    --exclude='bambuddy.db-wal'
  )

  ssh_run "mkdir -p '${remote_release_dir}' && rm -rf '${remote_release_dir}'/*"
  tar "${excludes[@]}" -czf - -C "${REPO_ROOT}" . \
    | ssh_run "tar -xzf - -C '${remote_release_dir}'"

  log "building and starting containers on remote host"
  ssh_run "cd '${remote_release_dir}' && ${REMOTE_PRIVILEGE_PREFIX:+${REMOTE_PRIVILEGE_PREFIX} }${compose_cmd} up -d --build"

  if [[ -n "${DEPLOY_DOMAIN}" ]]; then
    log "verifying remote health endpoint"
    curl -fsSk "https://${DEPLOY_DOMAIN}/health" >/dev/null \
      || die "health endpoint check failed after docker-host deploy"
  fi

  log "docker-host deploy complete: ${RELEASE_ID}"
}

main() {
  log "repo root: ${REPO_ROOT}"
  log "release id: ${RELEASE_ID}"
  log "git head: $(git_head)"

  local status
  status="$(workspace_status_summary || true)"
  if [[ -n "${status}" ]]; then
    log "workspace has uncommitted changes; deploying current working tree"
    printf '%s\n' "${status}"
  fi

  if [[ "${SKIP_BUILD}" != "1" ]]; then
    build_frontend
  else
    log "skipping frontend build as requested"
  fi

  if [[ "${DEPLOY_MODE}" == "auto" ]]; then
    if remote_has_docker; then
      DEPLOY_MODE="docker-host"
    else
      DEPLOY_MODE="edge-static"
    fi
    log "auto-detected deploy mode: ${DEPLOY_MODE}"
  fi

  case "${DEPLOY_MODE}" in
    edge-static)
      deploy_edge_static
      ;;
    docker-host)
      deploy_docker_host
      ;;
    *)
      die "unexpected deploy mode: ${DEPLOY_MODE}"
      ;;
  esac
}

if [[ "${BASH_SOURCE[0]}" == "$0" ]]; then
  main "$@"
fi
