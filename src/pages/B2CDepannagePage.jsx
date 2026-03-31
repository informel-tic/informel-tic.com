import { Link } from 'react-router-dom';
import { Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const SERVICES = [
  {
    label: 'Diagnostic PC',
    price: '59 €',
    priceSub: '1 heure maximum',
    description: 'Diagnostic complet avec recommandations neutres.',
    details: [
      'Analyse complète du système',
      'Vérification virus et malwares',
      'Test des performances',
      'Recommandations écrites (neutre, sans vente forcée)',
    ],
  },
  {
    label: 'Dépannage / Réparation',
    price: '50 €',
    priceSub: '/heure',
    description: 'Résolution de pannes matérielles et logicielles à domicile.',
    details: [
      'Désinfection virus et malwares',
      'Réinstallation système (Windows, macOS)',
      'Configuration de box internet',
      'Résolution de problèmes réseau',
    ],
  },
  {
    label: 'Installation / Évolution',
    price: '50 €',
    priceSub: '/heure',
    description: 'Mise en service et amélioration de votre matériel informatique.',
    details: [
      'Remplacement SSD / ajout de RAM',
      'Clonage de disque dur',
      'Installation et configuration PC neuf',
      'Transfert de données ancien → nouveau PC',
    ],
  },
];

export default function B2CDepannagePage() {
  return (
    <>
      <SEO
        title="Dépannage & Installation — Particuliers"
        description="Dépannage PC, installation matériel à domicile dans le Nord (59). Diagnostic 59 €, dépannage et installation 50 €/h."
      />

      <section className="page-hero hero-bg grid-bg text-center">
        <div className="container-md">
          <span className="badge badge--muted">
            <Wrench size={14} aria-hidden="true" /> Espace Particuliers — Dépannage & Installation
          </span>
          <h1 className="page-title">
            <span className="gradient-text">Dépannage & Installation</span> à domicile
          </h1>
          <p className="page-lead">
            Un artisan informatique patient et transparent. Diagnostic honnête, réparation efficace.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-lg">
          <div className="grid-3col">
            {SERVICES.map(({ label, price, priceSub, description, details }) => (
              <div key={label} className="pricing-card glass glass-hover">
                <div className="pricing-header">
                  <h3 className="pricing-title">{label}</h3>
                  <p className="pricing-tagline">{description}</p>
                </div>
                <div className="pricing-prices">
                  <div className="pricing-main">
                    <span className="price-number">{price}</span>
                    {priceSub && <span className="price-sub">{priceSub}</span>}
                  </div>
                </div>
                <ul className="check-list">
                  {details.map((d) => (
                    <li key={d}>
                      <CheckCircle size={16} className="icon-check-green" aria-hidden="true" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Règles de facturation */}
      <section className="section-padding section-alt">
        <div className="container-md">
          <div className="glass glass--padded">
            <h2 className="info-title mb-4">Conditions de facturation</h2>
            <ul className="rules-list">
              <li><strong>1ère heure indivisible</strong> — facturée intégralement.</li>
              <li><strong>Ensuite :</strong> facturation par tranche de 30 minutes.</li>
              <li><strong>Zone 1 (0-20 km)</strong> : déplacement inclus.</li>
              <li><strong>Zone 2 ({'>'} 20 km)</strong> : forfait fixe de 15 € ou 0,60 €/km supplémentaire.</li>
            </ul>
          </div>
          <div className="text-center mt-8">
            <Link to="/contact" className="btn-primary">
              Prendre rendez-vous <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
