import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UeberMich = () => {
  return (
    <Layout>
      <section className="py-20 bg-peach">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground">Über mich</h1>
          <p className="font-body text-muted-foreground mt-4">Freie Rednerin mit Herz und Leidenschaft</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="aspect-[3/4] bg-secondary rounded-lg flex items-center justify-center sticky top-24">
              <p className="text-muted-foreground font-body text-sm">Portraitfoto Platzhalter</p>
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl text-foreground">Stefanie Sick</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Mein Name ist Stefanie Sick und ich bin eure freie Rednerin aus Leidenschaft. 
                Seit vielen Jahren begleite ich Paare an ihrem schönsten Tag und gestalte 
                Trauungszeremonien, die von Herzen kommen.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Jede Liebe ist einzigartig – und genau so sollte auch eure Trauung sein. 
                Ich nehme mir die Zeit, euch persönlich kennenzulernen, eure Geschichte zu 
                erfahren und daraus eine Zeremonie zu kreieren, die euch und eure Gäste 
                berührt und bewegt.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Als ausgebildete freie Rednerin verbinde ich Professionalität mit Einfühlungsvermögen. 
                Mir ist es wichtig, dass ihr euch in jeder Phase der Planung wohl und gut aufgehoben fühlt. 
                Von unserem ersten Gespräch bis zum großen Tag bin ich für euch da.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Was mich antreibt? Der Moment, in dem ich in eure Augen schaue und sehe, dass meine 
                Worte euer Herz berühren. Der Moment, in dem Freudentränen fließen und Gäste mir 
                später sagen: „Das war die schönste Trauung, die ich je erlebt habe."
              </p>
              <div className="pt-4">
                <Button asChild className="font-body tracking-wide">
                  <Link to="/kontakt">Lernt mich kennen</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UeberMich;
