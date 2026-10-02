"""
Builds the "Jakub Chadim" + 3DAY dot logo as font-free SVGs (text converted to
outlines) so it renders identically on the site, in the OG image and on invoices.

    python3 -m venv .venv && .venv/bin/pip install fonttools
    .venv/bin/python scripts/build-logo.py path/to/InterDisplay-Bold.ttf

Needs `hb-shape` (HarfBuzz) for kerning and `rsvg-convert` for the PNG exports.
Layout mirrors the site header: tracking -0.025em, the dot 0.36em tall, 0.1em
after the last letter, sitting on the baseline.
"""

import json
import re
import subprocess
import sys
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

TEXT = 'Jakub Chadim'
TRACKING = -0.025  # em, as `tracking-[-0.025em]` in the Wordmark
DOT_SIZE = 0.36  # em
DOT_GAP = 0.1  # em
BRAND = '#FF3F2E'

root = Path(__file__).resolve().parent.parent
font_path = sys.argv[1]
font = TTFont(font_path)
upm = font['head'].unitsPerEm
glyph_set = font.getGlyphSet()
order = font.getGlyphOrder()

shaped = json.loads(
    subprocess.check_output(['hb-shape', '--output-format=json', '--no-glyph-names', font_path, TEXT])
)

# Text outlines, baseline at y=0 (SVG y grows downwards, so flip).
pen = SVGPathPen(glyph_set)
x = 0.0
for g in shaped:
    glyph_set[order[g['g']]].draw(TransformPen(pen, (1, 0, 0, -1, x + g['dx'], -g['dy'])))
    x += g['ax'] + TRACKING * upm
text_d = pen.getCommands()

# The 3DAY favicon circle, unmodified path in a 4..28 box.
sun_svg = (root / 'public/brand/3day-sun.svg').read_text()
sun_d = re.search(r'd="([^"]+)"', sun_svg).group(1)
dot = DOT_SIZE * upm
dot_x = x + DOT_GAP * upm
scale = dot / 24

# Tight bounds: glyph extents from the glyf table.
glyf = font['glyf']
top = 0.0
left = None
pos = 0.0
for g in shaped:
    gl = glyf[order[g['g']]]
    if gl.numberOfContours:
        top = max(top, gl.yMax)
        gx = pos + gl.xMin
        left = gx if left is None else min(left, gx)
    pos += g['ax'] + TRACKING * upm
bottom = max(0.0, -min(glyf[order[g['g']]].yMin for g in shaped if glyf[order[g['g']]].numberOfContours))
right = dot_x + dot
width, height = right - left, top + bottom


def svg(text_fill: str) -> str:
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{left:.1f} {-top:.1f} {width:.1f} {height:.1f}" role="img" aria-label="Jakub Chadim">
  <path fill="{text_fill}" d="{text_d}"/>
  <g transform="translate({dot_x:.1f} {-dot:.1f}) scale({scale:.5f}) translate(-4 -4)">
    <path fill="{BRAND}" d="{sun_d}"/>
  </g>
</svg>
'''


out = root / 'public/brand'
variants = {'jakub-chadim-logo-white.svg': '#FFFFFF', 'jakub-chadim-logo-dark.svg': '#101D22'}
for name, fill in variants.items():
    (out / name).write_text(svg(fill))
    png = out / name.replace('.svg', '.png')
    subprocess.check_call(['rsvg-convert', '-w', '2000', '-o', str(png), str(out / name)])
    print(name, png.name)

print(f'aspect ratio {width / height:.4f}  (height = cap height of the name)')
