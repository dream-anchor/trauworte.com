import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import RichTextEditor from "@/components/admin/RichTextEditor";
import SeoSection from "@/components/admin/SeoSection";
import KeywordManager, { analyzeKeywords } from "@/components/admin/KeywordManager";
import KeywordBadges from "@/components/admin/KeywordBadges";
import FaqEditor, { type FaqItem } from "@/components/admin/FaqEditor";
import SectionEditor, { type ContentSection } from "@/components/admin/SectionEditor";
import { useAuth } from "@/components/admin/AdminPasswordGate";
import { getPageBySlug } from "@/config/pageRegistry";
import { fetchPage, savePage, type PageContent } from "@/config/apiClient";

// ── Typen ──

interface HeroData {
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
}

interface CtaData {
  title: string;
  titleAccent: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

interface EditorState {
  hero: HeroData;
  sections: ContentSection[];
  faq: FaqItem[];
  cta: CtaData;
  seo_title: string;
  seo_description: string;
  seo_canonical: string;
  keywords: string[];
}

const defaultHero: HeroData = {
  label: "", title: "", titleAccent: "", subtitle: "",
  image: "", imageAlt: "", imageCredit: "",
};

const defaultCta: CtaData = {
  title: "", titleAccent: "", text: "",
  buttonText: "Jetzt anfragen", buttonLink: "/freie-trauung-kontakt",
};

// ── Undo/Redo Hook ──

const MAX_HISTORY = 100;

function useUndoRedo(initial: EditorState) {
  const [stack, setStack] = useState<EditorState[]>([initial]);
  const [index, setIndex] = useState(0);
  const skipNextPush = useRef(false);

  const current = stack[index];

  const push = useCallback((s: EditorState) => {
    if (skipNextPush.current) {
      skipNextPush.current = false;
      return;
    }
    setStack((prev) => {
      const newStack = prev.slice(0, index + 1);
      newStack.push(s);
      if (newStack.length > MAX_HISTORY) newStack.shift();
      return newStack;
    });
    setIndex((prev) => Math.min(prev + 1, MAX_HISTORY - 1));
  }, [index]);

  const undo = useCallback(() => {
    if (index > 0) {
      skipNextPush.current = true;
      setIndex((i) => i - 1);
    }
  }, [index]);

  const redo = useCallback(() => {
    if (index < stack.length - 1) {
      skipNextPush.current = true;
      setIndex((i) => i + 1);
    }
  }, [index, stack.length]);

  const reset = useCallback((s: EditorState) => {
    setStack([s]);
    setIndex(0);
  }, []);

  return { current, push, undo, redo, reset, canUndo: index > 0, canRedo: index < stack.length - 1 };
}

// ═══════════════════════════════════════════════════
// ADMIN PAGE EDITOR
// ═══════════════════════════════════════════════════

const AdminPageEditor = () => {
  const location = useLocation();
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";
  const slug = location.pathname.replace(/^\/admin\/pages\//, "") || undefined;
  const pageEntry = slug ? getPageBySlug(slug) : undefined;

  const defaultState: EditorState = {
    hero: { ...defaultHero }, sections: [], faq: [], cta: { ...defaultCta },
    seo_title: "", seo_description: "", seo_canonical: "", keywords: [],
  };

  const { current: state, push: pushState, undo, redo, reset: resetHistory, canUndo, canRedo } = useUndoRedo(defaultState);

  const [loading, setLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();
  const isInitialLoad = useRef(true);

  // setState wrapper — pusht auf den Undo-Stack
  const setState = useCallback((updater: (s: EditorState) => EditorState) => {
    pushState(updater(state));
  }, [state, pushState]);

  // ── Laden ──
  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    isInitialLoad.current = true;
    fetchPage(slug).then((page) => {
      if (page) {
        const c = page.content as Record<string, unknown>;
        const loaded: EditorState = {
          hero: (c.hero as HeroData) ?? { ...defaultHero },
          sections: (c.sections as ContentSection[]) ?? [],
          faq: (c.faq as FaqItem[]) ?? [],
          cta: (c.cta as CtaData) ?? { ...defaultCta },
          seo_title: page.seo_title ?? "",
          seo_description: page.seo_description ?? "",
          seo_canonical: page.seo_canonical ?? "",
          keywords: page.keywords ?? [],
        };
        resetHistory(loaded);
      }
      setLoading(false);
      // Nach kurzem Delay initial-Flag entfernen
      setTimeout(() => { isInitialLoad.current = false; }, 500);
    }).catch(() => {
      setLoading(false);
      isInitialLoad.current = false;
    });
  }, [slug]);

  // ── Auto-Save (Debounce 1.5s) ──
  useEffect(() => {
    if (loading || isInitialLoad.current || !slug || !pageEntry) return;

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      setSaveStatus("saving");
      try {
        const page: PageContent = {
          page_slug: slug,
          page_title: pageEntry.title,
          content: { hero: state.hero, sections: state.sections, faq: state.faq, cta: state.cta },
          seo_title: state.seo_title,
          seo_description: state.seo_description,
          seo_canonical: state.seo_canonical,
          keywords: state.keywords,
          updated_by: user?.name ?? "unknown",
        };
        await savePage(page);
        setSaveStatus("saved");
        setTimeout(() => setSaveStatus("idle"), 2000);
      } catch {
        setSaveStatus("error");
        setTimeout(() => setSaveStatus("idle"), 4000);
      }
    }, 1500);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [state, loading, slug, pageEntry]);

