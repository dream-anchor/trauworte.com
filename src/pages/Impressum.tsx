import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import usePageContent from "@/hooks/usePageContent";

const Impressum = () => {
  usePrerenderReady(true);
  const cms = usePageContent("impressum");

  return (
    <Layout>
      <SEO
        title={cms.seoTitle || "Impressum | TrauWorte"}
        description={cms.seoDescription || "Impressum von TrauWorte – Freie Rednerin Stefanie Sick. Angaben gemäß § 5 DDG."}
        canonical={cms.seoCanonical || "/impressum"}
        noIndex
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Impressum", url: "/impressum/" },
        ]}
      />

      <section style={{ backgroundColor: "#FCECDF" }} className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] text-center">
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
            Rechtliches
          </p>
          <h1
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              lineHeight: 1.2,
            }}
          >
            Impressum
          </h1>
        </div>
      </section>

      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <div className="space-y-8 font-body" style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}>

            {/* Angaben gemäß § 5 DDG */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                Angaben gemäß § 5 DDG
              </h2>
              <p>
                Stefanie Sick<br />
                c/o B. Erdmann<br />
                Karlstr. 54<br />
                80333 München
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                Kontakt
              </h2>
              <p>
                Telefon: +49 1520 4170255<br />
                E-Mail: <ObfuscatedEmail style={{ color: "#B8956A", textDecoration: "underline" }} />
              </p>
            </div>

            {/* Berufsbezeichnung */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                Berufsbezeichnung
              </h2>
              <p>Freie Traurednerin und Moderatorin</p>
            </div>

            {/* Umsatzsteuer */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                Umsatzsteuer
              </h2>
              <p>Kleinunternehmerin gemäß § 19 UStG — es wird keine Umsatzsteuer ausgewiesen.</p>
            </div>

            {/* Verantwortlich */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p>
                Stefanie Sick<br />
                c/o B. Erdmann<br />
                Karlstr. 54<br />
                80333 München
              </p>
            </div>

            {/* EU-Streitschlichtung */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                EU-Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#B8956A", textDecoration: "underline" }}
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">Meine E-Mail-Adresse findet ihr oben im Impressum.</p>
            </div>

            {/* Verbraucherstreitbeilegung */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p>
                Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />

            {/* Haftungsausschluss */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                Haftungsausschluss
              </h2>

              <h3 className="font-display mt-6 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Haftung für Inhalte
              </h3>
              <p>
                Die Inhalte meiner Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen.
                Als Dienstanbieterin bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich als
                Dienstanbieterin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
              <p className="mt-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend
                entfernen.
              </p>

              <h3 className="font-display mt-6 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Haftung für Links
              </h3>
              <p>
                Meine Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen
                Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
              <p className="mt-4">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                Rechtsverletzungen werde ich derartige Links umgehend entfernen.
              </p>

              <h3 className="font-display mt-6 mb-3" style={{ color: "#1a1a1a", fontSize: "1.1rem" }}>
                Urheberrecht
              </h3>
              <p>
                Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der
                jeweiligen Autorin bzw. Erstellerin. Downloads und Kopien dieser Seite sind nur für den
                privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="mt-4">
                Soweit die Inhalte auf dieser Seite nicht von der Betreiberin erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                Solltet ihr trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte
                umgehend entfernen.
              </p>
            </div>

            <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />

            {/* Bildnachweise */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                Bildnachweise
              </h2>
              <p>
                Die auf dieser Website verwendeten Fotos stammen von verschiedenen Fotografen und werden
                unter der jeweiligen Lizenz genutzt. Eine vollständige Auflistung aller Bildnachweise
                und Fotografen-Credits findet ihr auf der Seite{" "}
                <Link to="/bildnachweise" style={{ color: "#B8956A", textDecoration: "underline" }}>
                  Bildnachweise
                </Link>.
              </p>
            </div>

            {/* Hinweis c/o-Adresse */}
            <div>
              <h2 className="font-display mb-4" style={{ color: "#1a1a1a", fontSize: "1.4rem" }}>
                Hinweis zur c/o-Adresse
              </h2>
              <p>
                Im Impressum und in der Datenschutzerklärung ist eine c/o-Adresse angegeben.
                An dieser Adresse wird Post für mich zuverlässig entgegengenommen und an mich
                weitergeleitet. Ich bin unter dieser Anschrift postalisch erreichbar.
                Die Adresse ist ladungsfähig im Sinne des § 5 DDG.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
