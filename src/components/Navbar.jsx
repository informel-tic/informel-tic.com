import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Accueil', end: true },
  {
    label: 'Espace Pros',
    dropdown: [
      { to: '/pros', label: 'Vue d\'ensemble' },
      { to: '/pros/rayonner', label: 'Rayonner' },
      { to: '/pros/organiser', label: 'S\'organiser' },
      { to: '/pros/securiser', label: 'Sécuriser' },
      { to: '/pros/aides-aden', label: 'Aides ADEN' },
    ],
  },
  {
    label: 'Espace Particuliers',
    dropdown: [
      { to: '/particuliers', label: 'Vue d\'ensemble' },
      { to: '/particuliers/depannage-installation', label: 'Dépannage & Installation' },
      { to: '/particuliers/formation', label: 'Formation' },
    ],
  },
  { to: '/engagement', label: 'Notre Engagement' },
  { to: '/contact', label: 'Contact' },
];

function DropdownItem({ item, closeAll }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  // Is any child route active?
  const isChildActive = item.dropdown?.some((d) => location.pathname === d.to || location.pathname.startsWith(d.to + '/'));

  // Close on click outside
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setIsOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  return (
    <li ref={ref} className="nav-dropdown-wrap">
      <button
        type="button"
        className={`nav-link nav-dropdown-trigger${isChildActive ? ' active' : ''}`}
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label} <ChevronDown size={14} className={`nav-chevron${isOpen ? ' nav-chevron--open' : ''}`} aria-hidden="true" />
      </button>
      {isOpen && (
        <ul className="nav-dropdown" role="menu">
          {item.dropdown.map(({ to, label }) => (
            <li key={to} role="none">
              <NavLink
                to={to}
                end
                role="menuitem"
                onClick={() => { setIsOpen(false); closeAll?.(); }}
                className={({ isActive }) => `nav-dropdown__link${isActive ? ' active' : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const location = useLocation();
  useEffect(() => { setOpen(false); setMobileDropdowns({}); }, [location.pathname]);

  const toggleMobileDropdown = (label) => {
    setMobileDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header className={`navbar${scrolled ? ' nav-scrolled' : ''}`}>
      <nav className="container-lg">
        {/* Logo */}
        <Link to="/" className="nav-logo-wrap" aria-label="INFORMEL-TIC — Accueil">
          <img src="/logo.svg" alt="logo INFORMEL-TIC" className="nav-logo" />
        </Link>

        {/* Desktop links */}
        <ul className="nav-desktop-links" role="navigation">
          {NAV_LINKS.map((item) =>
            item.dropdown ? (
              <DropdownItem key={item.label} item={item} />
            ) : (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )}
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
          {NAV_LINKS.map((item) =>
            item.dropdown ? (
              <li key={item.label} className="nav-mobile__group">
                <button
                  type="button"
                  className="nav-mobile__link nav-mobile__dropdown-trigger"
                  onClick={() => toggleMobileDropdown(item.label)}
                  aria-expanded={!!mobileDropdowns[item.label]}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`nav-chevron${mobileDropdowns[item.label] ? ' nav-chevron--open' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {mobileDropdowns[item.label] && (
                  <ul className="nav-mobile__sub">
                    {item.dropdown.map(({ to, label }) => (
                      <li key={to}>
                        <NavLink
                          to={to}
                          end
                          onClick={() => setOpen(false)}
                          className={({ isActive }) => `nav-mobile__link nav-mobile__link--sub${isActive ? ' active' : ''}`}
                        >
                          {label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `nav-mobile__link${isActive ? ' active' : ''}`}
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )}
          <li className="nav-mobile__cta-item">
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary">
              Demander un devis
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
