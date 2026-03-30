import { Link } from 'react-router-dom';
import { ArrowRight, Zap, AlertCircle } from 'lucide-react';

/* ── Pricing data ────────────────────────────────── */
const PLANS = [
  {
    id: 'essentielle', name: 'Vitrine Essentielle', tagline: 'Exister sur Google',
    price: 490, monthly: 29, featured: false, badge: null,
    target: 'Premier pas en ligne, artisans et petits commerces.',
    features: ["Site jusqu'à 5 pages",'Nom de domaine .fr','Hébergement professionnel','Adresse e-mail professionnelle','Formulaire de contact sécurisé','Référencement Google de base','Certificat SSL','Code source livré'],
    cta: 'Commencer', ctaVariant: 'secondary',
  },
  {
    id: 'connecte', name: 'Commerce Connecté', tagline: 'Commandes en ligne & réputation',
    price: 890, monthly: 49, featured: false, badge: null,
    target: 'Restaurants, commerces, artisans avec prise de commande.',
    features: ["Tout l'offre Vitrine Essentielle","Jusqu'à 8 pages",'Module Click & Collect (WhatsApp)','Optimisation Fiche Google complète','Réponses aux 15 derniers avis Google','Harmonisation annuaires (PagesJaunes, Yelp, Tripadvisor)'],
    cta: 'Choisir cette offre', ctaVariant: 'secondary',
  },
  {
    id: 'totale', name: 'Identité Totale', tagline: 'Domination locale & SEO avancé',
    price: 1490, monthly: 89, featured: true, badge: '⭐ Recommandé',
    target: 'Ambition maximale, référencement local dominant, reporting mensuel.',
    features: ["Tout l'offre Commerce Connecté","Jusqu'à 12 pages + blog",'Référencement SEO local avancé','Shooting photo produits (20 visuels HD)','Refonte page Facebook (10 posts inclus)','Inscription Waze & Mappy','Rapport mensuel visibilité'],
    cta: 'Choisir cette offre', ctaVariant: 'primary',
  },
];

function PricingCard({ plan }) {
  const { name, tagline, price, monthly, featured, badge, target, features, cta, ctaVariant } = plan;
  const cardStyle = featured
    ? { background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(52,211,153,0.08))', border: '1px solid rgba(99,102,241,0.5)', boxShadow: '0 0 40px rgba(99,102,241,0.2)', position: 'relative', overflow: 'hidden', borderRadius: '1rem', padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s' }
    : { background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s' };

  return (
    <div className={featured ? '' : 'glass-hover'} style={cardStyle}>
      {featured && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #6366f1, #34d399)' }} />}
      {badge && (
        <div style={{ position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', zIndex: 10 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'linear-gradient(135deg, #6366f1, #10b981)', color: 'white', fontSize: '0.75rem', fontWeight: 600, boxShadow: '0 4px 14px rgba(99,102,241,0.3)' }}>{badge}</span>
        </div>
      )}

      <div style={{ marginBottom: '1.5rem' }}>
        <h3 className="font-display" style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.25rem', color: featured ? undefined : 'white' }}>
          {featured ? <span className="gradient-text">{name}</span> : name}
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{tagline}</p>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.25rem' }}>
          <span className="font-display" style={{ fontWeight: 900, fontSize: '3rem', color: 'white' }}>{price.toLocaleString('fr-FR')} €</span>
          <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>à la création</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 700, color: featured ? '#34d399' : '#e2e8f0' }}>
            + {monthly} €<span style={{ fontSize: '1rem', fontWeight: 400, color: '#94a3b8' }}>/mois</span>
          </span>
          <span style={{ color: '#64748b', fontSize: '0.75rem' }}>(maintenance)</span>
        </div>
        <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem', fontStyle: 'italic' }}>TVA non applicable — art. 293 B CGI</p>
      </div>

      <div style={{ borderRadius: '0.75rem', padding: '0.875rem', marginBottom: '1.5rem', fontSize: '0.875rem', background: featured ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.04)', color: featured ? '#c7d2fe' : '#cbd5e1' }}>
        🎯 {target}
      </div>

      <ul className="check-list" style={{ flex: 1, marginBottom: '2rem' }}>
        {features.map((f) => <li key={f}>{f}</li>)}
      </ul>

      <Link to="/contact" className={ctaVariant === 'primary' ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%', justifyContent: 'center' }}>
        {cta} <ArrowRight size={16} />
      </Link>
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
      <section className="hero-bg" style={{ paddingTop: '10rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div className="container-lg">
          <div className="badge" style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', color: '#a5b4fc', marginBottom: '1.5rem', display: 'inline-flex' }}>
            <Zap size={12} /> Offres & Tarifs
          </div>
          <h1 className="font-display" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.75rem)', color: 'white', marginBottom: '1.25rem' }}>
            Des offres <span className="gradient-text">claires</span>,<br />sans mauvaise surprise
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto' }}>
            Choisissez l'offre qui correspond à vos ambitions. Tous nos sites sont 100% sur-mesure, sans WordPress, ultra-rapides.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: '6rem' }}>
        <div className="container-lg">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem', color: '#64748b', fontSize: '0.875rem' }}>
            <AlertCircle size={14} style={{ color: 'rgba(245,158,11,0.6)' }} />
            TVA non applicable — art. 293 B du CGI. Prix TTC pour les particuliers.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            {PLANS.map((plan) => <PricingCard key={plan.id} plan={plan} />)}
          </div>

          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
            <p style={{ color: '#94a3b8', marginBottom: '1.25rem', fontSize: '1.125rem' }}>
              Vous ne savez pas quelle offre choisir ? Parlez-nous de votre projet.
            </p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
              Demander un conseil gratuit <ArrowRight size={18} />
            </Link>
          </div>

          <div style={{ marginTop: '7rem' }}>
            <h2 className="font-display" style={{ fontWeight: 700, fontSize: '1.875rem', color: 'white', textAlign: 'center', marginBottom: '3rem' }}>
              Questions fréquentes
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {FAQS.map(({ q, a }) => (
                <div key={q} className="glass" style={{ borderRadius: '0.75rem', padding: '1.5rem' }}>
                  <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>{q}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.7 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
