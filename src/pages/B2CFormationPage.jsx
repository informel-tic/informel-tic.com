import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const DETAILS = [
  'Sécurité informatique & bonnes pratiques',
  'Navigation internet et messagerie',
  'Utilisation de tablette / smartphone',
  'Visioconférence et outils du quotidien',
  'Gestion de fichiers et stockage',
  'Réseaux sociaux et communication',
];

/**
 * Present the B2C home-training offer.
 */
export default function B2CFormationPage() {
  return (
    <>
      <SEO
        title="Formation informatique à domicile — Particuliers"
        description="Formation informatique personnalisée à domicile dans le Nord (59). 45 €/h. Sécurité, tablette, internet, visioconférence."
      />

      <section className="page-hero hero-bg grid-bg text-center">
        <div className="container-md">
          <span className="badge badge--muted">
            <GraduationCap size={14} aria-hidden="true" /> Espace Particuliers — Formation
          </span>
          <h1 className="page-title">
            <span className="gradient-text">Formation</span> informatique à domicile
          </h1>
          <p className="page-lead">
            Apprenez à votre rythme, chez vous, avec un formateur patient et pédagogue.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-md">
          <div className="pricing-card pricing-card--featured glass glass-hover pricing-card--centered">
            <div className="pricing-header">
              <h3 className="pricing-title">Formation à domicile</h3>
              <p className="pricing-tagline">Cours personnalisés, à votre rythme, chez vous.</p>
            </div>
            <div className="pricing-prices">
              <div className="pricing-main">
                <span className="price-number">45 €</span>
                <span className="price-sub">/heure</span>
              </div>
            </div>
            <ul className="check-list">
              {DETAILS.map((d) => (
                <li key={d}>
                  <CheckCircle size={16} className="icon-check-green" aria-hidden="true" /> {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="section-padding section-alt">
        <div className="container-md">
          <div className="glass glass--padded">
            <h2 className="info-title mb-4">Conditions</h2>
            <ul className="rules-list">
              <li><strong>1ère heure indivisible</strong> — facturée intégralement.</li>
              <li><strong>Ensuite :</strong> facturation par tranche de 30 minutes.</li>
              <li><strong>Zone 1 (0-20 km)</strong> : déplacement inclus.</li>
              <li><strong>Zone 2 ({'>'} 20 km)</strong> : forfait fixe de 15 € ou 0,60 €/km supplémentaire.</li>
              <li>Matériel pédagogique et supports de cours fournis.</li>
            </ul>
          </div>
          <div className="text-center mt-8">
            <Link to="/contact?subject=formation" className="btn-primary">
              Réserver une séance <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
