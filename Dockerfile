# syntax=docker/dockerfile:1
# ---------------------------------------------------------------------------
# RAM3nergy — multi-stage production image
# Stage 1: Node.js builds the static Astro site
# Stage 2: Nginx Alpine serves it (tiny attack surface, homelab-friendly)
# ---------------------------------------------------------------------------

FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Build the static site
COPY . .
RUN npm run build

# ---------------------------------------------------------------------------
FROM nginx:1.27-alpine AS production

# Hardened, cache-aware server config
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

# Static artifacts only — no Node, no sources, no node_modules
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO /dev/null http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
