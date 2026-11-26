// Lead counts from Leadzap (LeadTrackerCRM in Supabase), fetched at build time.
// Only the counts end up in the HTML; no lead details are ever sent to the browser.
//
// Netlify env vars (build-only, never exposed client-side):
//   LEADZAP_SUPABASE_URL  e.g. https://aeaxbqcgyzminbmnjdxy.supabase.co
//   LEADZAP_SUPABASE_KEY  service role key (bypasses RLS for the count query)
// Without them, the snapshot below is used so builds never fail.

export interface ClientLeads { name: string; trade: string; place: string; leads: number; caseStudy?: string }
export interface LeadStats { total: number; clients: ClientLeads[]; live: boolean }

const CLIENTS = [
  { id: 'c1834a89-cb46-4086-9088-2dc711bf65c3', name: "Jimbo's Cleaning", trade: 'Exterior cleaning', place: 'Irvine', snapshot: 143, caseStudy: '/case-studies/jimbos-exterior-cleaning' },
  { id: '908da52e-9be9-4eb8-a950-d63a8b182689', name: 'Ayrshire Fencing Group', trade: 'Fencing', place: 'Ayrshire', snapshot: 100 },
  { id: 'd800b51d-f446-4648-8124-60775c56da8f', name: 'Double O Detailing', trade: 'Car detailing', place: 'Killearn', snapshot: 52, caseStudy: '/case-studies/double-o-detailing' },
  { id: '571aefb2-4ef3-4a53-bb68-d86d4a7e9e76', name: 'RB Joinery', trade: 'Joinery', place: 'Kilmarnock', snapshot: 50, caseStudy: '/case-studies/rb-joinery' },
  { id: '9e3d219d-f24b-4605-8947-3201326a3c42', name: 'EK Power Washing', trade: 'Exterior cleaning', place: 'East Kilbride', snapshot: 32 },
];

// Snapshot taken 26 Nov 2026 (spam and deleted leads excluded).
const SNAPSHOT_TOTAL = 678;

const toClient = (c: (typeof CLIENTS)[number], leads: number): ClientLeads => ({ name: c.name, trade: c.trade, place: c.place, leads, caseStudy: c.caseStudy });

let cached: Promise<LeadStats> | null = null;

async function count(url: string, key: string, clientId?: string): Promise<number> {
  const params = new URLSearchParams({ select: 'id', deleted_at: 'is.null', or: '(is_spam.is.null,is_spam.is.false)' });
  if (clientId) params.set('client_id', `eq.${clientId}`);
  const res = await fetch(`${url}/rest/v1/leads?${params}`, {
    headers: { apikey: key, Authorization: `Bearer ${key}`, Prefer: 'count=exact', Range: '0-0' },
  });
  if (!res.ok) throw new Error(`Leadzap count failed: ${res.status}`);
  const n = Number((res.headers.get('content-range') ?? '').split('/')[1]);
  if (!Number.isFinite(n)) throw new Error('Leadzap count missing');
  return n;
}

const snapshot = (): LeadStats => ({ total: SNAPSHOT_TOTAL, clients: CLIENTS.map((c) => toClient(c, c.snapshot)), live: false });

export function getLeadStats(): Promise<LeadStats> {
  if (cached) return cached;
  const url = import.meta.env.LEADZAP_SUPABASE_URL ?? process.env.LEADZAP_SUPABASE_URL;
  const key = import.meta.env.LEADZAP_SUPABASE_KEY ?? process.env.LEADZAP_SUPABASE_KEY;
  if (!url || !key) return (cached = Promise.resolve(snapshot()));
  cached = (async () => {
    try {
      const [total, ...per] = await Promise.all([count(url, key), ...CLIENTS.map((c) => count(url, key, c.id))]);
      return { total, clients: CLIENTS.map((c, i) => toClient(c, per[i])).sort((a, b) => b.leads - a.leads), live: true };
    } catch (err) {
      console.warn('[leadStats] falling back to snapshot:', err);
      return snapshot();
    }
  })();
  return cached;
}
