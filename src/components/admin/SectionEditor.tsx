import RichTextEditor from "./RichTextEditor";
import KeywordBadges from "./KeywordBadges";

export interface ContentSection {
  title: string;
  titleAccent?: string;
  content: string;
}

interface Props {
  sections: ContentSection[];
  onChange: (sections: ContentSection[]) => void;
  keywords?: string[];
}

const SectionEditor = ({ sections, onChange, keywords }: Props) => {
  const updateSection = (idx: number, field: keyof ContentSection, value: string) => {
    const updated = [...sections];
    updated[idx] = { ...updated[idx], [field]: value };
    onChange(updated);
  };

  const addSection = () => {
    onChange([...sections, { title: "", titleAccent: "", content: "" }]);
  };

  const removeSection = (idx: number) => {
    onChange(sections.filter((_, i) => i !== idx));
  };

  const moveSection = (idx: number, direction: -1 | 1) => {
    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= sections.length) return;
    const updated = [...sections];
    [updated[idx], updated[newIdx]] = [updated[newIdx], updated[idx]];
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            color: "#1a1a1a",
          }}
        >
          Inhalts-Sektionen ({sections.length})
        </h3>
        <button
          type="button"
          onClick={addSection}
          className="px-3 py-1.5 rounded-lg text-white text-xs font-medium transition-opacity hover:opacity-90"
          style={{
            fontFamily: "'Inter', sans-serif",
            background: "#B8956A",
          }}
        >
          + Sektion hinzufügen
        </button>
      </div>

      {sections.map((section, idx) => (
        <div
          key={idx}
          className="border rounded-lg p-4 space-y-3"
          style={{ borderColor: "#e5e7eb", background: "#fafafa" }}
        >
          <div className="flex items-center justify-between">
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                color: "#9ca3af",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Sektion {idx + 1}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => moveSection(idx, -1)}
                disabled={idx === 0}
                className="px-1.5 py-0.5 text-xs rounded transition-colors disabled:opacity-30"
                style={{ color: "#6b7280" }}
                title="Nach oben"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={() => moveSection(idx, 1)}
                disabled={idx === sections.length - 1}
                className="px-1.5 py-0.5 text-xs rounded transition-colors disabled:opacity-30"
                style={{ color: "#6b7280" }}
                title="Nach unten"
              >
                ↓
              </button>
              <button
                type="button"
                onClick={() => removeSection(idx)}
                className="px-1.5 py-0.5 text-xs rounded transition-colors hover:text-red-500"
                style={{ color: "#6b7280" }}
                title="Entfernen"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Keyword-Badges für diese Sektion */}
          {keywords && keywords.length > 0 && (
            <KeywordBadges keywords={keywords} text={section.title + " " + (section.titleAccent ?? "") + " " + section.content} />
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                className="block mb-1"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#6b7280",
                }}
              >
                Titel
              </label>
              <input
                type="text"
                value={section.title}
                onChange={(e) => updateSection(idx, "title", e.target.value)}
                placeholder="Sektions-Titel"
                className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  borderColor: "#e5e7eb",
                  background: "#ffffff",
                }}
              />
            </div>
            <div>
              <label
                className="block mb-1"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#6b7280",
                }}
              >
                Titel-Akzent (kursiv, gold)
              </label>
              <input
                type="text"
                value={section.titleAccent ?? ""}
                onChange={(e) => updateSection(idx, "titleAccent", e.target.value)}
                placeholder="Optional"
                className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  borderColor: "#e5e7eb",
                  background: "#ffffff",
                }}
              />
            </div>
          </div>

          <RichTextEditor
            content={section.content}
            onChange={(html) => updateSection(idx, "content", html)}
            keywords={keywords}
            placeholder="Inhalt eingeben..."
          />
        </div>
      ))}

      {sections.length === 0 && (
        <p
          className="text-center py-8"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            color: "#9ca3af",
          }}
        >
          Noch keine Sektionen
        </p>
      )}
    </div>
  );
};

export default SectionEditor;
