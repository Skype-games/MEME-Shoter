#!/usr/bin/env bash
# start.sh — Build (when needed) and serve the MEME-Shoter static app in the
# foreground on PORT (default 3000).
#
# Source and built output stay inside PROJECT_DIR. OPENCODE_WEB_DIR and
# RUNNER_TEMP are used only for worker metadata / capture evidence.
set -euo pipefail

PROJECT_DIR="${PROJECT_DIR:-/home/runner/work/MEME-Shoter/MEME-Shoter}"
cd "$PROJECT_DIR"

: "${OPENCODE_WEB_DIR:?OPENCODE_WEB_DIR is required}"
: "${RUNTIME_DIR:?RUNTIME_DIR is required}"
PORT="${PORT:-3000}"
export PORT

# The built static directory always lives inside PROJECT_DIR.
BUILT_DIR="$PROJECT_DIR"
export BUILT_DIR

timeit() { /usr/bin/time -p "$@"; }

echo "[start] PROJECT_DIR=$PROJECT_DIR PORT=$PORT OPENCODE_WEB_DIR=$OPENCODE_WEB_DIR BUILT_DIR=$BUILT_DIR"

# 1. Write deployment metadata.
#    directory = absolute built static directory inside PROJECT_DIR.
mkdir -p "$OPENCODE_WEB_DIR"
timeit node - <<'NODE'
const fs = require('fs')
const project = process.env.PROJECT_DIR
const directory = process.env.BUILT_DIR || project
fs.writeFileSync(
  process.env.OPENCODE_WEB_DIR + '/deployment-output.json',
  JSON.stringify({ project, directory }, null, 2) + '\n'
)
console.log('[start] deployment-output.json', { project, directory })
NODE

# 2. Install dependencies when a package.json is present.
if [[ -f package.json ]]; then
  echo "[start] package.json found; installing dependencies"
  timeit npm install --no-audit --no-fund
fi

# 3. Build when a build script is present; re-point deployment output at dist.
if [[ -f package.json ]] && node -e 'process.exit(require("./package.json").scripts && require("./package.json").scripts.build ? 0 : 1)'; then
  echo "[start] build script present; building"
  BUILT_DIR="$PROJECT_DIR/dist"
  export BUILT_DIR
  timeit npm run build
  timeit node - <<'NODE'
const fs = require('fs')
const project = process.env.PROJECT_DIR
const directory = process.env.BUILT_DIR || project
fs.writeFileSync(
  process.env.OPENCODE_WEB_DIR + '/deployment-output.json',
  JSON.stringify({ project, directory }, null, 2) + '\n'
)
console.log('[start] deployment-output.json (post-build)', { project, directory })
NODE
fi

# 4. Serve the built static output in the foreground on PORT.
echo "[start] serving static output from $BUILT_DIR on :$PORT"
exec /usr/bin/time -p node "${RUNTIME_DIR:?}/scripts/default-start.mjs" "$BUILT_DIR"
