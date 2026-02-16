// API Client für Sick CMS
// Spricht mit dem Cloudflare Worker (Neon DB)

const API_BASE =
  import.meta.env.VITE_API_URL || "https://trauworte-api.antoine-dfc.workers.dev";

// ── Types ──

export interface PageContent {
  page_slug: string;
  page_title: string;
  content: Record<string, unknown>;
  seo_title?: string;
  seo_description?: string;
  seo_canonical?: string;
  keywords?: string[];
  updated_at?: string;
  updated_by?: string;
}

export interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationItem[];
}

export interface NavigationData {
  nav_key: string;
  items: NavigationItem[];
  updated_at?: string;
}

export interface HistoryEntry {
  id: string;
  page_slug: string;
  snapshot: Record<string, unknown>;
  changed_by?: string;
  created_at: string;
}

// ── Helper ──

async function api<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok && res.status !== 404) {
    throw new Error(`API ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

// ── Pages ──

export async function fetchPages(): Promise<PageContent[]> {
  return api<PageContent[]>("/api/pages");
}

export async function fetchPage(slug: string): Promise<PageContent | null> {
  const res = await fetch(`${API_BASE}/api/pages/${slug}`, {
    headers: { "Content-Type": "application/json" },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json();
}

export async function savePage(page: PageContent): Promise<PageContent> {
  return api<PageContent>(`/api/pages/${page.page_slug}`, {
    method: "PUT",
    body: JSON.stringify(page),
  });
}

export async function deletePage(slug: string): Promise<void> {
  await api(`/api/pages/${slug}`, { method: "DELETE" });
}

export async function restorePage(slug: string): Promise<PageContent> {
  return api<PageContent>(`/api/pages/${slug}/restore`, { method: "PUT" });
}

export async function fetchTrash(): Promise<PageContent[]> {
  return api<PageContent[]>("/api/pages/trash");
}

// ── History (Undo/Redo) ──

export async function fetchHistory(slug: string): Promise<HistoryEntry[]> {
  return api<HistoryEntry[]>(`/api/history/${slug}`);
}

export async function fetchHistoryEntry(slug: string, id: string): Promise<HistoryEntry | null> {
  const res = await fetch(`${API_BASE}/api/history/${slug}/${id}`, {
    headers: { "Content-Type": "application/json" },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json();
}

// ── Navigation ──

export async function fetchNavigation(key: string): Promise<NavigationData | null> {
  const res = await fetch(`${API_BASE}/api/navigation/${key}`, {
    headers: { "Content-Type": "application/json" },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json();
}

export async function saveNavigation(data: NavigationData): Promise<NavigationData> {
  return api<NavigationData>(`/api/navigation/${data.nav_key}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}
