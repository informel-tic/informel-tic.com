import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

const renderHero = () => render(<MemoryRouter><Hero /></MemoryRouter>);

describe('Hero – Headings & Tagline', () => {
  it('renders exactly one h1 heading', () => {
    renderHero();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('h1 contains "Votre site et votre visibilité"', () => {
    renderHero();
    expect(
      screen.getByRole('heading', { level: 1, name: /Votre site et votre visibilité/i })
    ).toBeInTheDocument();
  });

  it('badge displays "Partenaire Digital des Commerces de Proximité"', () => {
    renderHero();
    expect(screen.getByText(/Partenaire Digital des Commerces de Proximité/i)).toBeInTheDocument();
  });

  it('description mentions "zone de chalandise"', () => {
    renderHero();
    expect(screen.getByText(/zone de chalandise/i)).toBeInTheDocument();
  });

  it('description mentions "sans stress technique"', () => {
    renderHero();
    expect(screen.getByText(/sans stress technique/i)).toBeInTheDocument();
  });
});

describe('Hero – CTAs', () => {
  it('primary CTA leads to /contact', () => {
    renderHero();
    expect(screen.getByRole('link', { name: /Demander un devis/i })).toHaveAttribute('href', '/contact');
  });

  it('secondary CTA leads to /offres', () => {
    renderHero();
    expect(screen.getByRole('link', { name: /Voir nos offres/i })).toHaveAttribute('href', '/offres');
  });

  it('primary CTA has btn-primary class', () => {
    renderHero();
    expect(screen.getByRole('link', { name: /Demander un devis/i }).className).toContain('btn-primary');
  });

  it('secondary CTA has btn-secondary class', () => {
    renderHero();
    expect(screen.getByRole('link', { name: /Voir nos offres/i }).className).toContain('btn-secondary');
  });
});

describe('Hero – Trust Badges', () => {
  const TRUST = ['Zéro charge mentale', 'Visibilité maximale', 'Code source livré', 'Sans engagement'];

  TRUST.forEach((label) => {
    it(`renders trust badge "${label}"`, () => {
      renderHero();
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});

describe('Hero – Structure & UX', () => {
  it('section has hero-bg and grid-bg classes', () => {
    renderHero();
    expect(document.querySelector('section.hero-bg.grid-bg')).toBeInTheDocument();
  });

  it('section is full viewport height (min-h-screen)', () => {
    renderHero();
    expect(document.querySelector('section.min-h-screen')).toBeInTheDocument();
  });

  it('h1 uses clamp() for responsive font size', () => {
    renderHero();
    expect(screen.getByRole('heading', { level: 1 }).className).toMatch(/clamp/);
  });

  it('renders scroll indicator "Découvrir"', () => {
    renderHero();
    expect(screen.getByText('Découvrir')).toBeInTheDocument();
  });

  it('CTA row uses flex-wrap for mobile stacking', () => {
    renderHero();
    expect(document.querySelector('.flex.flex-wrap.justify-center.gap-4')).toBeInTheDocument();
  });

  it('trust badges row wraps on small screens (flex-wrap)', () => {
    renderHero();
    const badgeRow = document.querySelector('.flex.flex-wrap.justify-center.gap-5');
    expect(badgeRow).toBeInTheDocument();
  });
});
