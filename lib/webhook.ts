import type { StoredLead } from './store.js';

export async function sendWebhook(url: string, lead: StoredLead): Promise<void> {
  try {
    const response = await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead), signal: AbortSignal.timeout(2000), redirect: 'error',
    });
    if (!response.ok) console.error('Lead webhook returned an error', { status: response.status });
    await response.body?.cancel();
  } catch { console.error('Lead webhook delivery failed'); }
}
