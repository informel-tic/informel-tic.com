import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/a-propos', label: 'À propos' },
  { to: '/offres', label: 'Offres & Tarifs' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : 'bg-transparent'}`}
    >
      <nav className="container-lg" style={{ height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" aria-label="INFORMEL-TIC — Accueil">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Zap size={16} style={{ color: 'var(--accent-contrast, #fff)' }} strokeWidth={2.5} aria-hidden="true" />
          </div>
          <img src="/logo.svg" alt="INFORMEL-TIC" width={120} height={24} className="hidden sm:block" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="navigation">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
            Demander un devis
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} mobile-menu-bg`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-lg font-medium transition-all ${isActive
                    ? 'bg-orange-500/10 text-[color:var(--accent)]'
                    : 'text-gray-600 hover:text-[color:var(--accent)] hover:bg-orange-50'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="mt-3">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center text-sm"
            >
              Demander un devis
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
