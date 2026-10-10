import { resolveMx, resolve4 } from 'node:dns/promises';
import { HttpError } from './validation.js';

export async function checkDomain(domain: string): Promise<boolean> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const lookup = async () => {
    const results = await Promise.allSettled([resolveMx(domain), resolve4(domain)]);
    if (results.some(result => result.status === 'fulfilled' && result.value.some(record =>
      typeof record === 'string' ? Boolean(record) : Boolean(record.exchange && record.exchange !== '.')))) return true;
    for (const result of results) {
      if (result.status === 'rejected') {
        const code = (result.reason as NodeJS.ErrnoException).code;
        if (code === 'ETIMEOUT') return true;
        if (code !== 'ENOTFOUND' && code !== 'ENODATA') throw new HttpError(503, 'dns_unavailable');
      }
    }
    return false;
  };
  try {
    return await Promise.race([
      lookup(),
      new Promise<boolean>(resolve => { timer = setTimeout(() => resolve(true), 1500); }),
    ]);
  } finally { clearTimeout(timer); }
}
