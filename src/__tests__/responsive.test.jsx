import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import RisksAndSolutions from '../components/home/RisksAndSolutions';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/home/CTABanner';

describe('Responsive – Navbar', () => {
  it('exposes the burger menu and dropdown entry points', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    expect(screen.getByRole('button', { name: /Ouvrir le menu/i })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Espace Pros/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('button', { name: /Espace Particuliers/i }).length).toBeGreaterThanOrEqual(1);
  });

  it('opens and closes the mobile menu', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', { name: /Ouvrir le menu/i }));
    expect(screen.getByRole('button', { name: /Fermer le menu/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Fermer le menu/i }));
    expect(screen.getByRole('button', { name: /Ouvrir le menu/i })).toBeInTheDocument();
  });
});

describe('Responsive – Hero', () => {
  it('keeps the hero layout container and action row', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);
    expect(document.querySelector('section.hero-section.hero-bg')).toBeInTheDocument();
    expect(document.querySelector('.hero-grid.container-xl')).toBeInTheDocument();
    expect(document.querySelector('.hero-actions')).toBeInTheDocument();
    expect(document.querySelector('.hero-trust-bar')).toBeInTheDocument();
  });
});

describe('Responsive – RisksAndSolutions', () => {
  it('keeps the 3-column grid wrapper', () => {
    render(<RisksAndSolutions />);
    expect(document.querySelector('.flex-3col')).toBeInTheDocument();
    expect(document.querySelectorAll('.glass.glass-hover.risk-card')).toHaveLength(6);
  });
});

describe('Responsive – Testimonials', () => {
  it('keeps the 2x2 grid wrapper', () => {
    render(<MemoryRouter><Testimonials /></MemoryRouter>);
    expect(document.querySelector('.grid-2x2')).toBeInTheDocument();
    expect(document.querySelectorAll('.glass.glass-hover.commitment-card')).toHaveLength(4);
  });
});

describe('Responsive – CTABanner', () => {
  it('keeps the centered CTA card layout', () => {
    render(<MemoryRouter><CTABanner /></MemoryRouter>);
    expect(document.querySelector('.container-lg')).toBeInTheDocument();
    expect(document.querySelector('.cta-card')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Obtenir mon devis gratuit/i })).toBeInTheDocument();
  });
});
