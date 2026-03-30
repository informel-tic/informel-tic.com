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
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function CTABanner() {
  return (
    <section className="section-padding">
      <div className="container-md">
        <RevealSection>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-orange-400/5 to-transparent z-0" />
            <div className="absolute inset-0 border border-orange-500/10 rounded-3xl z-0" />
            <div className="relative z-10 p-[clamp(2rem,6vw,4rem)] text-center">
              <h2 className="font-display font-black text-[clamp(1.75rem,4vw,3rem)] text-[color:var(--text)] mb-4">
                Prêt à lancer votre projet ?
              </h2>
              <p className="text-[color:var(--muted)] text-lg mb-8 max-w-2xl mx-auto">
                Décrivez-nous votre activité. Nous vous proposerons la solution idéale gratuitement et sans engagement.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary text-base py-3 px-8 shadow-orange-500/20 shadow-lg">
                  Je veux une visibilité maximale <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link to="/offres" className="btn-secondary text-base py-3 px-8 bg-black/20 hover:bg-black/40">
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
