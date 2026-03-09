#!/usr/bin/env bash
set -euo pipefail

BASE_BRANCH="${1:-main}"
HEAD_BRANCH="${2:-$(git rev-parse --abbrev-ref HEAD)}"
RANGE="${3:-}"

echo "[policy] base_branch=${BASE_BRANCH}"
echo "[policy] head_branch=${HEAD_BRANCH}"

if [[ ! "${HEAD_BRANCH}" =~ ^codex\/ ]]; then
  echo "[policy][error] head branch must start with 'codex/'"
  exit 1
fi

if [[ -z "${RANGE}" ]]; then
  if git rev-parse --verify "origin/${BASE_BRANCH}" >/dev/null 2>&1; then
    MERGE_BASE="$(git merge-base HEAD "origin/${BASE_BRANCH}")"
    RANGE="${MERGE_BASE}..HEAD"
  else
    RANGE="HEAD~20..HEAD"
  fi
fi

echo "[policy] commit_range=${RANGE}"

SUBJECTS_RAW="$(git log --format='%s' "${RANGE}" || true)"

if [[ -z "${SUBJECTS_RAW}" ]]; then
  echo "[policy] no commits found in range, skip commit message check."
  exit 0
fi

PATTERN='^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2} .+'
FAILED=0
while IFS= read -r s; do
  [[ -z "${s}" ]] && continue
  if [[ ! "${s}" =~ ${PATTERN} ]]; then
    echo "[policy][error] invalid commit subject: ${s}"
    FAILED=1
  fi
done <<< "${SUBJECTS_RAW}"

if [[ "${FAILED}" -ne 0 ]]; then
  echo "[policy][error] commit message format must be: YYYY-MM-DD HH:MM 中文备注"
  exit 1
fi

echo "[policy] commit message check passed."
