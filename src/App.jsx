import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import config from './config';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="noise min-h-screen flex flex-col theme-light">
        <a href="#content" className="skip-link">Aller au contenu</a>
        <Navbar />
        {config.CONTACT_PHONE && (
          <a href={`tel:${config.CONTACT_PHONE.replace(/\s+/g, '')}`} className="call-button" role="complementary" aria-label="Appeler INFORMEL-TIC">
            <Phone size={20} aria-hidden="true" />
            <span className="sr-only">Appeler INFORMEL-TIC</span>
          </a>
        )}
        <main id="content" className="flex-1">
          <Routes>
            <Route path="/"            element={<HomePage />} />
            <Route path="/a-propos"    element={<AboutPage />} />
            <Route path="/offres"      element={<PricingPage />} />
            <Route path="/contact"     element={<ContactPage />} />
            <Route path="/mentions-legales" element={<LegalPage />} />
            <Route path="/politique-de-confidentialite" element={<PrivacyPage />} />
            <Route path="*"            element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="text-8xl font-display font-black gradient-text mb-4">404</p>
      <h1 className="text-2xl font-bold mb-4">Page introuvable</h1>
      <p className="text-slate-400 mb-8">Cette page n'existe pas ou a été déplacée.</p>
      <Link to="/" className="btn-primary">← Retour à l'accueil</Link>
    </div>
  );
}
