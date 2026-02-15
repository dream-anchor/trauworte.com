import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";

/* ── FAQ ── */
const faqItems = [
  {
    q: "Wo in Italien bietet ihr freie Trauungen an?",
    a: "Ich gestalte freie Trauungen in ganz Italien — von der Toskana über den Gardasee bis an die Amalfiküste, nach Südtirol, an den Comer See oder nach Apulien. Die beliebtesten Regionen meiner Paare sind die Toskana und der Gardasee.",
  },
  {
    q: "Reist die Traurednerin nach Italien?",
    a: "Ja! Von München aus bin ich schnell in Italien — der Gardasee ist in vier Stunden erreichbar, die Toskana per Flug in unter zwei Stunden. Ich reise immer ein bis zwei Tage vor eurer Hochzeit an, um die Location zu besichtigen und letzte Details vor Ort abzustimmen.",
  },
  {
    q: "Was ist, wenn internationale Gäste bei der Trauung dabei sind?",
    a: "Ich gestalte eure Zeremonie auf Deutsch. Wenn internationale Gäste dabei sind, kann ich einzelne Passagen so gestalten, dass sie auch ohne perfekte Deutschkenntnisse emotional mitgenommen werden — etwa durch universelle Gesten, Rituale und ein kurzes gedrucktes Programm in anderen Sprachen.",
  },
  {
    q: "Was kostet eine freie Trauung in Italien?",
    a: "Mein Honorar umfasst das komplette Leistungspaket: Kennenlerngespräch, ausführliches Paargespräch, individuelle Traurede und Zeremonie-Durchführung. Hinzu kommen Anreise und Übernachtung. Schreibt mir für ein individuelles Angebot — ich berate euch gerne unverbindlich.",
  },
  {
    q: "Wann ist die beste Jahreszeit für eine Hochzeit in Italien?",
    a: "Die beliebteste Zeit für eine freie Trauung in Italien ist Mai bis Oktober. Besonders schön sind Juni und September: Warm genug für eine Zeremonie unter freiem Himmel, aber angenehmer als im Hochsommer. Der Herbst verzaubert mit Weinlese und goldenem Licht.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Freie Trauung in Italien",
  provider: {
    "@type": "Person",
    name: "Stefanie Sick",
    jobTitle: "Traurednerin",
    url: "https://trauworte.com",
  },
  serviceType: "Freie Trauung / Destination Wedding",
  areaServed: [
    { "@type": "Place", name: "Toskana, Italien" },
    { "@type": "Place", name: "Gardasee, Italien" },
    { "@type": "Place", name: "Südtirol, Italien" },
    { "@type": "Place", name: "Amalfiküste, Italien" },
  ],
  description:
    "Freie Trauungen in Italien: Persönliche und emotionale Zeremonien in der Toskana, am Gardasee, in Südtirol und an den schönsten Orten Italiens.",
  url: "https://trauworte.com/freie-trauung-italien/",
};

/* ── Helpers ── */
const Accent = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: "italic",
      fontWeight: 300,
      color: "#B8956A",
    }}
  >
    {children}
  </span>
);

const GoldLine = () => (
  <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />
);

const Label = ({ children }: { children: React.ReactNode }) => (
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
    {children}
  </p>
);

