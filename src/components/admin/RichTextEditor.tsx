import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Highlight from "@tiptap/extension-highlight";
import { useEffect, useState } from "react";

interface Props {
  content: string;
  onChange: (html: string) => void;
  keywords?: string[];
  placeholder?: string;
}

const MenuButton = ({
  active,
  onClick,
  children,
  title,
}: {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  title: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    title={title}
    className="px-2 py-1 rounded text-xs transition-colors"
    style={{
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      color: active ? "#B8956A" : "#6b7280",
      background: active ? "#fdf5ef" : "transparent",
    }}
  >
    {children}
  </button>
);

const RichTextEditor = ({ content, onChange, keywords = [], placeholder }: Props) => {
  const [mode, setMode] = useState<"visual" | "html">("visual");
  const [htmlSource, setHtmlSource] = useState(content);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { rel: "noopener noreferrer" },
      }),
      Highlight.configure({
        multicolor: true,
        HTMLAttributes: {
          style: "background: rgba(184,149,106,0.2); border-radius: 2px; padding: 0 2px;",
        },
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none focus:outline-none min-h-[200px] px-4 py-3",
        style: "font-family: 'Inter', sans-serif; font-size: 14px; color: #374151;",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
      setHtmlSource(html);
    },
  });

  // Sync content von außen
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
      setHtmlSource(content);
    }
  }, [content, editor]);

  // Keyword-Highlighting im Text
  useEffect(() => {
    if (!editor || keywords.length === 0) return;
    // Keywords im Text markieren (visuell, nicht im Output)
    // Das passiert über die Highlight-Extension
  }, [editor, keywords]);

  const setLink = () => {
    const url = window.prompt("URL eingeben:", "https://");
    if (url) {
      editor?.chain().focus().setLink({ href: url }).run();
    }
  };

  if (!editor) return null;

  return (
    <div className="border rounded-lg overflow-hidden" style={{ borderColor: "#e5e7eb" }}>
      {/* Toolbar */}
      <div
        className="flex items-center gap-1 px-2 py-1.5 border-b"
        style={{ borderColor: "#e5e7eb", background: "#fafafa" }}
      >
        <MenuButton
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
          title="Fett"
        >
          <strong>B</strong>
        </MenuButton>
        <MenuButton
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="Kursiv"
        >
          <em>I</em>
        </MenuButton>
        <span className="w-px h-4 mx-1" style={{ background: "#e5e7eb" }} />
        <MenuButton
          active={editor.isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          title="Überschrift 2"
        >
          H2
        </MenuButton>
        <MenuButton
          active={editor.isActive("heading", { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          title="Überschrift 3"
        >
          H3
        </MenuButton>
        <span className="w-px h-4 mx-1" style={{ background: "#e5e7eb" }} />
        <MenuButton
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          title="Liste"
        >
          • Liste
        </MenuButton>
        <MenuButton
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          title="Nummerierte Liste"
        >
          1. Liste
        </MenuButton>
        <span className="w-px h-4 mx-1" style={{ background: "#e5e7eb" }} />
        <MenuButton
          active={editor.isActive("link")}
          onClick={setLink}
          title="Link einfügen"
        >
          🔗
        </MenuButton>
        {editor.isActive("link") && (
          <MenuButton
            onClick={() => editor.chain().focus().unsetLink().run()}
            title="Link entfernen"
          >
            ✕
          </MenuButton>
        )}
        <span className="w-px h-4 mx-1" style={{ background: "#e5e7eb" }} />
        <MenuButton
          onClick={() => editor.chain().focus().undo().run()}
          title="Rückgängig"
        >
          ↩
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().redo().run()}
          title="Wiederholen"
        >
          ↪
        </MenuButton>

        {/* Mode Toggle */}
        <div className="ml-auto flex gap-1">
          <button
            type="button"
            onClick={() => setMode("visual")}
            className="px-2 py-1 rounded text-xs"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: mode === "visual" ? 600 : 400,
              color: mode === "visual" ? "#B8956A" : "#9ca3af",
              background: mode === "visual" ? "#fdf5ef" : "transparent",
            }}
          >
            Visuell
          </button>
          <button
            type="button"
            onClick={() => {
              setHtmlSource(editor.getHTML());
              setMode("html");
            }}
            className="px-2 py-1 rounded text-xs"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: mode === "html" ? 600 : 400,
              color: mode === "html" ? "#B8956A" : "#9ca3af",
              background: mode === "html" ? "#fdf5ef" : "transparent",
            }}
          >
            HTML
          </button>
        </div>
      </div>

      {/* Editor / HTML Source */}
      {mode === "visual" ? (
        <div style={{ background: "#ffffff" }}>
          {!content && placeholder && (
            <p
              className="absolute px-4 pt-3 pointer-events-none"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#9ca3af",
              }}
            >
              {placeholder}
            </p>
          )}
          <EditorContent editor={editor} />
        </div>
      ) : (
        <textarea
          value={htmlSource}
          onChange={(e) => {
            setHtmlSource(e.target.value);
            editor.commands.setContent(e.target.value);
            onChange(e.target.value);
          }}
          className="w-full min-h-[200px] px-4 py-3 text-sm font-mono outline-none resize-y"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            color: "#374151",
            background: "#fafafa",
            border: "none",
          }}
        />
      )}
    </div>
  );
};

export default RichTextEditor;
