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

  it('renders the homepage sections', () => {
    renderHome();
    expect(document.querySelector('.hero-section')).toBeInTheDocument();
  });
});

describe('HomePage – Hero Section', () => {
  it('renders Hero with hero-bg class', () => {
    renderHome();
    expect(document.querySelector('.hero-bg')).toBeInTheDocument();
  });

  it('renders the unique h1 heading', () => {
    renderHome();
    expect(screen.getByRole('heading', { level: 1, name: /La qualité d'une agence/i })).toBeInTheDocument();
  });

  it('renders both CTAs in hero', () => {
    renderHome();
    expect(screen.getByRole('link', { name: /Obtenir mon diagnostic gratuit/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Voir nos tarifs/i })).toBeInTheDocument();
  });
});

describe('HomePage – Risks & Solutions Section', () => {
  it('renders RisksAndSolutions heading', () => {
    renderHome();
    expect(screen.getByRole('heading', { level: 2, name: /Vos problèmes, nos solutions/i })).toBeInTheDocument();
  });

  it('renders the six current risk card titles', () => {
    renderHome();
    expect(screen.getByText(/Invisible sur Google/i)).toBeInTheDocument();
    expect(screen.getByText(/Site absent ou inefficace/i)).toBeInTheDocument();
    expect(screen.getByText(/Caisse mal configurée/i)).toBeInTheDocument();
    expect(screen.getByText(/Panne au mauvais moment/i)).toBeInTheDocument();
    expect(screen.getByText(/PC qui ralentit/i)).toBeInTheDocument();
    expect(screen.getByText(/Se sentir dépassé/i)).toBeInTheDocument();
  });
});

describe('HomePage – Testimonials Section', () => {
  it('renders Testimonials heading', () => {
    renderHome();
    expect(screen.getByText(/Pourquoi nous faire confiance/i)).toBeInTheDocument();
  });

  it('renders all 4 commitment cards', () => {
    renderHome();
    expect(screen.getByRole('heading', { level: 3, name: /Devis écrit & détaillé/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Code source livré/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Réponse sous 24h/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Satisfait ou on corrige/i })).toBeInTheDocument();
  });
});

describe('HomePage – CTA Banner', () => {
  it('renders CTABanner heading', () => {
    renderHome();
    expect(screen.getByRole('heading', { level: 2, name: /Prêt à passer au numérique sans stress/i })).toBeInTheDocument();
  });

  it('renders final CTA link to /contact', () => {
    renderHome();
    expect(screen.getByRole('link', { name: /Obtenir mon devis gratuit/i })).toBeInTheDocument();
  });
});

describe('HomePage – Content (Positionnement)', () => {
  it('mentions the current homepage promise', () => {
    renderHome();
    expect(screen.getByText(/tout votre numérique/i)).toBeInTheDocument();
  });

  it('trust badges cover all 4 key promises', () => {
    renderHome();
    ['Devis gratuit sous 24h', 'Code source 100% livré', 'Réponse rapide', 'Basé à Lourches (59)'].forEach((t) => {
      expect(screen.getByText(t)).toBeInTheDocument();
    });
  });
});
