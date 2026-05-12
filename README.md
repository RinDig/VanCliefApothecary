# VC Writings — site

A small multi-page website for **VC Writings**, the poetry apothecary by Stephanie Van Clief on Aviles Street in St. Augustine.

## Pages

| File | Purpose |
|---|---|
| `index.html`     | Homepage — hero, philosophy, how it works, featured prescription, visit |
| `prescribe.html` | Interactive 4-step prescription flow |
| `shelf.html`     | This week's shelf of bottles |
| `about.html`     | Stephanie's story + the shop's promises |
| `visit.html`     | Hours, address, directions, Aviles Street illustration |
| `brand.html`     | Brand book — palette, type, motif (our craft) |

All pages share the navigation, footer, palette tokens, and the dragonfly mark.

## Deploy it

The site is just static HTML / CSS / JSX. To put it online, upload **this whole folder** to any static host:

### Option A — Netlify Drop (fastest)
1. Go to https://app.netlify.com/drop
2. Drag this `site` folder onto the page
3. Get an instant URL like `vc-writings-abc123.netlify.app`
4. (Optional) connect a custom domain in Netlify's settings

### Option B — GitHub Pages
1. Create a new GitHub repo (e.g. `vc-writings`)
2. Upload the contents of this folder to the repo root
3. Settings → Pages → Source: `main` branch, root folder
4. Your site is live at `<username>.github.io/vc-writings`

### Option C — Vercel / Cloudflare Pages / Surge.sh
All work the same way — point them at this folder.

## Customizing

- **Copy & text:** edit the JSX files in `pages/` directly. Each section is plain JSX with inline content.
- **Colors:** see `tokens.css` (10-color palette as CSS variables).
- **Layout & responsive breakpoints:** `site.css` — uses fluid `clamp()` typography and CSS grid with `auto-fit`.
- **The dragonfly mark + SVC monogram:** `components/dragonfly.jsx`.
- **The poem library** (what's prescribed for which occasion): `pages/prescribe.jsx`, function `matchPoem()`.

## Note on performance

This site uses Babel **in the browser** (loaded from a CDN) to compile JSX at page load. It works perfectly and is great for prototypes and small sites, but the first paint takes about 1–2 seconds. For a heavily-trafficked production site you'd want to pre-compile the JSX to plain JS at build time — let me know if you want that and I'll set it up.

## Local preview

To view locally, you cannot just open `index.html` from your file system (the relative font/script CDN requests will be blocked). Run any simple static server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then open http://localhost:8000.

---

*Made by hand on Aviles Street.*
