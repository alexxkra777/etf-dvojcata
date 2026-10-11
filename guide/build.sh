#!/bin/bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[[ -x "$CHROME" ]] || { echo "Google Chrome is required." >&2; exit 1; }
python3 "$ROOT/guide/prepare.py"
mkdir -p "$ROOT/public"
python3 - "$ROOT" "$CHROME" <<'PY'
from pathlib import Path
import os, signal, subprocess, sys, tempfile, time
root=Path(sys.argv[1]); output=root/'public/pruvodce-etf.pdf'
with tempfile.TemporaryDirectory(prefix='etf-guide-') as profile:
    draft=Path(profile)/'pruvodce.pdf'
    with tempfile.TemporaryFile() as log:
        proc=subprocess.Popen([sys.argv[2], '--headless=new', '--no-pdf-header-footer', '--disable-gpu', '--disable-extensions', '--no-first-run', '--no-default-browser-check', '--user-data-dir='+profile, '--print-to-pdf='+str(draft), (root/'guide/pruvodce.html').as_uri()],stdout=log,stderr=log,start_new_session=True)
        try:
            deadline=time.monotonic()+60
            while time.monotonic()<deadline:
                log.seek(0)
                if b'bytes written to file' in log.read() and draft.exists():
                    break
                if proc.poll() is not None:
                    if proc.returncode: raise RuntimeError('Chrome failed to render the PDF.')
                    if draft.exists(): break
                time.sleep(.25)
            else: raise TimeoutError('Chrome PDF render exceeded 60 seconds.')
        finally:
            if proc.poll() is None:
                os.killpg(proc.pid,signal.SIGTERM)
                try:proc.wait(timeout=5)
                except subprocess.TimeoutExpired:os.killpg(proc.pid,signal.SIGKILL);proc.wait()
        if not draft.exists() or draft.stat().st_size==0:raise RuntimeError('The PDF is empty.')
        os.replace(draft,output)
        print('PDF: '+str(output))
PY
