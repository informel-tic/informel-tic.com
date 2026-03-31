import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight } from 'lucide-react';

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

export default function Hero() {
  return (
    <section className="hero-section hero-bg grid-bg">
      <div className="container-md hero-body">

        <div className="badge hero-badge">
          <Zap size={14} aria-hidden="true" />
          L'Artisan Numérique du Nord
        </div>

        <h1 className="hero-title">
          Services de Grande Agence,<br />
          Proximité d'un Artisan.<br />
          <span className="typing-wrap"><TypingWord /></span>
        </h1>

        <p className="hero-desc">
          Professionnels ou particuliers — site web, visibilité Google, logiciel de caisse,
          dépannage ou formation — <strong className="text-strong">un seul interlocuteur local</strong> pour
          tout votre numérique. À Lille et dans le 59.
        </p>

        <div className="hero-actions">
          <Link to="/contact" className="btn-primary">
            Demander un diagnostic <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link to="/pros" className="btn-secondary">
            Espace Pros
          </Link>
          <Link to="/particuliers" className="btn-secondary">
            Espace Particuliers
          </Link>
        </div>

        <div className="scroll-hint">
          <span>Découvrir</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}
