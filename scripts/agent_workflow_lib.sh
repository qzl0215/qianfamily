#!/usr/bin/env bash

aw_info() {
  echo "[workflow][info] $*"
}

aw_warn() {
  echo "[workflow][warn] $*" >&2
}

aw_fail() {
  echo "[workflow][error] $*" >&2
  exit 1
}

aw_repo_root() {
  git rev-parse --show-toplevel 2>/dev/null || aw_fail "not inside git repository"
}

aw_cd_repo_root() {
  AW_REPO_ROOT="$(aw_repo_root)"
  cd "$AW_REPO_ROOT"
}

aw_current_branch() {
  git rev-parse --abbrev-ref HEAD
}

aw_validate_agent_id() {
  local agent_id="$1"
  if [[ -z "$agent_id" ]]; then
    aw_fail "AGENT_ID is required. Example: export AGENT_ID=my-agent"
  fi
  if [[ ! "$agent_id" =~ ^[a-z0-9._-]+$ ]]; then
    aw_fail "AGENT_ID must match [a-z0-9._-]+"
  fi
}

aw_slugify_topic() {
  local raw="$1"
  local slug
  slug="$(echo "$raw" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9._-]+/-/g; s/^-+//; s/-+$//; s/-+/-/g')"
  if [[ -z "$slug" ]]; then
    slug="task-$(date '+%Y%m%d%H%M%S')"
  fi
  echo "$slug"
}

aw_is_dirty() {
  [[ -n "$(git status --porcelain)" ]]
}

aw_check_dirty() {
  local allow_dirty="$1"
  if aw_is_dirty; then
    if [[ "$allow_dirty" == "1" ]]; then
      aw_warn "dirty workspace detected; continue because --allow-dirty is set"
    else
      aw_fail "dirty workspace detected. Commit/stash first or re-run with --allow-dirty"
    fi
  fi
}

aw_ensure_not_protected_branch() {
  local branch
  branch="$(aw_current_branch)"
  if [[ "$branch" == "dev" || "$branch" == "main" ]]; then
    aw_fail "direct work on protected branch '$branch' is forbidden"
  fi
}

aw_ensure_codex_branch() {
  local branch
  branch="$(aw_current_branch)"
  if [[ ! "$branch" =~ ^codex/ ]]; then
    aw_fail "current branch '$branch' must start with 'codex/'"
  fi
}

aw_require_exec() {
  local name="$1"
  command -v "$name" >/dev/null 2>&1 || aw_fail "missing command: $name"
}

aw_require_gh_auth() {
  aw_require_exec gh
  gh auth status >/dev/null 2>&1 || aw_fail "gh not authenticated. Run: gh auth login"
}

aw_remote_branch_exists() {
  local remote="$1"
  local branch="$2"
  git ls-remote --exit-code --heads "$remote" "$branch" >/dev/null 2>&1
}

aw_resolve_base_branch() {
  local remote="${1:-origin}"
  local preferred="${2:-}"

  if [[ -n "$preferred" ]]; then
    echo "$preferred"
    return 0
  fi

  if aw_remote_branch_exists "$remote" "dev" || git show-ref --verify --quiet "refs/heads/dev"; then
    echo "dev"
    return 0
  fi

  echo "main"
}

aw_ensure_base_available() {
  local remote="$1"
  local base="$2"

  git fetch "$remote" "$base" --quiet >/dev/null 2>&1 || true
  if git show-ref --verify --quiet "refs/heads/$base"; then
    return 0
  fi
  if git rev-parse --verify --quiet "refs/remotes/$remote/$base" >/dev/null; then
    return 0
  fi
  aw_fail "base branch not found: $remote/$base"
}

aw_checkout_base() {
  local remote="$1"
  local base="$2"

  if git show-ref --verify --quiet "refs/heads/$base"; then
    git switch "$base" >/dev/null
    git pull --ff-only "$remote" "$base"
    return 0
  fi

  git switch -c "$base" --track "$remote/$base" >/dev/null
}
