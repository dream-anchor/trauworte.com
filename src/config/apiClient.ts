// API Client für Sick CMS
// Phase 1: localStorage als Speicher
// Phase 2: Cloudflare Workers API (Neon DB)

const STORAGE_PREFIX = "sickcms_";

export interface PageContent {
  page_slug: string;
  page_title: string;
  content: Record<string, unknown>;
  seo_title?: string;
  seo_description?: string;
  seo_canonical?: string;
  keywords?: string[];
  updated_at?: string;
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

// ── Pages ──

export async function fetchPages(): Promise<PageContent[]> {
  const pages: PageContent[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith(STORAGE_PREFIX + "page_")) {
      try {
        pages.push(JSON.parse(localStorage.getItem(key)!));
      } catch { /* skip corrupt */ }
    }
  }
  return pages.sort((a, b) => a.page_slug.localeCompare(b.page_slug));
}

export async function fetchPage(slug: string): Promise<PageContent | null> {
  const raw = localStorage.getItem(STORAGE_PREFIX + "page_" + slug);
  return raw ? JSON.parse(raw) : null;
}

export async function savePage(page: PageContent): Promise<PageContent> {
  page.updated_at = new Date().toISOString();
  localStorage.setItem(
    STORAGE_PREFIX + "page_" + page.page_slug,
    JSON.stringify(page)
  );
  return page;
}

// ── Navigation ──

export async function fetchNavigation(key: string): Promise<NavigationData | null> {
  const raw = localStorage.getItem(STORAGE_PREFIX + "nav_" + key);
  return raw ? JSON.parse(raw) : null;
}

export async function saveNavigation(data: NavigationData): Promise<NavigationData> {
  data.updated_at = new Date().toISOString();
  localStorage.setItem(
    STORAGE_PREFIX + "nav_" + data.nav_key,
    JSON.stringify(data)
  );
  return data;
}