  // ── Gesamttext für Keyword-Analyse ──
  const getAllText = useCallback(() => {
    const parts = [
      state.hero.label, state.hero.title, state.hero.titleAccent, state.hero.subtitle,
      ...state.sections.flatMap((s) => [s.title, s.titleAccent ?? "", s.content]),
      ...state.faq.flatMap((f) => [f.question, f.answer]),
      state.cta.title, state.cta.titleAccent, state.cta.text,
      state.seo_title, state.seo_description,
    ];
    return parts.join(" ").replace(/<[^>]*>/g, " ");
  }, [state]);

  // ── Keyword-Statistik ──
  const keywordStats = (() => {
    if (state.keywords.length === 0) return null;
    const text = getAllText();
    const analysis = analyzeKeywords(state.keywords, text);
    const found = analysis.filter((k) => k.found).length;
    return { found, total: analysis.length, analysis };
  })();

  // ── Ctrl+Z / Ctrl+Shift+Z Shortcuts ──
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "z") {
        e.preventDefault();
        if (e.shiftKey) redo();
        else undo();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "y") {
        e.preventDefault();
        redo();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [undo, redo]);

  // ── Error States ──
  if (!pageEntry) {
    return (
      <AdminLayout title="Seite nicht gefunden">
        <p style={{ fontFamily: "'Inter', sans-serif", color: "#6b7280" }}>
          Die Seite &ldquo;{slug}&rdquo; wurde nicht gefunden.
        </p>
      </AdminLayout>
    );
  }

  if (loading) {
    return (
      <AdminLayout title={pageEntry.title}>
        <p style={{ fontFamily: "'Inter', sans-serif", color: "#9ca3af" }}>Lade Inhalte...</p>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title={pageEntry.title}>
      {/* ═══ TOP BAR: Auto-Save Status + Undo/Redo + Keywords ═══ */}
      <div
        className="sticky top-0 z-20 -mx-6 -mt-2 px-6 py-3 mb-4 flex items-center justify-between"
        style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}
      >
        <div className="flex items-center gap-4">
          {/* Undo/Redo */}
          <div className="flex items-center gap-1">
            <button
              type="button" onClick={undo} disabled={!canUndo}
              className="p-1.5 rounded-lg transition-colors hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed"
              title="Rückgängig (⌘Z)"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
            </button>
            <button
              type="button" onClick={redo} disabled={!canRedo}
              className="p-1.5 rounded-lg transition-colors hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed"
              title="Wiederholen (⌘⇧Z)"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 1 1-2.13-9.36L23 10" />
              </svg>
            </button>
          </div>

          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#9ca3af" }}>
            /{slug}
          </span>

          {/* Keyword-Score Badge */}
          {keywordStats && (
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: keywordStats.found === keywordStats.total ? "#dcfce7" : keywordStats.found > 0 ? "#fef9c3" : "#fef2f2",
                color: keywordStats.found === keywordStats.total ? "#166534" : keywordStats.found > 0 ? "#854d0e" : "#991b1b",
                border: `1px solid ${keywordStats.found === keywordStats.total ? "#bbf7d0" : keywordStats.found > 0 ? "#fde68a" : "#fecaca"}`,
              }}
            >
              Keywords: {keywordStats.found}/{keywordStats.total}
            </span>
          )}
        </div>

        {/* Auto-Save Status */}
        <div className="flex items-center gap-2">
          {saveStatus === "saving" && (
            <span className="flex items-center gap-1.5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#9ca3af" }}>
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Speichert...
            </span>
          )}
          {saveStatus === "saved" && (
            <span className="flex items-center gap-1.5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#22c55e", fontWeight: 500 }}>
              <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
              Gespeichert
            </span>
          )}
          {saveStatus === "error" && (
            <span className="flex items-center gap-1.5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#ef4444", fontWeight: 500 }}>
              <span className="inline-block w-2 h-2 rounded-full bg-red-500" />
              Fehler beim Speichern
            </span>
          )}
          {saveStatus === "idle" && (
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#d1d5db" }}>
              Auto-Save aktiv
            </span>
          )}
        </div>
      </div>

      {/* ═══ ALLE BEREICHE UNTEREINANDER ═══ */}
      <div className="space-y-6">
        {/* ── KEYWORD-TRACKING (oben, immer sichtbar) ── */}
        <div
          className="rounded-xl p-5"
          style={{
            background: "#fffbeb",
            border: "2px solid #B8956A",
          }}
        >
          <h3 className="mb-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 700, color: "#B8956A" }}>
            Keyword-Tracking
          </h3>
          <p className="mb-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#92400e" }}>
            Keywords für diese Seite. Das System prüft live, ob sie im Text vorkommen.
          </p>
          <KeywordManager
            keywords={state.keywords}
            onChange={(keywords) => setState((s) => ({ ...s, keywords }))}
            content={getAllText()}
            readOnly={!isAdmin}
          />
        </div>

        {/* ── HERO ── */}
        <div className="space-y-6">
            <Card title="Hero-Überschrift">
              <div>
                <KeywordBadges keywords={state.keywords} text={state.hero.label} />
                <FieldInput
                  label="Label (über dem Titel, z.B. 'Traurednerin in München')"
                  value={state.hero.label}
                  onChange={(v) => setState((s) => ({ ...s, hero: { ...s.hero, label: v } }))}
                  placeholder="z.B. Traurednerin München"
                />
              </div>
              <div>
                <KeywordBadges keywords={state.keywords} text={state.hero.title + " " + state.hero.titleAccent} />
                <FieldInput
                  label="Titel (H1 — wichtigste Überschrift für SEO!)"
                  value={state.hero.title}
                  onChange={(v) => setState((s) => ({ ...s, hero: { ...s.hero, title: v } }))}
                  placeholder="Haupttitel der Seite"
                  highlight
                />
              </div>
              <div>
                <KeywordBadges keywords={state.keywords} text={state.hero.titleAccent} />
                <FieldInput
                  label="Titel-Akzent (kursiv, gold — wird im Titel hervorgehoben)"
                  value={state.hero.titleAccent}
                  onChange={(v) => setState((s) => ({ ...s, hero: { ...s.hero, titleAccent: v } }))}
                  placeholder="z.B. freie Trauungen"
                />
              </div>
              <div>
                <KeywordBadges keywords={state.keywords} text={state.hero.subtitle} />
                <FieldTextarea
                  label="Untertitel / Beschreibung"
                  value={state.hero.subtitle}
                  onChange={(v) => setState((s) => ({ ...s, hero: { ...s.hero, subtitle: v } }))}
                  placeholder="Beschreibungstext unter dem Titel"
                />
              </div>
            </Card>

            <Card title="Hero-Bild">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FieldInput
                  label="Bild-Pfad"
                  value={state.hero.image}
                  onChange={(v) => setState((s) => ({ ...s, hero: { ...s.hero, image: v } }))}
                  placeholder="/images/hero-xyz.webp"
                  readOnly={!isAdmin}
                />
                <FieldInput
                  label="Alt-Text (SEO!)"
                  value={state.hero.imageAlt}
                  onChange={(v) => setState((s) => ({ ...s, hero: { ...s.hero, imageAlt: v } }))}
                  placeholder="Beschreibung des Bildes"
                  readOnly={!isAdmin}
                />
                <FieldInput
                  label="Foto-Credit"
                  value={state.hero.imageCredit}
                  onChange={(v) => setState((s) => ({ ...s, hero: { ...s.hero, imageCredit: v } }))}
                  placeholder="Fotograf Name"
                  readOnly={!isAdmin}
                />
              </div>
              {state.hero.image && (
                <div className="mt-3 rounded-lg overflow-hidden border" style={{ borderColor: "#e5e7eb" }}>
                  <img src={state.hero.image} alt="Vorschau" className="w-full h-auto" />
                </div>
              )}
            </Card>
        </div>

        {/* ── INHALT ── */}
        <Card title={`Body-Sektionen (${state.sections.length})`}>
            <SectionEditor
              sections={state.sections}
              onChange={(sections) => setState((s) => ({ ...s, sections }))}
              keywords={state.keywords}
            />
        </Card>

        {/* ── FAQ ── */}
        <Card title={`FAQ — Häufige Fragen (${state.faq.length})`}>
            <FaqEditor
              items={state.faq}
              onChange={(faq) => setState((s) => ({ ...s, faq }))}
              keywords={state.keywords}
            />
        </Card>

        {/* ── CTA ── */}
        <Card title="Call-to-Action Sektion">
            <KeywordBadges keywords={state.keywords} text={state.cta.title + " " + state.cta.titleAccent + " " + state.cta.text} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FieldInput
                label="CTA Titel"
                value={state.cta.title}
                onChange={(v) => setState((s) => ({ ...s, cta: { ...s.cta, title: v } }))}
                placeholder="z.B. Eure Traumhochzeit beginnt hier"
              />
              <FieldInput
                label="CTA Titel-Akzent (kursiv)"
                value={state.cta.titleAccent}
                onChange={(v) => setState((s) => ({ ...s, cta: { ...s.cta, titleAccent: v } }))}
                placeholder="z.B. beginnt hier"
              />
            </div>
            <div>
              <KeywordBadges keywords={state.keywords} text={state.cta.text} />
              <FieldTextarea
                label="CTA Text"
                value={state.cta.text}
                onChange={(v) => setState((s) => ({ ...s, cta: { ...s.cta, text: v } }))}
                placeholder="Beschreibungstext über dem Button"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FieldInput
                label="Button-Text"
                value={state.cta.buttonText}
                onChange={(v) => setState((s) => ({ ...s, cta: { ...s.cta, buttonText: v } }))}
                placeholder="Jetzt anfragen"
              />
              <FieldInput
                label="Button-Link"
                value={state.cta.buttonLink}
                onChange={(v) => setState((s) => ({ ...s, cta: { ...s.cta, buttonLink: v } }))}
                placeholder="/freie-trauung-kontakt"
              />
            </div>
        </Card>

        {/* ── SEO ── */}
        <SeoSection
              data={{
                seo_title: state.seo_title,
                seo_description: state.seo_description,
                seo_canonical: state.seo_canonical,
              }}
              onChange={(seo) =>
                setState((s) => ({
                  ...s,
                  seo_title: seo.seo_title,
                  seo_description: seo.seo_description,
                  seo_canonical: seo.seo_canonical,
                }))
              }
              pageSlug={slug ?? ""}
              keywords={state.keywords}
              readOnly={!isAdmin}
            />
      </div>
    </AdminLayout>
  );
};

