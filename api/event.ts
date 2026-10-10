import type { VercelRequest, VercelResponse } from '@vercel/node';
import { fail, method, readBody } from '../lib/http.js';
import { enrich, parseEvents } from '../lib/validation.js';
import { saveEvents } from '../lib/store.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!method(req, res, 'POST')) return;
  try {
    const events = parseEvents(await readBody(req, 4096));
    const ua = req.headers['user-agent'] ?? '';
    await saveEvents(events.map(event => enrich(event, ua)));
    res.status(204).end();
  } catch (error) { fail(res, error); }
}
