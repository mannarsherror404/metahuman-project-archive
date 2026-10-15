#!/bin/zsh

emulate -L zsh
unsetopt BG_NICE

PROJECT_DIR="${0:A:h}"
UI_DIR="$PROJECT_DIR/meta-human/ui"
SITE_URL="http://127.0.0.1:5173"

if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo "Node.js 22.22+ and npm are required. Install them, then try again."
  read -r "?Press Return to close."
  exit 1
fi

if ! node -e 'const [major, minor] = process.versions.node.split(".").map(Number); process.exit(major > 22 || (major === 22 && minor >= 22) ? 0 : 1)' ; then
  echo "Node.js 22.22 or newer is required. Installed: $(node --version)"
  read -r "?Press Return to close."
  exit 1
fi

cd "$UI_DIR" || exit 1

if [[ ! -x node_modules/.bin/vite ]]; then
  echo "Installing UI dependencies (internet needed for this first setup)..."
  npm ci --no-audit --no-fund || {
    echo "Installation failed. Check the error above and try again."
    read -r "?Press Return to close."
    exit 1
  }
fi

if curl --silent --fail --max-time 2 "$SITE_URL" 2>/dev/null | grep --quiet '<title>MetaHuman</title>'; then
  echo "MetaHuman UI is already running."
  open "$SITE_URL"
  exit 0
fi

if curl --silent --fail --max-time 2 "$SITE_URL" >/dev/null 2>&1; then
  echo "Port 5173 is being used by another app. Stop it and try again."
  read -r "?Press Return to close."
  exit 1
fi

echo "Starting MetaHuman UI preview..."
echo "Keep this Terminal window open while using the site."

(
  for attempt in {1..45}; do
    if curl --silent --fail --max-time 2 "$SITE_URL" 2>/dev/null | grep --quiet '<title>MetaHuman</title>'; then
      echo "MetaHuman UI is ready."
      open "$SITE_URL"
      exit 0
    fi
    sleep 1
  done
  echo "The UI did not become ready. Check the error above."
) &
WAITER_PID=$!

npm run dev -- --host 127.0.0.1 --port 5173 --strictPort
STATUS=$?
kill "$WAITER_PID" 2>/dev/null || true

if [[ "$STATUS" -ne 0 && "$STATUS" -ne 130 ]]; then
  echo "The UI stopped with an error."
  read -r "?Press Return to close."
fi

exit "$STATUS"
