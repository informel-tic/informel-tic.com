import { Link } from 'react-router-dom';
import { Zap, Code2, Heart, Target, Users, Award, ArrowRight } from 'lucide-react';

const VALUES = [
  { icon: Code2, title: 'Code propre', desc: 'Chaque projet est développé à partir de zéro, sans templates, sans plugins. Un code maintenable et performant.' },
  { icon: Target, title: 'Centré résultats', desc: "Un site n'est pas un projet artistique. C'est un outil commercial. Chaque décision est orientée conversion." },
  { icon: Heart, title: 'Relation de confiance', desc: 'Transparence totale sur les prix, les délais et les méthodes. Vous savez toujours où en est votre projet.' },
  { icon: Users, title: 'Artisans & PME', desc: 'Nous connaissons vos contraintes : budget, temps, compétences tech limitées. Nos offres sont conçues pour vous.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-bg" style={{ paddingTop: '10rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div className="container-lg">
          <div className="badge" style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', color: '#a5b4fc', marginBottom: '1.5rem', display: 'inline-flex' }}>
            À propos
          </div>
          <h1 className="font-display" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.75rem)', color: 'white', marginBottom: '1rem' }}>
            Qui est <span className="gradient-text">INFORMEL-TIC</span> ?
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto' }}>
            Une micro-entreprise fondée dans le Nord de la France, spécialisée dans le développement web sur-mesure pour les professionnels locaux.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ paddingBottom: '4rem' }}>
        <div className="container-md">
          <div className="glass" style={{ borderRadius: '1rem', padding: '2.5rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'linear-gradient(135deg, #4f46e5, #34d399)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={20} style={{ color: 'white' }} />
              </div>
              <div>
                <h2 style={{ color: 'white', fontWeight: 700, fontSize: '1.25rem' }}>INFORMEL-TIC</h2>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Entrepreneur Individuel — Lourches (59)</p>
              </div>
            </div>

            <div style={{ color: '#cbd5e1', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                INFORMEL-TIC a été fondée par <strong style={{ color: 'white' }}>Rachid Chon</strong>, développeur passionné basé à Lourches, dans le Nord de la France. L'entreprise est née d'un constat simple : beaucoup de commerces et artisans ont des activités de qualité, mais une présence en ligne inexistante ou inefficace.
              </p>
              <p>
                Contrairement aux agences qui vendent des sites WordPress à la chaîne, INFORMEL-TIC produit du code sur-mesure pour chaque client. Résultat : des sites <strong style={{ color: 'white' }}>3 à 5× plus rapides</strong>, plus sécurisés, et parfaitement adaptés à votre image de marque.
              </p>
              <p>
                Notre conviction : votre site web doit être votre meilleur commercial. Pas juste une carte de visite numérique, mais un véritable générateur de clients locaux.
              </p>
            </div>
          </div>

          {/* Values */}
          <h2 className="font-display" style={{ fontWeight: 700, fontSize: '1.875rem', color: 'white', textAlign: 'center', marginBottom: '2.5rem' }}>
            Nos valeurs
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass glass-hover" style={{ borderRadius: '1rem', padding: '1.75rem' }}>
                <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: 'rgba(99,102,241,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Icon size={20} style={{ color: '#818cf8' }} />
                </div>
                <h3 style={{ color: 'white', fontWeight: 700, marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Guarantees */}
          <div className="glass" style={{ borderRadius: '1rem', padding: '2rem', background: 'linear-gradient(135deg, rgba(52,211,153,0.1), rgba(52,211,153,0.05))', border: '1px solid rgba(52,211,153,0.2)', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Award size={22} style={{ color: '#34d399' }} />
              <h2 style={{ color: 'white', fontWeight: 700, fontSize: '1.25rem' }}>Nos garanties</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
              {[
                '100% sur-mesure, sans WordPress ni logiciel tiers',
                'Code source livré — vous êtes propriétaire',
                'Sites ultra-rapides, optimisés PageSpeed',
                'Responsive parfait sur tout appareil',
                'Sécurité SSL et HTTPS inclus',
                'Référencement Google local inclus',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#e2e8f0' }}>
                  <span style={{ color: '#34d399', fontWeight: 700 }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
              Discutons de votre projet <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
