#!/usr/bin/env python3
"""Erzeugt das Vorschau-Paket für eine eigene Adresse (z. B. vorschau.singende-krankenhaeuser.de) – ohne Claude-Bestandteile.

Aufruf (im Ordner skh-design):
    python3 vorschau-paket/erzeuge_paket.py [FORMS-LINK]

Ergebnis: Ordner vorschau-paket/ausgabe/ und vorschau-paket/vorschau-paket.zip
  - index.html            = Abnahme-Übersicht (abnahme.html); Rückmeldebogen ohne Claude-Speicher, stattdessen Knopf zum Microsoft-Forms-Formular
  - vorschau-foto*.html   = alle Vorschauseiten, mit HTML-Rahmen, „Seite oben öffnen“ und „nicht in Suchmaschinen“
  - fotos/, abnahme/      = nur die tatsächlich verwendeten Bilder
  - robots.txt            = Suchmaschinen aussperren
Doku: vorschau-paket/ANLEITUNG.md
"""
import glob, os, re, shutil, sys, zipfile

HIER = os.path.dirname(os.path.abspath(__file__))
BASIS = os.path.dirname(HIER)                       # skh-design/
AUS = os.path.join(HIER, 'ausgabe')
FORMS = sys.argv[1] if len(sys.argv) > 1 else 'FORMS-LINK-HIER-EINTRAGEN'

KOPF = '''<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<script>/* Seite beim Öffnen oben zeigen (außer bei Sprungmarke #…) */try{history.scrollRestoration="manual"}catch(e){}function skhTop(){if(!location.hash)window.scrollTo(0,0)}addEventListener("DOMContentLoaded",skhTop);addEventListener("load",skhTop);addEventListener("pageshow",skhTop);</script>
'''

def lies(p): return open(p, encoding='utf-8').read()
def schreib(p, s):
    os.makedirs(os.path.dirname(p), exist_ok=True)
    open(p, 'w', encoding='utf-8').write(s)

if os.path.isdir(AUS): shutil.rmtree(AUS)
os.makedirs(AUS)
bilder = set()

# 1. Vorschauseiten
for f in sorted(glob.glob(os.path.join(BASIS, 'vorschau-foto*.html'))):
    s = lies(f)
    assert '<!doctype' not in s[:200].lower(), f
    bilder.update(re.findall(r'src="((?:fotos|abnahme)/[^"]+)"', s))
    schreib(os.path.join(AUS, os.path.basename(f)), KOPF + s)

# 2. Übersicht -> index.html
s = lies(os.path.join(BASIS, 'abnahme.html'))
# Claude-Speicher-Skript des Bogens entfernen
a = s.index('// Rückmeldebogen: speichert je Person')
a = s.rindex('<script>', 0, a); b = s.index('</script>', a) + len('</script>')
s = s[:a] + s[b:]
assert 'window.claude' not in s
s = s.replace('Teil 4 · direkt hier ankreuzen', 'Teil 4 · Rückmeldung', 1)
knopf = ('<p class="good" style="margin-bottom:24px"><b>Am einfachsten online:</b> '
         f'<a class="pill gold" href="{FORMS}" target="_blank" rel="noopener">Rückmeldung abgeben</a> '
         '– je Grundsatz und Seite „passt“ oder „ändern“, mit Anmerkung. Oder den Bogen unten ausdrucken (Strg + P) und an Tom schicken.</p>\n  ')
i = s.index('<div id="bogen-static">')
s = s[:i] + knopf + s[i:]
bilder.update(re.findall(r'src="((?:fotos|abnahme)/[^"]+)"', s))
schreib(os.path.join(AUS, 'index.html'), KOPF + '<title>Vorschau neue Webseite – Singende Krankenhäuser e.V.</title>\n' + s)

# 3. Bilder, robots.txt
for b in sorted(bilder):
    q = os.path.join(BASIS, b)
    if os.path.exists(q):
        os.makedirs(os.path.join(AUS, os.path.dirname(b)), exist_ok=True)
        shutil.copy2(q, os.path.join(AUS, b))
    else:
        print('fehlt:', b)
schreib(os.path.join(AUS, 'robots.txt'), 'User-agent: *\nDisallow: /\n')

# 4. Kontrolle: nichts mit Claude
for f in glob.glob(os.path.join(AUS, '*.html')):
    t = lies(f).lower()
    for w in ('claude', 'anthropic', 'artifact'):
        assert w not in t, (f, w)

# 5. ZIP
z = os.path.join(HIER, 'vorschau-paket.zip')
with zipfile.ZipFile(z, 'w', zipfile.ZIP_DEFLATED) as zf:
    for root, _, files in os.walk(AUS):
        for fn in files:
            p = os.path.join(root, fn); zf.write(p, os.path.relpath(p, AUS))
n = len(glob.glob(os.path.join(AUS, '*.html')))
print(f'fertig: {n} Seiten, {len(bilder)} Bilder, Forms-Link: {FORMS}, ZIP {os.path.getsize(z)//1024} KB')
