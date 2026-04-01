import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/pros', label: 'Espace Pros' },
  { to: '/particuliers', label: 'Espace Particuliers' },
  { to: '/engagement', label: 'Notre Engagement' },
  { to: '/contact', label: 'Contact' },
  { to: '/mentions-legales', label: 'Mentions légales' },
];

/**
 * Render the global footer with quick links, contact details, and legal links.
 */
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
            L'Artisan Numérique du Nord — Services de grande agence, proximité d'un artisan.
            Pros et particuliers, à Lille et dans le 59.
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
          <h3 className="footer-section-title">Liens rapides</h3>
          <ul className="footer-nav-list">
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="footer-link">
                  <span className="footer-link__arrow">→</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Zone */}
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
          <p className="footer-zone">
            <strong>Zone d'intervention :</strong> Lille & département du Nord (59)
          </p>
          <div className="footer-cta">
            <Link to="/contact?subject=devis" className="btn-primary">
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
