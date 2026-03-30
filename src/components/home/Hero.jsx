import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle } from 'lucide-react';

/* ── Typing effect ─────────────────────────────────── */
const WORDS = ['sous contrôle.', 'ultra-rapide.', 'sans WordPress.', 'pour vous.'];
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
          Le Partenaire Digital des Commerces de Proximité
        </div>

        <h1 className="hero-title">
          Votre site et votre visibilité,<br />
          <TypingWord />
        </h1>

        <p className="hero-desc">
          Nous construisons des écosystèmes numériques locaux pour que vous soyez les premiers trouvés dans votre zone de chalandise, <strong style={{ color: 'var(--text)' }}>sans stress technique</strong>.
        </p>

        <div className="hero-actions">
          <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '0.75rem 2rem' }}>
            Demander un devis <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link to="/offres" className="btn-secondary" style={{ fontSize: '1rem', padding: '0.75rem 2rem' }}>
            Voir nos offres
          </Link>
        </div>

        <div className="hero-features">
          {['Zéro charge mentale', 'Visibilité maximale', 'Code source livré', 'Sans engagement'].map((item) => (
            <span key={item} className="feature-item">
              <CheckCircle size={16} style={{ color: 'var(--accent-2)', flexShrink: 0 }} aria-hidden="true" /> {item}
            </span>
          ))}
        </div>
      </div>

      <div className="scroll-hint">
        <span>Découvrir</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
