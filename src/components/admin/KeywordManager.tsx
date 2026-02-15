import { useState } from "react";

interface Props {
  keywords: string[];
  onChange: (keywords: string[]) => void;
  content: string; // Gesamter Seitentext für Keyword-Check
}

interface KeywordStatus {
  keyword: string;
  count: number;
  found: boolean;
}

function analyzeKeywords(keywords: string[], text: string): KeywordStatus[] {
  const lower = text.toLowerCase();
  return keywords.map((kw) => {
    const regex = new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    const matches = lower.match(regex);
    return {
      keyword: kw,
      count: matches?.length ?? 0,
      found: (matches?.length ?? 0) > 0,
    };
  });
}

const KeywordManager = ({ keywords, onChange, content }: Props) => {
  const [newKeyword, setNewKeyword] = useState("");
  const [open, setOpen] = useState(true);

  const analysis = analyzeKeywords(keywords, content);
  const found = analysis.filter((k) => k.found);
  const missing = analysis.filter((k) => !k.found);

  const addKeyword = () => {
    const trimmed = newKeyword.trim();
    if (trimmed && !keywords.includes(trimmed)) {
      onChange([...keywords, trimmed]);
      setNewKeyword("");
    }
  };

  const removeKeyword = (kw: string) => {
    onChange(keywords.filter((k) => k !== kw));
  };

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
          🏷️ Keyword-Tracking
          {missing.length > 0 && (
            <span
              className="ml-2 inline-flex items-center justify-center rounded-full text-white"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                width: "20px",
                height: "20px",
                background: "#ef4444",
              }}
            >
              {missing.length}
            </span>
          )}
        </span>
        <span style={{ color: "#9ca3af", fontSize: "18px" }}>
          {open ? "▲" : "▼"}
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 border-t" style={{ borderColor: "#e5e7eb" }}>
          {/* Keyword hinzufügen */}
          <div className="flex gap-2 pt-4">
            <input
              type="text"
              value={newKeyword}
              onChange={(e) => setNewKeyword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addKeyword())}
              placeholder="Neues Keyword..."
              className="flex-1 px-3 py-2 rounded-lg border text-sm outline-none"
              style={{
                fontFamily: "'Inter', sans-serif",
                borderColor: "#e5e7eb",
                background: "#fafafa",
              }}
            />
            <button
              type="button"
              onClick={addKeyword}
              className="px-4 py-2 rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-90"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: "#B8956A",
              }}
            >
              +
            </button>
          </div>

          {/* Gefundene Keywords */}
          {found.length > 0 && (
            <div className="mt-4">
              <p
                className="mb-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#22c55e",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Gefunden
              </p>
              <div className="flex flex-wrap gap-2">
                {found.map((k) => (
                  <span
                    key={k.keyword}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      background: "#f0fdf4",
                      color: "#166534",
                      border: "1px solid #bbf7d0",
                    }}
                  >
                    ✓ {k.keyword}
                    <span
                      className="rounded-full px-1.5"
                      style={{
                        background: "#dcfce7",
                        fontSize: "10px",
                        fontWeight: 600,
                      }}
                    >
                      {k.count}x
                    </span>
                    <button
                      type="button"
                      onClick={() => removeKeyword(k.keyword)}
                      className="ml-0.5 hover:text-red-500 transition-colors"
                      title="Keyword entfernen"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Fehlende Keywords */}
          {missing.length > 0 && (
            <div className="mt-4">
              <p
                className="mb-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#ef4444",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Fehlt im Text
              </p>
              <div className="flex flex-wrap gap-2">
                {missing.map((k) => (
                  <span
                    key={k.keyword}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      background: "#fef2f2",
                      color: "#991b1b",
                      border: "1px solid #fecaca",
                    }}
                  >
                    ✗ {k.keyword}
                    <button
                      type="button"
                      onClick={() => removeKeyword(k.keyword)}
                      className="ml-0.5 hover:text-red-700 transition-colors"
                      title="Keyword entfernen"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {keywords.length === 0 && (
            <p
              className="mt-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: "#9ca3af",
              }}
            >
              Noch keine Keywords hinterlegt
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export { analyzeKeywords };
export default KeywordManager;
