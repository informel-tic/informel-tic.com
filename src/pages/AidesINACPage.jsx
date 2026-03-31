import { Link } from 'react-router-dom';
import { Landmark, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';

const ELIGIBILITY = [
  'TPE de moins de 20 salariés',
  'Artisans, commerçants, professions libérales',
  'Siège social en Hauts-de-France',
  'Entreprise immatriculée depuis plus de 6 mois',
];

const PROJECTS_FUNDED = [
  'Création ou refonte de site internet',
  'Mise en place d\'outils de vente en ligne (e-commerce)',
  'Digitalisation de la relation client (CRM)',
  'Outils de gestion et d\'organisation (caisse, planning)',
  'Amélioration de la visibilité en ligne (SEO, réseaux sociaux)',
  'Cybersécurité et mise en conformité RGPD',
];

const STEPS = [
  { num: '1', title: 'Diagnostic gratuit', desc: 'On évalue ensemble vos besoins numériques et l\'éligibilité de votre projet.' },
  { num: '2', title: 'Montage du dossier', desc: 'INFORMEL-TIC vous accompagne dans la constitution du dossier INAC auprès de la CCI.' },
  { num: '3', title: 'Validation & financement', desc: 'La CCI valide votre dossier. Le financement couvre jusqu\'à 40% de la prestation.' },
  { num: '4', title: 'Réalisation du projet', desc: 'On lance votre transformation numérique. Vous ne payez que le reste à charge.' },
];

export default function AidesINACPage() {
  return (
    <>
      <SEO
        title="Aides INAC — Financez votre transformation numérique"
        description="Financez votre transformation numérique jusqu'à 40% grâce au dispositif INAC Hauts-de-France. Éligibilité, projets finançables et accompagnement."
      />

      {/* Hero */}
      <section className="page-hero hero-bg grid-bg text-center">
        <div className="container-md">
          <span className="badge badge--muted">
            <Landmark size={14} aria-hidden="true" /> Espace Pros — Aides INAC
          </span>
          <h1 className="page-title">
            Financez votre Transformation Numérique <span className="gradient-text">jusqu'à 40%</span>.
          </h1>
          <p className="page-lead">
            Le dispositif INAC (Initiative Numérique pour les Artisans et Commerçants) de la Région Hauts-de-France
            finance vos projets de digitalisation. INFORMEL-TIC vous accompagne de A à Z.
          </p>
        </div>
      </section>

      {/* Qu'est-ce que l'INAC */}
      <section className="section-padding">
        <div className="container-md">
          <div className="glass glass--padded">
            <h2 className="info-title" style={{ marginBottom: '1rem' }}>Qu'est-ce que l'INAC ?</h2>
            <p className="story-text">
              L'INAC est un programme porté par les Chambres de Commerce et d'Industrie (CCI) des Hauts-de-France.
              Il vise à accompagner les TPE dans leur transition numérique en subventionnant une partie des prestations
              réalisées par des experts labellisés. INFORMEL-TIC est prestataire référencé pour ce dispositif.
            </p>
          </div>
        </div>
      </section>

      {/* Éligibilité */}
      <section className="section-padding section-alt">
        <div className="container-md">
          <h2 className="section-title text-center">Critères d'éligibilité</h2>
          <p className="section-subtitle text-center" style={{ marginBottom: '2rem' }}>
            Vérifiez si votre entreprise peut bénéficier du dispositif.
          </p>
          <div className="glass glass--padded">
            <ul className="eligibility-list">
              {ELIGIBILITY.map((item) => (
                <li key={item}>
                  <CheckCircle size={18} className="icon-check-green" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projets financés */}
      <section className="section-padding">
        <div className="container-md">
          <h2 className="section-title text-center">Types de projets financés</h2>
          <p className="section-subtitle text-center" style={{ marginBottom: '2rem' }}>
            Les prestations numériques couvertes par l'INAC.
          </p>
          <div className="grid-3col" style={{ gap: '1rem' }}>
            {PROJECTS_FUNDED.map((project) => (
              <div key={project} className="glass glass-hover" style={{ padding: '1.25rem', borderRadius: '0.75rem' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', margin: 0 }}>
                  <CheckCircle size={14} style={{ color: 'var(--accent)', marginRight: '0.5rem', verticalAlign: '-2px' }} aria-hidden="true" />
                  {project}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="section-padding section-alt">
        <div className="container-md">
          <h2 className="section-title text-center">Comment en bénéficier ?</h2>
          <p className="section-subtitle text-center" style={{ marginBottom: '3rem' }}>
            4 étapes simples pour financer votre projet.
          </p>
          <div className="steps-grid">
            {STEPS.map(({ num, title, desc }) => (
              <div key={num} className="step-card glass">
                <span className="step-number gradient-text">{num}</span>
                <div>
                  <h3 className="step-title">{title}</h3>
                  <p className="step-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container-sm">
          <h2 className="section-title">Prêt à lancer votre transformation numérique ?</h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            Contactez INFORMEL-TIC pour un diagnostic gratuit et vérifiez votre éligibilité au dispositif INAC.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">
              Demander un diagnostic gratuit <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href="https://hautsdefrance.cci.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Site CCI Hauts-de-France <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
