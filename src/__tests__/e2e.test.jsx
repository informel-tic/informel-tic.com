import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import HomePage from '../pages/HomePage';
import PricingPage from '../pages/PricingPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import EngagementPage from '../pages/EngagementPage';
import B2BOverviewPage from '../pages/B2BOverviewPage';
import B2COverviewPage from '../pages/B2COverviewPage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function TestApp({ initialRoute = '/' }) {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <div className="noise min-h-screen flex flex-col theme-light">
        <a href="#content" className="skip-link">Aller au contenu</a>
        <Navbar />
        <main id="content" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/offres" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/engagement" element={<EngagementPage />} />
            <Route path="/pros" element={<B2BOverviewPage />} />
            <Route path="/particuliers" element={<B2COverviewPage />} />
            <Route path="*" element={<p>404 – Page introuvable</p>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </MemoryRouter>
  );
}

describe('E2E – Initial load', () => {
  it('renders the homepage hero and footer', () => {
    render(<TestApp />);
    expect(screen.getByRole('heading', { level: 1, name: /La qualité d'une agence/i })).toBeInTheDocument();
    expect(screen.getAllByText(/L'Artisan Numérique du Nord/i).length).toBeGreaterThanOrEqual(1);
    expect(document.querySelector('footer')).toBeInTheDocument();
  });
});

describe('E2E – Navigation', () => {
  it('navigates to Contact via the navbar link', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getAllByRole('link', { name: /^Contact$/i })[0]);
    expect(await screen.findByRole('heading', { level: 1, name: /Parlons de votre projet/i })).toBeInTheDocument();
  });

  it('navigates to Engagement via the navbar link', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getAllByRole('link', { name: /Notre Engagement/i })[0]);
    expect(await screen.findByRole('heading', { level: 1, name: /Rendre le Numérique Accessible à Tous/i })).toBeInTheDocument();
  });

  it('opens the Pros dropdown and reaches the overview page', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getAllByRole('button', { name: /Espace Pros/i })[0]);
    fireEvent.click(screen.getByRole('menuitem', { name: /Vue d'ensemble/i }));
    expect(await screen.findByRole('heading', { level: 1, name: /Boostez votre activité/i })).toBeInTheDocument();
  });

  it('navigates to the pricing page from the hero CTA', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getAllByRole('link', { name: /Voir nos tarifs/i })[0]);
    expect(await screen.findByRole('heading', { level: 1, name: /Des offres claires/i })).toBeInTheDocument();
  });
});

describe('E2E – Mobile menu and footer', () => {
  it('opens the mobile menu and navigates to the contact page', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getByRole('button', { name: /Ouvrir le menu/i }));
    fireEvent.click(screen.getAllByRole('link', { name: /^Contact$/i }).at(-1));
    expect(await screen.findByRole('heading', { level: 1, name: /Parlons de votre projet/i })).toBeInTheDocument();
  });

  it('footer home link returns to the homepage', async () => {
    render(<TestApp initialRoute="/contact" />);
    fireEvent.click(screen.getAllByRole('link', { name: /^Accueil$/i }).at(-1));
    expect(await screen.findByRole('heading', { level: 1, name: /La qualité d'une agence/i })).toBeInTheDocument();
  });
});

describe('E2E – 404', () => {
  it('shows a 404 message for unknown routes', () => {
    render(<TestApp initialRoute="/route-inconnue" />);
    expect(screen.getByText(/404 – Page introuvable/i)).toBeInTheDocument();
  });
});
