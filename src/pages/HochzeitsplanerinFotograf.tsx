import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";

const HochzeitsplanerinFotograf = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Hochzeitsplanerin & Fotograf – Empfehlungen und Zusammenarbeit"
        description="Hochzeitsplanerin, Fotograf und weitere Dienstleister – meine Empfehlungen für eure perfekte Hochzeit. Gemeinsam sorgen wir für einen unvergesslichen Tag."
        canonical="/hochzeitsplanerin-fotograf"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Meine Angebote", url: "/meine-angebote-freie-trauung/" },
          { name: "Hochzeitsplanerin & Fotograf", url: "/hochzeitsplanerin-fotograf/" },
        ]}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#FCECDF" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl" style={{ color: "#111827" }}>
            Hochzeitsplanerin &amp; Fotograf
          </h1>
          <p className="font-body mt-4 text-lg" style={{ color: "#111827" }}>
            Empfehlungen und Zusammenarbeit für euren perfekten Hochzeitstag
          </p>
        </div>
      </section>

      {/* Inhalt */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Gemeinsam für euren perfekten Tag
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Eine Hochzeit ist ein Zusammenspiel vieler Akteure – und je besser alle
            Dienstleister zusammenarbeiten, desto reibungsloser und schöner wird euer Tag.
            Im Laufe der Jahre habe ich mit vielen talentierten Hochzeitsplanerinnen,
            Fotografen, Floristen und weiteren Profis zusammengearbeitet und schätze die
            enge Zusammenarbeit sehr.
          </p>

          <h2 className="font-display text-3xl md:text-4xl pt-8" style={{ color: "#111827" }}>
            Hochzeitsplanerin / Wedding Planner
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Eine Hochzeitsplanerin nimmt euch die organisatorische Last von den Schultern und
            sorgt dafür, dass am großen Tag alles perfekt läuft. Ich arbeite regelmäßig mit
            Wedding Plannern zusammen und stimme den Ablauf der Zeremonie eng mit ihnen ab.
            So greifen alle Zahnräder ineinander.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Ob ihr bereits eine Hochzeitsplanerin habt oder noch auf der Suche seid – ich
            stehe euch gerne mit Empfehlungen zur Seite. Durch mein Netzwerk kann ich euch
            erfahrene Planerinnen in verschiedenen Regionen empfehlen.
          </p>

          <h2 className="font-display text-3xl md:text-4xl pt-8" style={{ color: "#111827" }}>
            Hochzeitsfotograf &amp; Videograf
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Die Trauung ist einer der emotionalsten Momente des Hochzeitstags – und genau
            deshalb ist es wichtig, dass ein erfahrener Fotograf oder Videograf diese Augenblicke
            festhält. Ich kenne die Abläufe, die für gute Fotos und Videos wichtig sind, und
            stimme mich vorab mit eurem Fotografen ab.
          </p>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Wann ist der beste Moment für den Ringwechsel? Wo steht das Paar am schönsten?
            Wann gibt es Pausen für Fotos? All das plane ich bewusst in die Zeremonie ein,
            damit ihr am Ende wunderschöne Erinnerungsbilder habt.
          </p>

          <h2 className="font-display text-3xl md:text-4xl pt-8" style={{ color: "#111827" }}>
            Weitere Dienstleister
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Neben Hochzeitsplanern und Fotografen arbeite ich auch gerne mit weiteren
            Dienstleistern zusammen:
          </p>
          <ul className="font-body leading-relaxed space-y-2 pl-6 list-disc" style={{ color: "#111827" }}>
            <li><strong>Floristen:</strong> Für die perfekte Blumendekoration an eurem Trauort</li>
            <li><strong>Musiker &amp; DJs:</strong> Für die musikalische Untermalung der Zeremonie und Feier</li>
            <li><strong>Caterer:</strong> Für kulinarische Highlights nach der Trauung</li>
            <li><strong>Stylisten &amp; Visagisten:</strong> Für euer perfektes Hochzeitsstyling</li>
            <li><strong>Locations:</strong> Ich kenne viele wunderschöne Hochzeitslocations und berate euch gerne</li>
          </ul>

          <h2 className="font-display text-3xl md:text-4xl pt-8" style={{ color: "#111827" }}>
            Mein Netzwerk für euch
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Ihr sucht noch den richtigen Fotografen, eine erfahrene Planerin oder andere
            Dienstleister? Sprecht mich gerne an. Ich empfehle nur Profis, mit denen ich
            selbst gute Erfahrungen gemacht habe und denen ich vertraue. So könnt ihr sicher
            sein, dass euer Team eingespielt und professionell ist.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Empfehlungen gewünscht?
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Schreibt mir und erzählt mir, was ihr noch für eure Hochzeit braucht.
            Ich teile gerne meine Empfehlungen mit euch.
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

export default HochzeitsplanerinFotograf;
