#!/usr/bin/env python3
"""Use local font packages and shared palette tokens when present."""
from pathlib import Path
import re
root=Path(__file__).resolve().parent.parent
css=[]
for package,family in [('@fontsource-variable/fraunces','Guide Serif'),('@fontsource/ibm-plex-sans','Guide Sans'),('@fontsource-variable/ibm-plex-sans','Guide Sans')]:
    directory=root/'node_modules'/package/'files'
    if not directory.exists():continue
    for subset in ['latin-ext','latin']:
        files=sorted(directory.glob('*-'+subset+'-*.woff2'))
        files=[p for p in files if (subset!='latin' or 'latin-ext' not in p.name) and not any(s in p.name for s in ['italic','cyrillic'])]
        variable=[p for p in files if 'wght' in p.name]
        regular=[p for p in files if '-400-' in p.name]
        chosen=(variable or regular or files)
        if not chosen:continue
        file=chosen[0]
        weight='100 900' if 'wght' in file.name else '400'
        ranges='U+0100-024F,U+1E00-1EFF,U+2020-2027' if subset=='latin-ext' else 'U+0000-00FF,U+2000-201F,U+2028-206F,U+20AC,U+2190-21FF'
        css.append(f'@font-face{{font-family:"{family}";font-style:normal;font-weight:{weight};src:url("../{file.relative_to(root)}") format("woff2");unicode-range:{ranges};font-display:block}}')
    if files:css.append(':root{'+('--heading:"Guide Serif",Georgia,serif' if family=='Guide Serif' else '--body:"Guide Sans",system-ui,sans-serif')+'}')
    if family=='Guide Sans' and css and 'Guide Sans' in ''.join(css):break
# Keep the guide reproducible even when the page has not been built yet.
tokens=root/'src/styles/tokens.css'
if tokens.exists():
    text=tokens.read_text()
    aliases={'paper':['paper','bg','background'],'ink':['ink','text'],'muted':['ink-muted','muted','text-muted'],'rule':['rules','rule','border'],'us':['us','us-slate'],'eu':['eu','eu-twin','twin'],'accent':['signal-ink','accent'],'highlight':['marker','highlighter','highlight']}
    declarations=[]
    for target,names in aliases.items():
        for name in names:
            match=re.search(r'--(?:color-)?'+re.escape(name)+r'\s*:\s*(#[0-9a-fA-F]{3,8})\s*;',text)
            if match:declarations.append('--'+target+':'+match[1]);break
    if declarations:css.append(':root{'+ ';'.join(declarations)+'}')
(root/'guide/fonts.css').write_text('\n'.join(css)+'\n')
