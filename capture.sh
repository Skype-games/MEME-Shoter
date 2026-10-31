#!/usr/bin/env bash
# capture.sh — Open CAPTURE_URL in a browser, wait for rendered content, and
# capture desktop (final-desktop.png) and mobile (final-mobile.png) views into
# CAPTURE_DIR. The app is left running.
#
# Exit codes:
#   75 — temporary navigation / browser infrastructure failure
#    1 — script or rendering defect
#    0 — success
set -uo pipefail

: "${CAPTURE_URL:?CAPTURE_URL is required}"
: "${CAPTURE_DIR:?CAPTURE_DIR is required}"
: "${RUNTIME_DIR:?RUNTIME_DIR is required}"

timeit() { /usr/bin/time -p "$@"; }

echo "[capture] CAPTURE_URL=$CAPTURE_URL"
echo "[capture] CAPTURE_DIR=$CAPTURE_DIR"
echo "[capture] RUNTIME_DIR=$RUNTIME_DIR"

# Capture output lives outside the source tree (in CAPTURE_DIR / RUNNER_TEMP).
mkdir -p "$CAPTURE_DIR"

# default-capture.mjs opens the URL with Playwright, waits for rendered content,
# captures desktop + mobile views as final-desktop.png / final-mobile.png,
# closes its own browser, and exits 75 (transient) or 1 (defect) / 0 (ok).
timeit node "${RUNTIME_DIR:?}/scripts/default-capture.mjs"
status=$?

echo "[capture] completed with exit $status"
exit "$status"
