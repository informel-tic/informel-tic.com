import { Link } from 'react-router-dom';
import { Zap, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const navLinks = [
  { to: '/',                  label: 'Accueil' },
  { to: '/a-propos',          label: 'À propos' },
  { to: '/offres',            label: 'Offres & Tarifs' },
  { to: '/contact',           label: 'Contact' },
  { to: '/mentions-legales',  label: 'Mentions légales' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] mt-16">
      <div className="container-lg" style={{ paddingTop: '4rem', paddingBottom: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '3rem' }}>

        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center">
              <Zap size={16} className="text-white" strokeWidth={2.5} aria-hidden="true" />
            </div>
            <span className="font-display font-bold text-white text-lg">
              INFORMEL-<span className="gradient-text">TIC</span>
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Développement web sur-mesure et optimisation de visibilité locale
            pour les commerces et artisans. Sans WordPress. Sans compromis.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Disponible
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Navigation</h3>
          <ul className="space-y-2.5">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-slate-400 text-sm hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:contact@informel-tic.com"
                className="flex items-center gap-3 text-slate-400 text-sm hover:text-indigo-400 transition-colors group"
              >
                <Mail size={15} className="text-indigo-500 flex-shrink-0" aria-hidden="true" />
                contact@informel-tic.com
              </a>
            </li>
            <li className="flex items-start gap-3 text-slate-400 text-sm">
              <MapPin size={15} className="text-indigo-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>1333 Rue Jean Jaurès<br />59156 Lourches, France</span>
            </li>
          </ul>
          <div className="mt-6">
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5 inline-flex">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1.25rem 0' }}>
        <div className="container-lg" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', fontSize: '0.75rem', color: 'var(--text)' }}>
          <p>
            © {year} INFORMEL-TIC — CHON Rachid, Bouzid, Sénouci. Entrepreneur Individuel.
            SIREN : 101 902 567
          </p>
          <div className="flex items-center gap-4">
            <Link to="/mentions-legales" className="hover:text-slate-300 transition-colors">
              Mentions légales
            </Link>
            <span className="text-slate-700">|</span>
            <Link to="/politique-de-confidentialite" className="hover:text-slate-300 transition-colors">Politique de confidentialité</Link>
            <span className="text-slate-700">|</span>
            <span>TVA non applicable — art. 293 B CGI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
