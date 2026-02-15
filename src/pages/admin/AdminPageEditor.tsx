import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import RichTextEditor from "@/components/admin/RichTextEditor";
import SeoSection from "@/components/admin/SeoSection";
import KeywordManager, { analyzeKeywords } from "@/components/admin/KeywordManager";
import FaqEditor, { type FaqItem } from "@/components/admin/FaqEditor";
import SectionEditor, { type ContentSection } from "@/components/admin/SectionEditor";
import { getPageBySlug } from "@/config/pageRegistry";
import { fetchPage, savePage, type PageContent } from "@/config/apiClient";

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
  label: "",
  title: "",
  titleAccent: "",
  subtitle: "",
  image: "",
  imageAlt: "",
  imageCredit: "",
};

const defaultCta: CtaData = {
  title: "",
  titleAccent: "",
  text: "",
  buttonText: "Jetzt anfragen",
  buttonLink: "/freie-trauung-kontakt",
};

const AdminPageEditor = () => {
  const { slug } = useParams<{ slug: string }>();
  const pageEntry = slug ? getPageBySlug(slug) : undefined;

  const [state, setState] = useState<EditorState>({
    hero: { ...defaultHero },
    sections: [],
    faq: [],
    cta: { ...defaultCta },
    seo_title: "",
    seo_description: "",
    seo_canonical: "",
    keywords: [],
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showKeywordWarning, setShowKeywordWarning] = useState(false);
  const [missingKeywords, setMissingKeywords] = useState<string[]>([]);

  // Laden
  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetchPage(slug).then((page) => {
      if (page) {
        const c = page.content as Record<string, unknown>;
        setState({
          hero: (c.hero as HeroData) ?? { ...defaultHero },
          sections: (c.sections as ContentSection[]) ?? [],
          faq: (c.faq as FaqItem[]) ?? [],
          cta: (c.cta as CtaData) ?? { ...defaultCta },
          seo_title: page.seo_title ?? "",
          seo_description: page.seo_description ?? "",
          seo_canonical: page.seo_canonical ?? "",
          keywords: page.keywords ?? [],
        });
      }
      setLoading(false);
    });
  }, [slug]);

  // Gesamttext für Keyword-Analyse
  const getAllText = useCallback(() => {
    const parts = [
      state.hero.label,
      state.hero.title,
      state.hero.titleAccent,
      state.hero.subtitle,
      ...state.sections.flatMap((s) => [s.title, s.titleAccent ?? "", s.content]),
      ...state.faq.flatMap((f) => [f.question, f.answer]),
      state.cta.title,
      state.cta.titleAccent,
      state.cta.text,
      state.seo_title,
      state.seo_description,
    ];
    // HTML-Tags entfernen für saubere Analyse
    return parts.join(" ").replace(/<[^>]*>/g, " ");
  }, [state]);

  // Speichern
  const handleSave = useCallback(async () => {
    if (!slug || !pageEntry) return;

    // Keyword-Check
    if (state.keywords.length > 0) {
      const text = getAllText();
      const analysis = analyzeKeywords(state.keywords, text);
      const missing = analysis.filter((k) => !k.found).map((k) => k.keyword);
      if (missing.length > 0) {
        setMissingKeywords(missing);
        setShowKeywordWarning(true);
        return;
      }
    }

    await doSave();
  }, [slug, pageEntry, state, getAllText]);

  const doSave = async () => {
    if (!slug || !pageEntry) return;
    setSaving(true);
    setShowKeywordWarning(false);

    const page: PageContent = {
      page_slug: slug,
      page_title: pageEntry.title,
      content: {
        hero: state.hero,
        sections: state.sections,
        faq: state.faq,
        cta: state.cta,
      },
      seo_title: state.seo_title,
      seo_description: state.seo_description,
      seo_canonical: state.seo_canonical,
      keywords: state.keywords,
    };

    await savePage(page);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  // Cmd+S Shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        handleSave();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleSave]);

  if (!pageEntry) {
    return (
      <AdminLayout title="Seite nicht gefunden">
        <p style={{ fontFamily: "'Inter', sans-serif", color: "#6b7280" }}>
          Die Seite "{slug}" wurde nicht gefunden.
        </p>
      </AdminLayout>
    );
  }

  if (loading) {
    return (
      <AdminLayout title={pageEntry.title}>
        <p style={{ fontFamily: "'Inter', sans-serif", color: "#9ca3af" }}>Lade...</p>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title={pageEntry.title}>
      {/* Keyword-Warnung Dialog */}
      {showKeywordWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div
            className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full mx-4"
          >
            <h3
              className="mb-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "#1a1a1a",
              }}
            >
              Keywords fehlen
            </h3>
            <p
              className="mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: "#6b7280",
              }}
            >
              Folgende Keywords fehlen im Text:
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {missingKeywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    background: "#fef2f2",
                    color: "#991b1b",
                    border: "1px solid #fecaca",
                  }}
                >
                  {kw}
                </span>
              ))}
            </div>
            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => setShowKeywordWarning(false)}
                className="px-4 py-2 rounded-lg text-sm"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#6b7280",
                  border: "1px solid #e5e7eb",
                }}
              >
                Zurück zum Editor
              </button>
              <button
                type="button"
                onClick={doSave}
                className="px-4 py-2 rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-90"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  background: "#B8956A",
                }}
              >
                Trotzdem speichern
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Save Bar */}
      <div className="flex items-center justify-between mb-6">
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            color: "#9ca3af",
          }}
        >
          /{slug}
        </p>
        <div className="flex items-center gap-3">
          {saved && (
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                color: "#22c55e",
                fontWeight: 500,
              }}
            >
              ✓ Gespeichert
            </span>
          )}
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="px-5 py-2.5 rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "#B8956A",
            }}
          >
            {saving ? "Speichern..." : "Speichern"}
          </button>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              color: "#9ca3af",
            }}
          >
            ⌘S
          </span>
        </div>
      </div>

      <div className="space-y-8">
        {/* ── Hero-Sektion ── */}
        <div
          className="rounded-xl p-6"
          style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}
        >
          <h3
            className="mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#1a1a1a",
            }}
          >
            Hero-Sektion
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FieldInput
                label="Label (über dem Titel)"
                value={state.hero.label}
                onChange={(v) => setState((s) => ({ ...s, hero: { ...s.hero, label: v } }))}
                placeholder="z.B. Traurednerin München"
              />
              <FieldInput
                label="Titel-Akzent (kursiv, gold)"
                value={state.hero.titleAccent}
                onChange={(v) => setState((s) => ({ ...s, hero: { ...s.hero, titleAccent: v } }))}
                placeholder="z.B. Herz und Leidenschaft"
              />
            </div>
            <FieldInput
              label="Titel"
              value={state.hero.title}
              onChange={(v) => setState((s) => ({ ...s, hero: { ...s.hero, title: v } }))}
              placeholder="Haupttitel der Seite"
            />
            <FieldTextarea
              label="Untertitel"
              value={state.hero.subtitle}
              onChange={(v) => setState((s) => ({ ...s, hero: { ...s.hero, subtitle: v } }))}
              placeholder="Optionaler Untertitel unter dem Hero"
            />
            <div className="grid grid-cols-3 gap-4">
              <FieldInput
                label="Hero-Bild Pfad"
                value={state.hero.image}
                onChange={(v) => setState((s) => ({ ...s, hero: { ...s.hero, image: v } }))}
                placeholder="/images/hero-xyz.webp"
              />
              <FieldInput
                label="Bild Alt-Text"
                value={state.hero.imageAlt}
                onChange={(v) => setState((s) => ({ ...s, hero: { ...s.hero, imageAlt: v } }))}
                placeholder="Beschreibung"
              />
              <FieldInput
                label="Foto-Credit"
                value={state.hero.imageCredit}
                onChange={(v) => setState((s) => ({ ...s, hero: { ...s.hero, imageCredit: v } }))}
                placeholder="Fotograf Name"
              />
            </div>
          </div>
        </div>

        {/* ── Body-Sektionen ── */}
        <div
          className="rounded-xl p-6"
          style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}
        >
          <SectionEditor
            sections={state.sections}
            onChange={(sections) => setState((s) => ({ ...s, sections }))}
            keywords={state.keywords}
          />
        </div>

        {/* ── FAQ ── */}
        <div
          className="rounded-xl p-6"
          style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}
        >
          <FaqEditor
            items={state.faq}
            onChange={(faq) => setState((s) => ({ ...s, faq }))}
            keywords={state.keywords}
          />
        </div>

        {/* ── CTA-Sektion ── */}
        <div
          className="rounded-xl p-6"
          style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}
        >
          <h3
            className="mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#1a1a1a",
            }}
          >
            CTA-Sektion
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FieldInput
                label="CTA Titel"
                value={state.cta.title}
                onChange={(v) => setState((s) => ({ ...s, cta: { ...s.cta, title: v } }))}
                placeholder="z.B. Eure Traumhochzeit beginnt hier"
              />
              <FieldInput
                label="CTA Titel-Akzent"
                value={state.cta.titleAccent}
                onChange={(v) => setState((s) => ({ ...s, cta: { ...s.cta, titleAccent: v } }))}
                placeholder="z.B. beginnt hier"
              />
            </div>
            <FieldTextarea
              label="CTA Text"
              value={state.cta.text}
              onChange={(v) => setState((s) => ({ ...s, cta: { ...s.cta, text: v } }))}
              placeholder="Beschreibungstext über dem Button"
            />
            <div className="grid grid-cols-2 gap-4">
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
          </div>
        </div>

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
        />

        {/* ── Keyword-Tracking ── */}
        <KeywordManager
          keywords={state.keywords}
          onChange={(keywords) => setState((s) => ({ ...s, keywords }))}
          content={getAllText()}
        />
      </div>
    </AdminLayout>
  );
};

// ── Hilfskomponenten ──

function FieldInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        className="block mb-1.5"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          fontWeight: 500,
          color: "#6b7280",
        }}
      >
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none"
        style={{
          fontFamily: "'Inter', sans-serif",
          borderColor: "#e5e7eb",
          background: "#fafafa",
        }}
      />
    </div>
  );
}

function FieldTextarea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        className="block mb-1.5"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          fontWeight: 500,
          color: "#6b7280",
        }}
      >
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none resize-y"
        style={{
          fontFamily: "'Inter', sans-serif",
          borderColor: "#e5e7eb",
          background: "#fafafa",
        }}
      />
    </div>
  );
}

export default AdminPageEditor;
