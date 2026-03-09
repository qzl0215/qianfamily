#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  bash scripts/task_pr.sh [--title "..."] [--base dev|main]
USAGE
}

TITLE=""
BASE_BRANCH=""
REMOTE_NAME="origin"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --title)
      shift
      TITLE="${1:-}"
      ;;
    --base)
      shift
      BASE_BRANCH="${1:-}"
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    -*)
      echo "[task_pr][error] unknown option: $1" >&2
      usage
      exit 1
      ;;
    *)
      echo "[task_pr][error] unexpected arg: $1" >&2
      usage
      exit 1
      ;;
  esac
  shift
done

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

# shellcheck source=/dev/null
source "$PROJECT_ROOT/scripts/agent_workflow_lib.sh"
aw_cd_repo_root
aw_require_gh_auth
aw_ensure_not_protected_branch
aw_ensure_codex_branch

BASE_BRANCH="$(aw_resolve_base_branch "$REMOTE_NAME" "$BASE_BRANCH")"
aw_ensure_base_available "$REMOTE_NAME" "$BASE_BRANCH"

if [[ "$BASE_BRANCH" == "main" ]]; then
  aw_warn "origin/dev not found yet; fallback to main as PR base"
fi

bash "$AW_REPO_ROOT/scripts/task_check.sh"

BRANCH="$(aw_current_branch)"
if [[ -z "$TITLE" ]]; then
  TITLE="$(git log -1 --pretty=%s)"
fi

GIT_DIR="$(git rev-parse --git-dir)"
if [[ "$GIT_DIR" != /* ]]; then
  GIT_DIR="$AW_REPO_ROOT/$GIT_DIR"
fi
PR_BODY_FILE="$GIT_DIR/qianfamily_pr_body_${BRANCH//\//_}.md"

cat > "$PR_BODY_FILE" <<EOF_BODY
## 变更摘要
- 本次改动目标：${TITLE}

## 验证命令
\`\`\`bash
npm run typecheck
npm run build
\`\`\`

## 风险点
1. 若涉及路由、导航或门户信息架构，请重点检查公开路径是否仍然稳定。
2. 若涉及部署或 Nginx，请确认静态导出路径和线上目录保持一致。

## 回滚方式
\`\`\`bash
git revert $(git rev-parse --short HEAD)
\`\`\`

## 备注
- 目标 base：${BASE_BRANCH}
- 若远端尚未建立 \`dev\`，当前允许临时回退到 \`main\`
EOF_BODY

aw_info "push branch: ${BRANCH}"
git push -u "$REMOTE_NAME" "$BRANCH"

aw_info "create PR -> base=${BASE_BRANCH}, head=${BRANCH}"
gh pr create --base "$BASE_BRANCH" --head "$BRANCH" --title "$TITLE" --body-file "$PR_BODY_FILE"
