import { Link } from 'react-router-dom';
import { Zap, Code2, Heart, Target, Users, Award, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const VALUES = [
  { icon: Code2, title: 'Code propre', desc: 'Chaque projet est développé à partir de zéro, sans templates, sans plugins. Un code maintenable et performant.' },
  { icon: Target, title: 'Centré résultats', desc: "Un site n'est pas un projet artistique. C'est un outil commercial. Chaque décision est orientée conversion." },
  { icon: Heart, title: 'Relation de confiance', desc: 'Transparence totale sur les prix, les délais et les méthodes. Vous savez toujours où en est votre projet.' },
  { icon: Users, title: 'Artisans & PME', desc: 'Nous connaissons vos contraintes : budget, temps, compétences tech limitées. Nos offres sont conçues pour vous.' },
];

export default function AboutPage() {
  return (
    <>
      <SEO title="À propos — INFORMEL-TIC" description="INFORMEL-TIC — Développement web sur-mesure pour artisans et PME. Transparence, performance, code livré." />

      {/* Header */}
      <section className="hero-bg about-hero">
        <div className="container-lg">
          <div className="badge about-badge">À propos</div>
          <h1 className="font-display about-title">Qui est <span className="gradient-text">INFORMEL-TIC</span> ?</h1>
          <p className="about-lead">Une micro-entreprise fondée dans le Nord de la France, spécialisée dans le développement web sur-mesure pour les professionnels locaux.</p>
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
                INFORMEL-TIC a été fondée par <strong className="text-strong">Rachid Chon</strong>, développeur passionné basé à Lourches, dans le Nord de la France. L'entreprise est née d'un constat simple : beaucoup de commerces et artisans ont des activités de qualité, mais une présence en ligne inexistante ou inefficace.
              </p>
              <p>
                Contrairement aux agences qui vendent des sites WordPress à la chaîne, INFORMEL-TIC produit du code sur-mesure pour chaque client. Résultat : des sites <strong className="text-strong">3 à 5× plus rapides</strong>, plus sécurisés, et parfaitement adaptés à votre image de marque.
              </p>
              <p>
                Notre conviction : votre site web doit être votre meilleur commercial. Pas juste une carte de visite numérique, mais un véritable générateur de clients locaux.
              </p>
            </div>
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
                '100% sur-mesure, sans WordPress ni logiciel tiers',
                'Code source livré — vous êtes propriétaire',
                'Sites ultra-rapides, optimisés PageSpeed',
                'Responsive parfait sur tout appareil',
                'Sécurité SSL et HTTPS inclus',
                'Référencement Google local inclus',
              ].map((item) => (
                <div key={item} className="guarantee-item">
                  <span className="accent-check">✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Mécénat de compétences */}
          <div className="glass glass--small">
            <h3 className="info-title">Mécénat de compétences</h3>
            <p className="value-desc">
              INFORMEL-TIC réserve une part de son temps annuel pour accompagner des associations et projets locaux gratuitement via du mécénat de compétences. Si vous êtes une association locale, contactez-nous pour étudier ensemble votre besoin.
            </p>
            <div className="text-right">
              <Link to="/contact" className="btn-secondary">En savoir plus</Link>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/contact" className="btn-primary">
              Demander un devis <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

