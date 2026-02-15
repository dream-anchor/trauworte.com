import { Helmet } from "react-helmet-async";

const BASE_URL = "https://trauworte.com";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface StructuredDataProps {
  type: "main" | "homepage" | "breadcrumb";
  breadcrumbs?: BreadcrumbItem[];
}

const mainSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#organization`,
  name: "TrauWorte – Stefanie Sick",
  alternateName: "TrauWorte",
  description:
    "Freie Rednerin für einzigartige, persönliche Trauungszeremonien in Deutschland, Österreich, Schweiz und Europa.",
  url: BASE_URL,
  email: "info@stefaniesick.com",
  priceRange: "€€",
  image: `${BASE_URL}/images/traurednerin-stefanie-sick-portrait.webp`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "Country", name: "Deutschland" },
    { "@type": "Country", name: "Österreich" },
    { "@type": "Country", name: "Schweiz" },
    { "@type": "AdministrativeArea", name: "Mallorca" },
    { "@type": "AdministrativeArea", name: "Toskana" },
  ],
  founder: {
    "@type": "Person",
    name: "Stefanie Sick",
    jobTitle: "Freie Rednerin",
  },
  knowsAbout: [
    "Freie Trauung",
    "Hochzeitsrede",
    "Trauungszeremonie",
    "Ehegelübde",
    "Hochzeitsmoderation",
  ],
  inLanguage: "de-DE",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "TrauWorte – Traurednerin Stefanie Sick",
  alternateName: "TrauWorte",
  description:
    "Traurednerin für persönliche und emotionale freie Trauungen in München, Bayern, Österreich, Schweiz und ganz Europa.",
  url: BASE_URL,
  email: "info@stefaniesick.com",
  priceRange: "€€",
  image: `${BASE_URL}/images/traurednerin-stefanie-sick-portrait.webp`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "München",
    addressRegion: "Bayern",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.1351,
    longitude: 11.582,
  },
  areaServed: [
    { "@type": "City", name: "München" },
    { "@type": "State", name: "Bayern" },
    { "@type": "Country", name: "Deutschland" },
    { "@type": "Country", name: "Österreich" },
    { "@type": "Country", name: "Schweiz" },
    { "@type": "AdministrativeArea", name: "Mallorca" },
    { "@type": "AdministrativeArea", name: "Toskana" },
  ],
  founder: {
    "@type": "Person",
    name: "Stefanie Sick",
    jobTitle: "Freie Traurednerin",
  },
  knowsAbout: [
    "Freie Trauung",
    "Traurede",
    "Trauungszeremonie",
    "Hochzeitsmoderation",
    "Ehegelübde",
    "Destination Wedding",
  ],
  inLanguage: "de-DE",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Stefanie Sick",
  jobTitle: "Freie Traurednerin",
  worksFor: { "@id": `${BASE_URL}/#organization` },
  url: `${BASE_URL}/ueber-traurednerin-stefanie`,
  image: `${BASE_URL}/images/traurednerin-stefanie-sick-portrait.webp`,
  knowsAbout: [
    "Freie Trauung",
    "Traurede",
    "Hochzeitsmoderation",
    "Trauungszeremonie",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TrauWorte",
  url: BASE_URL,
  inLanguage: "de-DE",
  publisher: { "@id": `${BASE_URL}/#organization` },
};

const StructuredData = ({ type, breadcrumbs }: StructuredDataProps) => {
  if (type === "homepage") {
    return (
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify([localBusinessSchema, personSchema, websiteSchema])}
        </script>
      </Helmet>
    );
  }

  if (type === "main") {
    return (
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify([mainSchema, websiteSchema])}
        </script>
      </Helmet>
    );
  }

  if (type === "breadcrumb" && breadcrumbs) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${BASE_URL}${item.url}`,
      })),
    };

    return (
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
    );
  }

  return null;
};

export default StructuredData;
