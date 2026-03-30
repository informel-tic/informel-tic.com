import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Testimonials from './Testimonials';

const renderTestimonials = () => render(<Testimonials />);

describe('Testimonials – Header', () => {
  it('renders h2 "Ils nous font confiance"', () => {
    renderTestimonials();
    expect(screen.getByRole('heading', { level: 2, name: /Ils nous font confiance/i })).toBeInTheDocument();
  });

  it('renders subtitle about "résultats concrets"', () => {
    renderTestimonials();
    expect(screen.getByText(/résultats concrets/i)).toBeInTheDocument();
  });
});

describe('Testimonials – Cards Content', () => {
  it('renders Sophie M. (boulangerie, +30%)', () => {
    renderTestimonials();
    expect(screen.getByText(/Sophie M\./i)).toBeInTheDocument();
    expect(screen.getByText(/Boulangerie artisanale/i)).toBeInTheDocument();
    expect(screen.getByText(/30%/)).toBeInTheDocument();
  });

  it('renders Karim L. (plombier, 10 demandes)', () => {
    renderTestimonials();
    expect(screen.getByText(/Karim L\./i)).toBeInTheDocument();
    expect(screen.getByText(/Plombier chauffagiste/i)).toBeInTheDocument();
    expect(screen.getByText(/10 demandes/i)).toBeInTheDocument();
  });

  it('renders Nathalie P. (institut de beauté)', () => {
    renderTestimonials();
    expect(screen.getByText(/Nathalie P\./i)).toBeInTheDocument();
    expect(screen.getByText(/Institut de beauté/i)).toBeInTheDocument();
    expect(screen.getByText(/Réactivité parfaite/i)).toBeInTheDocument();
  });

  it('renders exactly 3 testimonial cards', () => {
    renderTestimonials();
    const cards = document.querySelectorAll('.glass.glass-hover.rounded-2xl');
    expect(cards.length).toBe(3);
  });
});

describe('Testimonials – Structure & Responsive', () => {
  it('is inside a <section> element', () => {
    renderTestimonials();
    expect(document.querySelector('section')).toBeInTheDocument();
  });

  it('grid is responsive: grid-cols-1 md:grid-cols-2 lg:grid-cols-3', () => {
    renderTestimonials();
    const grid = document.querySelector('.grid.grid-cols-1');
    expect(grid?.className).toContain('md:grid-cols-2');
    expect(grid?.className).toContain('lg:grid-cols-3');
  });

  it('each card has a divider between quote and author', () => {
    renderTestimonials();
    const dividers = document.querySelectorAll('.border-t.border-gray-200');
    expect(dividers.length).toBe(3);
  });
});
