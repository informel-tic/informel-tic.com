import { Link } from 'react-router-dom';
import { Shield, Star, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import PricingCardB2B from '../components/PricingCardB2B';

const ABOS = [
  {
    name: 'Abo Starter',
    price: '39 €',
    priceSub: '/mois',
    tagline: 'L\'essentiel pour garder votre site en ligne.',
    inclusions: [
      'Hébergement sécurisé',
      'Nom de domaine inclus',
      '1 mise à jour mineure par mois',
    ],
    exclusions: [
      'Modération des avis',
      'Publications Google Business',
      'SLA garanti',
    ],
    cta: { label: 'Souscrire', to: '/contact?subject=autre' },
  },
  {
    name: 'Abo Pro',
    price: '69 €',
    priceSub: '/mois',
    tagline: 'Maintenance active et visibilité continue.',
    inclusions: [
      'Hébergement sécurisé',
      'Nom de domaine inclus',
      '2 mises à jour par mois',
      'Modération des avis Google',
      '1 publication Google Business / mois',
    ],
    exclusions: [
      'SLA garanti',
      'Mises à jour illimitées',
    ],
    cta: { label: 'Souscrire', to: '/contact?subject=autre' },
  },
  {
    name: 'Abo VIP',
    price: '119 €',
    priceSub: '/mois',
    tagline: 'Le service premium avec réactivité garantie.',
    featured: true,
    featuredLabel: 'Meilleur rapport qualité/prix',
    inclusions: [
      'Hébergement sécurisé',
      'Nom de domaine inclus',
      'Mises à jour illimitées',
      'SLA 24h ouvrées garanti',
      'Modération des avis Google',
      'Publications Google Business',
      'Support prioritaire',
    ],
    exclusions: [],
    cta: { label: 'Choisir le VIP', to: '/contact?subject=autre' },
  },
];

/**
 * Present the B2B maintenance, SLA, and break/fix offers.
 */
export default function B2BSecuriserPage() {
  return (
    <>
      <SEO
        title="Sécuriser — Maintenance & Dépannage Pro"
        description="Abonnements maintenance web, SLA 24h ouvrées, dépannage informatique pour professionnels du Nord (59)."
      />

      <section className="page-hero hero-bg grid-bg text-center">
        <div className="container-md">
          <span className="badge badge--muted">
            <Shield size={14} aria-hidden="true" /> Espace Pros — Sécuriser
          </span>
          <h1 className="page-title">
            <span className="gradient-text">Sécuriser</span> — Maintenance & Dépannage Pro
          </h1>
          <p className="page-lead">
            Gardez votre activité numérique en ligne et protégée.
            Des abonnements clairs avec un SLA garanti pour le VIP.
          </p>
        </div>
      </section>

      {/* Abonnements */}
      <section className="section-padding">
        <div className="container-lg">
          <h2 className="section-title text-center mb-8">Abonnements Maintenance</h2>
          <div className="pricing-grid grid-3col">
            {ABOS.map((abo) => (
              <PricingCardB2B key={abo.name} {...abo} icon={Shield} />
            ))}
          </div>
        </div>
      </section>

      {/* Dépannage Pro */}
      <section className="section-padding section-alt">
        <div className="container-md">
          <div className="depannage-pro glass glass--padded">
            <div className="depannage-header">
              <div className="value-icon-wrap">
                <Wrench size={22} className="value-icon" aria-hidden="true" />
              </div>
              <div>
                <h2 className="pricing-title">Dépannage Pro</h2>
                <p className="pricing-tagline">Intervention ponctuelle pour les urgences.</p>
              </div>
              <div className="depannage-price">
                <span className="price-number price-number--lg">75 €</span>
                <span className="price-sub">/heure</span>
              </div>
            </div>
            <ul className="depannage-details check-list">
              <li><CheckCircle size={16} className="icon-check-green icon-inline" aria-hidden="true" /> Diagnostic sur site ou à distance</li>
              <li><CheckCircle size={16} className="icon-check-green icon-inline" aria-hidden="true" /> Résolution de pannes serveur, site, réseau</li>
              <li><CheckCircle size={16} className="icon-check-green icon-inline" aria-hidden="true" /> 1ère heure indivisible</li>
              <li><CheckCircle size={16} className="icon-check-green icon-inline" aria-hidden="true" /> Puis facturation par tranche de 15 min</li>
            </ul>
            <Link to="/contact?subject=depannage" className="btn-primary mt-6">
              Demander une intervention <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
