import type { VercelRequest, VercelResponse } from '@vercel/node';
import { fail, method } from '../lib/http.js';
import { authorized, getStats, statsOptions } from '../lib/stats.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!method(req, res, 'GET')) return;
  if (!authorized(req)) {
    res.status(401).json({ ok: false, code: 'unauthorized' });
    return;
  }
  try { res.status(200).json(await getStats(statsOptions(req.query))); }
  catch (error) { fail(res, error); }
}
