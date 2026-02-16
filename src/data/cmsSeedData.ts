// Auto-Seed: Originalinhalte aller Seiten für das CMS
// Wird einmalig beim ersten Admin-Besuch in localStorage geladen

import type { PageContent } from "@/config/apiClient";

export const seedPages: PageContent[] = [
  // ═══ STARTSEITE ═══
  {
    page_slug: "index",
    page_title: "Startseite",
    content: {
      hero: {
        label: "Freie Trauungen in Europa",
        title: "Eure Traurednerin für freie Trauungen voller Emotion",
        titleAccent: "freie Trauungen",
        subtitle: "Persönlich, emotional und unvergesslich — Zeremonien, die so einzigartig sind wie eure Liebesgeschichte.",
        image: "/images/freie-trauung-zeremonie-outdoor.webp",
        imageAlt: "Freie Trauung im Grünen — Zeremonie unter Bäumen",
        imageCredit: "Unsplash",
      },
      sections: [
        {
          title: "Eure Traurednerin — persönlich & von Herzen",
          titleAccent: "",
          content: "Ich bin Stefanie, eure Traurednerin. Ich gestalte freie Trauungen, die so einzigartig sind wie eure Liebesgeschichte. Ob am See in Bayern, in den Alpen, auf einer Finca auf Mallorca oder in der Toskana — ich finde die Worte, die euch und eure Gäste tief berühren.",
        },
      ],
      faq: [],
      cta: {
        title: "Eure Traumhochzeit",
        titleAccent: "beginnt hier",
        text: "Schreibt mir und wir gestalten gemeinsam eure unvergessliche Zeremonie.",
        buttonText: "Euren Termin anfragen",
        buttonLink: "/freie-trauung-kontakt",
      },
    },
    seo_title: "Traurednerin München – Eure persönliche freie Trauung | TrauWorte",
    seo_description: "Traurednerin Stefanie Sick gestaltet eure freie Trauung persönlich & emotional. Freie Hochzeiten in München, Bayern, Österreich, Schweiz & Europa.",
    seo_canonical: "/",
    keywords: ["Traurednerin", "freie Trauung", "München", "Bayern", "Österreich", "Schweiz", "Europa", "Hochzeitsrednerin", "Traurede", "Zeremonie"],
  },

  // ═══ TRAUREDNERIN MÜNCHEN ═══
  {
    page_slug: "traurednerin-muenchen",
    page_title: "München",
    content: {
      hero: {
        label: "Traurednerin in München",
        title: "Eure Traurednerin für freie Trauungen in München",
        titleAccent: "freie Trauungen in München",
        subtitle: "Als eure Traurednerin in München gestalte ich Zeremonien, die so einzigartig sind wie eure Liebesgeschichte. Persönlich, emotional und unvergesslich — an den schönsten Orten Münchens und Oberbayerns.",
        image: "/images/hero-muenchen.webp",
        imageAlt: "Freie Trauung München — Blick auf die Frauenkirche",
        imageCredit: "",
      },
      sections: [
        {
          title: "Freie Trauung in München: Persönlich und von Herzen",
          titleAccent: "",
          content: "München ist nicht nur eine der schönsten Städte Deutschlands — es ist auch ein Ort voller romantischer Möglichkeiten für eure freie Trauung. Ob im Englischen Garten unter alten Baumkronen, in einer eleganten Villa am Starnberger See oder auf einer urigen Almhütte mit Blick auf die bayerischen Alpen: Als eure Traurednerin in München kenne ich die schönsten Orte und gestalte eure Zeremonie genau so, wie ihr sie euch erträumt.",
        },
        {
          title: "Beliebte Locations für freie Trauungen in München & Oberbayern",
          titleAccent: "",
          content: "Die Region München bietet eine unglaubliche Vielfalt an Locations für eure freie Trauung. Am Starnberger See könnt ihr eure Zeremonie mit Blick auf das Alpenpanorama feiern — eine Kulisse, die atemberaubender kaum sein könnte.",
        },
      ],
      faq: [
        { question: "Wo finden freie Trauungen in München statt?", answer: "München bietet wunderschöne Locations für eure freie Trauung: vom Englischen Garten über die Isarauen bis hin zu eleganten Schlossanlagen wie Schloss Nymphenburg oder Gut Kaltenbrunn. Auch der Starnberger See und der Tegernsee sind beliebte Orte für freie Trauungen in der Region München." },
        { question: "Wie früh sollte man eine Traurednerin in München buchen?", answer: "Ich empfehle, eure Traurednerin mindestens 9–12 Monate vor dem Hochzeitstermin zu buchen. In der Hochzeitssaison von Mai bis Oktober sind die Wochenenden in München besonders beliebt und schnell vergeben." },
        { question: "Was kostet eine Traurednerin in München?", answer: "Die Kosten für eine Traurednerin in München variieren je nach Umfang und Leistungspaket. Mein Angebot umfasst immer ein persönliches Kennenlerngespräch, ein ausführliches Paargespräch, eine individuell geschriebene Traurede und die professionelle Durchführung eurer Zeremonie. Schreibt mir für ein unverbindliches Angebot." },
        { question: "Was ist, wenn internationale Gäste bei der Trauung dabei sind?", answer: "Ich gestalte eure Zeremonie auf Deutsch. Wenn internationale Gäste dabei sind, kann ich einzelne Passagen so gestalten, dass sie auch ohne perfekte Deutschkenntnisse emotional mitgenommen werden — etwa durch universelle Gesten, Rituale und ein kurzes gedrucktes Programm in anderen Sprachen." },
        { question: "Reist die Traurednerin auch außerhalb von München?", answer: "Ja! München ist mein Zuhause, aber ich reise gerne zu eurer Wunsch-Location — ob Starnberger See, Tegernsee, Chiemsee oder weiter nach ganz Bayern, Österreich, in die Schweiz oder zu Destination Weddings in Südeuropa." },
      ],
      cta: {
        title: "Traurednerin München",
        titleAccent: "anfragen",
        text: "Schreibt mir und wir gestalten gemeinsam eure Traumzeremonie in München.",
        buttonText: "Jetzt unverbindlich anfragen",
        buttonLink: "/freie-trauung-kontakt",
      },
    },
    seo_title: "Traurednerin München – Freie Trauungen | TrauWorte",
    seo_description: "Traurednerin Stefanie Sick gestaltet eure freie Trauung in München persönlich & emotional. Zeremonien am Starnberger See, Tegernsee & ganz Oberbayern.",
    seo_canonical: "/traurednerin-muenchen",
    keywords: ["Traurednerin München", "freie Trauung München", "Starnberger See", "Tegernsee", "Oberbayern", "Traurede München", "Hochzeitsrednerin München"],
  },

  // ═══ TRAUREDNERIN BAYERN ═══
  {
    page_slug: "traurednerin-bayern",
    page_title: "Bayern",
    content: {
      hero: {
        label: "Traurednerin in Bayern",
        title: "Traurednerin in Bayern – Eure freie Trauung am See, auf der Alm oder im Schloss",
        titleAccent: "Eure freie Trauung am See, auf der Alm oder im Schloss",
        subtitle: "Von den Ufern des Starnberger Sees bis zu den Gipfeln der Alpen: Als eure Traurednerin in Bayern gestalte ich Zeremonien, die so vielfältig und schön sind wie der Freistaat selbst.",
        image: "/images/hero-bayern.webp",
        imageAlt: "Bayerische Alpen — Traumkulisse für freie Trauungen",
        imageCredit: "",
      },
      sections: [
        { title: "Warum Bayern der schönste Ort für eure freie Trauung ist", titleAccent: "", content: "Bayern ist ein Paradies für freie Trauungen. Kaum eine andere Region in Europa bietet eine solche Vielfalt an traumhaften Locations: kristallklare Seen mit Alpenpanorama, majestätische Schlösser, urige Almhütten und charmante Städte." },
        { title: "Eure Traurednerin für ganz Bayern", titleAccent: "", content: "Als Traurednerin mit Sitz in München kenne ich Bayern wie meine Westentasche. Ob ihr eine intime Zeremonie zu zweit am Bergsee plant, eine große Feier in einem bayerischen Schloss oder eine rustikale Almhochzeit — ich gestalte eure freie Trauung so persönlich und emotional, dass sie euch und eure Gäste tief berührt." },
        { title: "Freie Trauung an Bayerns schönsten Seen", titleAccent: "", content: "Die bayerischen Seen gehören zu den romantischsten Orten für eine freie Trauung in ganz Deutschland. Jeder See hat seinen eigenen Charakter — und als eure Traurednerin finde ich genau die Worte, die zu euch und eurer Location passen." },
        { title: "Berghochzeiten in Bayern", titleAccent: "", content: "Von rustikalen Almhütten über Gipfeltrauungen mit 360-Grad-Panorama bis hin zu eleganten Berghotels wie Schloss Elmau bietet die bayerische Alpenregion unvergessliche Kulissen für eure freie Trauung." },
        { title: "Schlösser und historische Locations in Bayern", titleAccent: "", content: "Bayern ist das Land der Schlösser — und viele davon bieten den perfekten Rahmen für eine freie Trauung. Schloss Nymphenburg in München verbindet barocke Pracht mit weitläufigen Gärten." },
      ],
      faq: [
        { question: "Was kostet eine Traurednerin in Bayern?", answer: "Die Kosten für eine freie Trauung in Bayern variieren je nach Umfang und Leistungspaket. Mein Honorar umfasst immer ein persönliches Kennenlerngespräch, ein ausführliches Paargespräch, eine individuell geschriebene Traurede und die professionelle Durchführung eurer Zeremonie. Die Anfahrt innerhalb Bayerns ist im Preis inbegriffen." },
        { question: "Wie weit im Voraus sollte man eine Traurednerin buchen?", answer: "Ich empfehle, eure Traurednerin 6 bis 12 Monate vor dem Hochzeitstermin zu buchen. Besonders in der Hochzeitssaison von Mai bis September sind die Wochenenden schnell vergeben." },
        { question: "Braucht man zusätzlich eine standesamtliche Trauung?", answer: "Ja, eine freie Trauung ist in Deutschland nicht rechtlich bindend. Für die rechtsgültige Ehe benötigt ihr eine standesamtliche Trauung. Viele Paare machen beides am gleichen Tag." },
        { question: "Welche Jahreszeit ist am besten für eine Seehochzeit in Bayern?", answer: "Die beliebteste Zeit für Hochzeiten an bayerischen Seen ist Mai bis Oktober. Der Frühsommer bietet mildere Temperaturen und lange Abende. Der Herbst verzaubert mit goldenem Licht und einer besonders stimmungsvollen Atmosphäre." },
        { question: "Reist die Traurednerin auch an abgelegene Locations?", answer: "Absolut! Ob Alm ohne Straßenanbindung, einsamer Bergsee oder die Fraueninsel im Chiemsee — ich komme überall hin." },
      ],
      cta: {
        title: "Eure Traumhochzeit in Bayern",
        titleAccent: "beginnt hier",
        text: "",
        buttonText: "Jetzt unverbindlich anfragen",
        buttonLink: "/freie-trauung-kontakt",
      },
    },
    seo_title: "Traurednerin Bayern – Freie Trauung am See & in den Bergen",
    seo_description: "Eure Traurednerin für Bayern: Stefanie Sick gestaltet freie Trauungen am Starnberger See, Tegernsee, Chiemsee und in den Alpen. Persönlich & emotional.",
    seo_canonical: "/traurednerin-bayern",
    keywords: ["Traurednerin Bayern", "freie Trauung Bayern", "Starnberger See", "Tegernsee", "Chiemsee", "Almhochzeit", "Schloss Nymphenburg"],
  },

  // ═══ ÖSTERREICH ═══
  {
    page_slug: "traurednerin-oesterreich",
    page_title: "Österreich",
    content: {
      hero: {
        label: "Traurednerin in Österreich",
        title: "Freie Trauung in Österreich – Eure Traurednerin für Salzburg, Tirol und das Salzkammergut",
        titleAccent: "Eure Traurednerin für Salzburg, Tirol und das Salzkammergut",
        subtitle: "Zwischen Alpengipfeln und Seenlandschaften: Als eure Traurednerin gestalte ich freie Trauungen in Österreich, die so atemberaubend sind wie die Kulisse selbst.",
        image: "/images/hero-oesterreich.webp",
        imageAlt: "Österreichische Alpen — Bergsee-Kulisse für Trauungen",
        imageCredit: "",
      },
      sections: [
        { title: "Warum Österreich der perfekte Ort für eure freie Trauung ist", titleAccent: "", content: "Österreich gehört zu den schönsten Hochzeitszielen in Europa. Die Alpenlandschaft mit ihren kristallklaren Seen, den majestätischen Bergen und den charmanten Ortschaften bietet eine Kulisse, die jedes Brautpaar verzaubert." },
        { title: "Salzburg – Kaiserliche Eleganz und Mozartkugel-Charme", titleAccent: "", content: "Die Mozartstadt verzaubert mit barocker Pracht, verwinkelten Gassen und einer Kulisse, die schon Hollywood inspirierte. Schloss Leopoldskron bietet einen magischen Rahmen für eure Zeremonie." },
        { title: "Tirol – Alpine Romantik und Bergpanorama", titleAccent: "", content: "In Tirol erwarten euch romantische Almhütten, elegante Berghotels und Locations mit Panoramablick auf die Tiroler Alpen." },
        { title: "Salzkammergut – Seen, Berge und kaiserliche Sommerfrische", titleAccent: "", content: "Das Salzkammergut ist Österreichs romantischste Seenlandschaft — und ein Traumziel für freie Trauungen. Der Wolfgangsee und der Hallstätter See bieten unvergessliche Kulissen." },
      ],
      faq: [
        { question: "Reist die Traurednerin nach Österreich?", answer: "Ja! Als Traurednerin mit Sitz in München ist Österreich eines meiner liebsten Reiseziele. Salzburg erreiche ich in 90 Minuten, Tirol in gut zwei Stunden." },
        { question: "Was kostet eine Traurednerin für Österreich?", answer: "Mein Honorar umfasst das komplette Leistungspaket: persönliches Kennenlerngespräch, ausführliches Paargespräch, individuelle Traurede und professionelle Durchführung. Bei Reisen nach Österreich kommen Anfahrt und ggf. Übernachtung hinzu." },
        { question: "Ist eine freie Trauung in Österreich rechtsgültig?", answer: "Nein, eine freie Trauung hat in Österreich — genau wie in Deutschland — keine rechtliche Bindung. Für die Rechtsgültigkeit benötigt ihr eine standesamtliche Trauung." },
        { question: "Wie weit im Voraus sollte man buchen?", answer: "Ich empfehle 6 bis 12 Monate vor dem Hochzeitstermin. Beliebte Locations in Salzburg oder am Wolfgangsee sind oft frühzeitig ausgebucht." },
      ],
      cta: { title: "Eure Traumhochzeit in Österreich", titleAccent: "beginnt hier", text: "", buttonText: "Jetzt unverbindlich anfragen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Freie Trauung Österreich – Traurednerin für Salzburg & Tirol",
    seo_description: "Traurednerin Stefanie Sick für freie Trauungen in Österreich. Zeremonien in Salzburg, Tirol, am Wolfgangsee & im Salzkammergut — persönlich und emotional.",
    seo_canonical: "/traurednerin-oesterreich",
    keywords: ["Traurednerin Österreich", "freie Trauung Österreich", "Salzburg", "Tirol", "Salzkammergut", "Wolfgangsee", "Hallstätter See"],
  },

  // ═══ MALLORCA ═══
  {
    page_slug: "freie-trauung-mallorca",
    page_title: "Mallorca",
    content: {
      hero: {
        label: "Destination Wedding",
        title: "Freie Trauung auf Mallorca – Eure Traurednerin für die Insel",
        titleAccent: "Eure Traurednerin für die Insel",
        subtitle: "Sonne, Meer und eure Liebe: Als eure Traurednerin gestalte ich freie Trauungen auf Mallorca, die so traumhaft sind wie die Insel selbst.",
        image: "/images/hero-mallorca.webp",
        imageAlt: "Mallorca — Mittelmeerküste für Destination Weddings",
        imageCredit: "",
      },
      sections: [
        { title: "Warum Mallorca perfekt für eure freie Trauung ist", titleAccent: "", content: "Mallorca ist weit mehr als ein Urlaubsziel — die Baleareninsel gehört zu den beliebtesten Destinationen für freie Trauungen in Europa. Goldenes Licht, das Rauschen des Mittelmeers, der Duft von Oliven und Rosmarin: Heiraten auf Mallorca ist ein Fest für alle Sinne." },
        { title: "Die schönsten Locations für eure Hochzeit auf Mallorca", titleAccent: "", content: "Die mallorquinischen Fincas sind der Inbegriff von mediterraner Hochzeitsromantik. Zwischen Olivenbäumen und Mandelhaine feiert ihr eure freie Trauung in einem Ambiente, das Eleganz und Natürlichkeit vereint." },
      ],
      faq: [
        { question: "Was kostet eine freie Trauung auf Mallorca?", answer: "Mein Honorar als Traurednerin umfasst Vorbereitung, Paargespräch, individuelle Traurede und Zeremonie. Hinzu kommen Reisekosten (Flug und Übernachtung)." },
        { question: "Kann man auf Mallorca standesamtlich heiraten?", answer: "Eine standesamtliche Trauung auf Mallorca ist nur für Residenten möglich. Die meisten Paare heiraten standesamtlich in Deutschland und feiern ihre freie Trauung auf Mallorca." },
        { question: "Wie weit im Voraus buchen?", answer: "Für eine Destination Wedding auf Mallorca empfehle ich mindestens 8–12 Monate im Voraus." },
        { question: "Was passiert bei schlechtem Wetter?", answer: "Regen auf Mallorca ist in der Hochzeitssaison selten, aber wir planen immer einen Plan B." },
      ],
      cta: { title: "Bereit für eure Traumhochzeit", titleAccent: "auf Mallorca?", text: "", buttonText: "Jetzt Mallorca-Termin anfragen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Freie Trauung Mallorca – Traurednerin Stefanie Sick",
    seo_description: "Eure freie Trauung auf Mallorca: Traurednerin Stefanie Sick gestaltet persönliche Zeremonien auf Fincas, am Strand und an den schönsten Orten der Insel.",
    seo_canonical: "/freie-trauung-mallorca",
    keywords: ["Freie Trauung Mallorca", "Destination Wedding Mallorca", "Finca Hochzeit", "Strandhochzeit Mallorca", "Traurednerin Mallorca"],
  },

  // ═══ TOSKANA ═══
  {
    page_slug: "freie-trauung-toskana",
    page_title: "Toskana",
    content: {
      hero: {
        label: "Destination Wedding",
        title: "Freie Trauung in der Toskana – Eure Traurednerin für Italien",
        titleAccent: "Eure Traurednerin für Italien",
        subtitle: "Weinberge, Zypressen und goldenes Licht: Als eure Traurednerin gestalte ich freie Trauungen in der Toskana, die la dolce vita in jeder Silbe spüren lassen.",
        image: "/images/hero-toskana.webp",
        imageAlt: "Toskana — Zypressenallee in der italienischen Landschaft",
        imageCredit: "",
      },
      sections: [
        { title: "Warum die Toskana der perfekte Ort für eure freie Trauung ist", titleAccent: "", content: "Die Toskana ist der Inbegriff von Romantik und Genuss. Sanfte Hügellandschaften, von Zypressen gesäumte Alleen, historische Villen und Weingüter, die im warmen Licht der Abendsonne erstrahlen." },
        { title: "Die schönsten Hochzeitslocations in der Toskana", titleAccent: "", content: "Die Weinberge des Chianti-Gebiets sind der Inbegriff der Toskana. Zwischen Rebstöcken und Olivenhainen feiert ihr eure freie Trauung auf einem Weingut, das Tradition und Romantik vereint." },
      ],
      faq: [
        { question: "Was kostet eine freie Trauung in der Toskana?", answer: "Mein Honorar umfasst Vorbereitung, Paargespräch, individuelle Traurede und Zeremonie. Hinzu kommen Flug und Übernachtung." },
        { question: "Wann ist die beste Jahreszeit?", answer: "Die schönste Zeit ist Mai bis Oktober. Besonders beliebt sind Juni und September." },
        { question: "Kann man in Italien standesamtlich heiraten?", answer: "Ja, auch als deutsche Staatsbürger könnt ihr in Italien standesamtlich heiraten." },
      ],
      cta: { title: "Eure Traumhochzeit in der Toskana", titleAccent: "beginnt hier", text: "", buttonText: "Jetzt Toskana-Termin anfragen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Freie Trauung Toskana – Traurednerin Stefanie Sick",
    seo_description: "Eure freie Trauung in der Toskana: Traurednerin Stefanie Sick gestaltet persönliche Zeremonien auf Weingütern, in Villen und unter toskanischer Sonne.",
    seo_canonical: "/freie-trauung-toskana",
    keywords: ["Freie Trauung Toskana", "Hochzeit Toskana", "Weingut Chianti", "Destination Wedding Toskana", "Traurednerin Toskana"],
  },

  // ═══ GARDASEE ═══
  {
    page_slug: "freie-trauung-gardasee",
    page_title: "Gardasee",
    content: {
      hero: {
        label: "Destination Wedding",
        title: "Freie Trauung am Gardasee – Eure Traurednerin für Norditalien",
        titleAccent: "Eure Traurednerin für Norditalien",
        subtitle: "Zypressen, Olivenhaine und türkisblaues Wasser: freie Trauungen am Gardasee, die italienische Romantik und persönliche Worte vereinen.",
        image: "/images/hero-gardasee.webp",
        imageAlt: "Gardasee — Traumkulisse für Hochzeiten in Italien",
        imageCredit: "",
      },
      sections: [
        { title: "Warum der Gardasee perfekt für eure freie Trauung ist", titleAccent: "", content: "Der Gardasee ist Italiens größter und einer seiner schönsten Seen — und ein Traumziel für freie Trauungen." },
        { title: "Die schönsten Hochzeitslocations am Gardasee", titleAccent: "", content: "Die historischen Villen am Gardasee gehören zu den begehrtesten Hochzeitslocations Italiens. In Sirmione feiert ihr mit Blick auf die Halbinsel und die Scaliger-Burg." },
      ],
      faq: [
        { question: "Reist die Traurednerin an den Gardasee?", answer: "Ja! Der Gardasee ist von München aus in nur vier Stunden erreichbar." },
        { question: "Welche Orte eignen sich für freie Trauungen?", answer: "Von Villen in Sirmione und Gardone Riviera über Zitronenhaine in Limone sul Garda bis hin zu Olivenhainen bei Malcesine." },
        { question: "Was kostet eine freie Trauung am Gardasee?", answer: "Mein Honorar umfasst Kennenlerngespräch, Paargespräch, individuelle Traurede und Zeremonie. Hinzu kommen Anfahrt und Übernachtung." },
      ],
      cta: { title: "Eure Traumhochzeit am Gardasee", titleAccent: "beginnt hier", text: "", buttonText: "Jetzt Gardasee-Hochzeit anfragen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Freie Trauung Gardasee – Traurednerin Stefanie Sick",
    seo_description: "Freie Trauung am Gardasee mit Traurednerin Stefanie Sick. Destination Weddings in Sirmione, Malcesine, Limone & an den schönsten Orten Norditaliens.",
    seo_canonical: "/freie-trauung-gardasee",
    keywords: ["Freie Trauung Gardasee", "Gardasee Hochzeit", "Sirmione", "Malcesine", "Limone sul Garda", "Destination Wedding Gardasee"],
  },

  // ═══ ALPEN ═══
  {
    page_slug: "freie-trauung-alpen",
    page_title: "Alpen",
    content: {
      hero: {
        label: "Berghochzeit",
        title: "Freie Trauung in den Alpen – Eure Traurednerin für Berghochzeiten",
        titleAccent: "Eure Traurednerin für Berghochzeiten",
        subtitle: "Gipfelglück und Liebesversprechen: freie Trauungen auf Bergspitzen, Almwiesen und an kristallklaren Bergseen.",
        image: "/images/hero-alpen.webp",
        imageAlt: "Alpenpanorama — Berghochzeit in den Alpen",
        imageCredit: "",
      },
      sections: [
        { title: "Warum die Alpen der perfekte Ort für eure freie Trauung sind", titleAccent: "", content: "Eine freie Trauung in den Alpen ist mehr als eine Hochzeit — es ist ein Abenteuer. Bergpanorama, klare Luft, eine Weite, die den Blick und das Herz öffnet." },
        { title: "Die schönsten Orte für eine Hochzeit in den Alpen", titleAccent: "", content: "Die bayerischen Alpen bieten unzählige Almen, die wie geschaffen sind für eine freie Trauung. Rund um Garmisch-Partenkirchen feiert ihr zwischen Wetterstein und Zugspitze." },
      ],
      faq: [
        { question: "Wie kommt man mit Hochzeitskleid auf den Berg?", answer: "Viele Berglocations sind bequem per Gondel oder Auto erreichbar. Für abgelegenere Almen empfehle ich ein leichteres Kleid für den Aufstieg." },
        { question: "Was passiert bei schlechtem Wetter?", answer: "Ein guter Plan B gehört zu jeder Berghochzeit. Viele Almen haben einen überdachten Bereich oder eine gemütliche Stube." },
        { question: "Welche Jahreszeit ist ideal?", answer: "Die Hauptsaison ist Juni bis September. Aber auch goldener Herbst und verschneite Winterhochzeiten haben ihren Reiz." },
      ],
      cta: { title: "Eure Traumhochzeit in den Alpen", titleAccent: "beginnt hier", text: "", buttonText: "Jetzt Berghochzeit anfragen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Freie Trauung in den Alpen – Traurednerin Stefanie Sick",
    seo_description: "Freie Trauung in den Alpen: Eure Traurednerin für Berghochzeiten in Bayern, Tirol und Salzburg. Auf Almen, Gipfeln und vor Bergpanorama.",
    seo_canonical: "/freie-trauung-alpen",
    keywords: ["Freie Trauung Alpen", "Berghochzeit", "Almhochzeit", "Gipfeltrauung", "Traurednerin Alpen", "Garmisch-Partenkirchen"],
  },

  // ═══ ITALIEN ═══
  {
    page_slug: "freie-trauung-italien",
    page_title: "Italien",
    content: {
      hero: {
        label: "Destination Wedding Italien",
        title: "Freie Trauung in Italien – Eure Traurednerin für la dolce vita",
        titleAccent: "Eure Traurednerin für la dolce vita",
        subtitle: "Sonne, Genuss und unvergessliche Emotionen: freie Trauungen in ganz Italien — von der Toskana über den Gardasee bis Südtirol.",
        image: "/images/hero-italien.webp",
        imageAlt: "Italien — Landschaft für romantische freie Trauungen",
        imageCredit: "",
      },
      sections: [
        { title: "Warum Italien der perfekte Ort für eure freie Trauung ist", titleAccent: "", content: "Italien ist seit Jahrhunderten das Sehnsuchtsland der Liebe — und für viele Paare der Traumort für ihre Hochzeit." },
        { title: "Die schönsten Regionen für eure Hochzeit in Italien", titleAccent: "", content: "Toskana, Gardasee, Südtirol, Amalfiküste, Comer See und mehr — Italien bietet für jeden Hochzeitsstil die perfekte Kulisse." },
      ],
      faq: [
        { question: "Wo in Italien bietet ihr freie Trauungen an?", answer: "In ganz Italien — von der Toskana über den Gardasee bis an die Amalfiküste, nach Südtirol, an den Comer See oder nach Apulien." },
        { question: "Was kostet eine freie Trauung in Italien?", answer: "Mein Honorar umfasst Kennenlerngespräch, Paargespräch, individuelle Traurede und Zeremonie. Hinzu kommen Anreise und Übernachtung." },
        { question: "Wann ist die beste Jahreszeit?", answer: "Mai bis Oktober. Besonders schön sind Juni und September." },
      ],
      cta: { title: "Eure Traumhochzeit in Italien", titleAccent: "beginnt hier", text: "", buttonText: "Jetzt Italien-Hochzeit anfragen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Freie Trauung Italien – Destination Wedding mit Traurednerin",
    seo_description: "Freie Trauung in Italien: Traurednerin Stefanie Sick gestaltet eure Zeremonie in der Toskana, am Gardasee, in Südtirol & an den schönsten Orten Italiens.",
    seo_canonical: "/freie-trauung-italien",
    keywords: ["Freie Trauung Italien", "Destination Wedding Italien", "Toskana", "Gardasee", "Südtirol", "Amalfiküste", "Hochzeit Italien"],
  },

  // ═══ MEINE ANGEBOTE ═══
  {
    page_slug: "meine-angebote-freie-trauung",
    page_title: "Meine Angebote",
    content: {
      hero: {
        label: "Leistungen & Angebote",
        title: "Meine Angebote als eure Traurednerin",
        titleAccent: "eure Traurednerin",
        subtitle: "Freie Trauung, Moderation, Traurede und mehr — alles für euren besonderen Tag, individuell auf euch zugeschnitten.",
        image: "/images/hero-angebote.webp",
        imageAlt: "Hochzeitsblumenstrauß — Meine Angebote für eure Trauung",
        imageCredit: "",
      },
      sections: [
        { title: "Persönliche Trauungszeremonie", titleAccent: "", content: "Eure Liebe verdient eine Zeremonie, die so einzigartig ist wie ihr selbst. Ich gestalte eure freie Trauung ganz individuell — mit eurer Geschichte, euren Wünschen und den Worten, die euch berühren." },
        { title: "Moderation", titleAccent: "", content: "Ihr wünscht euch jemanden, der charmant und souverän durch euren Hochzeitstag führt? Als eure Moderatorin sorge ich dafür, dass alles reibungslos läuft." },
        { title: "Briefliche Traurede", titleAccent: "", content: "Ihr feiert im Ausland oder möchtet eure Zeremonie selbst gestalten? Ich verfasse eine individuelle Traurede zum Vorlesen durch eine Person eurer Wahl." },
        { title: "Kreative Ehegelübde", titleAccent: "", content: "Ihr möchtet euch eigene Ehegelübde schreiben? Ich helfe euch dabei, eure Gefühle in die richtigen Worte zu fassen." },
        { title: "Trauungszeremonie im Freien", titleAccent: "", content: "Ob am See, im Wald, auf einer Wiese oder in einem Garten — ich gestalte eure Outdoor-Zeremonie so, dass sie perfekt zu euch passt." },
      ],
      faq: [],
      cta: { title: "Welches Angebot passt zu euch?", titleAccent: "", text: "", buttonText: "Jetzt unverbindlich anfragen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Meine Angebote – Freie Trauung und mehr",
    seo_description: "Entdeckt meine Angebote: Persönliche Trauungszeremonie, Moderation, Traurede, Beratung, Ehegelübde und Outdoor-Trauung.",
    seo_canonical: "/meine-angebote-freie-trauung",
    keywords: ["Meine Angebote", "Freie Trauung", "Traurednerin", "Moderation", "Traurede", "Ehegelübde", "Outdoor-Zeremonie"],
  },

  // ═══ PREISE & PAKETE ═══
  {
    page_slug: "hochzeitsreden-traurednerin",
    page_title: "Preise & Pakete",
    content: {
      hero: {
        label: "Leistungen & Preise",
        title: "Traurednerin & Preise – Hochzeitsreden von TrauWorte",
        titleAccent: "Hochzeitsreden von TrauWorte",
        subtitle: "Persönlich, emotional, unvergesslich — erfahrt, was in meiner Leistung enthalten ist.",
        image: "/images/hero-trauringe.webp",
        imageAlt: "Trauringe — Symbol eures Eheversprechens",
        imageCredit: "",
      },
      sections: [
        { title: "Persönliches Kennenlerngespräch", titleAccent: "", content: "Wir treffen uns und ich lerne euch als Paar kennen — eure Geschichte, eure Wünsche, eure Vision." },
        { title: "Individuelle Traurede", titleAccent: "", content: "Auf Basis unseres Gesprächs verfasse ich eine maßgeschneiderte Rede, die eure Liebesgeschichte erzählt." },
        { title: "Planung der Zeremonie", titleAccent: "", content: "Gemeinsam legen wir den Ablauf fest — inklusive Rituale, Musikwünsche und Einbindung von Gästen." },
        { title: "Durchführung der Zeremonie", titleAccent: "", content: "Am großen Tag bin ich rechtzeitig vor Ort, sorge für einen reibungslosen Ablauf und halte eure persönliche Traurede." },
      ],
      faq: [],
      cta: { title: "Euer individuelles Angebot", titleAccent: "", text: "", buttonText: "Jetzt unverbindlich anfragen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Traurednerin & Preise – Hochzeitsreden von TrauWorte",
    seo_description: "Professionelle Hochzeitsreden und Trauungszeremonien von Stefanie Sick. Erfahrt mehr über Leistungen, Ablauf und Preise.",
    seo_canonical: "/hochzeitsreden-traurednerin",
    keywords: ["Traurednerin Preise", "Hochzeitsreden", "Leistungen", "Trauungszeremonie", "Traurede Kosten"],
  },

  // ═══ EURE FREIE TRAUUNG ═══
  {
    page_slug: "eure-freie-trauung",
    page_title: "Eure freie Trauung",
    content: {
      hero: {
        label: "Freie Trauung",
        title: "Eure freie Trauung — so einzigartig wie eure Liebe",
        titleAccent: "so einzigartig wie eure Liebe",
        subtitle: "Eine freie Trauung gibt euch die Freiheit, eure Zeremonie ganz nach euren Vorstellungen zu gestalten.",
        image: "/images/freie-trauung-zeremonie-outdoor.webp",
        imageAlt: "Freie Trauung im Freien — Zeremonie unter Bäumen",
        imageCredit: "Hitesh Patel",
      },
      sections: [
        { title: "Was ist eine freie Trauung?", titleAccent: "", content: "Eine freie Trauung ist eine individuelle Zeremonie, die unabhängig von Kirche und Standesamt stattfindet. Ihr bestimmt den Ort, den Ablauf, die Rituale und die Worte — alles wird auf euch zugeschnitten." },
      ],
      faq: [],
      cta: { title: "Eure Traumzeremonie", titleAccent: "beginnt hier", text: "", buttonText: "Jetzt anfragen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Eure freie Trauung – Persönlich & individuell | TrauWorte",
    seo_description: "Erfahrt alles über die freie Trauung: Ablauf, Gestaltung und warum eine persönliche Zeremonie eure Hochzeit unvergesslich macht.",
    seo_canonical: "/eure-freie-trauung",
    keywords: ["freie Trauung", "individuelle Zeremonie", "persönliche Trauung", "Hochzeitszeremonie"],
  },

  // ═══ UNTERSCHIEDE DER TRAUUNGEN ═══
  {
    page_slug: "unterschiede-der-trauungen",
    page_title: "Unterschiede der Trauungen",
    content: {
      hero: {
        label: "Wissenswertes",
        title: "Freie, standesamtliche und kirchliche Trauung — die Unterschiede",
        titleAccent: "die Unterschiede",
        subtitle: "Welche Trauungsform passt zu euch? Ein Überblick über die verschiedenen Möglichkeiten.",
        image: "/images/hero-kirche-trauung.webp",
        imageAlt: "Kirchliche Trauung — Vergleich der Trauungsformen",
        imageCredit: "Josh Applegate",
      },
      sections: [
        { title: "Standesamtliche Trauung", titleAccent: "", content: "Die standesamtliche Trauung ist die einzige rechtsgültige Eheschließung in Deutschland. Sie findet im Standesamt statt und ist Voraussetzung für jede weitere Trauung." },
        { title: "Kirchliche Trauung", titleAccent: "", content: "Die kirchliche Trauung ist ein religiöser Segen für eure Ehe. Sie setzt eine standesamtliche Trauung voraus und findet in der Kirche statt." },
        { title: "Freie Trauung", titleAccent: "", content: "Die freie Trauung gibt euch maximale Freiheit: Ort, Zeit, Ablauf und Inhalt bestimmt ihr selbst. Sie ist nicht rechtsgültig, dafür aber grenzenlos individuell." },
      ],
      faq: [],
      cta: { title: "Eure freie Trauung", titleAccent: "anfragen", text: "", buttonText: "Jetzt Kontakt aufnehmen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Unterschiede der Trauungen – Frei, standesamtlich, kirchlich",
    seo_description: "Freie, standesamtliche oder kirchliche Trauung? Erfahrt die Unterschiede und findet heraus, welche Trauungsform zu euch passt.",
    seo_canonical: "/unterschiede-der-trauungen",
    keywords: ["Unterschiede Trauung", "freie Trauung", "standesamtliche Trauung", "kirchliche Trauung"],
  },

  // ═══ BAYRISCH-TRACHT TRAUUNG ═══
  {
    page_slug: "bayrisch-tracht-trauung",
    page_title: "Bayrisch-Tracht Trauung",
    content: {
      hero: {
        label: "Bayerische Tradition",
        title: "Bayrisch-Tracht Trauung — Heiraten in Dirndl und Lederhose",
        titleAccent: "Heiraten in Dirndl und Lederhose",
        subtitle: "Eine freie Trauung in Tracht verbindet bayerische Tradition mit persönlicher Zeremonie.",
        image: "/images/hero-bayerisch-tracht.webp",
        imageAlt: "Bayerische Tracht-Trauung — Dirndl und Lederhose",
        imageCredit: "Tim Dennert",
      },
      sections: [
        { title: "Tradition trifft Individualität", titleAccent: "", content: "Eine Tracht-Trauung in Bayern ist mehr als nur Folklore — sie verbindet eure Liebe mit der bayerischen Lebensart." },
      ],
      faq: [],
      cta: { title: "Eure Tracht-Trauung", titleAccent: "planen", text: "", buttonText: "Jetzt anfragen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Bayrisch-Tracht Trauung – Heiraten in Dirndl & Lederhose",
    seo_description: "Freie Trauung in Tracht: Heiratet in Dirndl und Lederhose mit einer persönlichen Zeremonie in Bayern.",
    seo_canonical: "/bayrisch-tracht-trauung",
    keywords: ["Tracht Trauung", "Dirndl Hochzeit", "bayerische Trauung", "Lederhose Hochzeit"],
  },

  // ═══ QUEERE TRAUUNG ═══
  {
    page_slug: "gleichgeschlechtliche-queer-und-diverse-trauung",
    page_title: "Queere Trauung",
    content: {
      hero: {
        label: "Love is Love",
        title: "Queere & diverse Trauung — Eure Liebe, eure Zeremonie",
        titleAccent: "Eure Liebe, eure Zeremonie",
        subtitle: "Jede Liebe verdient eine Zeremonie, die sie feiert. Als eure Traurednerin gestalte ich queere Trauungen mit Herz und Respekt.",
        image: "/images/hero-queere-trauung.webp",
        imageAlt: "Queere Trauung — Gleichgeschlechtliche Hochzeit",
        imageCredit: "In Lieu & In View Photography",
      },
      sections: [
        { title: "Liebe kennt kein Geschlecht", titleAccent: "", content: "Eure Liebe ist einzigartig — und eure Zeremonie sollte es auch sein. Ich gestalte freie Trauungen für alle Paare, unabhängig von Geschlecht und Identität." },
      ],
      faq: [],
      cta: { title: "Eure queere Trauung", titleAccent: "beginnt hier", text: "", buttonText: "Jetzt anfragen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Queere Trauung – Gleichgeschlechtliche & diverse Hochzeit",
    seo_description: "Queere und diverse freie Trauungen: Traurednerin Stefanie Sick gestaltet eure Zeremonie persönlich, emotional und respektvoll.",
    seo_canonical: "/gleichgeschlechtliche-queer-und-diverse-trauung",
    keywords: ["queere Trauung", "gleichgeschlechtliche Hochzeit", "diverse Trauung", "LGBTQ Hochzeit"],
  },

  // ═══ PARTNER ═══
  {
    page_slug: "hochzeitsplanerin-fotograf",
    page_title: "Partner",
    content: {
      hero: {
        label: "Meine Partner",
        title: "Hochzeitsplanerin & Fotograf — Meine Empfehlungen",
        titleAccent: "Meine Empfehlungen",
        subtitle: "Für euren perfekten Hochzeitstag arbeite ich mit den besten Partnern zusammen.",
        image: "/images/hero-hochzeitsplaner.webp",
        imageAlt: "Hochzeitsplanung — Partner für eure Traumhochzeit",
        imageCredit: "ARTO SURAJ",
      },
      sections: [
        { title: "Hochzeitsplaner", titleAccent: "", content: "Ein Hochzeitsplaner nimmt euch die Organisation ab, damit ihr den Tag genießen könnt." },
        { title: "Hochzeitsfotograf", titleAccent: "", content: "Ein guter Fotograf fängt die Emotionen eures Tages ein — für Erinnerungen, die ein Leben lang halten." },
      ],
      faq: [],
      cta: { title: "Gemeinsam planen", titleAccent: "", text: "", buttonText: "Kontakt aufnehmen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Partner – Hochzeitsplanerin & Fotograf | TrauWorte",
    seo_description: "Meine Partner für eure Traumhochzeit: Hochzeitsplaner und Fotografen, die ich empfehle.",
    seo_canonical: "/hochzeitsplanerin-fotograf",
    keywords: ["Hochzeitsplanerin", "Hochzeitsfotograf", "Hochzeitspartner", "Empfehlungen"],
  },

  // ═══ ZEITLICHER ABLAUF ═══
  {
    page_slug: "zeitlicher-ablauf-freie-trauung",
    page_title: "Zeitlicher Ablauf",
    content: {
      hero: {
        label: "Planung",
        title: "Zeitlicher Ablauf einer freien Trauung",
        titleAccent: "einer freien Trauung",
        subtitle: "Von der ersten Kontaktaufnahme bis zum großen Tag — so läuft unsere Zusammenarbeit ab.",
        image: "/images/hero-zeitlicher-ablauf.webp",
        imageAlt: "Zeitlicher Ablauf — Planung der freien Trauung",
        imageCredit: "Wedding Dreamz",
      },
      sections: [
        { title: "Kennenlerngespräch", titleAccent: "", content: "Wir lernen uns kennen und ihr erzählt mir von euch, euren Wünschen und eurer Vision für die Zeremonie." },
        { title: "Paargespräch", titleAccent: "", content: "In einem ausführlichen Gespräch erfahre ich eure Geschichte — die Grundlage für eure persönliche Traurede." },
        { title: "Traurede schreiben", titleAccent: "", content: "Ich verfasse eure individuelle Traurede und stimme sie mit euch ab." },
        { title: "Der große Tag", titleAccent: "", content: "Am Hochzeitstag bin ich rechtzeitig vor Ort und führe eure Zeremonie durch." },
      ],
      faq: [],
      cta: { title: "Starten wir gemeinsam", titleAccent: "", text: "", buttonText: "Jetzt Termin anfragen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Zeitlicher Ablauf – Freie Trauung planen | TrauWorte",
    seo_description: "So läuft die Planung eurer freien Trauung ab: Kennenlerngespräch, Paargespräch, Traurede und Zeremonie.",
    seo_canonical: "/zeitlicher-ablauf-freie-trauung",
    keywords: ["Ablauf freie Trauung", "Planung Hochzeit", "Traurede Ablauf", "Kennenlerngespräch"],
  },

  // ═══ HÄUFIGE FRAGEN ═══
  {
    page_slug: "persoenliche-trauung-haeufige-fragen",
    page_title: "Häufige Fragen",
    content: {
      hero: {
        label: "FAQ",
        title: "Häufige Fragen zur freien Trauung",
        titleAccent: "zur freien Trauung",
        subtitle: "Antworten auf die wichtigsten Fragen rund um eure persönliche Trauungszeremonie.",
        image: "/images/hero-haeufige-fragen.webp",
        imageAlt: "Häufige Fragen — Hochzeitszeremonie",
        imageCredit: "Sergio Butko",
      },
      sections: [],
      faq: [
        { question: "Was ist eine freie Trauung?", answer: "Eine freie Trauung ist eine individuelle Zeremonie, die unabhängig von Kirche und Standesamt stattfindet." },
        { question: "Ist eine freie Trauung rechtsgültig?", answer: "Nein, eine freie Trauung hat keine rechtliche Bindung. Für die Rechtsgültigkeit benötigt ihr eine standesamtliche Trauung." },
        { question: "Wo kann eine freie Trauung stattfinden?", answer: "Überall! Im Garten, am See, auf einer Alm, in einem Schloss oder an jedem anderen Ort, der euch etwas bedeutet." },
        { question: "Wie lange dauert eine freie Trauung?", answer: "In der Regel 30 bis 45 Minuten — je nachdem, wie viele Rituale und Elemente ihr einbauen möchtet." },
      ],
      cta: { title: "Noch Fragen?", titleAccent: "", text: "", buttonText: "Schreibt mir", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Häufige Fragen – Freie Trauung FAQ | TrauWorte",
    seo_description: "Antworten auf häufige Fragen zur freien Trauung: Ablauf, Kosten, Orte und mehr.",
    seo_canonical: "/persoenliche-trauung-haeufige-fragen",
    keywords: ["FAQ freie Trauung", "häufige Fragen Hochzeit", "freie Trauung Ablauf", "Kosten Traurednerin"],
  },

  // ═══ KONTAKT ═══
  {
    page_slug: "freie-trauung-kontakt",
    page_title: "Kontakt",
    content: {
      hero: {
        label: "Kontakt",
        title: "Schreibt mir — Eure Trauungszeremonie anfragen",
        titleAccent: "Eure Trauungszeremonie anfragen",
        subtitle: "Ich freue mich auf eure Nachricht und ein unverbindliches Kennenlerngespräch.",
        image: "/images/hero-kontakt-brautstrauss.webp",
        imageAlt: "Brautstrauß — Schreibt mir eure Wünsche",
        imageCredit: "Jennifer Kalenberg",
      },
      sections: [],
      faq: [],
      cta: { title: "Kontakt", titleAccent: "", text: "", buttonText: "E-Mail schreiben", buttonLink: "mailto:info@stefaniesick.com" },
    },
    seo_title: "Kontakt – Trauungszeremonie anfragen | TrauWorte",
    seo_description: "Kontaktiere Stefanie Sick für deine persönliche Trauungszeremonie.",
    seo_canonical: "/freie-trauung-kontakt",
    keywords: ["Kontakt Traurednerin", "Trauung anfragen", "Kennenlerngespräch"],
  },

  // ═══ ÜBER MICH ═══
  {
    page_slug: "ueber-traurednerin-stefanie",
    page_title: "Über mich",
    content: {
      hero: {
        label: "Über mich",
        title: "Stefanie Sick — Eure Traurednerin",
        titleAccent: "Eure Traurednerin",
        subtitle: "Persönlich, empathisch und mit Liebe zum Detail — so gestalte ich eure Zeremonie.",
        image: "",
        imageAlt: "Traurednerin Stefanie Sick",
        imageCredit: "",
      },
      sections: [
        { title: "Meine Geschichte", titleAccent: "", content: "Ich bin Stefanie, eure Traurednerin aus München. Was mich antreibt? Die Magie des Augenblicks, wenn zwei Menschen sich das Ja-Wort geben." },
      ],
      faq: [],
      cta: { title: "Lernt mich kennen", titleAccent: "", text: "", buttonText: "Jetzt Kontakt aufnehmen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Über mich – Traurednerin Stefanie Sick | TrauWorte",
    seo_description: "Lernt Traurednerin Stefanie Sick kennen: Persönlich, empathisch und mit Leidenschaft für unvergessliche Zeremonien.",
    seo_canonical: "/ueber-traurednerin-stefanie",
    keywords: ["Traurednerin Stefanie Sick", "über mich", "Traurednerin München"],
  },

  // ═══ MAGAZIN ═══
  {
    page_slug: "magazin",
    page_title: "Magazin",
    content: {
      hero: {
        label: "Magazin",
        title: "TrauWorte Magazin — Inspiration für eure Hochzeit",
        titleAccent: "Inspiration für eure Hochzeit",
        subtitle: "Tipps, Ideen und Geschichten rund um freie Trauungen und Hochzeitsplanung.",
        image: "/images/hero-magazin.webp",
        imageAlt: "Hochzeitsmagazin — Tipps und Inspiration",
        imageCredit: "In Lieu & In View Photography",
      },
      sections: [],
      faq: [],
      cta: { title: "Eure Traumhochzeit", titleAccent: "planen", text: "", buttonText: "Jetzt anfragen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Magazin – Hochzeitstipps & Inspiration | TrauWorte",
    seo_description: "Tipps, Ideen und Inspiration für eure freie Trauung im TrauWorte Magazin.",
    seo_canonical: "/magazin",
    keywords: ["Hochzeitsmagazin", "Tipps freie Trauung", "Hochzeitsinspiration"],
  },

  // ═══ TRAUSPRÜCHE ═══
  {
    page_slug: "magazin/trausprueche-freie-trauung",
    page_title: "Trausprüche",
    content: {
      hero: {
        label: "Magazin",
        title: "Trausprüche für eure freie Trauung",
        titleAccent: "für eure freie Trauung",
        subtitle: "Die schönsten Sprüche und Zitate für eure Trauungszeremonie.",
        image: "/images/hero-trausprueche.webp",
        imageAlt: "Trausprüche — Blumenstrauß für die Zeremonie",
        imageCredit: "Scott Osborne",
      },
      sections: [
        { title: "Klassische Trausprüche", titleAccent: "", content: "Zeitlose Worte über die Liebe, die sich perfekt für eure Trauungszeremonie eignen." },
      ],
      faq: [],
      cta: { title: "Persönliche Traurede", titleAccent: "anfragen", text: "", buttonText: "Jetzt anfragen", buttonLink: "/freie-trauung-kontakt" },
    },
    seo_title: "Trausprüche – Die schönsten Sprüche für freie Trauungen",
    seo_description: "Die schönsten Trausprüche für eure freie Trauung: Klassische, moderne und poetische Sprüche für die Zeremonie.",
    seo_canonical: "/magazin/trausprueche-freie-trauung",
    keywords: ["Trausprüche", "Hochzeitssprüche", "Zitate Hochzeit", "freie Trauung Sprüche"],
  },

  // ═══ IMPRESSUM ═══
  {
    page_slug: "impressum",
    page_title: "Impressum",
    content: {
      hero: { label: "", title: "Impressum", titleAccent: "", subtitle: "", image: "", imageAlt: "", imageCredit: "" },
      sections: [
        { title: "Angaben gemäß § 5 TMG", titleAccent: "", content: "Dream & Anchor Handelsgesellschaft mbH\nGrünwald" },
      ],
      faq: [],
      cta: { title: "", titleAccent: "", text: "", buttonText: "", buttonLink: "" },
    },
    seo_title: "Impressum | TrauWorte",
    seo_description: "Impressum von TrauWorte — Traurednerin Stefanie Sick.",
    seo_canonical: "/impressum",
    keywords: [],
  },

  // ═══ DATENSCHUTZ ═══
  {
    page_slug: "datenschutzerklaerung",
    page_title: "Datenschutz",
    content: {
      hero: { label: "", title: "Datenschutzerklärung", titleAccent: "", subtitle: "", image: "", imageAlt: "", imageCredit: "" },
      sections: [],
      faq: [],
      cta: { title: "", titleAccent: "", text: "", buttonText: "", buttonLink: "" },
    },
    seo_title: "Datenschutzerklärung | TrauWorte",
    seo_description: "Datenschutzerklärung von TrauWorte.",
    seo_canonical: "/datenschutzerklaerung",
    keywords: [],
  },
];
