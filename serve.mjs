import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, 'website');
export const PORT = 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
};

export function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      let p = req.url.split('?')[0];
      if (p === '/') p = '/index.html';
      const file = join(ROOT, p);
      try {
        const data = await readFile(file);
        res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'text/plain' });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end('404');
      }
    });
    server.listen(PORT, '127.0.0.1', () => resolve(server));
  });
}

// Run standalone: node serve.mjs
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const s = await startServer();
  console.log(`Serving http://localhost:${PORT}`);
  process.on('SIGINT', () => { s.close(); process.exit(); });
}
