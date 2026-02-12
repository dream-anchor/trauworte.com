import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Star, Mail, Phone, ChevronDown } from "lucide-react";

const HERO_IMG = "https://cdn.durable.co/blocks/fD5L1qAV0Jq1mm6juDiJouPrpzDiaAxwG2jUhpHMKJ59qZwRZaEDDQdsXR8pmXeR.png";
const ABOUT_IMG = "https://cdn.durable.co/shutterstock/32KzhE001knAG9Tdks4KwoABZhoKOfvP33Zkox667naeeMPtK7hf7ita1Nv1jB7B.jpeg";

const angeboteData = [
  { title: "Persönliche Trauungszeremonie", desc: "Eine einzigartige Zeremonie, die eure Liebesgeschichte erzählt.", img: "https://cdn.durable.co/shutterstock/1bmUV28L4mWx0qNACJaUsJ6ZFiZzMTE0RUCWxikO4Yyuom54fZITzEf9FG3UcZL5.jpeg" },
  { title: "Moderation", desc: "Professionelle Moderation eurer Hochzeitsfeier.", img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80" },
  { title: "Briefliche Traurede", desc: "Eine persönliche Rede, liebevoll für euch verfasst.", img: "https://cdn.durable.co/blocks/1d9jKiHP9rOLaAegmtxI20pDUpwojNN70eHDkvLZk6FfUNyBrgGnXMFsMKpRGss5.png" },
  { title: "Beratung", desc: "Individuelle Beratung für eure perfekte Trauung.", img: "https://cdn.durable.co/shutterstock/1eo1c1LaWskyy8BSovyzuu00BxWtR7UYbBJG9gP6SWI3vZCUePYVy3iGE4ROioWS.jpeg" },
  { title: "Kreative Ehegelübde", desc: "Hilfe bei der Formulierung eurer persönlichen Gelübde.", img: "https://cdn.durable.co/shutterstock/3KlhuJuXWpqtSLY2SI2z4b45VGP0Uehyo1X8xiOBgAkvyvQ48O1knC9qn69hBjNq.jpeg" },
  { title: "Trauungszeremonie im Freien", desc: "Romantische Zeremonien unter freiem Himmel.", img: "https://images.unsplash.com/photo-1515232389446-a17ce9ca7434?w=800&q=80" },
];

const standorte = [
  { flag: "🇩🇪", name: "Deutschland" },
  { flag: "🇦🇹", name: "Österreich" },
  { flag: "🇨🇭", name: "Schweiz" },
  { flag: "🇪🇸", name: "Mallorca" },
  { flag: "🇮🇹", name: "Toskana" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-peach py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 order-2 md:order-1">
              <p className="font-body text-sm tracking-[0.2em] text-muted-foreground uppercase">Freie Rednerin</p>
              <h1 className="font-display text-4xl md:text-6xl text-foreground leading-tight">
                Herzlich Willkommen
              </h1>
              <p className="font-body text-muted-foreground leading-relaxed">
                Ich bin Stefanie Sick – studierte Kommunikationswissenschaftlerin und seit über 10 Jahren in der Medien- und Eventbranche tätig. Als eure freie Rednerin gestalte ich Trauungszeremonien, die so einzigartig sind wie eure Liebe.
              </p>
              <div className="pt-2">
                <Button asChild size="lg" className="font-body tracking-wide">
                  <Link to="/kontakt">Kontakt aufnehmen</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img
                src={HERO_IMG}
                alt="Stefanie Sick – Freie Rednerin"
                className="w-80 md:w-96 rounded-lg shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-muted-foreground" size={24} />
        </div>
      </section>

      {/* Beratung CTA */}
      <section className="py-20 bg-gradient-to-br from-warm to-peach">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <img src={HERO_IMG} alt="Stefanie Sick" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                Ich berate euch gerne
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Ihr plant eure Hochzeit und wünscht euch eine Trauungszeremonie, die wirklich zu euch passt?
                Dann seid ihr bei mir genau richtig. In einem persönlichen Gespräch lernen wir uns kennen und
                ich erfahre alles über eure Geschichte, eure Wünsche und Träume.
              </p>
              <Button asChild variant="outline" className="font-body tracking-wide">
                <Link to="/kontakt">Jetzt anfragen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Über TrauWorte */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl text-foreground">Über TrauWorte</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                TrauWorte steht für einzigartige, persönliche Trauungszeremonien. Jede Liebe hat ihre eigene Geschichte – und genau die verdient es, erzählt zu werden. Ich nehme mir die Zeit, euch kennenzulernen, und gestalte eine Zeremonie, die euch und eure Gäste berührt.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Mit Einfühlungsvermögen, Kreativität und den richtigen Worten schaffe ich für euch einen Moment, der unvergesslich bleibt.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={ABOUT_IMG} alt="Über TrauWorte" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Standorte */}
      <section className="py-16 bg-peach">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Ich bin überall für euch da</h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Ob in Deutschland oder am Mittelmeer – ich komme dorthin, wo ihr eure Liebe feiern möchtet.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {standorte.map((s) => (
              <div key={s.name} className="bg-background/80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-sm flex items-center gap-3">
                <span className="text-2xl">{s.flag}</span>
                <span className="font-body text-sm text-foreground font-medium">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-10">
            Magische und unvergessliche Momente
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="font-body text-muted-foreground leading-relaxed">
              Eine freie Trauung ist so viel mehr als nur eine Zeremonie. Es ist der Moment, in dem ihr euch vor euren Liebsten das Ja-Wort gebt – frei von Vorgaben, ganz nach euren Vorstellungen.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Ich schaffe für euch diesen magischen Moment, in dem die Zeit stillzustehen scheint und nur eure Liebe zählt. Jedes Wort wird mit Bedacht gewählt, jede Geste sorgfältig geplant.
            </p>
          </div>
        </div>
      </section>

      {/* Angebote */}
      <section className="py-20 bg-peach">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Meine Angebote</h2>
            <p className="font-body text-muted-foreground">Was ich für euch tun kann</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {angeboteData.map((a) => (
              <Link to="/angebote" key={a.title} className="group block bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-display text-lg text-foreground">{a.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild className="font-body tracking-wide">
              <Link to="/angebote">Alle Angebote ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl space-y-6">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-gold fill-gold" />
            ))}
          </div>
          <blockquote className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed">
            „Stefanie hat unsere Trauung zu einem unvergesslichen Erlebnis gemacht. Ihre Worte waren so persönlich und berührend, dass kein Auge trocken blieb. Wir und unsere Gäste waren überwältigt. Vielen Dank für diesen wundervollen Tag!"
          </blockquote>
          <p className="font-body text-sm text-muted-foreground">— Sybille M. aus Frankfurt</p>
        </div>
      </section>

      {/* Kontakt CTA */}
      <section className="py-20 bg-warm">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Nehmt Kontakt mit mir auf
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Ich freue mich darauf, euch und eure Liebesgeschichte kennenzulernen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild size="lg" className="font-body tracking-wide">
              <a href="mailto:info@stefaniesick.com">
                <Mail size={18} className="mr-2" />
                E-Mail schreiben
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-body tracking-wide">
              <a href="tel:+4900000000">
                <Phone size={18} className="mr-2" />
                Anrufen
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
