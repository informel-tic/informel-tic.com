import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

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
    <footer className="site-footer">
      <div className="container-lg footer-top-grid">

        {/* Brand */}
        <div>
          <Link to="/" className="footer-brand" aria-label="INFORMEL-TIC — Accueil">
            <img src="/logo.svg" alt="INFORMEL-TIC" className="footer-logo" />
          </Link>
          <p className="footer-tagline">
            Développement web sur-mesure et optimisation de visibilité locale
            pour les commerces et artisans. Sans WordPress. Sans compromis.
          </p>
          <div className="footer-status">
            <span className="status-badge">
              <span className="pulse-dot"></span>
              Disponible
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="footer-section-title">Navigation</h3>
          <ul className="footer-nav-list">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="footer-link">
                  <span className="footer-link__arrow">→</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="footer-section-title">Contact</h3>
          <ul className="footer-contact-list">
            <li>
              <a href="mailto:contact@informel-tic.com" className="footer-contact-link">
                <Mail size={15} className="icon-accent" aria-hidden="true" />
                contact@informel-tic.com
              </a>
            </li>
            <li className="footer-address">
              <MapPin size={15} className="icon-accent" aria-hidden="true" />
              <span>1333 Rue Jean Jaurès<br />59156 Lourches, France</span>
            </li>
          </ul>
          <div className="footer-cta">
            <Link to="/contact" className="btn-primary">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-bar">
        <div className="container-lg footer-bottom">
          <p>
            © {year} INFORMEL-TIC — Rachid Chon. Entrepreneur Individuel.
            SIREN : 101 902 567
          </p>
          <div className="footer-bottom-links">
            <Link to="/mentions-legales" className="footer-bottom-link">Mentions légales</Link>
            <span className="footer-divider">|</span>
            <Link to="/politique-de-confidentialite" className="footer-bottom-link">Politique de confidentialité</Link>
            <span className="footer-divider">|</span>
            <span>TVA non applicable — art. 293 B CGI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
