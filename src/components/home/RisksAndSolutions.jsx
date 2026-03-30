import { Search, MapPin, Navigation, Zap, Palette, ArrowRight, ShieldAlert } from 'lucide-react';
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

const RISKS = [
  { 
    icon: Search, title: 'Mauvais Référencement (SEO)', subtitle: 'Vous êtes invisible sur Google', 
    problem: 'Vos clients cherchent un service dans votre ville, mais ce sont vos concurrents qui apparaissent.',
    solution: 'Ciblage précis avec un SEO local agressif. Vous devenez le premier choix dans votre zone de chalandise.',
    iconColor: 'var(--error)', bg: 'rgba(185, 28, 28, 0.08)'
  },
  { 
    icon: MapPin, title: 'Profil Google Business Profile', subtitle: 'Laissé vide, incomplet ou piraté', 
    problem: 'Horaires erronés, pas de photos, pas de réponses aux avis. Vous perdez la confiance des clients locaux.',
    solution: 'Création et sécurisation de votre fiche (double authentification). Photos pros, horaires exacts et avis gérés.',
    iconColor: 'var(--accent)', bg: 'rgba(249,115,22,0.08)'
  },
  { 
    icon: Navigation, title: 'Incohérences dans les Annuaires', subtitle: 'Infos dispersées (Waze, Apple Maps)', 
    problem: 'Une adresse différente sur Waze et Google Maps = GPS perdu = Client mécontent.',
    solution: 'Synchronisation parfaite des données de votre commerce sur tous les annuaires vitaux.',
    iconColor: 'var(--accent)', bg: 'rgba(249,115,22,0.08)'
  },
  { 
    icon: Zap, title: 'Un Site Lent ou Non Sécurisé', subtitle: 'Impact fort sur la rétention', 
    problem: 'Site basé sur un CMS lourd qui met 5 secondes à charger. 70% des visiteurs abandonnent avant même de payer.',
    solution: 'Sites créés sur-mesure, ultra-rapides (chargement < 1s), hébergés sur serveurs premium. 100% sécurisés.',
    iconColor: 'var(--error)', bg: 'rgba(185, 28, 28, 0.08)'
  },
  { 
    icon: Palette, title: 'Une Identité Visuelle Dispersée', subtitle: 'Site, Réseaux, Impression', 
    problem: 'Logos et couleurs différents selon la plateforme. Vos clients ne reconnaissent pas votre marque.',
    solution: 'Application d\'une charte graphique unifiée et cohérente sur tous vos supports numériques et imprimés.',
    iconColor: 'var(--accent-2)', bg: 'rgba(249, 115, 22, 0.08)' 
  },
];

export default function RisksAndSolutions() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-lg">
        <RevealSection>
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,3rem)] text-[color:var(--text)] mb-4">
              Les <span className="text-[color:var(--error)]">Risques</span> des Outils Mal Utilisés
            </h2>
            <p className="text-[color:var(--muted)] max-w-2xl mx-auto text-lg">
              De nombreux commerçants utilisent des outils inadaptés. Voici les pièges les plus fréquents, et comment nous vous en protégeons.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RISKS.map(({ icon: Icon, title, subtitle, problem, solution, iconColor, bg }, i) => (
            <RevealSection key={title} delay={i * 80}>
              <div className="glass glass-hover rounded-2xl p-6 h-full flex flex-col relative overflow-hidden group">
                
                {/* Header: Icon & Title */}
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: bg }}>
                    <Icon size={24} style={{ color: iconColor }} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-[color:var(--text)] font-bold text-lg leading-tight">{title}</h3>
                    <p className="text-[color:var(--error)] text-xs font-semibold mt-1 flex items-center gap-1">
                      <ShieldAlert size={12} aria-hidden="true" /> {subtitle}
                    </p>
                  </div>
                </div>

                {/* Problem vs Solution Content */}
                <div className="flex-1 flex flex-col gap-4 relative z-10">
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <p className="text-gray-600 text-sm italic">"{problem}"</p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-start gap-2">
                      <ArrowRight size={16} className="text-[color:var(--accent)] shrink-0 mt-0.5" aria-hidden="true" />
                        <p className="text-gray-800 text-sm font-medium leading-relaxed">
                        <span className="text-[color:var(--accent)] font-bold block mb-0.5">La Solution :</span>
                        {solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
