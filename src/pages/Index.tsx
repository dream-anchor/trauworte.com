import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MapPin, Star, Mic, PenLine, MessageCircle, Users, TreePine, Sparkles } from "lucide-react";

const angebote = [
  { icon: Heart, title: "Persönliche Trauungszeremonie", desc: "Eine einzigartige Zeremonie, die eure Liebesgeschichte erzählt." },
  { icon: Mic, title: "Moderation", desc: "Professionelle Moderation eurer Hochzeitsfeier." },
  { icon: PenLine, title: "Briefliche Traurede", desc: "Eine persönliche Rede, liebevoll für euch verfasst." },
  { icon: MessageCircle, title: "Beratung", desc: "Individuelle Beratung für eure perfekte Trauung." },
  { icon: Users, title: "Kreative Ehegelübde", desc: "Hilfe bei der Formulierung eurer persönlichen Gelübde." },
  { icon: TreePine, title: "Trauungszeremonie im Freien", desc: "Romantische Zeremonien unter freiem Himmel." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-peach py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="font-body text-sm tracking-[0.2em] text-muted-foreground uppercase">Freie Rednerin</p>
            <h1 className="font-display text-4xl md:text-6xl text-foreground leading-tight">
              Herzlich Willkommen
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ich bin Stefanie Sick, eure freie Rednerin. Ich gestalte eure Trauungszeremonie so einzigartig und 
              besonders, wie eure Liebe es verdient. Jede Zeremonie wird individuell auf euch zugeschnitten – 
              mit Herz, Gefühl und den richtigen Worten.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="font-body tracking-wide">
                <Link to="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portrait / Beratung */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="aspect-[3/4] bg-secondary rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground font-body text-sm">Portraitfoto Platzhalter</p>
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
              <p className="font-body text-muted-foreground leading-relaxed">
                Gemeinsam gestalten wir eine Zeremonie, die euch und euren Gästen noch lange in Erinnerung 
                bleiben wird.
              </p>
              <Button asChild variant="outline" className="font-body tracking-wide">
                <Link to="/kontakt">Jetzt anfragen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Verfügbarkeit */}
      <section className="py-16 bg-warm">
        <div className="container mx-auto px-4 text-center space-y-6">
          <MapPin className="mx-auto text-accent" size={32} />
          <h2 className="font-display text-3xl text-foreground">Ich bin überall für euch da</h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Ob in Deutschland, Österreich, der Schweiz oder anderswo in Europa – 
            ich komme dorthin, wo ihr eure Liebe feiern möchtet.
          </p>
        </div>
      </section>

      {/* Magische Momente */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center space-y-6 max-w-3xl">
          <Sparkles className="mx-auto text-gold" size={32} />
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Magische Momente</h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            Eine freie Trauung ist so viel mehr als nur eine Zeremonie. Es ist der Moment, in dem ihr euch 
            vor euren Liebsten das Ja-Wort gebt – frei von Vorgaben, ganz nach euren Vorstellungen. 
            Ich schaffe für euch diesen magischen Moment, in dem die Zeit stillzustehen scheint und nur 
            eure Liebe zählt.
          </p>
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
            {angebote.map((a) => (
              <Card key={a.title} className="bg-background/80 border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <a.icon className="mx-auto text-accent" size={28} />
                  <h3 className="font-display text-lg text-foreground">{a.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{a.desc}</p>
                </CardContent>
              </Card>
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
            „Stefanie hat unsere Trauung zu einem unvergesslichen Erlebnis gemacht. 
            Jedes Wort kam von Herzen und hat uns und unsere Gäste tief berührt."
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
            Schreibt mir und wir planen gemeinsam euren besonderen Tag.
          </p>
          <Button asChild size="lg" className="font-body tracking-wide">
            <Link to="/kontakt">Jetzt anfragen</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
