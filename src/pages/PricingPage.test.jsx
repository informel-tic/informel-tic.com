import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import PricingPage from './PricingPage';

const renderPricing = () => render(<MemoryRouter><PricingPage /></MemoryRouter>);

describe('PricingPage – Header', () => {
  it('renders the current h1 heading', () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 1, name: /Des offres claires/i })).toBeInTheDocument();
  });

  it('renders "Offres & Tarifs" badge', () => {
    renderPricing();
    expect(screen.getByText(/Offres & Tarifs/i)).toBeInTheDocument();
  });

  it('renders the current tagline', () => {
    renderPricing();
    expect(screen.getByText(/sans mauvaise surprise/i)).toBeInTheDocument();
  });

  it('prompts the current business promise', () => {
    renderPricing();
    expect(screen.getByText(/Un interlocuteur unique, local et transparent/i)).toBeInTheDocument();
  });
});

describe('PricingPage – Plans', () => {
  it('renders the B2B Rayonner cards', () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 3, name: /Pack "Radar Local"/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Pack "Présence Web"/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Pack "Écosystème Digital"/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Refonte & Sur-Mesure/i })).toBeInTheDocument();
  });

  it('renders the software and maintenance sections', () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 3, name: /Dépannage Pro/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Abonnement Conciergerie Digitale/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Diagnostic PC/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Dépannage & Remise en état/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Formation à domicile/i })).toBeInTheDocument();
  });

  it('renders the current section headings', () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 2, name: /Pilier 1 — Rayonner/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Pilier 2 — S'organiser/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Pilier 3 — Sécuriser/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Dépannage, formation & accompagnement/i })).toBeInTheDocument();
  });

  it('all plan CTA buttons link to /contact', () => {
    renderPricing();
    const ctaLinks = screen.getAllByRole('link', { name: /Demander un devis|Démarrer ce pack|Prendre rendez-vous/i });
    expect(ctaLinks.length).toBeGreaterThanOrEqual(3);
    ctaLinks.forEach((link) => expect(link).toHaveAttribute('href', '/contact'));
  });

  it('renders the ADEN and pricing notes', () => {
    renderPricing();
    expect(screen.getByText(/Bundle Radar Local \+ Présence Web/i)).toBeInTheDocument();
    expect(screen.getByText(/Subventionnable ADEN/i)).toBeInTheDocument();
  });
});

describe('PricingPage – Plan Features', () => {
  it('Radar Local includes Google Business Profile', () => {
    renderPricing();
    expect(screen.getByText(/Google Business Profile/i)).toBeInTheDocument();
  });

  it('Présence Web includes the performance target', () => {
    renderPricing();
    expect(screen.getByText(/chargement < 1s/i)).toBeInTheDocument();
  });

  it('Sur-Mesure includes geo-targeted SEO', () => {
    renderPricing();
    expect(screen.getByText(/Pages SEO géolocalisées/i)).toBeInTheDocument();
  });

  it('Conciergerie table includes monthly reporting and support items', () => {
    renderPricing();
    expect(screen.getByText(/Rapport mensuel visibilité/i)).toBeInTheDocument();
    expect(screen.getByText(/MAJ GBP/i)).toBeInTheDocument();
  });
});

describe('PricingPage – FAQ', () => {
  it('renders "Questions fréquentes" section heading', () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 2, name: /Questions fréquentes/i })).toBeInTheDocument();
  });

  it('FAQ: Je possède le code source de mon site', () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 3, name: /Je possède le code source de mon site/i })).toBeInTheDocument();
  });

  it('FAQ: Puis-je évoluer vers une offre supérieure', () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 3, name: /Puis-je évoluer vers une offre supérieure/i })).toBeInTheDocument();
  });

  it('FAQ: Que se passe-t-il si j\'arrête l\'abonnement', () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 3, name: /Que se passe-t-il si j'arrête l'abonnement/i })).toBeInTheDocument();
  });

  it('FAQ: Quel est le levier ADEN', () => {
    renderPricing();
    expect(screen.getByRole('heading', { level: 3, name: /C'est quoi le levier ADEN/i })).toBeInTheDocument();
  });
});

describe('PricingPage – CTA', () => {
  it('renders the bottom CTA', () => {
    renderPricing();
    expect(screen.getByRole('link', { name: /Parlons de votre projet/i })).toHaveAttribute('href', '/contact');
  });

  it('renders the guidance text', () => {
    renderPricing();
    expect(screen.getByText(/Vous ne savez pas quelle offre est faite pour vous/i)).toBeInTheDocument();
  });
});
