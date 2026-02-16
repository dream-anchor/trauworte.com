import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import HeroImage from "@/components/HeroImage";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import usePageContent from "@/hooks/usePageContent";

const ZeitlicherAblauf = () => {
  usePrerenderReady(true);
  const cms = usePageContent("zeitlicher-ablauf-freie-trauung");
  const hero = cms.content.hero;
  const cta = cms.content.cta;

  return (
    <Layout>
      <SEO
        title={cms.seoTitle || "Zeitlicher Ablauf einer freien Trauung"}
        description={cms.seoDescription || "So läuft eine freie Trauung ab: Von der Planung über die Zeremonie bis zum Auszug. Der zeitliche Ablauf Schritt für Schritt erklärt."}
        canonical={cms.seoCanonical || "/zeitlicher-ablauf-freie-trauung"}
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Eure freie Trauung", url: "/eure-freie-trauung/" },
          { name: "Zeitlicher Ablauf", url: "/zeitlicher-ablauf-freie-trauung/" },
        ]}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl" style={{ color: "#111827" }}>
            {hero?.label || "Zeitlicher Ablauf"}
          </h1>
          <p className="font-body mt-4 text-lg" style={{ color: "#111827" }}>
            {hero?.subtitle || "So läuft eine freie Trauung ab – Schritt für Schritt"}
          </p>
        </div>
      </section>

      <HeroImage src="/images/hero-zeitlicher-ablauf.webp" alt="Hochzeitsblumen — Planung des zeitlichen Ablaufs" credit="Wedding Dreamz" />

      {/* Vor der Trauung */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Vor der Trauung – Die Vorbereitung
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: "#FFFFFF" }}>
              <h3 className="font-display text-xl mb-2" style={{ color: "#111827" }}>
                6–12 Monate vorher: Erste Kontaktaufnahme
              </h3>
              <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
                Ihr schreibt mir eine Nachricht mit euren Wünschen und eurem Wunschtermin.
                Je früher ihr euch meldet, desto besser – beliebte Termine sind schnell vergeben.
                Ich melde mich zeitnah bei euch zurück.
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: "#FFFFFF" }}>
              <h3 className="font-display text-xl mb-2" style={{ color: "#111827" }}>
                4–6 Monate vorher: Kennenlerngespräch
              </h3>
              <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
                Wir treffen uns persönlich, per Videocall oder Telefon. Ich lerne euch als Paar
                kennen, erfahre eure Geschichte und wir besprechen eure Vorstellungen für die
                Zeremonie. Dieses Gespräch ist das Herzstück meiner Arbeit.
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: "#FFFFFF" }}>
              <h3 className="font-display text-xl mb-2" style={{ color: "#111827" }}>
                2–3 Monate vorher: Entwurf der Rede
              </h3>
              <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
                Auf Basis unseres Gesprächs schreibe ich eure individuelle Traurede. Ihr
                bekommt den Entwurf zum Lesen und könnt Feedback geben. Wir stimmen uns so
                lange ab, bis ihr rundum zufrieden seid.
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: "#FFFFFF" }}>
              <h3 className="font-display text-xl mb-2" style={{ color: "#111827" }}>
                2–4 Wochen vorher: Feinplanung
              </h3>
              <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
                Wir legen den genauen Ablauf fest: Reihenfolge der Programmpunkte, Musikwünsche,
                Rituale, Einbindung von Gästen. Ich stimme mich bei Bedarf auch mit eurer
                Hochzeitsplanerin, dem Fotografen und der Location ab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Während der Trauung */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Während der Trauung – Die Zeremonie
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Eine freie Trauung dauert in der Regel 30 bis 45 Minuten. Hier ein typischer
            Ablauf – natürlich individuell anpassbar:
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display text-lg"
                style={{ backgroundColor: "#FBE9DA", color: "#111827" }}
              >
                1
              </div>
              <div>
                <h3 className="font-display text-xl" style={{ color: "#111827" }}>Einzug</h3>
                <p className="font-body leading-relaxed mt-1" style={{ color: "#111827" }}>
                  Die Gäste nehmen ihre Plätze ein. Zu eurer Wunschmusik zieht das Brautpaar
                  ein – gemeinsam, mit Begleitung oder klassisch am Arm des Brautvaters.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display text-lg"
                style={{ backgroundColor: "#FBE9DA", color: "#111827" }}
              >
                2
              </div>
              <div>
                <h3 className="font-display text-xl" style={{ color: "#111827" }}>Begrüßung</h3>
                <p className="font-body leading-relaxed mt-1" style={{ color: "#111827" }}>
                  Ich begrüße euch und eure Gäste herzlich und stimme alle auf die Zeremonie ein.
                  Der Rahmen wird gesetzt und die Atmosphäre geschaffen.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display text-lg"
                style={{ backgroundColor: "#FBE9DA", color: "#111827" }}
              >
                3
              </div>
              <div>
                <h3 className="font-display text-xl" style={{ color: "#111827" }}>Traurede</h3>
                <p className="font-body leading-relaxed mt-1" style={{ color: "#111827" }}>
                  Das Herzstück der Zeremonie: Eure persönliche Traurede, in der ich eure
                  Liebesgeschichte erzähle, besondere Momente hervorhebe und Worte finde, die
                  berühren.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display text-lg"
                style={{ backgroundColor: "#FBE9DA", color: "#111827" }}
              >
                4
              </div>
              <div>
                <h3 className="font-display text-xl" style={{ color: "#111827" }}>Rituale</h3>
                <p className="font-body leading-relaxed mt-1" style={{ color: "#111827" }}>
                  Sandzeremonie, Kerzenritual, Handfasting, Baumzeremonie oder etwas ganz Eigenes –
                  Rituale geben eurer Trauung eine symbolische Tiefe.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display text-lg"
                style={{ backgroundColor: "#FBE9DA", color: "#111827" }}
              >
                5
              </div>
              <div>
                <h3 className="font-display text-xl" style={{ color: "#111827" }}>
                  Ehegelübde &amp; Ja-Wort
                </h3>
                <p className="font-body leading-relaxed mt-1" style={{ color: "#111827" }}>
                  Ihr sprecht euch gegenseitig eure Gelübde aus und gebt euch das Ja-Wort.
                  Ob selbst geschrieben oder von mir vorbereitet – dieser Moment gehört ganz euch.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display text-lg"
                style={{ backgroundColor: "#FBE9DA", color: "#111827" }}
              >
                6
              </div>
              <div>
                <h3 className="font-display text-xl" style={{ color: "#111827" }}>Ringwechsel</h3>
                <p className="font-body leading-relaxed mt-1" style={{ color: "#111827" }}>
                  Die Ringe werden gewechselt – begleitet von persönlichen Worten, die den
                  Moment noch bedeutungsvoller machen.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display text-lg"
                style={{ backgroundColor: "#FBE9DA", color: "#111827" }}
              >
                7
              </div>
              <div>
                <h3 className="font-display text-xl" style={{ color: "#111827" }}>
                  Kuss &amp; Auszug
                </h3>
                <p className="font-body leading-relaxed mt-1" style={{ color: "#111827" }}>
                  Der erste Kuss als Ehepaar, Konfetti, Seifenblasen oder Spalier – ein
                  feierlicher Abschluss, der den Beginn eures gemeinsamen Weges markiert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nach der Trauung */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Nach der Trauung
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Nach der Zeremonie gibt es oft einen Sektempfang, bei dem die Gäste dem Brautpaar
            gratulieren können. Ich bleibe auf Wunsch noch vor Ort, um die Moderation des
            Empfangs oder der Feier zu übernehmen.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            In den Tagen nach der Hochzeit erhaltet ihr eure Traurede in schriftlicher Form als
            Erinnerung – ein wunderschönes Andenken, das ihr immer wieder lesen könnt.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            {cta?.title || "Bereit für eure Planung?"}
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            {cta?.text || "Schreibt mir und wir beginnen gemeinsam mit der Planung eurer unvergesslichen Zeremonie."}
          </p>
          <div className="pt-2">
            <Link
              to={cta?.buttonLink || "/freie-trauung-kontakt"}
              className="inline-block font-body text-sm px-6 py-3 rounded-lg border transition-colors hover:bg-gray-100"
              style={{ borderColor: "#111827", color: "#111827" }}
            >
              {cta?.buttonText || "Jetzt unverbindlich anfragen"}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ZeitlicherAblauf;
