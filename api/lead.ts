import type { VercelRequest, VercelResponse } from '@vercel/node';
import { waitUntil } from '@vercel/functions';
import { fail, method, readBody } from '../lib/http.js';
import { enrich, HttpError, object, parseLead } from '../lib/validation.js';
import { saveLead } from '../lib/store.js';
import { checkDomain } from '../lib/dns.js';
import { sendWebhook } from '../lib/webhook.js';

const success = { ok: true, guide_url: '/pruvodce-etf.pdf' };
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!method(req, res, 'POST')) return;
  try {
    const input = object(await readBody(req, 8192));
    if (input.company !== undefined && input.company !== '') {
      res.status(200).json(success);
      return;
    }
    const lead = parseLead(input);
    if (!await checkDomain(lead.email.split('@')[1])) throw new HttpError(422, 'no_domain', 'email');
    const now = new Date();
    const event = enrich({
      sid: lead.sid, variant: lead.variant, type: 'lead_ok', utm: lead.utm,
      section: null, value: null, props: {}, ref: null, path: '/', ts: now.getTime(),
    }, req.headers['user-agent'] ?? '', now);
    const saved = await saveLead(lead, now, event);
    if (process.env.LEAD_WEBHOOK_URL) waitUntil(sendWebhook(process.env.LEAD_WEBHOOK_URL, saved));
    res.status(200).json(success);
  } catch (error) { fail(res, error); }
}
