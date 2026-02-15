import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";

/* ── FAQ ── */
const faqItems = [
  {
    q: "Reist die Traurednerin nach Österreich?",
    a: "Ja! Als Traurednerin mit Sitz in München ist Österreich eines meiner liebsten Reiseziele. Salzburg erreiche ich in 90 Minuten, Tirol in gut zwei Stunden. Ich reise aber auch gerne ins Salzkammergut, nach Wien, Kärnten oder in die Steiermark — überall dorthin, wo eure Traumlocation wartet.",
  },
  {
    q: "Welche Locations in Österreich eignen sich für freie Trauungen?",
    a: "Von den Salzburger Schlössern über Tiroler Almhütten bis zu den Weingutshöfen der Wachau — Österreich bietet für jeden Hochzeitsstil die perfekte Location. Besonders beliebt sind das Salzkammergut mit Wolfgangsee und Hallstätter See, die Region rund um Kitzbühel und die Palais in Wien.",
  },
  {
    q: "Kann die Zeremonie in Österreich auf Deutsch und Englisch sein?",
    a: "Selbstverständlich! Gerade bei Hochzeiten in Österreich sind oft internationale Gäste dabei. Ich gestalte eure freie Trauung gerne zweisprachig — auf Deutsch und Englisch, fließend und natürlich. So fühlt sich jeder Gast einbezogen und versteht jedes Wort eurer Geschichte.",
  },
  {
    q: "Was kostet eine Traurednerin für Österreich?",
    a: "Mein Honorar umfasst das komplette Leistungspaket: persönliches Kennenlerngespräch, ausführliches Paargespräch, individuell geschriebene Traurede und professionelle Durchführung eurer Zeremonie. Bei Reisen nach Österreich kommen Anfahrt und gegebenenfalls Übernachtung hinzu. Schreibt mir für ein individuelles Angebot.",
  },
  {
    q: "Ist eine freie Trauung in Österreich rechtsgültig?",
    a: "Nein, eine freie Trauung hat in Österreich — genau wie in Deutschland — keine rechtliche Bindung. Für die Rechtsgültigkeit benötigt ihr eine standesamtliche Trauung. Viele Paare erledigen die Formalitäten vorab am Standesamt und feiern dann ihre große, emotionale Zeremonie als freie Trauung.",
  },
  {
    q: "Wie weit im Voraus sollte man buchen?",
    a: "Ich empfehle, eure Traurednerin 6 bis 12 Monate vor dem Hochzeitstermin zu buchen. Besonders in der Hochzeitssaison von Mai bis September sind die Wochenenden schnell vergeben. Beliebte Locations in Salzburg oder am Wolfgangsee sind oft frühzeitig ausgebucht — also lieber rechtzeitig anfragen.",
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
  name: "Traurednerin Österreich",
  provider: {
    "@type": "Person",
    name: "Stefanie Sick",
    jobTitle: "Traurednerin",
    url: "https://trauworte.com",
  },
  serviceType: "Freie Trauung",
  areaServed: [
    { "@type": "Place", name: "Salzburg, Österreich" },
    { "@type": "Place", name: "Tirol, Österreich" },
    { "@type": "Place", name: "Salzkammergut, Österreich" },
    { "@type": "Place", name: "Wien, Österreich" },
  ],
  description:
    "Freie Trauungen in ganz Österreich: In Salzburg, Tirol, am Wolfgangsee und im Salzkammergut. Persönlich, emotional und zweisprachig.",
  url: "https://trauworte.com/traurednerin-oesterreich/",
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

const TraurednerinOesterreich = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Freie Trauung Österreich – Traurednerin für Salzburg & Tirol"
        description="Traurednerin Stefanie Sick für freie Trauungen in Österreich. Zeremonien in Salzburg, Tirol, am Wolfgangsee & im Salzkammergut — persönlich und zweisprachig."
        canonical="/traurednerin-oesterreich"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Traurednerin Österreich", url: "/traurednerin-oesterreich/" },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* ═══ HERO ═══ */}
      <section style={{ backgroundColor: "#FCECDF" }} className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] text-center">
          <Label>Traurednerin in Österreich</Label>
          <h1
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: 1.15,
            }}
          >
            Freie Trauung in Österreich –{" "}
            <Accent>Eure Traurednerin für Salzburg, Tirol und das Salzkammergut</Accent>
          </h1>
          <p className="font-body max-w-[600px] mx-auto mt-6" style={bodyStyle}>
            Zwischen Alpengipfeln und Seenlandschaften: Als eure Traurednerin gestalte ich freie
            Trauungen in Österreich, die so atemberaubend sind wie die Kulisse selbst — persönlich,
            emotional und unvergesslich.
          </p>
        </div>
      </section>

      {/* ═══ WARUM ÖSTERREICH ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Warum Österreich der{" "}
            <Accent>perfekte Ort für eure freie Trauung</Accent>{" "}
            ist
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Österreich gehört zu den schönsten Hochzeitszielen in Europa. Die Alpenlandschaft
              mit ihren kristallklaren Seen, den majestätischen Bergen und den charmanten
              Ortschaften bietet eine Kulisse, die jedes Brautpaar verzaubert. Hier trifft
              kaiserliche Eleganz auf alpine Natürlichkeit — eine Kombination, die es so kein
              zweites Mal gibt.
            </p>
            <p>
              Von der barocken Pracht Salzburgs über die dramatischen Gipfel Tirols bis zur
              idyllischen Seenlandschaft des Salzkammerguts: Österreich bietet für jeden
              Hochzeitsstil den perfekten Rahmen. Und das Beste — von München aus seid ihr in
              weniger als zwei Stunden mittendrin. Als eure Traurednerin für Österreich bringe
              ich eure Liebesgeschichte an genau den Ort, der zu euch passt.
            </p>
          </div>

          <GoldLine />

          {/* ═══ DEUTSCHE TRAUREDNERIN FÜR ÖSTERREICH ═══ */}
          <SH2>
            Eure deutsche Traurednerin{" "}
            <Accent>für Österreich</Accent>
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Als Traurednerin mit Sitz in München ist Österreich für mich wie eine zweite
              Heimat. Ich kenne die Regionen, die besten Locations und die Besonderheiten, die
              eine Hochzeit in Österreich so einzigartig machen. Ob ihr eine intime Zeremonie
              auf einer Tiroler Alm plant, eine elegante Feier in einem Salzburger Schloss
              oder eine Hochzeit am Wolfgangsee — ich gestalte eure freie Trauung so
              persönlich und emotional, dass sie euch und eure Gäste tief berührt.
            </p>
            <p>
              Eure Zeremonie gestalte ich gerne{" "}
              <strong>zweisprachig auf Deutsch und Englisch</strong> — ideal für internationale
              Paare und Gäste, die in Österreich heiraten. Jede Traurede ist ein Unikat,
              geschrieben aus eurer einzigartigen Geschichte.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ REGIONEN ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Die schönsten Regionen für eine{" "}
            <Accent>freie Trauung in Österreich</Accent>
          </SH2>

          <p className="font-body mb-10" style={bodyStyle}>
            Österreich ist so vielfältig wie die Liebe selbst. Jede Region hat ihren eigenen
            Charakter — und als eure Traurednerin finde ich genau die Worte, die zu euch und
            eurer Location passen.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Salzburg – Kaiserliche Eleganz und Mozartkugel-Charme
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Die Mozartstadt verzaubert mit barocker Pracht, verwinkelten Gassen und einer
                Kulisse, die schon Hollywood inspirierte. <strong>Schloss Leopoldskron</strong>{" "}
                — bekannt als Filmkulisse von „The Sound of Music" — bietet einen magischen Rahmen
                für eure Zeremonie. Das <strong>Schloss Mirabell</strong> mit seinem berühmten
                Garten, die <strong>Festung Hohensalzburg</strong> hoch über der Stadt oder ein
                elegantes Palais in der Altstadt: Salzburg ist wie geschaffen für freie Trauungen
                voller Stil und Emotion. Als eure Traurednerin in Salzburg lasse ich die besondere
                Atmosphäre dieser Stadt in eure Zeremonie einfließen.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Tirol – Alpine Romantik und Bergpanorama
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                In Tirol erwarten euch romantische Almhütten, elegante Berghotels und Locations
                mit Panoramablick auf die Tiroler Alpen. Ob eine intime Zeremonie auf über
                2.000 Metern Höhe, eine feierliche Trauung im historischen{" "}
                <strong>Schloss Ambras</strong> bei Innsbruck oder eine rustikale Hochzeit auf
                einer Alm bei <strong>Kitzbühel</strong> — Tirol bietet für jeden Stil die
                passende Kulisse. Das <strong>Ötztal</strong> und das <strong>Stubaital</strong>{" "}
                beeindrucken mit dramatischen Berglandschaften, während der{" "}
                <strong>Achensee</strong> als „Tiroler Meer" eine einzigartige Verbindung von
                Wasser und Bergen bietet. Als eure Traurednerin in Tirol gestalte ich Zeremonien,
                die so kraftvoll sind wie die Natur, die euch umgibt.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Salzkammergut – Seen, Berge und kaiserliche Sommerfrische
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Das Salzkammergut ist Österreichs romantischste Seenlandschaft — und ein
                Traumziel für freie Trauungen. Der <strong>Wolfgangsee</strong> mit dem
                legendären Weißen Rössl, der <strong>Hallstätter See</strong> mit dem weltberühmten
                Unesco-Welterbe-Panorama und der <strong>Mondsee</strong> mit seiner barocken
                Basilika bieten unvergessliche Kulissen. Hier, wo einst schon Kaiserin Sisi
                ihre Sommer verbrachte, könnt ihr eure freie Trauung in wahrhaft königlichem
                Rahmen feiern. Das Salzkammergut verbindet die Eleganz der k.u.k.-Monarchie
                mit der Natürlichkeit einer alpinen Seenlandschaft — perfekt für eine Zeremonie,
                die unter die Haut geht.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Weitere Regionen: Wien, Wachau, Kärnten und Steiermark
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Auch jenseits der klassischen Alpenregionen hat Österreich wunderbare Locations
                für freie Trauungen. In <strong>Wien</strong> erwarten euch kaiserliche Palais,
                elegante Stadtpalais und die legendären Heurigen. Die{" "}
                <strong>Wachau</strong> verzaubert mit terrassierten Weinhängen entlang der Donau
                — eine Weinzeremonie an diesem Ort ist unvergesslich. <strong>Kärnten</strong> mit
                dem Wörthersee und dem Faaker See bietet südliches Flair und türkisblaues Wasser.
                Und die <strong>Steiermark</strong> — das grüne Herz Österreichs — überrascht mit
                Weinbergen, historischen Schlössern und einer herzhaften Gastfreundschaft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RECHTLICHES ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Rechtliche Besonderheiten einer{" "}
            <Accent>freien Trauung in Österreich</Accent>
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Eine freie Trauung ist in Österreich — genau wie in Deutschland — nicht
              rechtlich bindend. Für die Rechtsgültigkeit eurer Ehe benötigt ihr eine
              standesamtliche Trauung. Viele Paare erledigen die Formalitäten vorab in
              Deutschland oder Österreich und feiern dann ihre große, emotionale
              Zeremonie als freie Trauung an ihrem Wunschort.
            </p>
            <p>
              Das ist gleichzeitig der größte Vorteil: Bei einer freien Trauung gibt es
              keine Vorschriften zum Ablauf, zum Ort oder zur Uhrzeit. Ihr könnt eure
              Zeremonie auf einer Alm bei Sonnenuntergang feiern, am Seeufer bei Vollmond
              oder in einem historischen Schloss — ohne bürokratische Einschränkungen.
              Als eure Traurednerin kümmere ich mich um alles, damit ihr euch voll und
              ganz auf euren großen Moment konzentrieren könnt.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PLANUNGSPROZESS ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            So planen wir eure{" "}
            <Accent>freie Trauung in Österreich</Accent>
          </SH2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Videocall zum Kennenlernen",
                text: "Wir lernen uns in einem entspannten Videocall kennen. Ihr erzählt mir von eurer Wunsch-Location in Österreich, eurem Termin und euren ersten Ideen. Ich berate euch gerne zu den schönsten Regionen — ob Salzburg, Tirol oder Salzkammergut.",
              },
              {
                step: "02",
                title: "Eure Liebesgeschichte — das Herzstück",
                text: "Im ausführlichen Paargespräch tauche ich tief in eure Geschichte ein. Wie habt ihr euch kennengelernt? Was verbindet euch? Was macht eure Beziehung einzigartig? Aus diesen persönlichen Details entsteht eine Traurede, die euch und eure Gäste berührt.",
              },
              {
                step: "03",
                title: "Traurede, Ablauf und Rituale",
                text: "Ich schreibe eure individuelle Traurede und stimme mit euch den Ablauf ab — Rituale, Musik, persönliche Elemente. Ihr bekommt den Entwurf vorab und könnt Wünsche äußern, bis jedes Wort perfekt sitzt.",
              },
              {
                step: "04",
                title: "Reiseplanung und Logistik",
                text: "Als eure Traurednerin kümmere ich mich um die Anreise nach Österreich und koordiniere mich mit eurer Location und euren Dienstleistern vor Ort. Ob Technik, Timing oder Wetter-Plan B — alles wird im Vorfeld besprochen.",
              },
              {
                step: "05",
                title: "Euer großer Tag in Österreich",
                text: "Am Tag eurer freien Trauung führe ich euch und eure Gäste mit Herz, Leidenschaft und den richtigen Worten durch eine Zeremonie, die unter die Haut geht. Euer Moment — an eurem Ort in Österreich.",
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
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2 center>
            Häufige Fragen zur{" "}
            <Accent>freien Trauung in Österreich</Accent>
          </SH2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="p-6"
                style={{ background: "rgba(253, 244, 237, 0.7)", border: "1px solid rgba(184, 149, 106, 0.12)" }}
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
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[600px] text-center relative z-10">
          <SH2 center>
            Eure Traumhochzeit in Österreich{" "}
            <Accent>beginnt hier</Accent>
          </SH2>
          <p className="font-body mb-8" style={bodyStyle}>
            Ihr plant eine freie Trauung in Österreich? Ob in Salzburg, auf einer Alm in Tirol
            oder am Wolfgangsee — schreibt mir unverbindlich und erzählt von euren Wünschen.
            Ich freue mich darauf, euch und eure Geschichte kennenzulernen.
          </p>
          <Link to="/freie-trauung-kontakt" className="btn-gold inline-block">
            Jetzt unverbindlich anfragen
          </Link>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/traurednerin-bayern"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Traurednerin in Bayern
            </Link>
            <Link
              to="/freie-trauung-alpen"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Berghochzeiten in den Alpen
            </Link>
            <Link
              to="/traurednerin-muenchen"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Traurednerin in München
            </Link>
            <Link
              to="/en/wedding-celebrant-munich"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              English ceremonies available
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TraurednerinOesterreich;
