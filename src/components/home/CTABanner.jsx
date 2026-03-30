import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRef, useEffect } from 'react';

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

export default function CTABanner() {
  return (
    <section className="section-padding">
      <div className="container-md">
        <RevealSection>
          <div className="cta-card">
            <div className="cta-card__bg" />
            <div className="cta-card__border" />
            <div className="cta-card__body">
              <h2 className="cta-title">
                Prêt à lancer votre projet ?
              </h2>
              <p className="cta-desc">
                Décrivez-nous votre activité. Nous vous proposerons la solution idéale gratuitement et sans engagement.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn-primary btn-lg">
                  Je veux une visibilité maximale <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link to="/offres" className="btn-secondary btn-lg">
                  Voir nos packs
                </Link>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
