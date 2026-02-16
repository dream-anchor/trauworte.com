// CMS-Content Hook: Lädt Seiteninhalt von der Workers API
// Hardcoded-Fallback bleibt bestehen → SEO-Content im Prerender, CMS-Content nach Hydration

import { useQuery } from "@tanstack/react-query";
import { fetchPage, type PageContent } from "@/config/apiClient";

export interface CmsHero {
  label?: string;
  title?: string;
  titleAccent?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
}

export interface CmsSection {
  title?: string;
  titleAccent?: string;
  content?: string;
}

export interface CmsFaq {
  question?: string;
  answer?: string;
  // Aliase aus altem Format
  q?: string;
  a?: string;
}

export interface CmsCta {
  title?: string;
  titleAccent?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface CmsContent {
  hero?: CmsHero;
  sections?: CmsSection[];
  faq?: CmsFaq[];
  cta?: CmsCta;
}

export interface UseCmsResult {
  /** Gesamtes PageContent-Objekt (oder null) */
  page: PageContent | null;
  /** Parsed content (hero, sections, faq, cta) */
  content: CmsContent;
  /** SEO-Felder */
  seoTitle: string | undefined;
  seoDescription: string | undefined;
  seoCanonical: string | undefined;
  keywords: string[];
  /** Loading-State */
  isLoading: boolean;
}

export default function usePageContent(slug: string): UseCmsResult {
  const { data, isLoading } = useQuery({
    queryKey: ["cms-page", slug],
    queryFn: () => fetchPage(slug),
    staleTime: 5 * 60 * 1000, // 5 Minuten
    retry: 1,
    // Während SSR nicht fetchen — hardcoded Fallback wird genutzt
    enabled: typeof window !== "undefined",
  });

  const page = data ?? null;
  const raw = (page?.content ?? {}) as Record<string, unknown>;

  return {
    page,
    content: {
      hero: (raw.hero as CmsHero) ?? undefined,
      sections: (raw.sections as CmsSection[]) ?? undefined,
      faq: (raw.faq as CmsFaq[]) ?? undefined,
      cta: (raw.cta as CmsCta) ?? undefined,
    },
    seoTitle: page?.seo_title ?? undefined,
    seoDescription: page?.seo_description ?? undefined,
    seoCanonical: page?.seo_canonical ?? undefined,
    keywords: page?.keywords ?? [],
    isLoading,
  };
}
