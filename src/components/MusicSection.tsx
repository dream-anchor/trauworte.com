import useScrollReveal from "@/hooks/useScrollReveal";

const kategorien = [
  {
    title: "Einzug der Braut",
    intro:
      "Der Moment, in dem alle Blicke auf euch gerichtet sind — die Musik zum Einzug setzt den emotionalen Ton für eure gesamte freie Trauung. Wählt einen Song, der euch Gänsehaut gibt.",
    songs: [
      "A Thousand Years — Christina Perri",
      "Can't Help Falling in Love — Elvis Presley",
      "Turning Page — Sleeping At Last",
      "Comptine d'un autre été — Yann Tiersen",
    ],
  },
  {
    title: "Während der Zeremonie",
    intro:
      "Zwischen der Traurede, den Gelübden und den Ritualen kann Musik als emotionaler Rahmen wirken. Instrumentale Stücke oder ruhige Balladen ergänzen die Worte eurer Traurednerin perfekt.",
    songs: [
      "All of Me — John Legend",
      "Perfect — Ed Sheeran",
      "Make You Feel My Love — Adele",
      "La Vie en Rose — Édith Piaf (instrumental)",
    ],
  },
  {
    title: "Auszug als Ehepaar",
    intro:
      "Euer erster gemeinsamer Weg als Ehepaar verdient einen Song, der eure Freude und Energie widerspiegelt. Der Auszug darf ruhig etwas fröhlicher und beschwingt sein.",
    songs: [
      "Signed, Sealed, Delivered — Stevie Wonder",
      "Lovely Day — Bill Withers",
      "I Gotta Feeling — The Black Eyed Peas",
      "Ho Hey — The Lumineers",
    ],
  },
];

const MusicSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section style={{ backgroundColor: "#FDF4ED" }} className="py-28 sm:py-36 md:py-44 relative grain">
      <div className="container mx-auto px-5 sm:px-8 max-w-[900px] relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`reveal ${isVisible ? "reveal-visible" : ""} text-center mb-16 md:mb-20`}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#B8956A",
              marginBottom: "20px",
            }}
          >
            Musikalische Begleitung
          </p>
          <h2
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
            }}
          >
            Musik für eure{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 500,
                color: "#B8956A",
              }}
            >
              freie Trauung
            </span>
          </h2>
          <p
            className="font-body max-w-[560px] mx-auto mt-6"
            style={{
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "#5C4A3A",
            }}
          >
            Die richtige Musik verstärkt die Emotionen eurer Zeremonie. Hier sind einige
            Empfehlungen — als eure Traurednerin berate ich euch gerne bei der Auswahl der
            perfekten Songs für jeden Moment eurer Hochzeit.
          </p>
        </div>

        {/* Kategorien */}
        <div className="space-y-12 md:space-y-16">
          {kategorien.map((kat) => (
            <div key={kat.title}>
              <h3
                className="font-display mb-4"
                style={{
                  fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
                  fontWeight: 400,
                  color: "#1a1a1a",
                  letterSpacing: "0.01em",
                }}
              >
                {kat.title}
              </h3>
              <p
                className="font-body leading-[1.85] mb-5"
                style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}
              >
                {kat.intro}
              </p>
              <div className="space-y-2">
                {kat.songs.map((song) => (
                  <div
                    key={song}
                    className="flex items-center gap-3 py-3 px-5"
                    style={{
                      background: "rgba(251, 233, 218, 0.5)",
                      border: "1px solid rgba(184, 149, 106, 0.12)",
                    }}
                  >
                    <span style={{ color: "#B8956A", fontSize: "14px" }}>♫</span>
                    <span
                      className="font-body"
                      style={{ fontSize: "14px", fontWeight: 400, color: "#1a1a1a" }}
                    >
                      {song}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hinweis */}
        <div
          className="mt-12 text-center"
          style={{ borderTop: "1px solid rgba(184, 149, 106, 0.2)", paddingTop: "24px" }}
        >
          <p
            className="font-body"
            style={{
              fontSize: "14px",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#5C4A3A",
            }}
          >
            Dies sind Empfehlungen — eure freie Trauung, eure Musik. Ich berate euch gerne
            individuell zu Songauswahl, Live-Musik oder DJ-Empfehlungen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
