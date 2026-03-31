import { Link } from 'react-router-dom';
import { Zap, Code2, Heart, Target, Users, Award, ArrowRight, Globe, ShoppingCart, Wrench, GraduationCap } from 'lucide-react';
import SEO from '../components/SEO';

const VALUES = [
  { icon: Code2, title: 'Code propre', desc: 'Chaque site est développé à partir de zéro, sans templates ni plugins. Rapide, sécurisé, et 100% propriété du client.' },
  { icon: Target, title: 'Centré résultats', desc: "Un site n'est pas un projet artistique. C'est un outil commercial. Chaque décision est orientée visibilité et conversion." },
  { icon: Heart, title: 'Transparence totale', desc: 'Prix affichés, périmètres écrits, devis avant tout. Vous savez toujours où en est votre projet et ce que vous payez.' },
  { icon: Users, title: 'Interlocuteur unique', desc: 'Web, Google, caisse, dépannage, formation — un seul numéro pour tout. Fini les prestataires multiples qui se renvoient la balle.' },
];

const PILLARS = [
  { icon: Globe, title: 'Rayonner', desc: 'Création de site, visibilité Google Business Profile, synchronisation annuaires. Vous êtes trouvé quand un client cherche autour de lui.' },
  { icon: ShoppingCart, title: "S'organiser", desc: 'Logiciel de caisse Clé en Main (Hiboutik). Installation, paramétrage, formation. Vous n\'avez plus qu\'à encaisser.' },
  { icon: Wrench, title: 'Sécuriser', desc: 'Dépannage Pro sur site ou à distance (réseau, messagerie, poste). Conciergerie Digitale mensuelle pour les clients abonnés.' },
  { icon: GraduationCap, title: 'Apprendre', desc: 'Formation à domicile pour particuliers : messagerie, sécurité, smartphone, tablette.' },
];

/**
 * Present the company story, values, and guarantees.
 */
export default function AboutPage() {
  return (
    <>
      <SEO
        title="À propos — Qui est INFORMEL-TIC ?"
        description="Artisan numérique local basé à Lourches (59). Site web, visibilité Google, logiciel de caisse, dépannage et formation. Découvrez notre histoire, nos valeurs et nos garanties."
        url="https://informel-tic.com/a-propos"
      />

      {/* Header */}
      <section className="hero-bg about-hero">
        <div className="container-lg">
          <div className="badge about-badge">À propos</div>
          <h1 className="font-display about-title">Qui est <span className="gradient-text">INFORMEL-TIC</span> ?</h1>
          <p className="about-lead">
            Un interlocuteur unique, local et transparent pour toute votre vie numérique.
            Site web, visibilité locale, logiciels métiers, dépannage et formation — à Lourches et alentours (59).
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="about-section">
        <div className="container-md">
          <div className="glass glass--padded">
            <div className="info-header">
              <div className="icon-wrap">
                <Zap size={20} className="icon-accent-contrast" aria-hidden="true" />
              </div>
              <div>
                <h2 className="info-title">INFORMEL-TIC</h2>
                <p className="muted small">Entrepreneur Individuel — Lourches (59)</p>
              </div>
            </div>

            <div className="story-text">
              <p>
                INFORMEL-TIC a été fondée par <strong className="text-strong">Rachid Chon</strong>, entrepreneur local basé à Lourches, dans le Nord. L'idée est née d'un constat double : beaucoup de commerçants et artisans ont des activités de qualité mais une présence numérique inexistante ou mal gérée — et à côté, des particuliers se sentent dépassés par leur propre équipement.
              </p>
              <p>
                INFORMEL-TIC est la réponse : <strong className="text-strong">un seul interlocuteur de confiance</strong> pour tout ce qui touche au numérique. Du site web sur-mesure à la fiche Google, du logiciel de caisse à la formation pour les seniors — sans jargon, sans surprise sur la facture.
              </p>
              <p>
                Notre conviction : le numérique ne doit pas être une source de stress. C'est un levier de développement, à condition d'être bien accompagné.
              </p>
            </div>
          </div>

          {/* 4 Pillars */}
          <h2 className="font-display values-title">4 domaines d'expertise</h2>
          <div className="values-grid">
            {PILLARS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass glass-hover glass--value">
                <div className="value-icon-wrap">
                  <Icon size={20} className="value-icon" aria-hidden="true" />
                </div>
                <h3 className="value-title">{title}</h3>
                <p className="value-desc">{desc}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <h2 className="font-display values-title">Nos valeurs</h2>
          <div className="values-grid">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass glass-hover glass--value">
                <div className="value-icon-wrap">
                  <Icon size={20} className="value-icon" aria-hidden="true" />
                </div>
                <h3 className="value-title">{title}</h3>
                <p className="value-desc">{desc}</p>
              </div>
            ))}
          </div>

          {/* Guarantees */}
          <div className="glass guarantees-card">
            <div className="info-header">
              <Award size={22} className="value-icon" aria-hidden="true" />
              <h2 className="info-title">Nos garanties</h2>
            </div>
            <div className="values-grid">
              {[
                'Sites 100% sur-mesure, sans WordPress ni plugin tiers',
                'Code source livré — vous en êtes propriétaire',
                'Prix affichés et périmètres écrits — aucune surprise',
                'Facturation en 2× sur tout projet > 490 € (50%/50%)',
                'Engagement 3 mois minimum sur les abonnements',
                'Intervention locale — Lourches et environs (59)',
              ].map((item) => (
                <div key={item} className="guarantee-item">
                  <span className="accent-check">✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Mécénat de compétences */}
          <div className="glass glass--small">
            <h3 className="info-title">🤝 Mécénat de compétences associatif</h3>
            <p className="value-desc">
              INFORMEL-TIC réserve du temps pour accompagner des associations loi 1901 à but non lucratif ou d'utilité sociale.
              Maximum 1 projet actif à la fois, périmètre défini par un brief écrit.
              Délai de livraison non garanti — traité hors plages commerciales.
            </p>
            <div className="text-right">
              <Link to="/contact" className="btn-secondary">Déposer une demande</Link>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/contact" className="btn-primary">
              Parlons de votre projet <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

