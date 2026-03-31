import React from 'react'
import { Helmet } from 'react-helmet-async'

/**
 * Inject page metadata, social cards, and the canonical URL into the document head.
 */
export default function SEO({ title, description, image = '/og-image.svg', url = 'https://informel-tic.com', noSuffix = false }) {
  // Build the final document title while preserving page-specific overrides.
  const fullTitle = noSuffix
    ? (title || 'INFORMEL-TIC — Artisan Numérique du Nord')
    : title ? `${title} | INFORMEL-TIC` : 'INFORMEL-TIC — Artisan Numérique du Nord'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="INFORMEL-TIC" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  )
}
