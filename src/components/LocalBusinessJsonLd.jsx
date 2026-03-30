import React from 'react'
import { Helmet } from 'react-helmet-async'
import config from '../config'

export default function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "INFORMEL-TIC",
    "description": "INFORMEL-TIC — Développement web sur-mesure 100% sans WordPress. Sites ultra-rapides, optimisés Google, code source livré.",
    "url": "https://informel-tic.com",
    "telephone": config.CONTACT_PHONE || "",
    "priceRange": "$$",
    "image": "https://informel-tic.com/og-image.svg",
    "email": config.CONTACT_EMAIL || "contact@informel-tic.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1333 Rue Jean Jaurès",
      "addressLocality": "Lourches",
      "postalCode": "59156",
      "addressCountry": "FR"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  }

  // Add founder and service area when available to strengthen local signals
  if (config.OWNER_NAME) data.founder = { "@type": "Person", "name": config.OWNER_NAME };
  if (config.SERVICE_AREA) data.areaServed = config.SERVICE_AREA;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}
