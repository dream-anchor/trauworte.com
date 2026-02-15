import { Helmet } from "react-helmet-async";

const BASE_URL = "https://trauworte.com";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface StructuredDataProps {
  type: "main" | "breadcrumb";
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TrauWorte",
  url: BASE_URL,
  inLanguage: "de-DE",
  publisher: { "@id": `${BASE_URL}/#organization` },
};

const StructuredData = ({ type, breadcrumbs }: StructuredDataProps) => {
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
