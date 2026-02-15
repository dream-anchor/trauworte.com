import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import HeroImage from "@/components/HeroImage";

const QueereTrauung = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Queere Trauung – Gleichgeschlechtliche und diverse Trauungszeremonie"
        description="Freie Trauung für alle Paare – gleichgeschlechtlich, queer und divers. Liebe ist Liebe, und eure Zeremonie soll genau das widerspiegeln."
        canonical="/gleichgeschlechtliche-queer-und-diverse-trauung"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Eure freie Trauung", url: "/eure-freie-trauung/" },
          { name: "Queere Trauung", url: "/gleichgeschlechtliche-queer-und-diverse-trauung/" },
        ]}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#FCECDF" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl" style={{ color: "#111827" }}>
            Queere Trauung
          </h1>
          <p className="font-body mt-4 text-lg" style={{ color: "#111827" }}>
            Gleichgeschlechtliche und diverse Trauungszeremonien – Liebe ist Liebe
          </p>
        </div>
      </section>

      <HeroImage src="/images/hero-queere-trauung.webp" alt="Queere Trauung — Liebe ist Liebe" credit="In Lieu & In View Photography" />

      {/* Inhalt */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Liebe kennt keine Grenzen
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Liebe ist bunt, vielfältig und wunderbar – und genau so sollte auch eure Trauung
            sein. Egal ob ihr als gleichgeschlechtliches Paar, als queeres, nicht-binäres oder
            diverses Paar heiraten möchtet: Bei mir seid ihr herzlich willkommen, genau so wie
            ihr seid. Eure Liebe verdient eine Zeremonie, die euch feiert und eure einzigartige
            Geschichte erzählt.
          </p>

          <h2 className="font-display text-3xl md:text-4xl pt-8" style={{ color: "#111827" }}>
            Warum eine freie Trauung für queere Paare?
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Die freie Trauung bietet queeren Paaren besondere Vorteile gegenüber traditionellen
            Zeremonien:
          </p>
          <ul className="font-body leading-relaxed space-y-4" style={{ color: "#111827" }}>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Keine Einschränkungen:</strong> Anders als bei kirchlichen Trauungen gibt
                es keinerlei Vorbehalte oder Einschränkungen. Jedes Paar ist willkommen.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Eure Sprache:</strong> Ich verwende die Anreden und Pronomen, die euch
                entsprechen. Eure Zeremonie spiegelt eure Identität wider.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Eure Geschichte:</strong> Jede Liebesgeschichte ist einzigartig. Ich erzähle
                eure ganz persönliche Geschichte – authentisch und von Herzen.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Individuelle Rituale:</strong> Ob Sandzeremonie, gemeinsames Kerzenanzünden
                oder ein ganz eigenes Ritual – ihr bestimmt, was eure Zeremonie besonders macht.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Safe Space:</strong> Eure Trauung ist ein geschützter Raum, in dem ihr
                eure Liebe frei und ohne Vorurteile feiern könnt.
              </span>
            </li>
          </ul>

          <h2 className="font-display text-3xl md:text-4xl pt-8" style={{ color: "#111827" }}>
            So gestalte ich eure Zeremonie
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            In einem persönlichen Kennenlerngespräch erfahre ich alles über euch als Paar: Wie
            habt ihr euch kennengelernt? Was macht eure Beziehung aus? Welche besonderen Momente
            verbinden euch? Aus diesen Geschichten und Emotionen gestalte ich eine Zeremonie, die
            euch und eure Gäste zu Tränen rührt – vor Freude.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Mir ist es wichtig, dass ihr euch in jeder Phase der Planung respektiert, gehört und
            verstanden fühlt. Eure Trauung soll ein Fest der Liebe sein – eurer Liebe, ohne
            Kompromisse.
          </p>

          <h2 className="font-display text-3xl md:text-4xl pt-8" style={{ color: "#111827" }}>
            Rechtliches
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Seit Oktober 2017 steht die Ehe in Deutschland allen Paaren offen – unabhängig vom
            Geschlecht. Die standesamtliche Eheschließung ist damit auch für gleichgeschlechtliche
            Paare möglich. Die freie Trauung ergänzt die standesamtliche Zeremonie um die
            persönliche, emotionale Komponente, die den besonderen Tag unvergesslich macht.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Eure Liebe – eure Zeremonie
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Ich freue mich darauf, euch kennenzulernen und eure ganz besondere Zeremonie
            zu gestalten. Schreibt mir – ganz unverbindlich.
          </p>
          <div className="pt-2">
            <Link
              to="/freie-trauung-kontakt"
              className="inline-block font-body text-sm px-6 py-3 rounded-lg border transition-colors hover:bg-gray-100"
              style={{ borderColor: "#111827", color: "#111827" }}
            >
              Jetzt unverbindlich anfragen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QueereTrauung;
