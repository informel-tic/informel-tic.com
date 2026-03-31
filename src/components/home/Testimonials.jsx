import { Shield, FileCheck, Clock, Handshake, Sparkles } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Return a ref that reveals its element when it enters the viewport.
 */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/**
 * Wrap testimonial-style content so it shares the reveal animation.
 */
function RevealSection({ children, className = '', delay = 0 }) {
  const ref = useReveal();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
  }, [delay, ref]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

const COMMITMENTS = [
  {
    icon: FileCheck,
    title: 'Devis écrit & détaillé',
    desc: 'Prix affichés, périmètre précis, aucune surprise. Vous validez avant qu\'on commence.',
  },
  {
    icon: Shield,
    title: 'Code source livré',
    desc: 'Votre site vous appartient à 100%. Pas de verrouillage technique, pas de plugin propriétaire.',
  },
  {
    icon: Clock,
    title: 'Réponse sous 24h',
    desc: 'Chaque demande reçoit une réponse dans la journée ouvrable. Un vrai interlocuteur, pas un ticket.',
  },
  {
    icon: Handshake,
    title: 'Satisfait ou on corrige',
    desc: 'Chaque livraison inclut une phase de retour. On ajuste jusqu\'à ce que ce soit parfait.',
  },
];

export default function Testimonials() {
  /**
   * Render the trust and commitment section on the homepage.
   */
  return (
    <section className="section-padding section-alt">
      <div className="container-lg">
        <RevealSection>
          <div className="section-header">
            <div className="badge hero-badge hero-badge--glow" style={{ marginBottom: '1.5rem' }}>
              <Sparkles size={14} aria-hidden="true" />
              Nos engagements
            </div>
            <h2 className="section-title">
              Pourquoi nous faire confiance ?
            </h2>
            <p className="section-subtitle">
              Des engagements concrets, pas des promesses en l'air.
              Chaque projet est traité avec la rigueur d'une agence et l'écoute d'un artisan.
            </p>
          </div>
        </RevealSection>

        <div className="grid-2x2">
          {COMMITMENTS.map(({ icon: Icon, title, desc }, i) => (
            <RevealSection key={title} delay={i * 100}>
              <div className="glass glass-hover commitment-card">
                <div className="commitment-icon-wrap">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="commitment-title">{title}</h3>
                <p className="commitment-desc">{desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={400}>
          <div className="trust-cta-strip">
            <p className="trust-cta-text">
              Activité récemment lancée — <strong>les 5 premiers clients bénéficient d'un audit gratuit.</strong>
            </p>
            <Link to="/contact?early=1" className="btn-primary">
              Devenir client pilote
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
