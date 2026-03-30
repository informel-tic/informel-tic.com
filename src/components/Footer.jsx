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
    <footer className="site-footer">
      <div className="container-lg" style={{ paddingTop: '4rem', paddingBottom: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '3rem' }}>

        {/* Brand */}
        <div>
          <Link to="/" className="footer-brand" aria-label="INFORMEL-TIC — Accueil">
            <div className="footer-icon">
              <Zap size={16} className="text-white" strokeWidth={2.5} aria-hidden="true" style={{ color: 'white' }} />
            </div>
            <span className="footer-name">
              INFORMEL-<span className="gradient-text">TIC</span>
            </span>
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
              <MapPin size={15} className="icon-accent" style={{ marginTop: '0.125rem' }} aria-hidden="true" />
              <span>1333 Rue Jean Jaurès<br />59156 Lourches, France</span>
            </li>
          </ul>
          <div className="footer-cta">
            <Link to="/contact" className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}>
              Demander un devis
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1.25rem 0' }}>
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
