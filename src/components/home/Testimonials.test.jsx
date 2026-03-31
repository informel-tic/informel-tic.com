import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Testimonials from './Testimonials';

const renderTestimonials = () => render(<MemoryRouter><Testimonials /></MemoryRouter>);

describe('Testimonials – Header', () => {
  it('renders the current section heading', () => {
    renderTestimonials();
    expect(screen.getByRole('heading', { level: 2, name: /Pourquoi nous faire confiance/i })).toBeInTheDocument();
  });

  it('renders the current subtitle', () => {
    renderTestimonials();
    expect(screen.getByText(/Des engagements concrets/i)).toBeInTheDocument();
  });
});

describe('Testimonials – Cards Content', () => {
  it('renders the four commitment cards', () => {
    renderTestimonials();
    expect(screen.getByText(/Devis écrit & détaillé/i)).toBeInTheDocument();
    expect(screen.getByText(/Code source livré/i)).toBeInTheDocument();
    expect(screen.getByText(/Réponse sous 24h/i)).toBeInTheDocument();
    expect(screen.getByText(/Satisfait ou on corrige/i)).toBeInTheDocument();
  });

  it('renders exactly 4 cards', () => {
    renderTestimonials();
    const cards = document.querySelectorAll('.glass.glass-hover.commitment-card');
    expect(cards.length).toBe(4);
  });
});

describe('Testimonials – Structure & Responsive', () => {
  it('is inside a <section> element', () => {
    renderTestimonials();
    expect(document.querySelector('section')).toBeInTheDocument();
  });

  it('renders the trust CTA strip', () => {
    renderTestimonials();
    expect(document.querySelector('.trust-cta-strip')).toBeInTheDocument();
  });

  it('links to /contact?early=1', () => {
    renderTestimonials();
    expect(screen.getByRole('link', { name: /Devenir client pilote/i })).toHaveAttribute('href', '/contact?early=1');
  });
});
