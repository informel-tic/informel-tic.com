import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap, Globe, Shield, Search, Smartphone, Star,
  ArrowRight, CheckCircle, Code2, Rocket
} from 'lucide-react';

/* ── Intersection Observer hook (reveal on scroll) ─── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── Typing effect ─────────────────────────────────── */
const WORDS = ['ultra-rapide.', 'sur-mesure.', 'sans WordPress.', 'pour vous.'];
function TypingWord() {
  const [idx, setIdx]   = useState(0);
  const [text, setText] = useState('');
  const [del, setDel]   = useState(false);

  useEffect(() => {
    const word = WORDS[idx];
    let timeout;
    if (!del && text.length < word.length) {
      timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 80);
    } else if (!del && text.length === word.length) {
      timeout = setTimeout(() => setDel(true), 2000);
    } else if (del && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (del && text.length === 0) {
      setDel(false);
      setIdx((i) => (i + 1) % WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [text, del, idx]);

  return <span className="gradient-text typing-cursor">{text}</span>;
}

/* ── Stats ─────────────────────────────────────────── */
const STATS = [
  { value: '100%', label: 'Sur-mesure' },
  { value: '<2s',  label: 'Temps de chargement' },
  { value: '100',  label: 'Score PageSpeed' },
  { value: '24h',  label: 'Support réactif' },
];

/* ── Features ──────────────────────────────────────── */
const FEATURES = [
  { icon: Rocket,     title: 'Ultra-rapide',       desc: "Chargement en moins de 2 secondes. Score PageSpeed proche de 100. Vos clients n'attendent pas.", iconColor: 'var(--accent)' },
  { icon: Search,     title: 'Optimisé Google',     desc: 'SEO on-page, balisage sémantique, fiche Google My Business. Apparaissez en première page localement.', iconColor: 'var(--accent)' },
  { icon: Smartphone, title: 'Responsive parfait',  desc: "Affiché impeccablement sur mobile, tablette et desktop. Aucun compromis sur l'expérience utilisateur.", iconColor: 'var(--accent)' },
  { icon: Code2,      title: 'Code source livré',   desc: 'Vous êtes propriétaire de votre site à 100%. Code source livré à la fin du projet. Zéro dépendance.', iconColor: 'var(--accent)' },
  { icon: Shield,     title: 'Sécurité SSL',        desc: 'Certificat SSL inclus, connexion HTTPS sécurisée, protection contre les failles communes.', iconColor: 'var(--accent)' },
  { icon: Globe,      title: 'Sans WordPress',      desc: 'Code propre, sans plugins obsolètes ni failles de sécurité. Performance native, maintenance simplifiée.', iconColor: 'var(--accent)' },
];

/* ── Testimonials ────────────────────────────────── */
const TESTIMONIALS = [
  { name: 'Sophie M.', role: 'Boulangerie artisanale', text: "Notre site charge en un clin d'œil et les clients nous trouvent facilement sur Google. Chiffre d'affaires en hausse de 30% en 3 mois.", stars: 5 },
  { name: 'Karim L.', role: 'Plombier chauffagiste', text: "Avant j'existais à peine sur internet. Maintenant je reçois 10 demandes de devis par semaine depuis mon site. Excellent travail !", stars: 5 },
  { name: 'Nathalie P.', role: 'Institut de beauté', text: "Site magnifique, moderne et en accord avec mon image de marque. Réactivité parfaite sur mobile. Je recommande vivement INFORMEL-TIC.", stars: 5 },
];

/* ── RevealSection wrapper ─────────────────────────── */
function RevealSection({ children, className = '', delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════ */}
      <section className="hero-bg grid-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        {[...Array(6)].map((_, i) => (
          <span key={i} className="particle" style={{ width: `${4 + i * 2}px`, height: `${4 + i * 2}px`, left: `${10 + i * 15}%`, background: i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)', animationDuration: `${8 + i * 2}s`, animationDelay: `${i * 1.5}s` }} />
        ))}

        <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '6rem 1.5rem 5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="badge" style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.18)', color: 'var(--accent)', marginBottom: '2rem' }}>
            <Zap size={12} style={{ color: 'var(--accent)' }} aria-hidden="true" />
            Développement web sur-mesure · Depuis Lourches (59)
          </div>

          <h1 className="font-display" style={{ fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--text)', lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '56rem' }}>
            Votre site web<br /><TypingWord />
          </h1>

          <p style={{ color: 'var(--muted)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: '42rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            INFORMEL-TIC développe des sites web professionnels <strong style={{ color: 'var(--text)' }}>100% sur-mesure</strong>, sans WordPress, ultra-rapides et optimisés pour vous faire gagner des clients localement.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
              Demander un devis <ArrowRight size={18} />
            </Link>
            <Link to="/offres" className="btn-secondary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
              Voir nos offres
            </Link>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem', fontSize: '0.875rem', color: 'var(--muted)' }}>
            {['Sans engagement', 'Devis gratuit 24h', 'Code source livré', 'SSL inclus'].map((item) => (
              <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={14} style={{ color: 'var(--accent-2)', flexShrink: 0 }} /> {item}
              </span>
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: '#475569' }} className="animate-bounce">
          <span style={{ fontSize: '0.75rem' }}>Défiler</span>
          <div style={{ width: '1px', height: '2rem', background: 'linear-gradient(to bottom, #475569, transparent)' }} />
        </div>
      </section>

      {/* ══ STATS ════════════════════════════════════════ */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(17,17,24,0.3)' }}>
        <div className="container-lg">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="stat-number gradient-text">{value}</p>
                <p style={{ color: 'var(--text)', fontSize: '0.875rem', marginTop: '0.5rem' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES ════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-lg">
          <RevealSection>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: 'var(--text)', marginBottom: '1rem' }}>
                Pourquoi choisir <span className="gradient-text">INFORMEL-TIC ?</span>
              </h2>
              <p style={{ color: 'var(--muted)', maxWidth: '36rem', margin: '0 auto', fontSize: '1.125rem' }}>
                Chaque site est unique. Chaque ligne de code, réfléchie. Voici ce que vous obtenez quand vous travaillez avec nous.
              </p>
            </div>
          </RevealSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {FEATURES.map(({ icon: Icon, title, desc, iconColor }, i) => (
              <RevealSection key={title} delay={i * 80}>
                <div className="glass glass-hover" style={{ borderRadius: '1rem', padding: '2rem', height: '100%' }}>
                    <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <Icon size={22} strokeWidth={1.8} style={{ color: iconColor }} aria-hidden="true" />
                  </div>
                  <h3 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.75rem' }}>{title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ════════════════════════════════ */}
      <section className="section-padding" style={{ background: 'rgba(17,17,24,0.5)' }}>
        <div className="container-md">
          <RevealSection>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--text)', marginBottom: '1rem' }}>
                Comment ça fonctionne ?
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '1.125rem' }}>Un processus simple, transparent et efficace.</p>
            </div>
          </RevealSection>

          {[
            { step: '01', title: 'Devis gratuit', desc: 'Vous nous décrivez votre projet. Nous analysons vos besoins et vous proposons une offre adaptée sous 24h.' },
            { step: '02', title: 'Développement', desc: "Nous codons votre site sur-mesure. Vous suivez l'avancement et donnez vos retours à chaque étape." },
            { step: '03', title: 'Livraison', desc: 'Votre site est mis en ligne sur votre hébergement. Vous récupérez le code source complet. Vous êtes propriétaire.' },
            { step: '04', title: 'Suivi & Maintenance', desc: 'Mises à jour de sécurité, modifications de contenu, optimisation continue. Nous restons à vos côtés.' },
          ].map(({ step, title, desc }, i) => (
            <RevealSection key={step} delay={i * 100}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
                <div style={{ flexShrink: 0, width: '3rem', height: '3rem', borderRadius: '50%', background: 'rgba(249,115,22,0.12)', border: '2px solid rgba(249,115,22,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem', color: 'var(--accent-2)' }} className="font-display">
                  {step}
                </div>
                <div className="glass" style={{ borderRadius: '1rem', padding: '1.5rem', flex: 1 }}>
                  <h3 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>{title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ══ TESTIMONIALS ════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-lg">
          <RevealSection>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--text)', marginBottom: '1rem' }}>
                Ils nous font confiance
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '1.125rem' }}>Des résultats concrets pour des professionnels locaux.</p>
            </div>
          </RevealSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {TESTIMONIALS.map(({ name, role, text, stars }, i) => (
              <RevealSection key={name} delay={i * 100}>
                <div className="glass glass-hover" style={{ borderRadius: '1rem', padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                    {[...Array(stars)].map((_, j) => (
                          <Star key={j} size={14} style={{ color: 'var(--accent-2)', fill: 'var(--accent-2)' }} aria-hidden="true" />
                        ))}
                  </div>
                  <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.7, fontStyle: 'italic', flex: 1 }}>"{text}"</p>
                  <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem' }}>{name}</p>
                    <p style={{ color: 'var(--muted)', fontSize: '0.75rem', marginTop: '0.125rem' }}>{role}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-md">
          <RevealSection>
            <div style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(249,115,22,0.14), rgba(251,146,60,0.09), rgba(251,146,60,0.06))' }} />
              <div style={{ position: 'absolute', inset: 0, borderRadius: '1.5rem', border: '1px solid rgba(251,146,60,0.12)' }} />
              <div style={{ position: 'relative', padding: 'clamp(2rem, 4vw, 4rem) clamp(2rem, 4vw, 4rem)', textAlign: 'center' }}>
                <h2 className="font-display" style={{ fontWeight: 900, fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: 'var(--text)', marginBottom: '1.25rem' }}>
                  Prêt à lancer votre projet ?
                </h2>
                <p style={{ color: 'var(--muted)', fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '36rem', margin: '0 auto 2rem' }}>
                  Décrivez-nous votre activité. Nous vous proposons la solution idéale gratuitement et sans engagement.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                  <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
                    Demander un devis <ArrowRight size={18} />
                  </Link>
                  <Link to="/offres" className="btn-secondary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
                    Voir les offres
                  </Link>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
