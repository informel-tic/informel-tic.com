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
    <section className="hero-bg grid-bg min-h-screen flex items-center justify-center relative">
      <div className="container-md flex flex-col items-center text-center pt-24 pb-20">
        
        <div className="badge bg-orange-500/10 border border-orange-500/20 text-[color:var(--accent)] mb-8">
          <Zap size={14} className="text-[color:var(--accent)]" aria-hidden="true" />
          Le Partenaire Digital des Commerces de Proximité
        </div>

        <h1 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] text-[color:var(--text)] leading-tight mb-6 max-w-4xl">
          Votre site et votre visibilité,<br />
          <TypingWord />
        </h1>

        <p className="text-[color:var(--muted)] text-[clamp(1rem,2vw,1.25rem)] max-w-2xl leading-relaxed mb-10">
          Nous construisons des écosystèmes numériques locaux pour que vous soyez les premiers trouvés dans votre zone de chalandise, <strong className="text-[color:var(--text)]">sans stress technique</strong>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link to="/contact" className="btn-primary text-base py-3 px-8">
            Demander un devis <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link to="/offres" className="btn-secondary text-base py-3 px-8">
            Voir nos offres
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-5 text-sm text-[color:var(--muted)]">
          {['Zéro charge mentale', 'Visibilité maximale', 'Code source livré', 'Sans engagement'].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <CheckCircle size={16} className="text-[color:var(--accent-2)] shrink-0" aria-hidden="true" /> {item}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
        <span className="text-xs font-medium uppercase tracking-widest">Découvrir</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
}
