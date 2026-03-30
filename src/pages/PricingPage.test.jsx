import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import PricingPage from './PricingPage';

const renderPricing = () => render(<MemoryRouter><PricingPage /></MemoryRouter>);

describe('PricingPage – Header', () => {
  it('renders h1 heading "Des offres claires"', () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 1, name: /Des offres claires/i })).toBeInTheDocument();
  });

  it('renders "Offres & Tarifs" badge', () => {
    renderPricing();
    expect(screen.getByText(/Offres & Tarifs/i)).toBeInTheDocument();
  });

  it('renders "sans mauvaise surprise" tagline', () => {
    renderPricing();
    expect(screen.getByText(/sans mauvaise surprise/i)).toBeInTheDocument();
  });

  it('prompts "100% sur-mesure, sans WordPress"', () => {
    renderPricing();
    expect(screen.getByText(/100% sur-mesure, sans WordPress/i)).toBeInTheDocument();
  });
});

describe('PricingPage – Plans', () => {
  it('renders "Vitrine Essentielle" plan', () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 3, name: /Vitrine Essentielle/i })).toBeInTheDocument();
  });

  it('renders "Commerce Connecté" plan', () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 3, name: /Commerce Connecté/i })).toBeInTheDocument();
  });

  it('renders "Identité Totale" featured plan', () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 3, name: /Identité Totale/i })).toBeInTheDocument();
  });

  it('renders "Recommandé" badge on featured plan', () => {
    renderPricing();
    expect(screen.getByText(/Recommandé/i)).toBeInTheDocument();
  });

  it('renders taglines for all plans', () => {
    renderPricing();
    expect(screen.getByText(/Exister sur Google/i)).toBeInTheDocument();
    expect(screen.getByText(/Commandes en ligne/i)).toBeInTheDocument();
    expect(screen.getByText(/Domination locale/i)).toBeInTheDocument();
  });

  it('all plans CTA buttons link to /contact', () => {
    renderPricing();
    const ctaLinks = screen.getAllByRole('link', { name: /Commencer|Choisir cette offre/i });
    expect(ctaLinks.length).toBeGreaterThanOrEqual(3);
    ctaLinks.forEach((link) => expect(link).toHaveAttribute('href', '/contact'));
  });

  it('renders TVA disclaimer in plan cards', () => {
    renderPricing();
    const tvaNotes = screen.getAllByText(/TVA non applicable/i);
    expect(tvaNotes.length).toBeGreaterThanOrEqual(1);
  });
});

describe('PricingPage – Plan Features', () => {
  it('Vitrine Essentielle includes SSL mention', () => {
    renderPricing();
    expect(screen.getByText(/Certificat SSL/i)).toBeInTheDocument();
  });

  it('Commerce Connecté includes Click & Collect', () => {
    renderPricing();
    expect(screen.getByText(/Click & Collect/i)).toBeInTheDocument();
  });

  it('Identité Totale includes SEO local avancé', () => {
    renderPricing();
    expect(screen.getByText(/SEO local avancé/i)).toBeInTheDocument();
  });

  it('Identité Totale includes rapport mensuel', () => {
    renderPricing();
    expect(screen.getByText(/Rapport mensuel visibilité/i)).toBeInTheDocument();
  });
});

describe('PricingPage – FAQ', () => {
  it('renders "Questions fréquentes" section heading', () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 2, name: /Questions fréquentes/i })).toBeInTheDocument();
  });

  it('FAQ: Pourquoi pas de WordPress', () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 3, name: /Pourquoi pas de WordPress/i })).toBeInTheDocument();
  });

  it('FAQ: Je possède le code source', () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 3, name: /Je possède le code source/i })).toBeInTheDocument();
  });

  it("FAQ: Puis-je changer d'offre", () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 3, name: /Puis-je changer d'offre/i })).toBeInTheDocument();
  });

  it('FAQ: maintenance mensuelle', () => {
    renderPricing();
    expect(screen.getByText(/maintenance mensuelle/i)).toBeInTheDocument();
  });
});

describe('PricingPage – CTA', () => {
  it('renders "Demander un devis" CTA at bottom', () => {
    renderPricing();
    expect(screen.getAllByRole('link', { name: /Demander un devis/i }).length).toBeGreaterThanOrEqual(1);
  });

  it('renders "Vous ne savez pas quelle offre choisir ?" text', () => {
    renderPricing();
    expect(screen.getByText(/Vous ne savez pas quelle offre choisir/i)).toBeInTheDocument();
  });
});
