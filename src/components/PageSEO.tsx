// Uses React 19's native support for hoisting <title>/<meta>/<link>/<script>
// tags rendered anywhere in the tree up into <head>. No react-helmet needed.

import { useEffect } from "react";

export const SITE_URL = "https://www.doggettlaw.net";

// index.html ships static title/description/og tags as a fallback for crawlers that
// don't execute JS (e.g. Facebook/Twitter link unfurling). Once a route mounts its own
// PageSEO, those defaults are no longer needed and would otherwise sit alongside the
// route-specific tags as duplicates.
const DEFAULT_TAG_IDS = [
  "default-title",
  "default-description",
  "default-og-title",
  "default-og-description",
  "default-og-type",
];

interface PageSEOProps {
  title: string;
  description: string;
  /** Route path starting with "/", e.g. "/about". Use "/" for the homepage. */
  path: string;
  ogType?: string;
  noIndex?: boolean;
  /** Optional extra JSON-LD structured data specific to this page. */
  structuredData?: object;
}

export default function PageSEO({
  title,
  description,
  path,
  ogType = "website",
  noIndex = false,
  structuredData,
}: PageSEOProps) {
  const canonical = `${SITE_URL}${path === "/" ? "/" : path.replace(/\/+$/, "")}`;

  useEffect(() => {
    DEFAULT_TAG_IDS.forEach((id) => document.getElementById(id)?.remove());
  }, []);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </>
  );
}