// ═══ Hilfskomponenten ═══

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl p-6" style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}>
      <h3 className="mb-5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 600, color: "#1a1a1a" }}>
        {title}
      </h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

function FieldInput({
  label, value, onChange, placeholder, highlight, readOnly,
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; highlight?: boolean; readOnly?: boolean;
}) {
  return (
    <div>
      <label className="block mb-1.5" style={{
        fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500,
        color: highlight ? "#B8956A" : "#6b7280",
      }}>
        {label}{readOnly && <span style={{ color: "#9ca3af", fontWeight: 400 }}> (nur Admin)</span>}
      </label>
      <input
        type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        readOnly={readOnly}
        className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-[#B8956A]/30"
        style={{
          fontFamily: "'Inter', sans-serif",
          borderColor: highlight ? "#B8956A" : "#e5e7eb",
          background: readOnly ? "#f3f4f6" : highlight ? "#fffbf5" : "#fafafa",
          cursor: readOnly ? "default" : undefined,
        }}
      />
    </div>
  );
}

function FieldTextarea({
  label, value, onChange, placeholder,
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <div>
      <label className="block mb-1.5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500, color: "#6b7280" }}>
        {label}
      </label>
      <textarea
        value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={3}
        className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none resize-y focus:ring-2 focus:ring-[#B8956A]/30"
        style={{ fontFamily: "'Inter', sans-serif", borderColor: "#e5e7eb", background: "#fafafa" }}
      />
    </div>
  );
}

export default AdminPageEditor;