const SH2 = ({ children, center }: { children: React.ReactNode; center?: boolean }) => (
  <h2
    className={`font-display mb-8 ${center ? "text-center" : ""}`}
    style={{ color: "#1a1a1a", letterSpacing: "0.02em", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
  >
    {children}
  </h2>
);

const bodyStyle = { fontSize: "16px", fontWeight: 300 as const, lineHeight: 1.9, color: "#5C4A3A" };

/* ═══════════════════════════════════════════════ */

const FreieTrauungItalien = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Freie Trauung Italien – Destination Wedding mit Traurednerin"
        description="Freie Trauung in Italien: Traurednerin Stefanie Sick gestaltet eure Zeremonie in der Toskana, am Gardasee, in Südtirol & an den schönsten Orten Italiens."
        canonical="/freie-trauung-italien"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Freie Trauung Italien", url: "/freie-trauung-italien/" },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* ═══ HERO ═══ */}
      <section style={{ backgroundColor: "#FCECDF" }} className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] text-center">
          <Label>Destination Wedding Italien</Label>
          <h1
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: 1.15,
            }}
          >
            Freie Trauung in Italien –{" "}
            <Accent>Eure Traurednerin für la dolce vita</Accent>
          </h1>
          <p className="font-body max-w-[600px] mx-auto mt-6" style={bodyStyle}>
            Sonne, Genuss und unvergessliche Emotionen: Als eure Traurednerin gestalte ich freie
            Trauungen in ganz Italien — von den Weinbergen der Toskana über die Ufer des Gardasees
            bis zu den Bergdörfern Südtirols. Persönlich, emotional und voller Herz.
          </p>
        </div>
      </section>

      {/* ═══ WARUM ITALIEN ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Warum Italien der perfekte Ort für eure{" "}
            <Accent>freie Trauung</Accent> ist
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Italien ist seit Jahrhunderten das Sehnsuchtsland der Liebe — und für viele Paare
              der Traumort für ihre Hochzeit. Die Kombination aus mediterranem Klima, historischer
              Architektur, einer Landschaft wie aus einem Gemälde und der unvergleichlichen
              italienischen Lebensart macht eine freie Trauung in Italien zu einem Erlebnis, das
              alle Sinne berührt.
            </p>
            <p>
              Ob ihr von einer Zeremonie zwischen Weinbergen und Zypressen in der{" "}
              <strong>Toskana</strong> träumt, von einem Ja-Wort am türkisblauen{" "}
              <strong>Gardasee</strong>, oder von einer intimen Feier in einem{" "}
              <strong>Südtiroler Bergdorf</strong>: Italien bietet für jeden Hochzeitsstil die
              perfekte Kulisse. Und als eure Traurednerin fange ich die besondere Atmosphäre
              dieses Landes in Worten ein, die berühren.
            </p>
            <p>
              Italien ist von Deutschland aus hervorragend erreichbar — der Gardasee liegt nur
              vier Autostunden von München entfernt, die Toskana ist per Flug in unter zwei
              Stunden da. Das macht eine Hochzeit in Italien nicht nur romantisch, sondern auch
              unkompliziert in der Planung. Eure Gäste werden begeistert sein.
            </p>
          </div>

          <GoldLine />

          {/* ═══ TRAUREDNERIN FÜR ITALIEN ═══ */}
          <SH2>
            Eure Traurednerin für Italien –{" "}
            <Accent>persönlich und von Herzen</Accent>
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Als eure Traurednerin für freie Trauungen in Italien verbinde ich deutsche
              Gründlichkeit mit italienischer Leichtigkeit. Ich kenne die Regionen, die
              Mentalität und die besonderen Herausforderungen einer Destination Wedding. Die
              Planung läuft unkompliziert per Videocall — persönlich, verbindlich und immer
              mit einem offenen Ohr für eure Wünsche.
            </p>
            <p>
              Wenn internationale Gäste dabei sind, sorge ich dafür, dass sie sich einbezogen
              fühlen — durch universelle Gesten, Rituale und auf Wunsch ein gedrucktes
              Programm in anderen Sprachen. Am Vortag bin ich immer
              vor Ort, um die Location zu besichtigen und die letzten Details abzustimmen.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ REGIONEN (Hub → Spokes) ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Die schönsten Regionen für eure{" "}
            <Accent>Hochzeit in Italien</Accent>
          </SH2>

          <div className="space-y-10">
            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Toskana — Weinberge, Villen und la dolce vita
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Die Toskana ist der Klassiker unter den italienischen Hochzeitsdestinationen.
                Sanfte Hügellandschaften, von Zypressen gesäumte Alleen, historische Weingüter
                im Chianti und Renaissance-Villen bei Florenz und Siena — eine Kulisse, die
                Romantik und Genuss vereint. Chianti Classico nach der Zeremonie, frische Pasta
                unter Olivenbäumen und das goldene Licht der Abendsonne machen eure freie Trauung
                in der Toskana unvergesslich.
              </p>
              <Link
                to="/freie-trauung-toskana"
                className="font-body inline-block mt-3 text-sm"
                style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Mehr zur freien Trauung in der Toskana →
              </Link>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Gardasee — Mediterranes Flair trifft Bergpanorama
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Der Gardasee verbindet das Beste zweier Welten: mediterranes Klima und
                dramatische Bergkulissen. Elegante Villen in Sirmione, Zitronenhaine in Limone
                sul Garda, die Burg von Malcesine mit Blick auf den Monte Baldo — der Gardasee
                bietet Locations, die wie aus einem Film wirken. Und von München aus seid ihr in
                nur vier Stunden da.
              </p>
              <Link
                to="/freie-trauung-gardasee"
                className="font-body inline-block mt-3 text-sm"
                style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Mehr zur freien Trauung am Gardasee →
              </Link>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Südtirol — Alpine Eleganz mit italienischem Charme
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Südtirol vereint die Majestät der Dolomiten mit der Wärme italienischer
                Gastfreundschaft. Ob auf einem Weingut bei Meran, in einer Almhütte am Fuße
                der Drei Zinnen oder in einem historischen Schloss bei Bozen — Südtirol ist
                ideal für Paare, die Berge und italienische Lebensart verbinden möchten.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Amalfiküste, Comer See und mehr
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Italien hat noch so viel mehr zu bieten: Die dramatische{" "}
                <strong>Amalfiküste</strong> mit ihren Steilklippen und pastellfarbenen Dörfern,
                der elegante <strong>Comer See</strong> mit seinen Villen und Gärten, oder
                das romantische <strong>Apulien</strong> mit weißen Trulli und Olivenhainen.
                Wohin euer Herz euch auch zieht — ich bin als eure Traurednerin für ganz
                Italien für euch da.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABLAUF ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            So planen wir eure{" "}
            <Accent>Destination Wedding in Italien</Accent>
          </SH2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Erstkontakt und Kennenlernen",
                text: "Wir lernen uns per Videocall kennen. Ihr erzählt von eurer Wunschregion in Italien, eurem Termin und euren ersten Vorstellungen. Ich berate euch zu Regionen und Locations.",
              },
              {
                step: "02",
                title: "Eure Liebesgeschichte erzählen",
                text: "Im ausführlichen Paargespräch tauche ich tief in eure Geschichte ein. Wie habt ihr euch kennengelernt? Was verbindet euch mit Italien? Aus diesen persönlichen Details entsteht eure individuelle Traurede.",
              },
              {
                step: "03",
                title: "Traurede, Rituale und Ablauf",
                text: "Ich schreibe eure Traurede und stimme mit euch den Ablauf ab — Rituale, Musik, besondere Wünsche. Ihr bekommt den Entwurf vorab und könnt Anpassungen wünschen.",
              },
              {
                step: "04",
                title: "Anreise und Vorbereitung vor Ort",
                text: "Ein bis zwei Tage vor eurer Hochzeit reise ich nach Italien. Vor Ort besichtige ich die Location, koordiniere mich mit euren Dienstleistern und bereite alles für den großen Tag vor.",
              },
              {
                step: "05",
                title: "Euer Hochzeitstag in Italien",
                text: "Am Tag eurer freien Trauung führe ich euch und eure Gäste mit Herz und Leidenschaft durch eine Zeremonie, die so berührt wie die italienische Landschaft selbst. Euer Moment — unter italienischem Himmel.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 md:gap-8">
                <div
                  className="font-body text-xs tracking-[0.2em] uppercase pt-1 shrink-0"
                  style={{ color: "#B8956A", width: "48px" }}
                >
                  Schritt {item.step}
                </div>
                <div>
                  <h3 className="font-display mb-2" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                    {item.title}
                  </h3>
                  <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[1000px] relative z-10">
          <SH2 center>
            Häufige Fragen zur{" "}
            <Accent>freien Trauung in Italien</Accent>
          </SH2>

          <div className="space-y-5">
            {faqItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255, 255, 255, 0.5)",
                  borderLeft: "3px solid #B8956A",
                  borderRadius: "0 16px 16px 0",
                  padding: "28px 32px",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.03)",
                }}
              >
                <h3 className="font-display mb-3" style={{ fontSize: "1.15rem", fontWeight: 400, color: "#1a1a1a" }}>
                  {item.q}
                </h3>
                <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[600px] text-center">
          <SH2 center>
            Eure Traumhochzeit in Italien{" "}
            <Accent>beginnt hier</Accent>
          </SH2>
          <p className="font-body mb-8" style={bodyStyle}>
            Ihr träumt von einer freien Trauung in Italien? Schreibt mir unverbindlich und
            erzählt von euren Vorstellungen. Ob Toskana, Gardasee, Südtirol oder eine andere
            Region — ich freue mich darauf, eure italienische Hochzeit unvergesslich zu machen.
          </p>
          <Link to="/freie-trauung-kontakt" className="btn-gold inline-block">
            Jetzt Italien-Hochzeit anfragen
          </Link>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/freie-trauung-toskana"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Freie Trauung Toskana
            </Link>
            <Link
              to="/freie-trauung-gardasee"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Freie Trauung Gardasee
            </Link>
            <Link
              to="/freie-trauung-alpen"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Auch in den Alpen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreieTrauungItalien;
