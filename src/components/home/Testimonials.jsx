import { Star } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';

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

// No real testimonials yet — startup mode. Keep array empty and show launch message.
const TESTIMONIALS = [];

export default function Testimonials() {
  return (
    <section className="section-padding section-alt">
      <div className="container-lg">
        <RevealSection>
          <div className="section-header">
            <h2 className="section-title">
              Ils nous font confiance
            </h2>
            <p className="section-subtitle">
              Des résultats concrets pour des professionnels locaux.
            </p>
          </div>
        </RevealSection>

        <div className="grid-3col">
          {TESTIMONIALS.length === 0 ? (
            <RevealSection>
              <div className="glass glass-hover testimonial-card">
                <p className="testimonial-quote">Nous lançons l'activité — soyez parmi les premiers clients locaux.</p>
                <div className="testimonial-footer">
                  <p className="testimonial-name">{config.OWNER_NAME} — Auto-entrepreneur</p>
                  <p className="testimonial-role">Basé à {config.SERVICE_AREA}</p>
                </div>
                <ul className="launch-benefits">
                  <li>Offre de lancement : audit gratuit pour les 5 premiers clients</li>
                  <li>Code source livré • Optimisation SEO local</li>
                  <li>Travail de proximité — intervention locale et accompagnement personnalisé</li>
                </ul>
                <div style={{marginTop:12}}>
                  <Link to="/contact?early=1" className="btn-primary">Devenez client pilote</Link>
                </div>
              </div>
            </RevealSection>
          ) : (
            TESTIMONIALS.map(({ name, role, text, stars }, i) => (
              <RevealSection key={name} delay={i * 100}>
                <div className="glass glass-hover testimonial-card">
                  <div className="stars">
                    {[...Array(stars)].map((_, j) => (
                      <Star key={j} size={16} className="star" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="testimonial-quote">"{text}"</p>
                  <div className="testimonial-footer">
                    <p className="testimonial-name">{name}</p>
                    <p className="testimonial-role">{role}</p>
                  </div>
                </div>
              </RevealSection>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
