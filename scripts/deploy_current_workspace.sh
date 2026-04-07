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
  DEPLOY_HOST                 Default: 43.160.198.64
  DEPLOY_USER                 Default: root
  DEPLOY_PORT                 Default: 22
  DEPLOY_DOMAIN               Default: sysuzgxytj.top
  SITE_ROOT                   Default: /var/www/bambuddy
  REMOTE_SOURCE_ROOT          Default: /opt/bambuddy-source-releases
  REMOTE_WORKSPACE_ROOT       Default: /opt/bambuddy-workspaces
  BUILD_IN_DOCKER             Default: 1
  NODE_IMAGE                  Default: node:20-alpine
  BUILD_NODE_OPTIONS          Default: --max-old-space-size=12288 --max-semi-space-size=512
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
DEPLOY_HOST="${DEPLOY_HOST:-43.160.198.64}"
DEPLOY_USER="${DEPLOY_USER:-root}"
DEPLOY_PORT="${DEPLOY_PORT:-22}"
DEPLOY_DOMAIN="${DEPLOY_DOMAIN:-sysuzgxytj.top}"
SITE_ROOT="${SITE_ROOT:-/var/www/bambuddy}"
REMOTE_SOURCE_ROOT="${REMOTE_SOURCE_ROOT:-/opt/bambuddy-source-releases}"
REMOTE_WORKSPACE_ROOT="${REMOTE_WORKSPACE_ROOT:-/opt/bambuddy-workspaces}"
BUILD_IN_DOCKER="${BUILD_IN_DOCKER:-1}"
NODE_IMAGE="${NODE_IMAGE:-node:20-alpine}"
BUILD_NODE_OPTIONS="${BUILD_NODE_OPTIONS:---max-old-space-size=12288 --max-semi-space-size=512}"
REMOTE_PRIVILEGE_PREFIX="${REMOTE_PRIVILEGE_PREFIX:-}"
SKIP_BUILD=0
UPLOAD_SOURCE_SNAPSHOT=1
RELEASE_ID="${RELEASE_ID:-$(date +%Y%m%d-%H%M%S)}"

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

build_frontend() {
  ensure_frontend_deps

  log "building frontend from current workspace"
  if [[ "${BUILD_IN_DOCKER}" == "1" ]]; then
    require_cmd docker
    docker run --rm \
      -v "${REPO_ROOT}:/repo" \
      -w /repo/frontend \
      -e "NODE_OPTIONS=${BUILD_NODE_OPTIONS}" \
      "${NODE_IMAGE}" \
      sh -lc './node_modules/.bin/vite build'
  else
    (
      cd "${FRONTEND_DIR}"
      NODE_OPTIONS="${BUILD_NODE_OPTIONS}" ./node_modules/.bin/vite build
    )
  fi
}

extract_main_asset() {
  sed -n 's#.*src="/assets/\([^"]*\.js\)".*#\1#p' "${STATIC_DIR}/index.html" | head -n 1
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

  local main_asset
  main_asset="$(extract_main_asset)"
  [[ -n "${main_asset}" ]] || die "failed to extract main JS asset from static/index.html"

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
    curl -fsSk "https://${DEPLOY_DOMAIN}/" | grep -q "/assets/${main_asset}" \
      || die "homepage does not reference expected asset: ${main_asset}"
    curl -fsSk "https://${DEPLOY_DOMAIN}/health" >/dev/null \
      || die "health endpoint check failed"
  fi

  log "edge-static deploy complete: ${RELEASE_ID} (${main_asset})"
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

main "$@"
