// Lead counts from Leadzap (LeadTrackerCRM in Supabase), fetched at build time.
// Only the counts end up in the HTML; no lead details are ever sent to the browser.
//
// Netlify env vars (build-only, never exposed client-side):
//   LEADZAP_SUPABASE_URL  e.g. https://aeaxbqcgyzminbmnjdxy.supabase.co
//   LEADZAP_SUPABASE_KEY  service role key (bypasses RLS for the count query)
// Without them, the snapshot below is used so builds never fail.

export interface LeadStats {
  total: number;
  jimbos: number;
  ayrshireFencing: number;
  rbJoinery: number;
  live: boolean;
}

const CLIENTS = {
  jimbos: "c1834a89-cb46-4086-9088-2dc711bf65c3",
  ayrshireFencing: "908da52e-9be9-4eb8-a950-d63a8b182689",
  rbJoinery: "571aefb2-4ef3-4a53-bb68-d86d4a7e9e76",
} as const;

// Snapshot taken 26 Nov 2026 (spam and deleted leads excluded).
const SNAPSHOT: LeadStats = { total: 678, jimbos: 143, ayrshireFencing: 100, rbJoinery: 50, live: false };

let cached: Promise<LeadStats> | null = null;

async function count(url: string, key: string, clientId?: string): Promise<number> {
  const params = new URLSearchParams({ select: "id", deleted_at: "is.null", or: "(is_spam.is.null,is_spam.is.false)" });
  if (clientId) params.set("client_id", `eq.${clientId}`);
  const res = await fetch(`${url}/rest/v1/leads?${params}`, {
    headers: { apikey: key, Authorization: `Bearer ${key}`, Prefer: "count=exact", Range: "0-0" },
  });
  if (!res.ok) throw new Error(`Leadzap count failed: ${res.status}`);
  const range = res.headers.get("content-range") ?? "";
  const n = Number(range.split("/")[1]);
  if (!Number.isFinite(n)) throw new Error("Leadzap count missing");
  return n;
}

export function getLeadStats(): Promise<LeadStats> {
  if (cached) return cached;
  const url = import.meta.env.LEADZAP_SUPABASE_URL ?? process.env.LEADZAP_SUPABASE_URL;
  const key = import.meta.env.LEADZAP_SUPABASE_KEY ?? process.env.LEADZAP_SUPABASE_KEY;
  if (!url || !key) return (cached = Promise.resolve(SNAPSHOT));
  cached = (async () => {
    try {
      const [total, jimbos, ayrshireFencing, rbJoinery] = await Promise.all([
        count(url, key),
        count(url, key, CLIENTS.jimbos),
        count(url, key, CLIENTS.ayrshireFencing),
        count(url, key, CLIENTS.rbJoinery),
      ]);
      return { total, jimbos, ayrshireFencing, rbJoinery, live: true };
    } catch (err) {
      console.warn("[leadStats] falling back to snapshot:", err);
      return SNAPSHOT;
    }
  })();
  return cached;
}
