import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import HomePage from './HomePage';

const renderHome = () => render(<MemoryRouter><HomePage /></MemoryRouter>);

describe('HomePage – Integration', () => {
  it('renders without crashing', () => {
    const { container } = renderHome();
    expect(container).toBeInTheDocument();
  });

  it('renders <main> wrapper element', () => {
    renderHome();
    expect(document.querySelector('main')).toBeInTheDocument();
  });
});

describe('HomePage – Hero Section', () => {
  it('renders Hero with hero-bg class', () => {
    renderHome();
    expect(document.querySelector('.hero-bg')).toBeInTheDocument();
  });

  it('renders the unique h1 heading', () => {
    renderHome();
    expect(screen.getByRole('heading', { level: 1, name: /Votre site et votre visibilité/i })).toBeInTheDocument();
  });

  it('renders both CTAs in hero', () => {
    renderHome();
    expect(screen.getByRole('link', { name: /Demander un devis/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Voir nos offres/i })).toBeInTheDocument();
  });
});

describe('HomePage – Risks & Solutions Section', () => {
  it('renders RisksAndSolutions heading', () => {
    renderHome();
    expect(screen.getByRole('heading', { level: 2, name: /Les.*Risques.*des Outils/i })).toBeInTheDocument();
  });

  it('renders all 5 risk card titles', () => {
    renderHome();
    expect(screen.getByText(/Mauvais Référencement/i)).toBeInTheDocument();
    expect(screen.getByText(/Google Business Profile/i)).toBeInTheDocument();
    expect(screen.getByText(/Incohérences dans les Annuaires/i)).toBeInTheDocument();
    expect(screen.getByText(/Site Lent/i)).toBeInTheDocument();
    expect(screen.getByText(/Identité Visuelle Dispersée/i)).toBeInTheDocument();
  });
});

describe('HomePage – Testimonials Section', () => {
  it('renders Testimonials heading', () => {
    renderHome();
    expect(screen.getByText(/Ils nous font confiance/i)).toBeInTheDocument();
  });

  it('renders all 3 testimonial authors', () => {
    renderHome();
    expect(screen.getByText(/Sophie M\./i)).toBeInTheDocument();
    expect(screen.getByText(/Karim L\./i)).toBeInTheDocument();
    expect(screen.getByText(/Nathalie P\./i)).toBeInTheDocument();
  });
});

describe('HomePage – CTA Banner', () => {
  it('renders CTABanner heading', () => {
    renderHome();
    expect(screen.getByText(/Prêt à lancer votre projet/i)).toBeInTheDocument();
  });

  it('renders final CTA link to /contact', () => {
    renderHome();
    expect(screen.getByRole('link', { name: /Je veux une visibilité maximale/i })).toBeInTheDocument();
  });
});

describe('HomePage – Content (Positionnement)', () => {
  it('mentions "zone de chalandise" (from PRD –4)', () => {
    renderHome();
    expect(screen.getAllByText(/zone de chalandise/i).length).toBeGreaterThanOrEqual(1);
  });

  it('mentions "sans stress technique" (promesse client PRD –1)', () => {
    renderHome();
    expect(screen.getByText(/sans stress technique/i)).toBeInTheDocument();
  });

  it('trust badges cover all 4 key promises', () => {
    renderHome();
    ['Zéro charge mentale', 'Visibilité maximale', 'Code source livré', 'Sans engagement'].forEach((t) => {
      expect(screen.getByText(t)).toBeInTheDocument();
    });
  });
});
