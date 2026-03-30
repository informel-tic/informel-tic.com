import { Link } from 'react-router-dom';
import { ArrowRight, Zap, AlertCircle } from 'lucide-react';

/* ── Pricing data ────────────────────────────────── */
const PLANS = [
  {
    id: 'essentielle', name: 'Vitrine Essentielle', tagline: 'Exister sur Google',
    price: 490, monthly: 29, featured: false, badge: null,
    target: 'Premier pas en ligne, artisans et petits commerces.',
    features: ["Site jusqu'à 5 pages", 'Nom de domaine .fr', 'Hébergement professionnel', 'Adresse e-mail professionnelle', 'Formulaire de contact sécurisé', 'Référencement Google de base', 'Certificat SSL', 'Code source livré'],
    cta: 'Commencer', ctaVariant: 'secondary',
  },
  {
    id: 'connecte', name: 'Commerce Connecté', tagline: 'Commandes en ligne & réputation',
    price: 890, monthly: 49, featured: false, badge: null,
    target: 'Restaurants, commerces, artisans avec prise de commande.',
    features: ["Tout l'offre Vitrine Essentielle", "Jusqu'à 8 pages", 'Module Click & Collect (WhatsApp)', 'Optimisation Fiche Google complète', 'Réponses aux 15 derniers avis Google', 'Harmonisation annuaires (PagesJaunes, Yelp, Tripadvisor)'],
    cta: 'Choisir cette offre', ctaVariant: 'secondary',
  },
  {
    id: 'totale', name: 'Identité Totale', tagline: 'Domination locale & SEO avancé',
    price: 1490, monthly: 89, featured: true, badge: '⭐ Recommandé',
    target: 'Ambition maximale, référencement local dominant, reporting mensuel.',
    features: ["Tout l'offre Commerce Connecté", "Jusqu'à 12 pages + blog", 'Référencement SEO local avancé', 'Shooting photo produits (20 visuels HD)', 'Refonte page Facebook (10 posts inclus)', 'Inscription Waze & Mappy', 'Rapport mensuel visibilité'],
    cta: 'Choisir cette offre', ctaVariant: 'primary',
  },
];

function PricingCard({ plan }) {
  const { name, tagline, price, monthly, featured, badge, target, features, cta, ctaVariant } = plan;

  return (
    <div className={`pricing-card ${featured ? 'pricing-card--featured' : 'pricing-card--normal'}`}>
      {featured && <div className="pricing-accent-line" aria-hidden="true" />}

      {badge && (
        <div className="pricing-badge-wrap" aria-hidden="true">
          <span className="pricing-badge">{badge}</span>
        </div>
      )}

      <div className="pricing-header">
        <h3 className="font-display pricing-title">
          {featured ? <span className="gradient-text">{name}</span> : name}
        </h3>
        <p className="muted pricing-tagline">{tagline}</p>
      </div>

      <div className="pricing-prices">
        <div className="pricing-main">
          <span className="price-number">{price.toLocaleString('fr-FR')} €</span>
          <span className="price-sub muted">à la création</span>
        </div>
        <div className="pricing-sub"> 
          <span className={`price-month ${featured ? 'accent' : ''}`}>+ {monthly} €<span className="price-month-sub">/mois</span></span>
          <span className="muted price-note">(maintenance)</span>
        </div>
        <p className="pricing-target muted">🎯 {target}</p>
      </div>

      <ul className="check-list pricing-features">
        {features.map((f) => <li key={f}>{f}</li>)}
      </ul>

      <div className="pricing-cta">
        <Link to="/contact" className={ctaVariant === 'primary' ? 'btn-primary' : 'btn-secondary'}>
          {cta} <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

/* ── FAQ ─────────────────────────────────────────── */
const FAQS = [
  { q: 'Pourquoi pas de WordPress ?', a: "WordPress est un CMS généraliste avec des milliers de plugins. Le code custom est plus rapide (+300% en performance), plus sécurisé, et vous en êtes l'unique propriétaire sans dépendance tierce." },
  { q: 'Je possède le code source ?', a: "Oui, à 100%. À la livraison, vous recevez l'intégralité du code source de votre site. Vous pouvez le confier à n'importe quel développeur par la suite." },
  { q: "Puis-je changer d'offre ?", a: "Absolument. Vous pouvez évoluer vers une offre supérieure à tout moment. Nous récupérons votre projet existant et l'enrichissons." },
  { q: 'Que comprend la maintenance mensuelle ?', a: 'Mises à jour de sécurité, sauvegardes, modifications mineures de contenu, surveillance des performances et disponibilité pour toute question.' },
];

export default function PricingPage() {
  return (
    <>
      <section className="hero-bg page-hero text-center">
        <div className="container-lg">
          <div className="badge badge--muted">
            <Zap size={12} /> Offres & Tarifs
          </div>
          <h1 className="font-display page-title">
            Des offres <span className="gradient-text">claires</span>,<br />sans mauvaise surprise
          </h1>
          <p className="page-lead">
            Choisissez l'offre qui correspond à vos ambitions. Tous nos sites sont 100% sur-mesure, sans WordPress, ultra-rapides.
          </p>
        </div>
      </section>
      <section className="page-section-lg">
        <div className="container-lg">
          <div className="center-note muted">
            <AlertCircle size={14} className="accent-icon" />
            TVA non applicable — art. 293 B du CGI. Prix TTC pour les particuliers.
          </div>

          <div className="pricing-grid">
            {PLANS.map((plan) => <PricingCard key={plan.id} plan={plan} />)}
          </div>

          <div className="text-center mt-5">
            <p className="muted lead-lg">
              Vous ne savez pas quelle offre choisir ? Parlez-nous de votre projet.
            </p>
            <Link to="/contact" className="btn-primary btn-lg">
              Demander un devis <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-7">
            <h2 className="font-display section-title text-center mb-3">
              Questions fréquentes
            </h2>
            <div className="faq-grid">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="glass glass--small">
                  <h3 className="section-title">{q}</h3>
                  <p className="muted body-sm">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
