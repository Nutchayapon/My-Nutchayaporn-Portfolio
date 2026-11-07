// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// After the first deploy, put your real address here (e.g. 'https://your-name.vercel.app')
// so share previews (og:image) use the right domain.
export default defineConfig({
  site: 'https://nutchayaporn-portfolio.vercel.app',
  integrations: [react()],
});
