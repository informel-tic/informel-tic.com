import { Link } from 'react-router-dom';
import { ArrowRight, Zap, AlertCircle, Globe, Monitor, Layers, Wrench, CheckCircle, X, Building2, User, Radio, ShoppingCart, Shield, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

/* ─────────────────────────────────────────────────────
   B2B — PILIER 1 : RAYONNER
   ───────────────────────────────────────────────────── */
const B2B_RAYONNER = [
  {
    id: 'radar-local',
    icon: Radio,
    name: 'Pack "Radar Local"',
    tagline: 'Soyez trouvé quand un client cherche autour de lui.',
    price: 290,
    priceLabel: 'Net (one-shot)',
    monthly: null,
    featured: false,
    badge: '🔵 Produit d\'appel',
    includes: [
      'Création ou reprise de la Fiche Google Business Profile',
      'Optimisation SEO locale (catégories, description, mots-clés ville)',
      'Synchronisation 3 annuaires : Waze, Apple Maps, PagesJaunes',
      'Photo de couverture et logo aux bons formats',
      '1 séance de collecte d\'infos (30 min visio)',
      'Livraison sous 5 jours ouvrés',
    ],
    excludes: [
      'Gestion mensuelle des avis Google',
      'Création ou refonte de site web',
      'Photos ou visuels à créer (le client fournit)',
    ],
    upsell: 'Votre fiche est nickel, mais quand un client clique sur votre site… il tombe sur quoi ?',
    upsellTarget: 'Pack Présence Web',
  },
  {
    id: 'presence-web',
    icon: Monitor,
    name: 'Pack "Présence Web"',
    tagline: 'Un outil professionnel visible en 72h.',
    price: 490,
    priceLabel: 'Net',
    monthly: 35,
    featured: true,
    badge: '⭐ Cœur de cible',
    includes: [
      'Site One-Page structuré (Qui je suis / Services / Avis / Contact + carte)',
      'Bouton "Appeler" direct mobile',
      'Formulaire de contact sécurisé',
      'Hébergement + nom de domaine inclus dans l\'abonnement',
      'Optimisation performance (chargement < 1s)',
      '1 mise à jour de contenu/mois incluse',
    ],
    excludes: [
      'Rédaction des textes (vous fournissez vos infos brutes)',
      'Photos (vous fournissez)',
      'SEO multi-pages avancé',
    ],
    upsell: 'Vous avez des réalisations à montrer, des services différents à détailler ?',
    upsellTarget: 'Pack Écosystème',
    bundleNote: '💡 Bundle Radar Local + Présence Web = 730 € Net (économie de 50 €)',
  },
  {
    id: 'ecosysteme',
    icon: Layers,
    name: 'Pack "Écosystème Digital"',
    tagline: 'Une image cohérente partout où vos clients vous cherchent.',
    price: 990,
    priceLabel: 'Net',
    monthly: 59,
    featured: false,
    badge: '🏆 Offre de rentabilité',
    includes: [
      'Site jusqu\'à 5 pages (Accueil, Services, Réalisations, À propos, Contact)',
      'Création/Refonte page Facebook ou Instagram pro',
      'Intégration bouton WhatsApp ou lien réservation',
      'GBP optimisé inclus (valeur 290 €)',
      '2 mises à jour de contenu/mois',
    ],
    excludes: [
      'Animation des réseaux sociaux (posts réguliers)',
      'Création de logo ou charte graphique complète',
      'E-commerce / boutique en ligne',
    ],
    upsell: 'Vous avez de la concurrence dans votre zone ? On peut créer des pages spécifiques par ville pour vous passer devant eux.',
    upsellTarget: 'Sur-Mesure',
  },
  {
    id: 'sur-mesure',
    icon: Globe,
    name: 'Refonte & Sur-Mesure',
    tagline: 'Votre image actuelle vous dessert ? On repart sur des bases solides.',
    price: null,
    priceLabel: 'À partir de 3 000 € Net',
    monthly: null,
    featured: false,
    badge: '🔐 Subventionnable INAC',
    includes: [
      'Refonte d\'un site existant (WordPress cassé, site obsolète)',
      'Pages SEO géolocalisées ("Plombier à Béthune", "Plombier à Lens"…)',
      'Intégrations spécifiques (formulaire devis avancé, Click & Collect)',
      'Audit et migration de contenu existant',
      'Facturation 50% à la commande / 50% à la livraison',
    ],
    excludes: [],
    upsell: null,
    inacNote: '💰 À ce tarif, l\'argument INAC/ADEN s\'active : la Région peut prendre en charge 40% — le projet ne vous coûte que 1 800 €.',
  },
];

/* ─────────────────────────────────────────────────────
   B2B — PILIER 2 : S'ORGANISER
   ───────────────────────────────────────────────────── */
const B2B_ORGANISER = {
  id: 'caisse',
  icon: ShoppingCart,
  name: 'Pack "Caisse Clé en Main"',
  tagline: 'Votre logiciel de caisse configuré, vous n\'avez plus qu\'à encaisser.',
  price: 350,
  priceLabel: 'À partir de 350 € Net',
  includes: [
    'Analyse des besoins (1h sur site ou visio)',
    'Installation et paramétrage complet (ex : Hiboutik)',
    'Configuration : articles, catégories, TVA, modes de paiement',
    'Formation du gérant (2h sur site)',
    '1 mois de support email/SMS post-installation',
  ],
  excludes: [
    'Achat du matériel (TPE, imprimante, douchette — recommandations fournies)',
    'Formation des employés (option : +60 €/heure)',
    'Comptabilité ou intégration logiciel comptable',
  ],
  options: [
    'Formation employé(s) supplémentaire : +60 €/heure',
    'Abonnement support mensuel : +25 €/mois (2 ajustements, réponse 48h)',
  ],
};

/* ─────────────────────────────────────────────────────
   B2B — CONCIERGERIE + DÉPANNAGE
   ───────────────────────────────────────────────────── */
const CONCIERGE_TIERS = [
  {
    name: 'Starter',
    price: 29,
    features: {
      'Hébergement + domaine': true,
      'MAJ contenu (textes/photos)': '1/mois',
      'Réponse aux avis Google': false,
      'MAJ GBP (horaires, posts)': false,
      "Priorité d'intervention": 'Standard',
      'Rapport mensuel visibilité': false,
    },
  },
  {
    name: 'Pro',
    price: 49,
    featured: true,
    features: {
      'Hébergement + domaine': true,
      'MAJ contenu (textes/photos)': '2/mois',
      'Réponse aux avis Google': true,
      'MAJ GBP (horaires, posts)': '1/mois',
      "Priorité d'intervention": 'Prioritaire',
      'Rapport mensuel visibilité': false,
    },
  },
  {
    name: 'Premium',
    price: 89,
    features: {
      'Hébergement + domaine': true,
      'MAJ contenu (textes/photos)': 'Illimitées',
      'Réponse aux avis Google': true,
      'MAJ GBP (horaires, posts)': '2/mois',
      "Priorité d'intervention": 'VIP (24h)',
      'Rapport mensuel visibilité': true,
    },
  },
];
const CONCIERGE_KEYS = Object.keys(CONCIERGE_TIERS[0].features);

/* ─────────────────────────────────────────────────────
   B2C — Particuliers
   ───────────────────────────────────────────────────── */
const B2C_OFFERS = [
  {
    id: 'diagnostic',
    icon: Monitor,
    name: 'Diagnostic PC',
    tagline: 'On identifie le problème avant de dépenser.',
    price: 49,
    priceLabel: '49 € Net (forfait fixe)',
    includes: [
      'Analyse complète du système (1h max)',
      'Rapport oral clair des problèmes identifiés',
      'Recommandations chiffrées (réparer ou non, quoi acheter)',
    ],
    excludes: ['La réparation elle-même (devis séparé)'],
    note: null,
  },
  {
    id: 'depannage-b2c',
    icon: Wrench,
    name: 'Dépannage & Remise en état',
    tagline: 'Votre machine repart, vous restez maître.',
    price: 45,
    priceLabel: '45 € Net / heure',
    includes: [
      'Suppression virus/malwares',
      'Réinstallation Windows / récupération de données',
      'Configuration box, imprimante, messagerie',
      'Déplacement domicile compris jusqu\'à 15 km',
    ],
    excludes: ['Données perdues non récupérées = non facturables au-delà d\'1h de tentative'],
    note: 'Facturation à la demi-heure après la première heure.',
  },
  {
    id: 'formation',
    icon: User,
    name: 'Formation à domicile',
    tagline: 'À votre rythme, chez vous, sur vos appareils.',
    price: 40,
    priceLabel: '40 € Net / heure',
    includes: [
      'Cours personnalisés au rythme du client',
      'Support récapitulatif écrit remis après la session',
      'Thèmes : messagerie, sécurité, photos, navigateur, smartphone, tablette…',
    ],
    excludes: [],
    note: null,
  },
];

/* ─────────────────────────────────────────────────────
   FAQ
   ───────────────────────────────────────────────────── */
const FAQS = [
  { q: 'Je possède le code source de mon site ?', a: "Oui, à 100%. À la livraison, vous recevez l'intégralité du code source. Vous pouvez le confier à n'importe quel développeur par la suite — sans dépendance à notre égard." },
  { q: "Puis-je évoluer vers une offre supérieure ?", a: "Absolument. Vous pouvez monter en gamme à tout moment. Nous récupérons le projet existant et l'enrichissons. Votre investissement initial est valorisé." },
  { q: "Que se passe-t-il si j'arrête l'abonnement ?", a: "Votre site est suspendu (l'hébergement s'arrête), mais vous restez propriétaire du code source. Si vous souhaitez héberger vous-même, nous vous transférons tous les fichiers." },
  { q: "C'est quoi le levier INAC/ADEN ?", a: "Pour les projets supérieurs à 1 500 €, la Région Hauts-de-France peut prendre en charge jusqu'à 40% du montant via les dispositifs INAC/ADEN. Renseignez-vous en mairie ou chambre consulaire — nous vous aidons à monter le dossier." },
  { q: "Quel est l'engagement sur les abonnements ?", a: "3 mois minimum. Cela nous permet d'amortir le travail de mise en place initial et de vous garantir un service de qualité dès le premier mois." },
];

/* ─────────────────────────────────────────────────────
   Sub-composants
   ───────────────────────────────────────────────────── */
function FeatureCheck({ value }) {
  if (value === true) return <CheckCircle size={16} className="check-yes" aria-label="Inclus" />;
  if (value === false) return <X size={14} className="check-no" aria-label="Non inclus" />;
  return <span className="check-value">{value}</span>;
}

function B2BCard({ offer }) {
  const { icon: Icon, name, tagline, price, priceLabel, monthly, featured, badge, includes, excludes, upsell, upsellTarget, bundleNote, inacNote } = offer;
  return (
    <div className={`pricing-card${featured ? ' pricing-card--featured' : ' pricing-card--normal'}`}>
      {featured && <div className="pricing-accent-line" aria-hidden="true" />}
      {badge && <div className="pricing-badge-wrap"><span className="pricing-badge">{badge}</span></div>}

      <div className="pricing-header">
        <div className="pricing-icon-wrap">
          <Icon size={22} aria-hidden="true" />
        </div>
        <h3 className="font-display pricing-title">
          {featured ? <span className="gradient-text">{name}</span> : name}
        </h3>
        <p className="muted pricing-tagline">{tagline}</p>
      </div>

      <div className="pricing-prices">
        {price !== null ? (
          <>
            <span className="price-number">{price.toLocaleString('fr-FR')} €</span>
            <span className="price-sub muted">{priceLabel}</span>
          </>
        ) : (
          <span className="price-number price-number--sm">{priceLabel}</span>
        )}
        {monthly && (
          <div className="pricing-sub">
            <span className={`price-month${featured ? ' accent' : ''}`}>
              + {monthly} €<span className="price-month-sub">/mois</span>
            </span>
            <span className="muted price-note">(hébergement + maintenance)</span>
          </div>
        )}
      </div>

      {bundleNote && <p className="bundle-note">{bundleNote}</p>}
      {inacNote && <p className="inac-note">{inacNote}</p>}

      <ul className="check-list pricing-features">
        {includes.map((f) => <li key={f}>{f}</li>)}
      </ul>

      {excludes.length > 0 && (
        <ul className="exclude-list">
          {excludes.map((e) => <li key={e}>{e}</li>)}
        </ul>
      )}

      {upsell && (
        <div className="upsell-hint">
          <ChevronRight size={14} /> <em>"{upsell}"</em>
          <span className="upsell-target"> → {upsellTarget}</span>
        </div>
      )}

      <div className="pricing-cta">
        <Link to="/contact" className={featured ? 'btn-primary' : 'btn-secondary'}>
          Démarrer ce pack <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

function B2CCard({ offer }) {
  const { icon: Icon, name, tagline, priceLabel, includes, excludes, note } = offer;
  return (
    <div className="pricing-card pricing-card--normal">
      <div className="pricing-header">
        <div className="pricing-icon-wrap">
          <Icon size={22} aria-hidden="true" />
        </div>
        <h3 className="font-display pricing-title">{name}</h3>
        <p className="muted pricing-tagline">{tagline}</p>
      </div>

      <div className="pricing-prices">
        <span className="price-number price-number--sm">{priceLabel}</span>
      </div>

      <ul className="check-list pricing-features">
        {includes.map((f) => <li key={f}>{f}</li>)}
      </ul>

      {excludes.length > 0 && (
        <ul className="exclude-list">
          {excludes.map((e) => <li key={e}>{e}</li>)}
        </ul>
      )}

      {note && <p className="pricing-note muted">{note}</p>}

      <div className="pricing-cta">
        <Link to="/contact" className="btn-secondary">
          Prendre rendez-vous <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────── */
export default function PricingPage() {
  return (
    <>
      <SEO
        title="Offres & Tarifs — INFORMEL-TIC"
        description="Catalogue complet INFORMEL-TIC : création web, visibilité locale, logiciel de caisse, dépannage et formation. Tarifs clairs pour professionnels et particuliers."
      />

      {/* ── Hero ── */}
      <section className="hero-bg page-hero text-center">
        <div className="container-lg">
          <div className="badge badge--muted">
            <Zap size={12} /> Offres & Tarifs
          </div>
          <h1 className="font-display page-title">
            Des offres <span className="gradient-text">claires</span>,<br />sans mauvaise surprise
          </h1>
          <p className="page-lead">
            Un interlocuteur unique, local et transparent pour toute votre vie numérique.
            Création web, visibilité locale, logiciels métiers, dépannage — tout est ici.
          </p>
          <div className="center-note muted" style={{ marginTop: '1.5rem' }}>
            <AlertCircle size={14} className="accent-icon" />
            TVA non applicable — art. 293 B du CGI. Tous prix indiqués en Net.
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEGMENT B2B
        ══════════════════════════════════════════ */}
      <section className="page-section-lg">
        <div className="container-lg">

          {/* B2B Header */}
          <div className="segment-header">
            <div className="segment-label">
              <Building2 size={18} aria-hidden="true" />
              <span>Professionnels & Commerçants</span>
            </div>
            <h2 className="font-display section-title">
              Pilier 1 — <span className="gradient-text">Rayonner</span>
              <span className="pillar-sub"> Visibilité & Web</span>
            </h2>
            <p className="section-subtitle">
              Construisez votre présence digitale locale, étape par étape, offre par offre.
            </p>
          </div>

          {/* B2B Rayonner cards */}
          <div className="pricing-grid pricing-grid--4col">
            {B2B_RAYONNER.map((plan) => <B2BCard key={plan.id} offer={plan} />)}
          </div>

          {/* INAC Banner */}
          <div className="inac-banner">
            <div className="inac-banner__icon">💰</div>
            <div>
              <strong>Levier INAC / ADEN — Hauts-de-France</strong>
              <p>Sur les projets Sur-Mesure (≥ 1 500 €), la Région peut prendre en charge jusqu'à <strong>40%</strong> du montant.
              Un projet à 3 000 € vous revient à <strong>1 800 €</strong>. Nous vous aidons à monter le dossier.</p>
            </div>
            <Link to="/contact" className="btn-secondary">En savoir plus</Link>
          </div>

          {/* Pilier 2 */}
          <div className="segment-header" style={{ marginTop: '4rem' }}>
            <h2 className="font-display section-title">
              Pilier 2 — <span className="gradient-text">S'organiser</span>
              <span className="pillar-sub"> Logiciels Métiers</span>
            </h2>
          </div>

          <div className="pricing-grid pricing-grid--1col">
            <div className="pricing-card pricing-card--normal">
              <div className="pricing-header">
                <div className="pricing-icon-wrap">
                  <ShoppingCart size={22} aria-hidden="true" />
                </div>
                <h3 className="font-display pricing-title">{B2B_ORGANISER.name}</h3>
                <p className="muted pricing-tagline">{B2B_ORGANISER.tagline}</p>
              </div>
              <div className="pricing-prices">
                <span className="price-number price-number--sm">{B2B_ORGANISER.priceLabel}</span>
              </div>
              <div className="caisse-grid">
                <div>
                  <p className="list-label">Inclus</p>
                  <ul className="check-list pricing-features">
                    {B2B_ORGANISER.includes.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="list-label">Exclus</p>
                  <ul className="exclude-list">
                    {B2B_ORGANISER.excludes.map((e) => <li key={e}>{e}</li>)}
                  </ul>
                  <p className="list-label" style={{ marginTop: '1rem' }}>Options disponibles</p>
                  <ul className="check-list pricing-features">
                    {B2B_ORGANISER.options.map((o) => <li key={o}>{o}</li>)}
                  </ul>
                </div>
              </div>
              <div className="pricing-cta">
                <Link to="/contact" className="btn-secondary">
                  Demander un devis <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Pilier 3 + Conciergerie */}
          <div className="segment-header" style={{ marginTop: '4rem' }}>
            <h2 className="font-display section-title">
              Pilier 3 — <span className="gradient-text">Sécuriser</span>
              <span className="pillar-sub"> Dépannage & Conciergerie</span>
            </h2>
          </div>

          {/* Dépannage Pro */}
          <div className="glass glass--padded depannage-pro">
            <div className="depannage-header">
              <div className="pricing-icon-wrap"><Wrench size={22} aria-hidden="true" /></div>
              <div>
                <h3 className="font-display pricing-title">Dépannage Pro</h3>
                <p className="muted">Réseau, poste de travail, messagerie pro, imprimante.</p>
              </div>
              <div className="depannage-price">
                <span className="price-number">60 €</span>
                <span className="muted">/heure Net</span>
              </div>
            </div>
            <ul className="depannage-details">
              <li>Intervention sur site ou à distance — délai 48h ouvrées</li>
              <li>Facturation à la demi-heure après la première heure</li>
              <li>Déplacement gratuit jusqu'à 20 km, 0,50 €/km au-delà</li>
              <li>Devis estimatif oral avant toute intervention longue</li>
            </ul>
          </div>

          {/* Conciergerie Digitale */}
          <div className="concierge-section">
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h3 className="font-display section-title">
                Abonnement <span className="gradient-text">Conciergerie Digitale</span>
              </h3>
              <p className="muted">Engagement 3 mois minimum. Votre site sans stress mensuel.</p>
            </div>

            <div className="concierge-table-wrap">
              <table className="concierge-table" role="table">
                <thead>
                  <tr>
                    <th scope="col">Prestation</th>
                    {CONCIERGE_TIERS.map((t) => (
                      <th key={t.name} scope="col" className={t.featured ? 'concierge-col--featured' : ''}>
                        <span className="concierge-tier-name">{t.name}</span>
                        <span className="concierge-tier-price">{t.price} €/mois</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {CONCIERGE_KEYS.map((key) => (
                    <tr key={key}>
                      <td>{key}</td>
                      {CONCIERGE_TIERS.map((t) => (
                        <td key={t.name} className={t.featured ? 'concierge-col--featured' : ''}>
                          <FeatureCheck value={t.features[key]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="concierge-note muted">
              Les "MAJ contenu" = modifications mineures (texte, photo, horaire). Toute nouvelle page = devis séparé.
              Sans abonnement actif = site suspendu (vous restez propriétaire du code).
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEGMENT B2C
        ══════════════════════════════════════════ */}
      <section className="page-section-lg section-alt">
        <div className="container-lg">

          <div className="segment-header">
            <div className="segment-label">
              <User size={18} aria-hidden="true" />
              <span>Particuliers</span>
            </div>
            <h2 className="font-display section-title">
              Dépannage, formation & <span className="gradient-text">accompagnement</span>
            </h2>
            <p className="section-subtitle">
              Des solutions simples, sans jargon, à domicile ou à distance.
            </p>
          </div>

          <div className="pricing-grid">
            {B2C_OFFERS.map((offer) => <B2CCard key={offer.id} offer={offer} />)}
          </div>

          {/* Tunnel upsell B2C vers B2B */}
          <div className="upsell-tunnel glass glass--small" style={{ marginTop: '2.5rem' }}>
            <p className="muted" style={{ marginBottom: 0 }}>
              🔁 <strong>Ce particulier a une boutique ou une activité professionnelle ?</strong>{' '}
              Le diagnostic mène naturellement vers le <Link to="/offres#radar-local" className="link-accent">Pack Radar Local (290 €)</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          Règles d'or & CTA
        ══════════════════════════════════════════ */}
      <section className="page-section-lg">
        <div className="container-lg">

          <div className="rules-block glass glass--padded">
            <h2 className="font-display section-title" style={{ marginBottom: '1.5rem' }}>
              <Shield size={20} style={{ verticalAlign: 'middle', marginRight: 8 }} aria-hidden="true" />
              Les 5 Règles d'Or — Anti-Débordement
            </h2>
            <ol className="rules-list">
              <li>Toute demande hors périmètre = <strong>devis écrit avant exécution</strong>, jamais oral.</li>
              <li>Aucune modification "rapide" gratuite au-delà des MAJ incluses dans l'abonnement.</li>
              <li><strong>Engagement 3 mois minimum</strong> sur les abonnements.</li>
              <li>Facturation en 2× sur tout projet &gt; 490 € (50% commande / 50% livraison).</li>
              <li>1 seul projet associatif actif à la fois, <strong>périmètre écrit obligatoire</strong>.</li>
            </ol>
          </div>

          <div className="text-center mt-5" style={{ marginTop: '3rem' }}>
            <p className="muted lead-lg">Vous ne savez pas quelle offre est faite pour vous ?</p>
            <Link to="/contact" className="btn-primary btn-lg">
              Parlons de votre projet <ArrowRight size={18} />
            </Link>
          </div>

          {/* FAQ */}
          <div className="mt-7" style={{ marginTop: '4rem' }}>
            <h2 className="font-display section-title text-center mb-3">Questions fréquentes</h2>
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
