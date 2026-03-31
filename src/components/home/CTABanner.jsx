import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRef, useEffect } from 'react';

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
 * Wrap CTA content so it reuses the shared reveal animation.
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

/**
 * Render the final call-to-action banner on the homepage.
 */
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
                Prêt à passer au numérique sans stress ?
              </h2>
              <p className="cta-desc">
                Décrivez votre situation en 2 lignes — pro ou particulier.
                On vous répond sous 24h avec un devis personnalisé. <strong>Gratuit, sans engagement.</strong>
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn-primary btn-lg">
                  Obtenir mon devis gratuit <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link to="/offres" className="btn-secondary btn-lg">
                  Voir tous nos tarifs
                </Link>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
