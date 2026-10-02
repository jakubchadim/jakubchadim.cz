# jakubchadim.cz

Personal website. Next.js (static export) + Tailwind CSS, hosted on GitHub Pages.

- `pnpm dev` — dev server on [localhost:3000](http://localhost:3000)
- `pnpm build` — static export to `out/`
- `pnpm run deploy` — build and publish `out/` to the `gh-pages` branch

Content lives in `app/content.ts`.

## Logo

`public/brand/jakub-chadim-logo-{white,dark}.{svg,png}` — the name in Inter Display Bold converted to outlines
(no font needed) plus the 3DAY.STUDIO favicon dot. Regenerate with:

```
python3 -m venv .venv && .venv/bin/pip install fonttools
.venv/bin/python scripts/build-logo.py assets/fonts/InterDisplay-Bold.ttf
```

Needs `hb-shape` and `rsvg-convert` (`brew install harfbuzz librsvg`).
