import type { VercelRequest, VercelResponse } from '@vercel/node';
import { HttpError } from './validation.js';

export async function readBody(req: VercelRequest, limit: number): Promise<unknown> {
  const length = req.headers['content-length'];
  if (length && Number(length) > limit) throw new HttpError(413, 'payload_too_large');
  const contentType = req.headers['content-type']?.split(';')[0].trim().toLowerCase();
  if (contentType && !['application/json', 'text/plain'].includes(contentType)) throw new HttpError(415, 'unsupported_media_type');
  let body: unknown;
  if (typeof req.on === 'function') {
    body = await new Promise<Buffer>((resolve, reject) => {
      const chunks: Buffer[] = [];
      let size = 0;
      let exceeded = false;
      req.on('data', (chunk: Buffer | string) => {
        if (exceeded) return;
        const bytes = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
        size += bytes.length;
        if (size > limit) {
          exceeded = true;
          chunks.length = 0;
          reject(new HttpError(413, 'payload_too_large'));
        } else chunks.push(bytes);
      });
      req.on('end', () => { if (!exceeded) resolve(Buffer.concat(chunks)); });
      req.on('error', reject);
      req.on('aborted', () => reject(new HttpError(400, 'invalid_payload')));
    });
  } else body = req.body;
  const raw = Buffer.isBuffer(body) ? body.toString('utf8') : typeof body === 'string' ? body : JSON.stringify(body);
  if (!raw) throw new HttpError(400, 'invalid_payload');
  if (Buffer.byteLength(raw) > limit) throw new HttpError(413, 'payload_too_large');
  try { return JSON.parse(raw); } catch { throw new HttpError(400, 'invalid_payload'); }
}
export function method(req: VercelRequest, res: VercelResponse, expected: string): boolean {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === expected) return true;
  res.setHeader('Allow', expected);
  res.status(405).json({ ok: false, code: 'method_not_allowed' });
  return false;
}
export function fail(res: VercelResponse, error: unknown): void {
  if (error instanceof HttpError) {
    res.status(error.status).json({ ok: false, ...(error.field ? { field: error.field } : {}), code: error.code });
  } else {
    console.error('Request failed');
    res.status(500).json({ ok: false, code: 'server_error' });
  }
}
