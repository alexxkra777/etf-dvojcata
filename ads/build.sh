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
import re, sys
root,temp,raw=map(str,sys.argv[1:])
number=f'{int(raw):,}'.replace(',', '\u00a0')
for source in Path(root,'ads').glob('*-*.html'):
    Path(temp,source.name).write_text(source.read_text().replace('{{N}}',number))
css=Path(root,'ads/creative.css').read_text()
def absolute_url(match):
    relative=match.group(1).strip('"\'')
    return 'url("'+(Path(root,'ads')/relative).resolve().as_uri()+'")'
css=re.sub(r'url\(([^)]+)\)',absolute_url,css)
Path(temp,'creative.css').write_text(css)
PY
python3 - "$ROOT" "$TEMP" "$CHROME" <<'PYRENDER'
from pathlib import Path
import os, shutil, signal, subprocess, sys, time
root,temp,chrome=sys.argv[1:]
for version in ('a','b'):
    for form,height in (('feed',1350),('story',1920)):
        output=Path(temp,f'{version}-{form}.png')
        destination=Path(root,'ads/out',output.name)
        args=[chrome,'--headless=new','--hide-scrollbars','--force-device-scale-factor=1',
              f'--user-data-dir={temp}/profile-{version}-{form}','--no-first-run',
              '--no-default-browser-check','--disable-background-networking',
              f'--screenshot={output}',f'--window-size=1080,{height}',
              '--virtual-time-budget=1500',f'file://{temp}/{version}-{form}.html']
        with open(f'{temp}/{version}-{form}.log','w') as log:
            proc=subprocess.Popen(args,stdout=log,stderr=log,start_new_session=True)
            try:
                deadline=time.monotonic()+45
                while not output.exists() and proc.poll() is None and time.monotonic()<deadline:
                    time.sleep(.2)
                if not output.exists() or output.stat().st_size==0:
                    raise RuntimeError(f'Chrome did not render {version}-{form}')
                time.sleep(.3)
            finally:
                try: os.killpg(proc.pid,signal.SIGTERM)
                except ProcessLookupError: pass
                try: proc.wait(timeout=5)
                except subprocess.TimeoutExpired:
                    os.killpg(proc.pid,signal.SIGKILL)
                    proc.wait()
        shutil.move(str(output),str(destination))
PYRENDER
printf 'Rendered feed (1080 × 1350) and story (1080 × 1920) for both versions.\n'
