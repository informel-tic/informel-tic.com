import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, Shield, Star, Clock, MapPin, CheckCircle } from 'lucide-react';
import { IMAGES } from '../../assets/images';

/* ── Typing effect ─────────────────────────────────── */
const WORDS = ['trouvé sur Google.', 'entre de bonnes mains.', 'sans stress technique.', 'local et transparent.'];

function TypingWord() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);

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
      timeout = setTimeout(() => {
        setDel(false);
        setIdx((i) => (i + 1) % WORDS.length);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, [text, del, idx]);

  return <span className="gradient-text typing-cursor">{text}</span>;
}

const TRUST_ITEMS = [
  { icon: Shield, label: 'Devis gratuit sous 24h' },
  { icon: Star, label: 'Code source 100% livré' },
  { icon: Clock, label: 'Réponse rapide' },
  { icon: MapPin, label: 'Basé à Lourches (59)' },
];

export default function Hero() {
  return (
    <section className="hero-section hero-bg">
      <div className="hero-grid container-xl">

        {/* ── Left: Text content ── */}
        <div className="hero-content">
          <div className="badge hero-badge hero-badge--glow">
            <Zap size={14} aria-hidden="true" />
            L'Artisan Numérique du Nord — Lille &amp; 59
          </div>

          <h1 className="hero-title">
            La qualité d'une agence.<br />
            La proximité d'un artisan.<br />
            <span className="typing-wrap"><TypingWord /></span>
          </h1>

          <p className="hero-desc">
            Site web sur-mesure, visibilité Google, logiciel de caisse, dépannage
            et formation — <strong className="text-strong">un interlocuteur unique</strong> pour
            tout votre numérique.
          </p>

          <div className="hero-actions">
            <Link to="/contact?subject=devis" className="btn-primary btn-lg">
              Obtenir mon diagnostic gratuit <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/offres" className="btn-secondary btn-lg">
              Voir nos tarifs
            </Link>
          </div>

          <div className="hero-trust-bar">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className="hero-trust-item">
                <Icon size={15} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Visual block ── */}
        <div className="hero-visual">
          <div className="hero-glow-orb" aria-hidden="true" />
          
          <div className="hero-image-wrap">
            <img
              src={IMAGES.hero}
              alt={IMAGES.heroAlt}
              className="hero-image"
              loading="eager"
              width="720"
              height="540"
            />
            <div className="hero-image-overlay" />
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Découvrir</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
