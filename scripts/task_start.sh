#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  bash scripts/task_start.sh <topic> [--base dev|main] [--allow-dirty]
USAGE
}

TOPIC=""
BASE_BRANCH=""
REMOTE_NAME="origin"
ALLOW_DIRTY=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --base)
      shift
      BASE_BRANCH="${1:-}"
      [[ -n "$BASE_BRANCH" ]] || { usage; exit 1; }
      ;;
    --allow-dirty)
      ALLOW_DIRTY=1
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    -*)
      echo "[task_start][error] unknown option: $1" >&2
      usage
      exit 1
      ;;
    *)
      if [[ -z "$TOPIC" ]]; then
        TOPIC="$1"
      else
        TOPIC="$TOPIC $1"
      fi
      ;;
  esac
  shift
done

if [[ -z "$TOPIC" ]]; then
  echo "[task_start][error] topic is required" >&2
  usage
  exit 1
fi

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

# shellcheck source=/dev/null
source "$PROJECT_ROOT/scripts/agent_workflow_lib.sh"
aw_cd_repo_root
aw_validate_agent_id "${AGENT_ID:-}"
aw_check_dirty "$ALLOW_DIRTY"

BASE_BRANCH="$(aw_resolve_base_branch "$REMOTE_NAME" "$BASE_BRANCH")"
aw_ensure_base_available "$REMOTE_NAME" "$BASE_BRANCH"

if [[ "$BASE_BRANCH" == "main" ]]; then
  aw_warn "origin/dev not found yet; fallback to main as task base"
fi

TOPIC_SLUG="$(aw_slugify_topic "$TOPIC")"
TARGET_BRANCH="codex/${AGENT_ID}/${TOPIC_SLUG}"

if [[ "$ALLOW_DIRTY" == "1" ]] && aw_is_dirty; then
  aw_warn "dirty workspace: skip switching local ${BASE_BRANCH}; use ${REMOTE_NAME}/${BASE_BRANCH} as start point"
  START_REF="${REMOTE_NAME}/${BASE_BRANCH}"
else
  aw_checkout_base "$REMOTE_NAME" "$BASE_BRANCH"
  START_REF="$BASE_BRANCH"
fi

if git show-ref --verify --quiet "refs/heads/${TARGET_BRANCH}"; then
  git switch "$TARGET_BRANCH" >/dev/null
else
  git switch -c "$TARGET_BRANCH" "$START_REF" >/dev/null
fi

aw_info "ready branch: $(aw_current_branch)"
