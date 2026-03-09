#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

# shellcheck source=/dev/null
source "$PROJECT_ROOT/scripts/agent_workflow_lib.sh"
aw_cd_repo_root

aw_require_exec node
aw_require_exec npm
aw_require_exec git
aw_require_gh_auth

git config core.hooksPath .githooks

for f in \
  "$AW_REPO_ROOT/scripts/setup_agent_workflow.sh" \
  "$AW_REPO_ROOT/scripts/task_start.sh" \
  "$AW_REPO_ROOT/scripts/task_check.sh" \
  "$AW_REPO_ROOT/scripts/task_commit.sh" \
  "$AW_REPO_ROOT/scripts/task_pr.sh" \
  "$AW_REPO_ROOT/.githooks/pre-commit" \
  "$AW_REPO_ROOT/.githooks/commit-msg" \
  "$AW_REPO_ROOT/.githooks/pre-push"; do
  if [[ -f "$f" ]]; then
    chmod +x "$f"
  fi
done

aw_info "configure git hooks path -> .githooks"
aw_info "setup done"
aw_info "next: export AGENT_ID=<your-id>"
aw_info "daily flow: task_start -> task_check -> task_commit -> task_pr"
