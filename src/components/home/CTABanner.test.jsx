import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import CTABanner from './CTABanner';

const renderCTA = () => render(<MemoryRouter><CTABanner /></MemoryRouter>);

describe('CTABanner – Contenu', () => {
  it('renders h2 heading "Prêt à lancer votre projet ?"', () => {
    renderCTA();
    expect(screen.getByRole('heading', { level: 2, name: /Prêt à lancer votre projet/i })).toBeInTheDocument();
  });

  it('renders description "gratuitement et sans engagement"', () => {
    renderCTA();
    expect(screen.getByText(/gratuitement et sans engagement/i)).toBeInTheDocument();
  });

  it('description mentions "solution idéale"', () => {
    renderCTA();
    expect(screen.getByText(/solution idéale/i)).toBeInTheDocument();
  });
});

describe('CTABanner – CTAs', () => {
  it('primary CTA "Je veux une visibilité maximale" links to /contact', () => {
    renderCTA();
    const cta = screen.getByRole('link', { name: /Je veux une visibilité maximale/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '/contact');
  });

  it('secondary CTA "Voir nos packs" links to /offres', () => {
    renderCTA();
    const cta = screen.getByRole('link', { name: /Voir nos packs/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '/offres');
  });

  it('primary CTA has btn-primary class', () => {
    renderCTA();
    expect(screen.getByRole('link', { name: /Je veux une visibilité maximale/i }).className).toContain('btn-primary');
  });

  it('secondary CTA has btn-secondary class', () => {
    renderCTA();
    expect(screen.getByRole('link', { name: /Voir nos packs/i }).className).toContain('btn-secondary');
  });
});

describe('CTABanner – Structure', () => {
  it('is wrapped in a <section> element', () => {
    renderCTA();
    expect(document.querySelector('section')).toBeInTheDocument();
  });

  it('has rounded-3xl visual container', () => {
    renderCTA();
    expect(document.querySelector('.rounded-3xl')).toBeInTheDocument();
  });
});
