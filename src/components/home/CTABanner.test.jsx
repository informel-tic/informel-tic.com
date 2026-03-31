import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import CTABanner from './CTABanner';

const renderCTA = () => render(<MemoryRouter><CTABanner /></MemoryRouter>);

describe('CTABanner – Contenu', () => {
  it('renders the current CTA heading', () => {
    renderCTA();
    expect(screen.getByRole('heading', { level: 2, name: /Prêt à passer au numérique sans stress/i })).toBeInTheDocument();
  });

  it('renders the current short description', () => {
    renderCTA();
    expect(screen.getByText(/Décrivez votre situation en 2 lignes/i)).toBeInTheDocument();
  });

  it('mentions the free/no-commitment promise', () => {
    renderCTA();
    expect(screen.getByText(/Gratuit, sans engagement/i)).toBeInTheDocument();
  });
});

describe('CTABanner – CTAs', () => {
  it('primary CTA links to /contact', () => {
    renderCTA();
    const cta = screen.getByRole('link', { name: /Obtenir mon devis gratuit/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '/contact');
  });

  it('secondary CTA links to /offres', () => {
    renderCTA();
    const cta = screen.getByRole('link', { name: /Voir tous nos tarifs/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '/offres');
  });

  it('primary CTA has btn-primary class', () => {
    renderCTA();
    expect(screen.getByRole('link', { name: /Obtenir mon devis gratuit/i }).className).toContain('btn-primary');
  });

  it('secondary CTA has btn-secondary class', () => {
    renderCTA();
    expect(screen.getByRole('link', { name: /Voir tous nos tarifs/i }).className).toContain('btn-secondary');
  });
});

describe('CTABanner – Structure', () => {
  it('is wrapped in a <section> element', () => {
    renderCTA();
    expect(document.querySelector('section')).toBeInTheDocument();
  });

  it('has the current CTA card container', () => {
    renderCTA();
    expect(document.querySelector('.cta-card')).toBeInTheDocument();
  });
});
