import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, image = '/og-image.svg', url = 'https://informel-tic.com' }) {
  const fullTitle = title ? `${title} | INFORMEL-TIC` : 'INFORMEL-TIC — Sites web sur-mesure'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  )
}
