import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";

const faqItems = [
  {
    q: "What is a free ceremony (freie Trauung)?",
    a: "A free ceremony is a non-religious, personalized wedding celebration. Unlike church or civil ceremonies, there are no fixed rules. You decide the location, the rituals, and the words. As your wedding celebrant, I craft a ceremony that tells your unique love story.",
  },
  {
    q: "Does the wedding celebrant speak English?",
    a: "Yes! I conduct ceremonies fluently in both German and English. Whether your guests are from Germany, the UK, the US, or anywhere in the world, everyone will be able to fully experience the emotions of your ceremony.",
  },
  {
    q: "Where can we have a free ceremony in Munich?",
    a: "Munich offers stunning venues: from the English Garden and Isar riverbanks to elegant castles like Schloss Nymphenburg. Popular locations also include Lake Starnberg, Lake Tegernsee, and charming countryside estates in the Bavarian Alps.",
  },
  {
    q: "How far in advance should we book?",
    a: "I recommend booking your wedding celebrant at least 9–12 months before your wedding date. The wedding season from May to October is particularly popular in Munich and Bavaria, with weekends filling up quickly.",
  },
  {
    q: "Do you travel outside of Munich?",
    a: "Absolutely! While Munich is my home base, I travel throughout Bavaria, Austria, Switzerland, and to destination weddings in Italy (Tuscany, Lake Garda) and Spain (Mallorca). Distance is never a barrier to a beautiful ceremony.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bilingual Wedding Celebrant Munich",
  provider: {
    "@type": "Person",
    name: "Stefanie Sick",
    jobTitle: "Wedding Celebrant (Traurednerin)",
    url: "https://trauworte.com",
  },
  serviceType: "Wedding Ceremony / Free Ceremony",
  areaServed: [
    { "@type": "Place", name: "Munich, Germany" },
    { "@type": "Place", name: "Bavaria, Germany" },
  ],
  description: "Bilingual wedding celebrant in Munich. Personal and emotional free ceremonies in German and English.",
  url: "https://trauworte.com/en/wedding-celebrant-munich/",
};

const WeddingCelebrantMunich = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Wedding Celebrant Munich – Bilingual Ceremonies | TrauWorte"
        description="Wedding celebrant Stefanie Sick creates personal, bilingual ceremonies in Munich & Bavaria. Free weddings in English and German — emotional, unique, unforgettable."
        canonical="/en/wedding-celebrant-munich"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Wedding Celebrant Munich", url: "/en/wedding-celebrant-munich/" },
        ]}
      />
      <Helmet>
        <link rel="alternate" hrefLang="de" href="https://trauworte.com/traurednerin-muenchen/" />
        <link rel="alternate" hrefLang="en" href="https://trauworte.com/en/wedding-celebrant-munich/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ backgroundColor: "#FCECDF" }} className="pt-32 pb-20 md:pt-40 md:pb-28">
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
            Bilingual Ceremonies
          </p>
          <h1
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: 1.15,
            }}
          >
            Wedding Celebrant Munich –{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              Personal Ceremonies in English
            </span>
          </h1>
          <p
            className="font-body max-w-[600px] mx-auto mt-6"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Your wedding celebrant in Munich for bilingual ceremonies. I create personal, emotional
            free weddings in English and German — as unique as your love story.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <h2
            className="font-display mb-8"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Your{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, color: "#B8956A" }}>
              English-speaking wedding celebrant
            </span>{" "}
            in Munich
          </h2>

          <div className="space-y-6 font-body" style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}>
            <p>
              Getting married in Munich as an international couple? Or planning a wedding with guests
              from different countries? As your bilingual wedding celebrant in Munich, I create
              ceremonies that bridge languages and cultures — personal, emotional, and entirely in
              your style.
            </p>
            <p>
              A <strong>free ceremony</strong> (freie Trauung) is the most popular way to celebrate
              love in Germany. Unlike church or civil ceremonies, a free ceremony has no fixed rules.
              You choose the venue, the rituals, and the words. I listen to your love story, learn
              what makes you special as a couple, and craft a ceremony speech that touches every heart
              in the room.
            </p>
            <p>
              Whether you dream of an <strong>outdoor ceremony</strong> by Lake Starnberg, an elegant
              celebration at a Bavarian castle, or a cozy gathering in a Munich rooftop venue — I
              bring your vision to life. Every ceremony I create is one of a kind, written from
              scratch for you and delivered with passion, warmth, and a touch of humor.
            </p>
          </div>

          <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />

          <h2
            className="font-display mb-8"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Bilingual ceremonies:{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, color: "#B8956A" }}>
              seamlessly in English and German
            </span>
          </h2>

          <div className="space-y-6 font-body" style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}>
            <p>
              International weddings in Munich are wonderfully diverse. Your families might speak
              different languages, your friends might come from all over the world. That's where my
              bilingual approach shines: I weave English and German naturally throughout the
              ceremony, so every guest feels included and moved.
            </p>
            <p>
              This isn't about translating sentences one by one. I create a flowing, natural ceremony
              that switches between languages organically. Your German grandmother and your American
              best friend will both laugh, cry, and feel the magic of your love story.
            </p>
          </div>

          <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />

          <h2
            className="font-display mb-8"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            How it works:{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, color: "#B8956A" }}>
              from first contact to your big day
            </span>
          </h2>

          <div className="space-y-6 font-body" style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}>
            <p>
              <strong>1. Free consultation:</strong> We connect via video call and I learn about your
              vision for the ceremony. This first meeting is free and non-binding.
            </p>
            <p>
              <strong>2. Deep-dive session:</strong> In an in-depth couple's interview, I discover
              your love story — how you met, what makes your relationship special, and the
              moments that define you as a couple.
            </p>
            <p>
              <strong>3. Ceremony creation:</strong> I write your personalized ceremony speech, word
              by word. You receive a draft to review, and we fine-tune it together. We also plan
              rituals, music, and the ceremony flow.
            </p>
            <p>
              <strong>4. Your wedding day:</strong> On your big day, I arrive early, coordinate with
              your vendors, and guide you through a ceremony that your guests will talk about for
              years. Your moment — unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <h2
            className="font-display text-center mb-12"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Frequently asked questions about{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, color: "#B8956A" }}>
              wedding ceremonies in Munich
            </span>
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div key={i} className="p-6" style={{ background: "rgba(253, 244, 237, 0.7)", border: "1px solid rgba(184, 149, 106, 0.12)" }}>
                <h3 className="font-display mb-3" style={{ fontSize: "1.15rem", fontWeight: 400, color: "#1a1a1a" }}>{item.q}</h3>
                <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[600px] text-center">
          <h2
            className="font-display mb-6"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Ready to start planning{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, color: "#B8956A" }}>
              your ceremony?
            </span>
          </h2>
          <p className="font-body mb-8" style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}>
            Tell me about your dream wedding in Munich or Bavaria. I'd love to hear your story and
            create a ceremony that's truly, uniquely yours. Let's connect!
          </p>
          <Link to="/freie-trauung-kontakt" className="btn-gold inline-block">
            Get in touch
          </Link>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/traurednerin-muenchen" className="font-body text-sm" style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              Traurednerin München (Deutsch)
            </Link>
            <Link to="/freie-trauung-mallorca" className="font-body text-sm" style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              Destination Weddings Mallorca
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WeddingCelebrantMunich;
