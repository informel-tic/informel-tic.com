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

function RevealSection({ children, className = '', delay = 0, vars = {} }) {
  const ref = useReveal();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
    Object.entries(vars).forEach(([k, v]) => el.style.setProperty(k, v));
  }, [delay, vars, ref]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
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
    <section className="section-padding section-alt">
      <div className="container-lg">
        <RevealSection>
          <div className="section-header">
            <h2 className="section-title">
              Les <span className="text-error">Risques</span> des Outils Mal Utilisés
            </h2>
            <p className="section-subtitle">
              De nombreux commerçants utilisent des outils inadaptés. Voici les pièges les plus fréquents, et comment nous vous en protégeons.
            </p>
          </div>
        </RevealSection>

        <div className="grid-3col">
          {RISKS.map(({ icon: Icon, title, subtitle, problem, solution, iconColor, bg }, i) => (
            <RevealSection key={title} delay={i * 80} vars={{ '--risk-bg': bg, '--risk-icon': iconColor }}>
              <div className="glass glass-hover risk-card">

                {/* Header: Icon & Title */}
                  <div className="risk-card__header">
                  <div className="risk-icon-wrap">
                    <Icon size={24} className="risk-icon" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="risk-title">{title}</h3>
                    <p className="risk-subtitle">
                      <ShieldAlert size={12} aria-hidden="true" /> {subtitle}
                    </p>
                  </div>
                </div>

                {/* Problem vs Solution Content */}
                <div className="risk-card__body">
                  <div className="risk-problem">
                    <p>"{problem}"</p>
                  </div>
                  <div className="risk-solution-wrap">
                    <div className="risk-solution">
                      <ArrowRight size={16} className="icon-accent risk-arrow" aria-hidden="true" />
                      <p className="solution-text">
                        <span className="solution-label">La Solution :</span>
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
