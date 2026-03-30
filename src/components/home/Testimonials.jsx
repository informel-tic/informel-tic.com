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
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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
    <section className="section-padding bg-gray-50">
      <div className="container-lg">
        <RevealSection>
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-[color:var(--text)] mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-[color:var(--muted)] text-lg">
              Des résultats concrets pour des professionnels locaux.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ name, role, text, stars }, i) => (
            <RevealSection key={name} delay={i * 100}>
              <div className="glass glass-hover rounded-2xl p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(stars)].map((_, j) => (
                    <Star key={j} size={16} className="text-[color:var(--accent-2)] fill-[color:var(--accent-2)]" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-[color:var(--muted)] text-[0.9375rem] leading-relaxed italic flex-1">
                  "{text}"
                </p>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-[color:var(--text)] font-semibold text-[0.9375rem]">{name}</p>
                  <p className="text-[color:var(--muted)] text-xs mt-1">{role}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
