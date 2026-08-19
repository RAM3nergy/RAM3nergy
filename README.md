# RAM3nergy

Cybersecurity & Energy Engineering | World-Class Cells, Indigenous Engineering

Production-ready, mobile-first marketing site for **RAM3nergy** — high-precision solar
energy and custom LiFePO4 battery packs, engineered in Islamabad, Pakistan.

## Stack

- [Astro 4](https://astro.build) — static site generation (`output: 'static'`)
- Tailwind CSS — brand system: Deep Emerald `#00411C`, Slate Charcoal `#1E293B`,
  Electric Cyan `#0EA5E9`, Off-White `#F8FAFC`
- Inline SVG icons (Lucide paths) + Inter Variable via `@fontsource-variable/inter`
- Zero runtime JS frameworks — interactivity is small hand-rolled inline scripts

## Sections

| Section | File |
| --- | --- |
| Navbar with mobile drawer + WhatsApp CTA | `src/components/Navbar.astro` |
| Hero (zero load-shedding, CTAs) | `src/components/Hero.astro` |
| Markhor vs Urial tabbed spec tables + Marco Polo BESS | `src/components/ProductTiers.astro` |
| Battery sizing & load calculator | `src/components/LoadCalculator.astro` |
| Radical transparency (IR testing, QR traceability, 48 h SLA) | `src/components/Transparency.astro` |
| Contact / custom engineering form → WhatsApp deep link | `src/components/ContactForm.astro` |
| Footer + sticky floating WhatsApp button | `src/components/Footer.astro`, layout |

All product data, pricing, calculator physics, and WhatsApp templates live in one file:
`src/data/site.js`. **Replace `WHATSAPP_NUMBER` there with the real business line (E.164,
no `+`).**

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview
```

## Docker (homelab)

Multi-stage: Node 22 builds the site, `nginx:alpine` serves it (hardened headers,
gzip, immutable caching for `/_astro/` assets).

```bash
docker build -t ram3nergy .
docker run -d --name ram3nergy -p 8080:80 ram3nergy
# → http://localhost:8080
```

On the homelab, pull the CI-built image:

```bash
docker pull ghcr.io/<owner>/ram3nergy:latest
```

## CI/CD

`.github/workflows/deploy.yml` runs on push to `main`:

1. **deploy-pages** — builds the Astro site and deploys to GitHub Pages
   (a commented wrangler step is provided for Cloudflare Pages).
2. **docker-ghcr** — builds the Docker image and pushes to GHCR tagged
   `latest`, branch name, and `sha-<hash>`.

> GitHub Pages note: repo Settings → Pages → Source must be set to **GitHub Actions**.
> The build sets `BASE_PATH=/<repo>/` automatically; for a custom domain set it to `/`
> in `astro.config.mjs`.

## Repository layout

```
├── astro.config.mjs          # static output, base path, Tailwind integration
├── tailwind.config.mjs       # RAM3nergy brand tokens + breakpoints
├── package.json
├── Dockerfile                # multi-stage: node:22-alpine → nginx:alpine
├── deploy/nginx.conf         # hardened server config
├── .github/workflows/deploy.yml
├── public/                   # favicon.svg, og-cover.svg
└── src/
    ├── data/site.js          # single source of truth: products, prices, templates
    ├── layouts/Layout.astro  # head/SEO/OG, floating WhatsApp button
    ├── pages/index.astro
    ├── styles/global.css
    └── components/           # Navbar, Hero, ProductTiers, LoadCalculator,
                              # Transparency, ContactForm, Footer
```
