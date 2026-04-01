import { Link } from 'react-router-dom';
import { Globe, Monitor, Shield, ArrowRight, Landmark } from 'lucide-react';
import SEO from '../components/SEO';
import { IMAGES } from '../assets/images';

const PILLARS = [
  {
    icon: Globe,
    title: 'Rayonner',
    desc: 'Site web, SEO local, Google Business, réseaux sociaux — devenez visible là où vos clients vous cherchent.',
    to: '/pros/rayonner',
    image: IMAGES.webDesign,
    imageAlt: IMAGES.webDesignAlt,
  },
  {
    icon: Monitor,
    title: 'S\'organiser',
    desc: 'Logiciel de caisse, outils métiers, paramétrage complet — digitalisez votre gestion au quotidien.',
    to: '/pros/organiser',
    image: IMAGES.seo,
    imageAlt: IMAGES.seoAlt,
  },
  {
    icon: Shield,
    title: 'Sécuriser',
    desc: 'Maintenance, mises à jour, dépannage express — gardez votre activité en ligne et protégée.',
    to: '/pros/securiser',
    image: IMAGES.security,
    imageAlt: IMAGES.securityAlt,
  },
];

export default function B2BOverviewPage() {
  return (
    <>
      <SEO
        title="Espace Pros — Services numériques B2B"
        description="Boostez votre activité avec un expert numérique de proximité. Site web, visibilité Google, logiciel de caisse et maintenance dans le Nord (59)."
      />

      {/* Hero */}
      <section className="page-hero hero-bg text-center">
        <div className="container-md">
          <span className="badge badge--muted">Espace Pros (B2B)</span>
          <h1 className="page-title">
            Boostez votre activité avec un <span className="gradient-text">expert du numérique</span> de proximité.
          </h1>
          <p className="page-lead">
            Des solutions concrètes pour les artisans, commerçants et TPE du Nord.
            Un seul interlocuteur local pour tout votre numérique.
          </p>
        </div>
      </section>

      {/* 3 Piliers avec images */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="pillar-grid">
            {PILLARS.map(({ icon: Icon, title, desc, to, image, imageAlt }) => (
              <Link key={title} to={to} className="pillar-card-v2 glass" aria-label={`Découvrir : ${title}`}>
                <div className="pillar-card-v2__image-wrap">
                  <img src={image} alt={imageAlt} className="pillar-card-v2__image" loading="lazy" width="400" height="200" />
                  <div className="pillar-card-v2__image-overlay" />
                </div>
                <div className="pillar-card-v2__body">
                  <div className="pillar-card-v2__icon">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h2 className="pillar-card-v2__title">{title}</h2>
                  <p className="pillar-card-v2__desc">{desc}</p>
                  <span className="pillar-link">
                    Voir les offres <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Aides ADEN */}
      <section className="section-padding section-alt">
        <div className="container-md text-center">
          <div className="inac-promo glass">
            <Landmark size={32} className="icon-accent" aria-hidden="true" />
            <h2 className="section-title mt-4">
              Financez votre Transformation Numérique jusqu'à <span className="gradient-text">40%</span>
            </h2>
            <p className="section-subtitle">
              Le dispositif ADEN Hauts-de-France subventionne vos projets de digitalisation.
              Découvrez si vous êtes éligible.
            </p>
            <Link to="/pros/aides-aden" className="btn-primary mt-6">
              En savoir plus sur les aides ADEN <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
