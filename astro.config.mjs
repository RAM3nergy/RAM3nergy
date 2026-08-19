import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages project sites are served from /<repo-name>/ — the CI pipeline
// exports BASE_PATH for that case. For a custom domain (e.g. ram3nergy.pk
// on Cloudflare Pages) leave BASE_PATH unset and it defaults to '/'.
const BASE_PATH = process.env.BASE_PATH || '/';

export default defineConfig({
  site: 'https://ram3nergy.pk',
  base: BASE_PATH,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    tailwind({
      // We ship our own global.css with the @tailwind directives
      // (see src/styles/global.css, imported from the layout).
      applyBaseStyles: false,
    }),
  ],
});
