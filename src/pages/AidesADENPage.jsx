import { Link } from 'react-router-dom';
import { Landmark, CheckCircle, XCircle, ArrowRight, ExternalLink, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

/* --- Données ---------------------------------------------------- */

const SAVINGS = [
  { project: '3 000 €', subsidy: '1 200 €', youPay: '1 800 €' },
  { project: '5 000 €', subsidy: '2 000 €', youPay: '3 000 €' },
  { project: '10 000 €', subsidy: '4 000 €', youPay: '6 000 €' },
  { project: '20 000 €', subsidy: '8 000 €', youPay: '12 000 €' },
  { project: '30 000 €', subsidy: '12 000 €', youPay: '18 000 €' },
];

const ELIGIBLE_COMPANIES = [
  'Artisans, commerçants, TPE — SARL, SAS, EURL, Micro-entreprise, ESS…',
  'Chiffre d\'affaires inférieur à 2 M€',
  'Moins de 20 emplois temps plein (ETP)',
  'Siège social en Hauts-de-France',
  'Inscrite au RCS, RM ou RNE',
  'À jour des obligations fiscales et sociales',
];

const EXCLUDED_COMPANIES = [
  'Professions libérales réglementées ou non réglementées',
  'Activités financières et immobilières (banques, assurances…)',
  'Franchises, succursales et établissements secondaires',
  'Organismes de formation',
  'Entreprises de conseil, bureaux d\'études, coaching',
  'Entreprises dont le numérique est le cœur de métier',
];

const ELIGIBLE_EXPENSES = [
  {
    title: 'Site e-commerce',
    desc: 'Création ou évolution d\'un site vitrine en boutique en ligne.',
    warning: 'Site vitrine seul (sans vente en ligne) : NON éligible.',
  },
  {
    title: 'CRM — Gestion de la relation client',
    desc: 'Setup, intégration et prise en charge d\'une année d\'abonnement.',
    warning: 'Renouvellement d\'abonnement seul : NON éligible.',
  },
  {
    title: 'ERP / Logiciel de gestion (PGI)',
    desc: 'Mise en place, intégration et prise en charge d\'une année d\'abonnement.',
    warning: 'Renouvellement d\'abonnement seul : NON éligible.',
  },
  {
    title: 'Caisse enregistreuse numérique & connectée',
    desc: 'Limitée à 1 caisse (max 1 500 € par matériel). Doit être liée à un projet e-commerce.',
    warning: 'Caisse sans projet e-commerce associé : NON éligible.',
  },
];

const STEPS = [
  { num: '1', title: 'Diagnostic gratuit', desc: 'On évalue ensemble l\'éligibilité de votre entreprise et la nature des dépenses envisagées. Sans engagement.' },
  { num: '2', title: 'Dépôt du dossier AVANT paiement', desc: 'INFORMEL-TIC vous aide à constituer les devis datés et signés, puis à créer et valider votre dossier sur la plateforme régionale — impérativement avant tout paiement.' },
  { num: '3', title: 'Instruction & accord régional', desc: 'La Région instruit votre demande. En cas de suite favorable, un arrêté du Président fixe les conditions de l\'aide.' },
  { num: '4', title: 'Réalisation & versement en une fois', desc: 'On réalise votre projet numérique. Sur présentation des factures acquittées, la Région verse la subvention en une seule fois.' },
];

export default function AidesADENPage() {
  /**
   * Explain the ADEN subsidy and how to check eligibility.
   */
  return (
    <>
      <SEO
        title="Aides ADEN — Financez votre transformation numérique jusqu'à 40%"
        description="Le dispositif ADEN Hauts-de-France subventionne vos projets e-commerce, CRM et ERP de 1 200 € à 12 000 €. INFORMEL-TIC monte le dossier avec vous."
      />

      <section className="page-hero hero-bg grid-bg text-center">
        <div className="container-md">
          <span className="badge badge--muted">
            <Landmark size={14} aria-hidden="true" /> Espace Pros — Aides ADEN
          </span>
          <h1 className="page-title">
            La Région finance <span className="gradient-text">40% de votre projet numérique</span>.
          </h1>
          <p className="page-lead">
            Le dispositif ADEN (Aide à la Digitalisation des Entreprises) de la Région Hauts-de-France
            subventionne de <strong>1 200 € à 12 000 €</strong> vos projets e-commerce, CRM et ERP.
            INFORMEL-TIC constitue le dossier avec vous.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-md">
          <div className="section-header text-center">
            <h2 className="section-title">Ce que vous économisez concrètement</h2>
            <p className="section-subtitle">Subvention de 40% sur les investissements de 3 000 € à 30 000 € HT.</p>
          </div>
          <div className="aden-savings-wrap glass">
            <table className="aden-savings-table" aria-label="Exemples d'économies ADEN">
              <thead>
                <tr>
                  <th scope="col">Votre projet HT</th>
                  <th scope="col">Subvention ADEN (40 %)</th>
                  <th scope="col">Vous payez seulement</th>
                </tr>
              </thead>
              <tbody>
                {SAVINGS.map(({ project, subsidy, youPay }) => (
                  <tr key={project}>
                    <td>{project}</td>
                    <td className="aden-savings__subsidy">{subsidy}</td>
                    <td className="aden-savings__net">{youPay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="aden-savings-note">
              Au-delà de 30 000 € HT (jusqu'à 50 000 €), le taux passe à 20 %. Une seule demande par entreprise tous les 2 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-lg">
          <div className="section-header text-center">
            <h2 className="section-title">Les 4 dépenses éligibles</h2>
            <p className="section-subtitle">
              Exactement celles que nous proposons. Chaque prestation INFORMEL-TIC éligible peut être subventionnée.
            </p>
          </div>
          <div className="grid-2col">
            {ELIGIBLE_EXPENSES.map(({ title, desc, warning }) => (
              <div key={title} className="aden-expense-card glass">
                <div className="aden-expense-header">
                  <CheckCircle size={20} className="icon-check-green" aria-hidden="true" />
                  <h3 className="aden-expense-title">{title}</h3>
                </div>
                <p className="aden-expense-desc">{desc}</p>
                <p className="aden-expense-warning">
                  <XCircle size={13} aria-hidden="true" /> {warning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-lg">
          <div className="section-header text-center">
            <h2 className="section-title">Votre entreprise est-elle éligible ?</h2>
          </div>
          <div className="aden-eligibility-grid">
            <div className="glass glass--padded">
              <h3 className="aden-eligi-subtitle">
                <CheckCircle size={18} className="icon-check-green" aria-hidden="true" /> Entreprises éligibles
              </h3>
              <ul className="eligibility-list">
                {ELIGIBLE_COMPANIES.map((item) => (
                  <li key={item}>
                    <CheckCircle size={16} className="icon-check-green" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass glass--padded">
              <h3 className="aden-eligi-subtitle">
                <XCircle size={18} className="icon-exclude-red" aria-hidden="true" /> Secteurs exclus
              </h3>
              <ul className="eligibility-list">
                {EXCLUDED_COMPANIES.map((item) => (
                  <li key={item}>
                    <XCircle size={16} className="icon-exclude-red" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-md">
          <div className="section-header text-center">
            <h2 className="section-title">Comment ça marche ?</h2>
            <p className="section-subtitle">INFORMEL-TIC vous accompagne à chaque étape.</p>
          </div>
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
          <div className="alert-box mt-8">
            <p className="alert-content">
              <AlertTriangle size={18} className="alert-icon" aria-hidden="true" />
              <span>
                <strong>Règle impérative :</strong> le dossier doit être créé et validé sur la plateforme régionale
                <strong> avant</strong> tout paiement. Toute facture acquittée avant la validation du dossier
                est inéligible, sans exception. Nous gérons cette étape avec vous.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <div className="container-sm">
          <h2 className="section-title">Vérifiez votre éligibilité gratuitement</h2>
          <p className="section-subtitle mb-8">
            Diagnostic gratuit, montage du dossier inclus dans notre accompagnement.
            Contactez-nous avant de démarrer quoi que ce soit.
          </p>
          <div className="cta-actions mb-8">
            <Link to="/contact" className="btn-primary">
              Demander un diagnostic gratuit <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href="https://aides.hautsdefrance.fr/sub/tiers/aides/details/?sigle=ADEN"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Fiche officielle ADEN <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
          <div className="aden-contact-row">
            <a href="mailto:aden@hautsdefrance.fr" className="aden-contact-link">
              aden@hautsdefrance.fr
            </a>
            <span className="aden-contact-sep">·</span>
            <span className="aden-contact-link">0 800 026 080 (numéro vert)</span>
          </div>
          <p className="legal-note">
            Délibération n° 2023.01091 du Conseil Régional Hauts-de-France — adoptée le 22 juin 2023.
          </p>
        </div>
      </section>
    </>
  );
}