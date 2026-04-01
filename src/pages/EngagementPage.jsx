import { Link } from 'react-router-dom';
import { Heart, CheckCircle, ArrowRight, Users, Clock, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const CRITERIA = [
  'Association loi 1901 déclarée',
  'Siège social dans le département du Nord (59)',
  'Projet à vocation sociale, éducative ou solidaire',
  'Capacité à mobiliser des bénévoles pour le suivi',
];

const SERVICES_OFFERED = [
  'Création ou refonte de site internet vitrine',
  'Configuration d\'outils numériques (email, agenda, visio)',
  'Formation des bénévoles aux outils informatiques',
  'Conseil en stratégie numérique',
  'Optimisation de la visibilité locale (Google Business)',
];

/**
 * Present the monthly pro bono commitment and eligibility criteria.
 */
export default function EngagementPage() {
  return (
    <>
      <SEO
        title="Notre Engagement — Mécénat de compétences"
        description="INFORMEL-TIC offre 4h/mois de mécénat de compétences numériques à une association loi 1901 du Nord (59). Rendons le numérique accessible à tous."
      />

      {/* Hero */}
      <section className="page-hero hero-bg grid-bg text-center">
        <div className="container-md">
          <span className="badge badge--muted">
            <Heart size={14} aria-hidden="true" /> Notre Engagement
          </span>
          <h1 className="page-title">
            Rendre le Numérique <span className="gradient-text">Accessible à Tous</span>.
          </h1>
          <p className="page-lead">
            Chaque mois, INFORMEL-TIC offre 4 heures de mécénat de compétences numériques
            à une association loi 1901 du département du Nord.
          </p>
        </div>
      </section>

      {/* L'offre */}
      <section className="section-padding">
        <div className="container-md">
          <div className="engagement-offer glass glass--padded">
            <div className="engagement-header">
              <Heart size={28} className="icon-accent" aria-hidden="true" />
              <h2 className="info-title">Mécénat de Compétences Numériques</h2>
            </div>
            <p className="story-text mb-6">
              En tant qu'artisan numérique, je crois que la technologie doit profiter à tous,
              pas seulement à ceux qui peuvent se la payer. C'est pourquoi INFORMEL-TIC consacre
              chaque mois du temps et des compétences à une association locale.
            </p>

            <div className="engagement-details-grid">
              <div className="engagement-detail">
                <Clock size={20} className="icon-accent" aria-hidden="true" />
                <div>
                  <strong>4 heures par mois</strong>
                  <p className="muted">De prestations numériques offertes.</p>
                </div>
              </div>
              <div className="engagement-detail">
                <Users size={20} className="icon-accent" aria-hidden="true" />
                <div>
                  <strong>1 association à la fois</strong>
                  <p className="muted">Pour un accompagnement suivi et de qualité.</p>
                </div>
              </div>
              <div className="engagement-detail">
                <MapPin size={20} className="icon-accent" aria-hidden="true" />
                <div>
                  <strong>Département du Nord (59)</strong>
                  <p className="muted">Associations locales uniquement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qu'on offre */}
      <section className="section-padding section-alt">
        <div className="container-md">
          <h2 className="section-title text-center">Ce que nous offrons</h2>
          <p className="section-subtitle text-center mb-8">
            Des compétences numériques concrètes pour renforcer votre association.
          </p>
          <div className="glass glass--padded">
            <ul className="eligibility-list">
              {SERVICES_OFFERED.map((s) => (
                <li key={s}>
                  <CheckCircle size={18} className="icon-check-green" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Critères */}
      <section className="section-padding">
        <div className="container-md">
          <h2 className="section-title text-center">Critères d'éligibilité</h2>
          <p className="section-subtitle text-center mb-8">
            Pour postuler au mécénat de compétences INFORMEL-TIC.
          </p>
          <div className="glass glass--padded">
            <ul className="eligibility-list">
              {CRITERIA.map((c) => (
                <li key={c}>
                  <CheckCircle size={18} className="icon-check-green" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Comment postuler */}
      <section className="section-padding section-alt text-center">
        <div className="container-sm">
          <h2 className="section-title">Comment postuler ?</h2>
          <p className="section-subtitle mb-8">
            Envoyez-nous un message en précisant le nom de votre association,
            votre projet et vos besoins numériques. Nous vous répondrons sous 48h.
          </p>
          <Link to="/contact?subject=mecenat" className="btn-primary">
            Postuler au mécénat <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
