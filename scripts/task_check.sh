#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  bash scripts/task_check.sh [--mode fast|full]
USAGE
}

MODE="fast"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --mode)
      shift
      MODE="${1:-}"
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    -*)
      echo "[task_check][error] unknown option: $1" >&2
      usage
      exit 1
      ;;
    *)
      echo "[task_check][error] unexpected arg: $1" >&2
      usage
      exit 1
      ;;
  esac
  shift
done

if [[ "$MODE" != "fast" && "$MODE" != "full" ]]; then
  echo "[task_check][error] mode must be fast|full" >&2
  exit 1
fi

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo "[task_check][info] run typecheck"
npm run typecheck
echo "[task_check][info] run static build"
npm run build
echo "[task_check][info] task_check ${MODE} passed"
