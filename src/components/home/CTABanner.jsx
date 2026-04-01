import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { CONTACT_PHONE } from '../../config';

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
    <section className="cta-section">
      <div className="container-lg">
        <RevealSection>
          <div className="cta-card cta-card--premium">
            <div className="cta-card__bg" />
            <div className="cta-card__pattern" aria-hidden="true" />
            <div className="cta-card__border" />
            <div className="cta-card__body">
              <div className="cta-badge">
                <Phone size={14} aria-hidden="true" />
                Diagnostic gratuit
              </div>
              <h2 className="cta-title">
                Prêt à passer au numérique <span className="gradient-text">sans stress ?</span>
              </h2>
              <p className="cta-desc">
                Décrivez votre situation en 2 lignes — pro ou particulier.
                On vous répond sous 24h avec un devis personnalisé. <strong>Gratuit, sans engagement.</strong>
              </p>
              <div className="cta-actions">
                <Link to="/contact?subject=devis" className="btn-primary btn-lg">
                  Obtenir mon devis gratuit <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="btn-secondary btn-lg">
                  <Phone size={16} aria-hidden="true" />
                  Nous appeler
                </a>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
