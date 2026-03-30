import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
  // Close the mobile menu when the route changes
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className={`navbar${scrolled ? ' nav-scrolled' : ''}`}>
      <nav className="container-lg">
        {/* Logo */}
        <Link to="/" className="nav-logo-wrap" aria-label="INFORMEL-TIC — Accueil">
          <img src="/logo.svg" alt="logo INFORMEL-TIC" className="nav-logo" />
        </Link>

        {/* Desktop links */}
        <ul className="nav-desktop-links" role="navigation">
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
        <div className="nav-desktop-cta">
          <Link to="/contact" className="btn-primary">
            Demander un devis
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="nav-burger"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`nav-mobile${open ? ' nav-mobile--open' : ''}`}>
        <ul className="nav-mobile__list">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `nav-mobile__link${isActive ? ' active' : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="nav-mobile__cta-item">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary"
            >
              Demander un devis
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
