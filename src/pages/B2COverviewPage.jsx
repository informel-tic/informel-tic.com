import { Link } from 'react-router-dom';
import { Wrench, MonitorSmartphone, GraduationCap, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { IMAGES } from '../assets/images';

const SERVICES = [
  {
    icon: Wrench,
    title: 'Dépannage & Réparation',
    desc: 'Virus, lenteurs, écran bleu, problème de box — diagnostic et réparation à domicile.',
    to: '/particuliers/depannage-installation',
    image: IMAGES.repair,
    imageAlt: IMAGES.repairAlt,
  },
  {
    icon: MonitorSmartphone,
    title: 'Installation & Évolution',
    desc: 'PC neuf, ajout SSD/RAM, clonage de disque, configuration de périphériques.',
    to: '/particuliers/depannage-installation',
    image: IMAGES.b2c,
    imageAlt: IMAGES.b2cAlt,
  },
  {
    icon: GraduationCap,
    title: 'Formation à domicile',
    desc: 'Apprenez à utiliser votre ordinateur, tablette, smartphone en toute sérénité.',
    to: '/particuliers/formation',
    image: IMAGES.training,
    imageAlt: IMAGES.trainingAlt,
  },
];

export default function B2COverviewPage() {
  return (
    <>
      <SEO
        title="Espace Particuliers — Informatique à domicile"
        description="Dépannage, installation et formation informatique à domicile dans le Nord (59). Un artisan numérique local, patient et pédagogue."
      />

      {/* Hero */}
      <section className="page-hero hero-bg text-center">
        <div className="container-md">
          <span className="badge badge--muted">Espace Particuliers (B2C)</span>
          <h1 className="page-title">
            L'Informatique facile <span className="gradient-text">à domicile</span>{'.'}
          </h1>
          <p className="page-lead">
            Un artisan numérique local, patient et pédagogue.
            Dépannage, installation et formation dans le Nord (59).
          </p>
        </div>
      </section>

      {/* Services avec images */}
      <section className="section-padding section-alt">
        <div className="container-lg">
          <div className="section-header">
            <h2 className="section-title">Nos Services à Domicile</h2>
          </div>
          <div className="pillar-grid">
            {SERVICES.map(({ icon: Icon, title, desc, to, image, imageAlt }) => (
              <Link key={title} to={to} className="pillar-card-v2 glass" aria-label={`Découvrir : ${title}`}>
                <div className="pillar-card-v2__image-wrap">
                  <img src={image} alt={imageAlt} className="pillar-card-v2__image" loading="lazy" width="400" height="200" />
                  <div className="pillar-card-v2__image-overlay" />
                </div>
                <div className="pillar-card-v2__body">
                  <div className="pillar-card-v2__icon">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="pillar-card-v2__title">{title}</h3>
                  <p className="pillar-card-v2__desc">{desc}</p>
                  <span className="pillar-link">
                    Voir les tarifs <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
