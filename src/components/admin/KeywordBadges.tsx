// Keyword-Badges: Zeigt über jedem Textfeld welche Keywords gefunden/fehlend sind
// Grün + Haken = gefunden, Rot + X = fehlt

import { useMemo } from "react";

interface Props {
  keywords: string[];
  text: string; // Aktueller Feldinhalt (HTML wird gestrippt)
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ");
}

const KeywordBadges = ({ keywords, text }: Props) => {
  const analysis = useMemo(() => {
    if (keywords.length === 0) return [];
    const clean = stripHtml(text).toLowerCase();
    return keywords.map((kw) => {
      const regex = new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
      const matches = clean.match(regex);
      return { keyword: kw, found: (matches?.length ?? 0) > 0, count: matches?.length ?? 0 };
    });
  }, [keywords, text]);

  const found = analysis.filter((k) => k.found);

  if (keywords.length === 0 || found.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1 mb-1.5">
      {found.map((k) => (
        <span
          key={k.keyword}
          className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            background: "#f0fdf4",
            color: "#166534",
            border: "1px solid #bbf7d0",
          }}
        >
          &#10003; {k.keyword}
        </span>
      ))}
    </div>
  );
};

export default KeywordBadges;
