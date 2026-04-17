#!/usr/bin/env bash

set -Eeuo pipefail

log() {
  printf '[cos-publish] %s\n' "$*"
}

die() {
  printf '[cos-publish] ERROR: %s\n' "$*" >&2
  exit 1
}

require_cmd() {
  command -v "$1" >/dev/null 2>&1 || die "Missing required command: $1"
}

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
STATIC_DIR="${STATIC_DIR:-${REPO_ROOT}/static}"
COS_BASE_URL="${COS_BASE_URL:-${1:-}}"

[[ -n "${COS_BASE_URL}" ]] || die "Usage: COS_BASE_URL=https://bucket.cos.region.myqcloud.com/BAMBUDDY/ $0"
[[ -d "${STATIC_DIR}" ]] || die "Static directory not found: ${STATIC_DIR}"
[[ -f "${STATIC_DIR}/index.html" ]] || die "Missing ${STATIC_DIR}/index.html"

require_cmd curl
require_cmd file
require_cmd find

COS_BASE_URL="${COS_BASE_URL%/}/"

content_type_for() {
  case "$1" in
    *.css)
      printf 'text/css'
      ;;
    *.js|*.mjs)
      printf 'application/javascript'
      ;;
    *.json|*.map)
      printf 'application/json'
      ;;
    *.svg)
      printf 'image/svg+xml'
      ;;
    *.png)
      printf 'image/png'
      ;;
    *.jpg|*.jpeg)
      printf 'image/jpeg'
      ;;
    *.webp)
      printf 'image/webp'
      ;;
    *.gif)
      printf 'image/gif'
      ;;
    *.ico)
      printf 'image/x-icon'
      ;;
    *.wasm)
      printf 'application/wasm'
      ;;
    *.woff)
      printf 'font/woff'
      ;;
    *.woff2)
      printf 'font/woff2'
      ;;
    *.ttf)
      printf 'font/ttf'
      ;;
    *)
      file --mime-type -b "$2"
      ;;
  esac
}

rewrite_generated_files() {
  log "rewriting generated files for COS-backed assets"

  if [[ -f "${STATIC_DIR}/index.html" ]]; then
    sed -i "s#${COS_BASE_URL}manifest.json#/manifest.json#g" "${STATIC_DIR}/index.html"
  fi

  if [[ -f "${STATIC_DIR}/manifest.json" ]]; then
    sed -i "s#\"/img/#\"${COS_BASE_URL}img/#g" "${STATIC_DIR}/manifest.json"
  fi

  if [[ -f "${STATIC_DIR}/sw.js" ]]; then
    sed -i "s#'/img/#'${COS_BASE_URL}img/#g" "${STATIC_DIR}/sw.js"
  fi
}

cache_control_for() {
  case "$1" in
    assets/*)
      printf 'public, max-age=31536000, immutable'
      ;;
    img/*|icons/*)
      printf 'public, max-age=86400'
      ;;
    *)
      printf 'public, max-age=3600'
      ;;
  esac
}

upload_tree() {
  local rel_root="$1"
  local dir="${STATIC_DIR}/${rel_root}"

  [[ -d "${dir}" ]] || return 0

  while IFS= read -r -d '' file_path; do
    local rel_path="${file_path#${STATIC_DIR}/}"
    local target_url="${COS_BASE_URL}${rel_path}"
    local content_type
    local cache_control

    content_type="$(content_type_for "${rel_path}" "${file_path}")"
    cache_control="$(cache_control_for "${rel_path}")"

    curl -fsS --http1.1 \
      --retry 8 \
      --retry-all-errors \
      --retry-delay 2 \
      --connect-timeout 15 \
      --max-time 300 \
      -X PUT \
      --upload-file "${file_path}" \
      -H "Content-Type: ${content_type}" \
      -H "Cache-Control: ${cache_control}" \
      "${target_url}" >/dev/null

    log "uploaded ${rel_path}"
  done < <(find "${dir}" -type f -print0)
}

verify_upload() {
  local main_asset
  local css_asset
  local css_headers

  main_asset="$(grep -oE 'https://[^"]*assets/[^"]*\.js' "${STATIC_DIR}/index.html" | head -n 1)"
  [[ -n "${main_asset}" ]] || die "Could not determine main JS asset from ${STATIC_DIR}/index.html"
  css_asset="$(grep -oE 'https://[^"]*assets/[^"]*\.css' "${STATIC_DIR}/index.html" | head -n 1)"
  [[ -n "${css_asset}" ]] || die "Could not determine main CSS asset from ${STATIC_DIR}/index.html"

  curl -fsSI "${main_asset}" >/dev/null
  curl -fsSI "${COS_BASE_URL}img/SYSU.png" >/dev/null

  css_headers="$(curl -fsSI "${css_asset}")"
  printf '%s' "${css_headers}" | grep -qi '^Content-Type: text/css' \
    || die "CSS asset does not have text/css content type: ${css_asset}"
}

verify_tree() {
  while IFS= read -r -d '' file_path; do
    local rel_path="${file_path#${STATIC_DIR}/}"
    local target_url="${COS_BASE_URL}${rel_path}"

    curl -fsSI --http1.1 \
      --retry 5 \
      --retry-all-errors \
      --retry-delay 2 \
      --connect-timeout 15 \
      --max-time 120 \
      "${target_url}" >/dev/null
  done < <(find "${STATIC_DIR}/assets" "${STATIC_DIR}/img" "${STATIC_DIR}/icons" -type f -print0 2>/dev/null)
}

rewrite_generated_files
upload_tree assets
upload_tree img
upload_tree icons
verify_tree
verify_upload

log "COS publish complete"
