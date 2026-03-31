import { Search, MapPin, Laptop, Zap, Wrench, GraduationCap, ArrowRight, ShieldAlert } from 'lucide-react';
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
    icon: Search, title: 'Invisible sur Google', subtitle: 'Pas de fiche GBP / fiche incomplète', 
    problem: 'Vos clients cherchent votre service dans votre ville — mais c\'est la concurrence qui apparaît. Votre fiche est vide, les horaires sont faux, zéro photo.',
    solution: 'Pack Radar Local (290 €) : fiche GBP optimisée, 3 annuaires synchronisés, livraison 5 jours. ROI immédiat.',
    iconColor: 'var(--error)', bg: 'rgba(185, 28, 28, 0.08)'
  },
  { 
    icon: MapPin, title: 'Site absent ou inefficace', subtitle: 'Carte de visite numérique morte', 
    problem: 'Vous avez un site WordPress qui met 5s à charger, ou pire : aucun site. 53% des visiteurs partent si le chargement dépasse 3s.',
    solution: 'Site sur-mesure ultra-rapide (< 1s). Code livré, vous en êtes propriétaire. Aucune dépendance plugin.',
    iconColor: 'var(--accent)', bg: 'rgba(249,115,22,0.08)'
  },
  { 
    icon: Laptop, title: 'Caisse mal configurée', subtitle: 'Pertes de temps & erreurs comptables', 
    problem: 'Logiciel de caisse installé mais jamais paramétré correctement. TVA mal affectée, articles en vrac, tickets illisibles.',
    solution: 'Pack Caisse Clé en Main : analyse, paramétrage complet (Hiboutik), formation 2h sur site. Opérationnel le jour J.',
    iconColor: 'var(--accent)', bg: 'rgba(249,115,22,0.08)'
  },
  { 
    icon: Zap, title: 'Panne au mauvais moment', subtitle: 'PC bloqué, messagerie muette, réseau coupé', 
    problem: 'Une panne pro sans interlocuteur de confiance = journée perdue, devis ratés, clients qui ne rappellent pas.',
    solution: 'Dépannage Pro 60 €/h — intervention 48h sur site ou à distance. Réseau, poste, messagerie, imprimante.',
    iconColor: 'var(--error)', bg: 'rgba(185, 28, 28, 0.08)'
  },
  { 
    icon: Wrench, title: 'PC qui ralentit', subtitle: 'Particuliers : virus, lenteurs, récupération', 
    problem: 'Votre PC rame, affiche des popups bizarres ou ne démarre plus. Acheter un nouveau coûte 500 €+. Peut-être qu\'on peut réparer.',
    solution: 'Diagnostic PC 49 € (forfait) pour identifier le problème avant de dépenser. Dépannage 45 €/h si on intervient.',
    iconColor: 'var(--accent)', bg: 'rgba(249,115,22,0.08)' 
  },
  { 
    icon: GraduationCap, title: 'Se sentir dépassé', subtitle: 'Arnaques, messagerie, smartphone', 
    problem: 'Phishing, faux conseillers, mot de passe oublié, WhatsApp qui ne marche plus. Trop de jargon, personne pour expliquer simplement.',
    solution: 'Formation à domicile 45 €/h — à votre rythme, sur vos propres appareils.',
    iconColor: 'var(--accent)', bg: 'rgba(249,115,22,0.08)' 
  },
];

export default function RisksAndSolutions() {
  return (
    <section className="section-padding section-alt">
      <div className="container-lg">
        <RevealSection>
          <div className="section-header">
            <h2 className="section-title">
              Vos <span className="text-error">problèmes</span>, nos solutions
            </h2>
            <p className="section-subtitle">
              Web, visibilité Google, logiciel de caisse, dépannage ou formation — 
              un interlocuteur unique pour chaque situation du quotidien numérique.
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
