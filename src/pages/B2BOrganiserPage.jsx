import { Monitor } from 'lucide-react';
import SEO from '../components/SEO';
import PricingCardB2B from '../components/PricingCardB2B';

const OFFERS = [
  {
    name: 'Caisse Clé en Main',
    price: '450 €',
    priceSub: 'one-shot',
    tagline: 'Votre logiciel de caisse installé, paramétré et prêt à l\'emploi.',
    target: 'Commerçants, restaurateurs, artisans',
    featured: true,
    featuredLabel: 'Notre spécialité',
    inclusions: [
      'Audit de vos besoins (produits, TVA, tickets)',
      'Paramétrage complet du logiciel',
      'Formation personnalisée (2h sur site)',
      'Support technique pendant 1 mois',
    ],
    exclusions: [
      'Matériel physique (caisse, imprimante, tiroir)',
    ],
    cta: { label: 'Demander un devis', to: '/contact' },
  },
  {
    name: 'Setup Outils Pro',
    price: 'Sur devis',
    priceSub: '',
    tagline: 'Configuration d\'outils métiers adaptés à votre activité.',
    target: 'TPE avec besoins spécifiques (CRM, planning, facturation…)',
    inclusions: [
      'Audit des besoins et processus',
      'Sélection et paramétrage des outils',
      'Formation de l\'équipe',
      'Documentation d\'utilisation',
    ],
    exclusions: [],
    cta: { label: 'Discuter de mon besoin', to: '/contact' },
  },
];

export default function B2BOrganiserPage() {
  return (
    <>
      <SEO
        title="S'organiser — Logiciels Métiers pour Pros"
        description="Logiciel de caisse, outils métiers : audit, paramétrage et formation pour commerçants et artisans du Nord (59)."
      />

      <section className="page-hero hero-bg grid-bg text-center">
        <div className="container-md">
          <span className="badge badge--muted">
            <Monitor size={14} aria-hidden="true" /> Espace Pros — S'organiser
          </span>
          <h1 className="page-title">
            <span className="gradient-text">S'organiser</span> — Logiciels Métiers
          </h1>
          <p className="page-lead">
            Digitalisez votre gestion avec des outils métiers paramétrés par un expert local.
            Caisse, planning, facturation — tout est pensé pour votre activité.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-lg">
          <div className="pricing-grid">
            {OFFERS.map((offer) => (
              <PricingCardB2B key={offer.name} {...offer} icon={Monitor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
