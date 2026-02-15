import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";

const Datenschutz = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Datenschutzerklärung | TrauWorte"
        description="Datenschutzerklärung von TrauWorte – Freie Rednerin Stefanie Sick. Informationen zum Umgang mit personenbezogenen Daten."
        canonical="/datenschutzerklaerung"
        noIndex
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Datenschutz", url: "/datenschutz/" },
        ]}
      />

      <section className="py-20 bg-peach">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl text-foreground">Datenschutzerklärung</h1>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
            <h2 className="font-display text-2xl text-foreground">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit euren personenbezogenen
              Daten passiert, wenn ihr diese Website besucht.
            </p>
            <h2 className="font-display text-2xl text-foreground">2. Kontaktformular</h2>
            <p>
              Wenn ihr uns per Kontaktformular Anfragen zukommen lasst, werden eure Angaben aus dem
              Anfrageformular inklusive der von euch dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="text-sm italic">Weitere Angaben werden noch ergänzt.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Datenschutz;
