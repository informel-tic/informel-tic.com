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

  it('h1 contains the main positioning line', () => {
    renderHero();
    expect(screen.getByRole('heading', { level: 1, name: /La qualité d'une agence/i })).toBeInTheDocument();
  });

  it('badge displays the current positioning line', () => {
    renderHero();
    expect(screen.getByText(/L'Artisan Numérique du Nord/i)).toBeInTheDocument();
  });

  it('description mentions the unique-interlocutor promise', () => {
    renderHero();
    expect(screen.getByText(/un interlocuteur unique/i)).toBeInTheDocument();
  });

  it('description mentions the Nord coverage', () => {
    renderHero();
    expect(screen.getByText(/Professionnels et particuliers dans le Nord/i)).toBeInTheDocument();
  });
});

describe('Hero – CTAs', () => {
  it('primary CTA leads to /contact', () => {
    renderHero();
    expect(screen.getByRole('link', { name: /Obtenir mon diagnostic gratuit/i })).toHaveAttribute('href', '/contact');
  });

  it('secondary CTA leads to /offres', () => {
    renderHero();
    expect(screen.getByRole('link', { name: /Voir nos tarifs/i })).toHaveAttribute('href', '/offres');
  });

  it('primary CTA has btn-primary class', () => {
    renderHero();
    expect(screen.getByRole('link', { name: /Obtenir mon diagnostic gratuit/i }).className).toContain('btn-primary');
  });

  it('secondary CTA has btn-secondary class', () => {
    renderHero();
    expect(screen.getByRole('link', { name: /Voir nos tarifs/i }).className).toContain('btn-secondary');
  });
});

describe('Hero – Trust Badges', () => {
  const TRUST = ['Devis gratuit sous 24h', 'Code source 100% livré', 'Réponse rapide', 'Basé à Lourches (59)'];

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

  it('renders scroll indicator "Découvrir"', () => {
    renderHero();
    expect(screen.getByText('Découvrir')).toBeInTheDocument();
  });

  it('renders the trust bar', () => {
    renderHero();
    expect(document.querySelector('.hero-trust-bar')).toBeInTheDocument();
  });
});
