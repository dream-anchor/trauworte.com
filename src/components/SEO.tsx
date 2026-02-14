import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  schema?: Record<string, unknown>;
}

const BASE_URL = "https://trauworte.com";
const DEFAULT_IMAGE = "https://cdn.durable.co/blocks/fD5L1qAV0Jq1mm6juDiJouPrpzDiaAxwG2jUhpHMKJ59qZwRZaEDDQdsXR8pmXeR.png";

const ensureTrailingSlash = (p: string) =>
  p === "/" || p.endsWith("/") ? p : `${p}/`;

const SEO = ({ title, description, canonical, ogImage, ogType = "website", noIndex, schema }: SEOProps) => {
  const currentPath = ensureTrailingSlash(canonical || "/");
  const canonicalUrl = `${BASE_URL}${currentPath}`;

  return (
    <Helmet>
      <html lang="de" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || DEFAULT_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content="TrauWorte" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || DEFAULT_IMAGE} />

      {/* Geo Tags (Local SEO) */}
      <meta name="geo.region" content="DE" />
      <meta name="geo.placename" content="Deutschland" />

      {/* noindex wenn gewünscht */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
