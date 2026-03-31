import { Link } from 'react-router-dom';
import { Wrench, MonitorSmartphone, GraduationCap, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const SERVICES = [
  {
    icon: Wrench,
    title: 'Dépannage & Réparation',
    desc: 'Virus, lenteurs, écran bleu, problème de box — diagnostic et réparation à domicile.',
    to: '/particuliers/depannage-installation',
  },
  {
    icon: MonitorSmartphone,
    title: 'Installation & Évolution',
    desc: 'PC neuf, ajout SSD/RAM, clonage de disque, configuration de périphériques.',
    to: '/particuliers/depannage-installation',
  },
  {
    icon: GraduationCap,
    title: 'Formation à domicile',
    desc: 'Apprenez à utiliser votre ordinateur, tablette, smartphone en toute sérénité.',
    to: '/particuliers/formation',
  },
];

/**
 * Present the B2C service overview and entry points.
 */
export default function B2COverviewPage() {
  return (
    <>
      <SEO
        title="Espace Particuliers — Informatique à domicile"
        description="Dépannage, installation et formation informatique à domicile dans le Nord (59). Un artisan numérique local, patient et pédagogue."
      />

      {/* Hero */}
      <section className="page-hero hero-bg grid-bg text-center">
        <div className="container-md">
          <span className="badge badge--muted">Espace Particuliers (B2C)</span>
          <h1 className="page-title">
            L'Informatique facile <span className="gradient-text">à domicile</span>.
          </h1>
          <p className="page-lead">
            Un artisan numérique local, patient et pédagogue.
            Dépannage, installation et formation dans le Nord (59).
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding section-alt">
        <div className="container-lg">
          <div className="section-header">
            <h2 className="section-title">Nos Services à Domicile</h2>
          </div>
          <div className="grid-3col">
            {SERVICES.map(({ icon: Icon, title, desc, to }) => (
              <Link key={title} to={to} className="pillar-card glass glass-hover" aria-label={`Découvrir : ${title}`}>
                <div className="value-icon-wrap">
                  <Icon size={24} className="value-icon" aria-hidden="true" />
                </div>
                <h3 className="value-title">{title}</h3>
                <p className="value-desc">{desc}</p>
                <span className="pillar-link">
                  Voir les tarifs <ArrowRight size={16} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
