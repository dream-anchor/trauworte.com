import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const angebote = [
  {
    img: "https://cdn.durable.co/shutterstock/1bmUV28L4mWx0qNACJaUsJ6ZFiZzMTE0RUCWxikO4Yyuom54fZITzEf9FG3UcZL5.jpeg",
    title: "Persönliche Trauungszeremonie",
    desc: "Eure Liebe verdient eine Zeremonie, die so einzigartig ist wie ihr selbst. Ich gestalte eure freie Trauung ganz individuell – mit eurer Geschichte, euren Wünschen und den Worten, die euch berühren. Ob klassisch-elegant, locker-humorvoll oder romantisch-emotional: Ich finde den perfekten Ton für euren besonderen Moment.",
  },
  {
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80",
    title: "Moderation",
    desc: "Ihr wünscht euch jemanden, der charmant und souverän durch euren Hochzeitstag führt? Als eure Moderatorin sorge ich dafür, dass alles reibungslos läuft und eure Gäste sich rundum wohlfühlen. Von der Begrüßung bis zum letzten Tanz – ich behalte den Überblick.",
  },
  {
    img: "https://cdn.durable.co/blocks/1d9jKiHP9rOLaAegmtxI20pDUpwojNN70eHDkvLZk6FfUNyBrgGnXMFsMKpRGss5.png",
    title: "Briefliche Traurede",
    desc: "Ihr feiert im Ausland oder möchtet eure Zeremonie selbst gestalten, wünscht euch aber professionelle Unterstützung bei der Rede? Ich verfasse eine individuelle Traurede, die eure Geschichte auf berührende Weise erzählt – zum Vorlesen durch eine Person eurer Wahl.",
  },
  {
    img: "https://cdn.durable.co/shutterstock/1eo1c1LaWskyy8BSovyzuu00BxWtR7UYbBJG9gP6SWI3vZCUePYVy3iGE4ROioWS.jpeg",
    title: "Beratung",
    desc: "Ihr braucht Unterstützung bei der Planung eurer Trauungszeremonie? In einem persönlichen Beratungsgespräch helfe ich euch, eure Vorstellungen zu konkretisieren und gebe euch wertvolle Tipps rund um Ablauf, Rituale und Gestaltung.",
  },
  {
    img: "https://cdn.durable.co/shutterstock/3KlhuJuXWpqtSLY2SI2z4b45VGP0Uehyo1X8xiOBgAkvyvQ48O1knC9qn69hBjNq.jpeg",
    title: "Kreative Ehegelübde",
    desc: "Ihr möchtet euch eigene Ehegelübde schreiben, wisst aber nicht, wo ihr anfangen sollt? Ich helfe euch dabei, eure Gefühle in die richtigen Worte zu fassen – authentisch, persönlich und von Herzen kommend.",
  },
  {
    img: "https://images.unsplash.com/photo-1515232389446-a17ce9ca7434?w=800&q=80",
    title: "Trauungszeremonie im Freien",
    desc: "Eine Trauung unter freiem Himmel hat ihren ganz eigenen Zauber. Ob am See, im Wald, auf einer Wiese oder in einem Garten – ich gestalte eure Outdoor-Zeremonie so, dass sie perfekt in die Umgebung und zu euch passt.",
  },
];

const Angebote = () => {
  return (
    <Layout>
      <section className="py-20 bg-peach">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground">Meine Angebote</h1>
          <p className="font-body text-muted-foreground mt-4">Was ich für euch tun kann</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">
          {angebote.map((a, i) => (
            <div
              key={a.title}
              className={`flex flex-col md:flex-row gap-8 items-start ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/3">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img src={a.img} alt={a.title} className="w-full aspect-[4/3] object-cover" />
                </div>
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <h2 className="font-display text-2xl text-foreground">{a.title}</h2>
                <p className="font-body text-muted-foreground leading-relaxed">{a.desc}</p>
                <Button asChild variant="outline" className="font-body tracking-wide">
                  <Link to="/kontakt">Jetzt anfragen</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Angebote;
