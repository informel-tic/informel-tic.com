import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import config from './config';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import B2BOverviewPage from './pages/B2BOverviewPage';
import B2BRayonnerPage from './pages/B2BRayonnerPage';
import B2BOrganiserPage from './pages/B2BOrganiserPage';
import B2BSecuriserPage from './pages/B2BSecuriserPage';
import AidesADENPage from './pages/AidesADENPage';
import B2COverviewPage from './pages/B2COverviewPage';
import B2CDepannagePage from './pages/B2CDepannagePage';
import B2CFormationPage from './pages/B2CFormationPage';
import EngagementPage from './pages/EngagementPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

/**
 * Main application shell.
 * Wires routing, persistent chrome, and the shared skip-link affordance.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-root noise theme-light">
        <a href="#content" className="skip-link">Aller au contenu</a>
        <Navbar />
        {config.CONTACT_PHONE && (
          <a href={`tel:${config.CONTACT_PHONE.replace(/\s+/g, '')}`} className="call-button" role="complementary" aria-label="Appeler INFORMEL-TIC">
            <Phone size={20} aria-hidden="true" />
            <span className="sr-only">Appeler INFORMEL-TIC</span>
          </a>
        )}
        <main id="content" className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* B2B */}
            <Route path="/pros" element={<B2BOverviewPage />} />
            <Route path="/pros/rayonner" element={<B2BRayonnerPage />} />
            <Route path="/pros/organiser" element={<B2BOrganiserPage />} />
            <Route path="/pros/securiser" element={<B2BSecuriserPage />} />
            <Route path="/pros/aides-aden" element={<AidesADENPage />} />
            {/* B2C */}
            <Route path="/particuliers" element={<B2COverviewPage />} />
            <Route path="/particuliers/depannage-installation" element={<B2CDepannagePage />} />
            <Route path="/particuliers/formation" element={<B2CFormationPage />} />
            {/* Autres */}
            <Route path="/engagement" element={<EngagementPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/mentions-legales" element={<LegalPage />} />
            <Route path="/politique-de-confidentialite" element={<PrivacyPage />} />
            {/* Legacy redirects */}
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/offres" element={<PricingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

/**
 * Render the fallback page shown for unknown routes.
 */
function NotFound() {
  return (
    <div className="page-404">
      <p className="not-found-code gradient-text">404</p>
      <h1 className="not-found-title">Page introuvable</h1>
      <p className="not-found-meta">Cette page n'existe pas ou a été déplacée.</p>
      <Link to="/" className="btn-primary">← Retour à l'accueil</Link>
    </div>
  );
}
