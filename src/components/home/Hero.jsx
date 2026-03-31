import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, Shield, Star, Clock, MapPin } from 'lucide-react';

/* ── Typing effect ─────────────────────────────────── */
const WORDS = ['trouvé sur Google.', 'entre de bonnes mains.', 'sans stress technique.', 'local et transparent.'];
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

const TRUST_ITEMS = [
  { icon: Shield, label: 'Devis gratuit sous 24h' },
  { icon: Star, label: 'Code source 100% livré' },
  { icon: Clock, label: 'Réponse rapide' },
  { icon: MapPin, label: 'Basé à Lourches (59)' },
];

export default function Hero() {
  return (
    <section className="hero-section hero-bg grid-bg">
      <div className="container-md hero-body">

        <div className="badge hero-badge hero-badge--glow">
          <Zap size={14} aria-hidden="true" />
          L'Artisan Numérique du Nord — Lille & 59
        </div>

        <h1 className="hero-title">
          La qualité d'une agence.<br />
          La proximité d'un artisan.<br />
          <span className="typing-wrap"><TypingWord /></span>
        </h1>

        <p className="hero-desc">
          Site web sur-mesure, visibilité Google, logiciel de caisse, dépannage
          et formation — <strong className="text-strong">un interlocuteur unique</strong> pour
          tout votre numérique. Professionnels et particuliers dans le Nord.
        </p>

        <div className="hero-actions">
          <Link to="/contact" className="btn-primary btn-lg">
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

        <div className="scroll-hint">
          <span>Découvrir</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}
