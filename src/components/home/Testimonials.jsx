import { Star } from 'lucide-react';
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

const TESTIMONIALS = [
  { 
    name: 'Sophie M.', role: 'Boulangerie artisanale', 
    text: "Notre site charge en un clin d'œil et les clients nous trouvent facilement sur Google. Chiffre d'affaires en hausse de 30% en 3 mois.", 
    stars: 5 
  },
  { 
    name: 'Karim L.', role: 'Plombier chauffagiste', 
    text: "Avant j'existais à peine sur internet. Maintenant je reçois 10 demandes de devis par semaine depuis mon site. Excellent travail !", 
    stars: 5 
  },
  { 
    name: 'Nathalie P.', role: 'Institut de beauté', 
    text: "Site magnifique, moderne et en accord avec mon image de marque. Réactivité parfaite sur mobile. Je recommande vivement.", 
    stars: 5 
  },
];

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
          {TESTIMONIALS.map(({ name, role, text, stars }, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
