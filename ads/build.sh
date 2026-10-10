#!/bin/bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [[ $# -ne 1 || ! "$1" =~ ^[0-9]+$ ]]; then
  echo 'Usage: ads/build.sh N (whole crowns; use 0 only for a layout check)' >&2
  exit 2
fi
[[ -x "$CHROME" ]] || { echo 'Google Chrome is required.' >&2; exit 1; }
TEMP="$(mktemp -d "$ROOT/ads/.render.XXXXXX")"
trap 'rm -rf "$TEMP"' EXIT
mkdir -p "$ROOT/ads/out"
python3 - "$ROOT" "$TEMP" "$1" <<'PY'
from pathlib import Path
import sys
root,temp,raw=map(str,sys.argv[1:])
number=f'{int(raw):,}'.replace(',', '\u00a0')
for source in Path(root,'ads').glob('*-*.html'):
    Path(temp,source.name).write_text(source.read_text().replace('{{N}}',number))
Path(temp,'creative.css').write_text(Path(root,'ads/creative.css').read_text())
PY
for version in a b; do
  for format in feed story; do
    height=1350
    [[ "$format" == story ]] && height=1920
    "$CHROME" --headless=new --hide-scrollbars --force-device-scale-factor=1 \
      --user-data-dir="$TEMP/profile-$version-$format" --no-first-run \
      --no-default-browser-check --disable-background-networking \
      --screenshot="$ROOT/ads/out/$version-$format.png" \
      --window-size="1080,$height" --virtual-time-budget=1500 \
      "file://$TEMP/$version-$format.html" >"$TEMP/$version-$format.log" 2>&1
    [[ -s "$ROOT/ads/out/$version-$format.png" ]] || { cat "$TEMP/$version-$format.log" >&2; exit 1; }
  done
done
printf 'Rendered feed (1080 × 1350) and story (1080 × 1920) for both versions.\n'
