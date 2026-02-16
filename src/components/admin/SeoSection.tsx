import { useState } from "react";
import KeywordBadges from "./KeywordBadges";

interface SeoData {
  seo_title: string;
  seo_description: string;
  seo_canonical: string;
}

interface Props {
  data: SeoData;
  onChange: (data: SeoData) => void;
  pageSlug: string;
  keywords?: string[];
  readOnly?: boolean;
}

const SeoSection = ({ data, onChange, pageSlug, keywords = [], readOnly }: Props) => {
  const [open, setOpen] = useState(false);

  const titleLen = data.seo_title?.length ?? 0;
  const descLen = data.seo_description?.length ?? 0;

  const titleColor = titleLen > 60 ? "#ef4444" : titleLen > 50 ? "#f59e0b" : "#22c55e";
  const descColor = descLen > 160 ? "#ef4444" : descLen > 140 ? "#f59e0b" : "#22c55e";

  return (
    <div className="border rounded-lg overflow-hidden" style={{ borderColor: "#e5e7eb" }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors hover:bg-gray-50"
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            color: "#1a1a1a",
          }}
        >
          SEO-Einstellungen
        </span>
        <span style={{ color: "#9ca3af", fontSize: "18px" }}>
          {open ? "▲" : "▼"}
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 space-y-5 border-t" style={{ borderColor: "#e5e7eb" }}>
          {/* SEO Titel */}
          <div className="pt-4">
            <KeywordBadges keywords={keywords} text={data.seo_title ?? ""} />
            <label
              className="block mb-1.5"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                color: "#6b7280",
              }}
            >
              SEO-Titel
            </label>
            <input
              type="text"
              value={data.seo_title ?? ""}
              onChange={(e) => onChange({ ...data, seo_title: e.target.value })}
              placeholder="Seitentitel für Google"
              readOnly={readOnly}
              className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none"
              style={{
                fontFamily: "'Inter', sans-serif",
                borderColor: "#e5e7eb",
                background: readOnly ? "#f3f4f6" : "#fafafa",
                cursor: readOnly ? "default" : undefined,
              }}
            />
            <p className="mt-1 text-right" style={{ fontSize: "11px", color: titleColor }}>
              {titleLen}/60
            </p>
          </div>

          {/* SEO Beschreibung */}
          <div>
            <KeywordBadges keywords={keywords} text={data.seo_description ?? ""} />
            <label
              className="block mb-1.5"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                color: "#6b7280",
              }}
            >
              Meta-Beschreibung
            </label>
            <textarea
              value={data.seo_description ?? ""}
              onChange={(e) => onChange({ ...data, seo_description: e.target.value })}
              placeholder="Beschreibung für Google-Suchergebnisse"
              rows={3}
              readOnly={readOnly}
              className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none resize-y"
              style={{
                fontFamily: "'Inter', sans-serif",
                borderColor: "#e5e7eb",
                background: readOnly ? "#f3f4f6" : "#fafafa",
                cursor: readOnly ? "default" : undefined,
              }}
            />
            <p className="mt-1 text-right" style={{ fontSize: "11px", color: descColor }}>
              {descLen}/160
            </p>
          </div>

          {/* Canonical URL */}
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
              Canonical URL
            </label>
            <input
              type="text"
              value={data.seo_canonical ?? ""}
              onChange={(e) => onChange({ ...data, seo_canonical: e.target.value })}
              placeholder={`/${pageSlug}`}
              readOnly={readOnly}
              className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none"
              style={{
                fontFamily: "'Inter', sans-serif",
                borderColor: "#e5e7eb",
                background: readOnly ? "#f3f4f6" : "#fafafa",
                cursor: readOnly ? "default" : undefined,
              }}
            />
          </div>

          {/* Google Vorschau */}
          <div className="pt-3">
            <p
              className="mb-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "#9ca3af",
              }}
            >
              Google Vorschau
            </p>
            <div
              className="rounded-lg p-4"
              style={{ background: "#fafafa", border: "1px solid #e5e7eb" }}
            >
              <p
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "18px",
                  color: "#1a0dab",
                  lineHeight: 1.3,
                }}
              >
                {data.seo_title || "Seitentitel eingeben..."}
              </p>
              <p
                className="mt-0.5"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "12px",
                  color: "#006621",
                }}
              >
                trauworte.com &rsaquo; {pageSlug || "..."}
              </p>
              <p
                className="mt-1"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "13px",
                  color: "#545454",
                  lineHeight: 1.4,
                }}
              >
                {data.seo_description || "Meta-Beschreibung eingeben..."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeoSection;
