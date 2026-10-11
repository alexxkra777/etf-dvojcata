import { defineConfig, loadEnv, type Plugin } from 'vite';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { renderPage } from './src/template';

function localApi(): Plugin {
  return {
    name: 'local-api',
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        const url = new URL(request.url ?? '/', 'http://localhost');
        if (!url.pathname.startsWith('/api/')) return next();
        if (!['/api/event', '/api/lead', '/api/stats'].includes(url.pathname)) {
          response.statusCode = 404;
          response.end();
          return;
        }
        const req = request as VercelRequest;
        req.query = {};
        for (const key of new Set(url.searchParams.keys())) {
          const values = url.searchParams.getAll(key);
          req.query[key] = values.length === 1 ? values[0] : values;
        }
        const res = response as VercelResponse;
        res.status = code => { res.statusCode = code; return res; };
        res.json = data => {
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify(data));
          return res;
        };
        try {
          const module = await server.ssrLoadModule(`${url.pathname}.ts`);
          await module.default(req, res);
        } catch {
          if (!res.headersSent) res.status(500).json({ ok: false, code: 'server_error' });
          else res.end();
        }
      });
    },
  };
}
// Fills {{placeholders}} in the HTML from the data and fee model, and fixes Czech typography.
function pageTemplate(): Plugin {
  return {
    name: 'page-template',
    transformIndexHtml: { order: 'pre', handler: html => renderPage(html) },
  };
}
export default defineConfig(({ mode, command }) => {
  if (command === 'serve') {
    const env = loadEnv(mode, process.cwd(), '');
    for (const key of ['DATABASE_URL', 'STATS_TOKEN', 'LEAD_WEBHOOK_URL']) {
      if (process.env[key] === undefined && env[key]) process.env[key] = env[key];
    }
  }
  return {
    plugins: [localApi(), pageTemplate()],
    build: {
      // fonts must stay files: the CSP has font-src 'self', data: URIs would be blocked
      assetsInlineLimit: 0,
      modulePreload: { polyfill: false },
      rollupOptions: { input: { main: 'index.html', stats: 'stats.html' } },
    },
  };
});
