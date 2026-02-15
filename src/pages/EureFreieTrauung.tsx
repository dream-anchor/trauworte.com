import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import HeroImage from "@/components/HeroImage";

const EureFreieTrauung = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Eure freie Trauung – Was ist eine freie Trauung?"
        description="Eine freie Trauung ist eine persönliche, konfessionslose Zeremonie, die ganz nach euren Wünschen gestaltet wird. Erfahrt, warum sie so besonders ist."
        canonical="/eure-freie-trauung"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Eure freie Trauung", url: "/eure-freie-trauung/" },
        ]}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#FCECDF" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl" style={{ color: "#111827" }}>
            Eure freie Trauung
          </h1>
          <p className="font-body mt-4 text-lg" style={{ color: "#111827" }}>
            Was ist eine freie Trauung und warum ist sie so besonders?
          </p>
        </div>
      </section>

      <HeroImage src="/images/hero-freie-trauung.webp" alt="Freie Trauung im Freien — Hochzeitszeremonie" credit="Hitesh Patel" />

      {/* Was ist eine freie Trauung? */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Was ist eine freie Trauung?
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Eine freie Trauung ist eine Zeremonie, die völlig unabhängig von Kirche, Standesamt
            oder religiösen Institutionen stattfindet. Sie ist konfessionslos, individuell und
            wird ganz nach euren Vorstellungen gestaltet. Ob ihr im Freien, in einer Scheune,
            am Strand oder in einem Schloss heiraten möchtet – bei einer freien Trauung seid
            ihr vollkommen frei in der Wahl des Ortes, der Gestaltung und des Ablaufs.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Als eure freie Rednerin nehme ich mir die Zeit, euch und eure Liebesgeschichte
            kennenzulernen. Daraus entsteht eine Zeremonie, die authentisch, emotional und
            einzigartig ist – genau wie eure Liebe. Es gibt keine festen Regeln und kein
            starres Protokoll, sondern nur das, was euch wichtig ist und was euch als Paar
            ausmacht.
          </p>

          <h2 className="font-display text-3xl md:text-4xl pt-8" style={{ color: "#111827" }}>
            Warum eine freie Trauung?
          </h2>
          <ul className="font-body leading-relaxed space-y-4" style={{ color: "#111827" }}>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Individuell:</strong> Jede Zeremonie wird maßgeschneidert – eure Geschichte,
                eure Worte, eure Rituale.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Ortsunabhängig:</strong> Heiratet dort, wo ihr euch am wohlsten fühlt –
                ob im Garten, auf einer Almwiese oder am Meer.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Konfessionslos:</strong> Unabhängig von Religion oder Weltanschauung –
                offen für alle Paare.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Emotional:</strong> Persönliche Worte, die von Herzen kommen und eure
                Gäste berühren.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Flexibel:</strong> Ihr bestimmt den Zeitpunkt, den Ablauf und könnt
                Familie und Freunde aktiv einbinden.
              </span>
            </li>
          </ul>

          <h2 className="font-display text-3xl md:text-4xl pt-8" style={{ color: "#111827" }}>
            Weitere Themen entdecken
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Erfahrt mehr über die verschiedenen Möglichkeiten rund um eure freie Trauung:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/unterschiede-der-trauungen"
              className="block font-body p-4 rounded-lg border transition-colors hover:bg-white"
              style={{ borderColor: "#B8956A", color: "#111827" }}
            >
              Unterschiede der Trauungen
            </Link>
            <Link
              to="/bayrisch-tracht-trauung"
              className="block font-body p-4 rounded-lg border transition-colors hover:bg-white"
              style={{ borderColor: "#B8956A", color: "#111827" }}
            >
              Bayrisch &amp; Tracht Trauung
            </Link>
            <Link
              to="/gleichgeschlechtliche-queer-und-diverse-trauung"
              className="block font-body p-4 rounded-lg border transition-colors hover:bg-white"
              style={{ borderColor: "#B8956A", color: "#111827" }}
            >
              Queere &amp; diverse Trauung
            </Link>
            <Link
              to="/zeitlicher-ablauf-freie-trauung"
              className="block font-body p-4 rounded-lg border transition-colors hover:bg-white"
              style={{ borderColor: "#B8956A", color: "#111827" }}
            >
              Zeitlicher Ablauf
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Bereit für eure freie Trauung?
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Lasst uns gemeinsam eure persönliche Zeremonie gestalten. Ich freue mich darauf,
            euch und eure Liebesgeschichte kennenzulernen.
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

export default EureFreieTrauung;
