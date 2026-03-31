import { Link } from 'react-router-dom';
import { Briefcase, User, ArrowRight, CheckCircle } from 'lucide-react';

const B2B_BENEFITS = [
  'Site web professionnel sur-mesure, sans WordPress',
  'Visibilité Google & réseaux sociaux',
  'Logiciel de caisse paramétré à votre métier',
  'Maintenance & dépannage prioritaire',
  'Aides ADEN jusqu\'à 40% sur vos projets numériques',
];

const B2C_BENEFITS = [
  'Dépannage PC & réseau à domicile',
  'Installation de matériel et logiciels',
  'Formation personnalisée à l\'informatique',
  'Intervention rapide dans le Nord (59)',
  'Un artisan patient et pédagogue',
];

export default function DualEntry() {
  return (
    <section className="section-padding dual-entry-section">
      <div className="container-lg">
        <div className="section-header">
          <h2 className="section-title">
            Comment pouvons-nous <span className="gradient-text">vous aider ?</span>
          </h2>
          <p className="section-subtitle">
            Deux univers de services adaptés à vos besoins, un même artisan numérique de confiance.
          </p>
        </div>

        <div className="dual-entry-grid">
          {/* Bloc B2B */}
          <div className="dual-entry-card glass glass-hover">
            <div className="dual-entry-icon-wrap dual-entry-icon-wrap--b2b">
              <Briefcase size={28} aria-hidden="true" />
            </div>
            <h3 className="dual-entry-title">Vous êtes un Professionnel ou Commerçant ?</h3>
            <p className="dual-entry-desc">
              Boostez votre activité avec un expert numérique local. Site web, visibilité Google,
              logiciel de caisse et maintenance — tout en un seul interlocuteur.
            </p>
            <ul className="dual-entry-list">
              {B2B_BENEFITS.map((item) => (
                <li key={item}>
                  <CheckCircle size={16} className="dual-entry-check" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/pros" className="btn-primary dual-entry-cta">
              Découvrir l'Espace Pros <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          {/* Bloc B2C */}
          <div className="dual-entry-card glass glass-hover">
            <div className="dual-entry-icon-wrap dual-entry-icon-wrap--b2c">
              <User size={28} aria-hidden="true" />
            </div>
            <h3 className="dual-entry-title">Vous êtes un Particulier ?</h3>
            <p className="dual-entry-desc">
              L'informatique facile à domicile, 50% moins chère grâce à l'agrément Services à la Personne.
              Dépannage, installation ou formation — on s'occupe de tout.
            </p>
            <ul className="dual-entry-list">
              {B2C_BENEFITS.map((item) => (
                <li key={item}>
                  <CheckCircle size={16} className="dual-entry-check" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/particuliers" className="btn-primary dual-entry-cta">
              Découvrir l'Espace Particuliers <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
