#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  bash scripts/task_commit.sh "中文备注" [--skip-check]
USAGE
}

NOTE=""
SKIP_CHECK=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --skip-check)
      SKIP_CHECK=1
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    -*)
      echo "[task_commit][error] unknown option: $1" >&2
      usage
      exit 1
      ;;
    *)
      if [[ -z "$NOTE" ]]; then
        NOTE="$1"
      else
        NOTE="$NOTE $1"
      fi
      ;;
  esac
  shift
done

if [[ -z "$NOTE" ]]; then
  echo "[task_commit][error] commit note is required" >&2
  usage
  exit 1
fi

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

# shellcheck source=/dev/null
source "$PROJECT_ROOT/scripts/agent_workflow_lib.sh"
aw_cd_repo_root
aw_ensure_not_protected_branch
aw_ensure_codex_branch

if [[ "$SKIP_CHECK" != "1" ]]; then
  bash "$AW_REPO_ROOT/scripts/task_check.sh"
fi

git add -A

if git diff --cached --quiet; then
  echo "[task_commit][error] no staged changes to commit" >&2
  exit 1
fi

PREFIX="$(date '+%Y-%m-%d %H:%M')"
SUBJECT="${PREFIX} ${NOTE}"

git commit -m "$SUBJECT"
echo "[task_commit][info] committed: $SUBJECT"
