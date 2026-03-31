import { Link } from 'react-router-dom';
import { Globe, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PricingCardB2B from '../components/PricingCardB2B';

const OFFERS = [
  {
    name: 'Radar Local',
    price: '290 €',
    priceSub: 'one-shot',
    tagline: 'Soyez trouvé partout où vos clients cherchent.',
    target: 'Artisans, commerçants, professions libérales',
    inclusions: [
      'Optimisation Google Business Profile',
      'Synchronisation Waze, Apple Plans, PagesJaunes',
      'SEO Local (mots-clés géolocalisés)',
      '1 RDV de suivi (30 min)',
    ],
    exclusions: [
      'Gestion des avis',
      'Création de logo',
      'Gestion des réseaux sociaux',
      'Création de site web',
    ],
    cta: { label: 'Demander un devis', to: '/contact' },
  },
  {
    name: 'Présence Web',
    price: '590 €',
    priceSub: 'one-shot',
    tagline: 'Votre vitrine en ligne professionnelle, clé en main.',
    target: 'Commerces et artisans sans site web',
    inclusions: [
      'Site One-Page responsive et optimisé',
      'CTA (appels, itinéraire, formulaire)',
      'Optimisation SEO on-page',
      'Pack Radar Local OFFERT (valeur 290 €)',
    ],
    exclusions: [
      'Rédaction de contenu (fourni par le client)',
      'Achat de photos professionnelles',
    ],
    note: '→ Envie d\'aller plus loin ? Passez à l\'Écosystème Digital.',
    cta: { label: 'Choisir cette offre', to: '/contact' },
  },
  {
    name: 'Écosystème Digital',
    price: '1 290 €',
    priceSub: 'one-shot',
    tagline: 'Votre présence digitale complète et connectée.',
    target: 'Commerçants ambitieux et TPE',
    inclusions: [
      'Site 5 pages sur-mesure',
      'Pack Radar Local inclus',
      'Paramétrage Facebook & Instagram',
      'Module WhatsApp Business',
      'Module de réservation en ligne',
    ],
    exclusions: [
      'E-commerce (boutique en ligne)',
      'Animation continue des réseaux sociaux',
    ],
    cta: { label: 'Demander un devis', to: '/contact' },
  },
  {
    name: 'Sur-Mesure',
    pricePrefix: 'Dès',
    price: '3 000 €',
    priceSub: 'sur devis',
    tagline: 'E-commerce, CRM, ERP — la Région finance jusqu\'à 40 %.',
    target: 'TPE artisanales et commerciales — Hauts-de-France',
    featured: true,
    featuredLabel: '💰 Subventionnable ADEN',
    inclusions: [
      'Site e-commerce sur-mesure (React, API)',
      'Mise en place CRM ou ERP (+ 1 an d\'abonnement)',
      'Cahier des charges et accompagnement complet',
      'Montage du dossier ADEN inclus',
      'Exemple : 5 000 € investis → vous payez 3 000 €',
    ],
    exclusions: [],
    cta: { label: 'Estimer mon projet', to: '/contact' },
    note: '⚠️ Le dossier ADEN doit être déposé avant tout paiement. Nous gérons ça pour vous.',
  },
];

/**
 * Present the B2B visibility and web offers.
 */
export default function B2BRayonnerPage() {
  return (
    <>
      <SEO
        title="Rayonner — Visibilité & Web pour Pros"
        description="Site web, SEO local, Google Business, réseaux sociaux. Offres clé en main pour artisans et commerçants du Nord (59)."
      />

      <section className="page-hero hero-bg grid-bg text-center">
        <div className="container-md">
          <span className="badge badge--muted">
            <Globe size={14} aria-hidden="true" /> Espace Pros — Rayonner
          </span>
          <h1 className="page-title">
            <span className="gradient-text">Rayonner</span> — Visibilité & Web
          </h1>
          <p className="page-lead">
            Devenez visible là où vos clients vous cherchent : Google, réseaux sociaux, annuaires.
            Des offres claires, sans surprise.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">
          <div className="pricing-grid pricing-grid--4col">
            {OFFERS.map((offer) => (
              <PricingCardB2B key={offer.name} {...offer} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-alt text-center">
        <div className="container-md">
          <h2 className="section-title">Des aides existent pour financer votre projet</h2>
          <p className="section-subtitle">
            Le dispositif ADEN Hauts-de-France peut prendre en charge jusqu'à 40% de votre projet numérique.
          </p>
          <Link to="/pros/aides-aden" className="btn-secondary mt-6">
            Découvrir les aides ADEN <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
