import RichTextEditor from "./RichTextEditor";

export interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: FaqItem[];
  onChange: (items: FaqItem[]) => void;
  keywords?: string[];
}

const FaqEditor = ({ items, onChange, keywords }: Props) => {
  const updateItem = (idx: number, field: keyof FaqItem, value: string) => {
    const updated = [...items];
    updated[idx] = { ...updated[idx], [field]: value };
    onChange(updated);
  };

  const addItem = () => {
    onChange([...items, { question: "", answer: "" }]);
  };

  const removeItem = (idx: number) => {
    onChange(items.filter((_, i) => i !== idx));
  };

  const moveItem = (idx: number, direction: -1 | 1) => {
    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= items.length) return;
    const updated = [...items];
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
          FAQ ({items.length})
        </h3>
        <button
          type="button"
          onClick={addItem}
          className="px-3 py-1.5 rounded-lg text-white text-xs font-medium transition-opacity hover:opacity-90"
          style={{
            fontFamily: "'Inter', sans-serif",
            background: "#B8956A",
          }}
        >
          + Frage hinzufügen
        </button>
      </div>

      {items.map((item, idx) => (
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
              Frage {idx + 1}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => moveItem(idx, -1)}
                disabled={idx === 0}
                className="px-1.5 py-0.5 text-xs rounded transition-colors disabled:opacity-30"
                style={{ color: "#6b7280" }}
                title="Nach oben"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={() => moveItem(idx, 1)}
                disabled={idx === items.length - 1}
                className="px-1.5 py-0.5 text-xs rounded transition-colors disabled:opacity-30"
                style={{ color: "#6b7280" }}
                title="Nach unten"
              >
                ↓
              </button>
              <button
                type="button"
                onClick={() => removeItem(idx)}
                className="px-1.5 py-0.5 text-xs rounded transition-colors hover:text-red-500"
                style={{ color: "#6b7280" }}
                title="Entfernen"
              >
                ✕
              </button>
            </div>
          </div>

          <input
            type="text"
            value={item.question}
            onChange={(e) => updateItem(idx, "question", e.target.value)}
            placeholder="Frage eingeben..."
            className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none"
            style={{
              fontFamily: "'Inter', sans-serif",
              borderColor: "#e5e7eb",
              background: "#ffffff",
            }}
          />

          <RichTextEditor
            content={item.answer}
            onChange={(html) => updateItem(idx, "answer", html)}
            keywords={keywords}
            placeholder="Antwort eingeben..."
          />
        </div>
      ))}

      {items.length === 0 && (
        <p
          className="text-center py-8"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            color: "#9ca3af",
          }}
        >
          Noch keine FAQ-Einträge
        </p>
      )}
    </div>
  );
};

export default FaqEditor;
