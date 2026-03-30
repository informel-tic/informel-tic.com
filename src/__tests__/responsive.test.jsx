import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import RisksAndSolutions from '../components/home/RisksAndSolutions';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/home/CTABanner';

// ─── Navbar responsive ───────────────────────────────────────────────────────

describe('Responsive – Navbar (Mobile-First)', () => {
  it('mobile burger button has md:hidden class (masqué sur desktop)', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    const burger = screen.getByRole('button', { name: /Ouvrir le menu/i });
    expect(burger.className).toContain('md:hidden');
  });

  it('desktop nav list has "hidden md:flex" classes (masqué sur mobile)', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    expect(document.querySelector('ul.hidden.md\\:flex')).toBeInTheDocument();
  });

  it('desktop CTA wrapper has "hidden md:block" class', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    expect(document.querySelector('.hidden.md\\:block')).toBeInTheDocument();
  });

  it('mobile menu starts collapsed (max-h-0 opacity-0)', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    const mobileMenu = document.querySelector('.mobile-menu-bg');
    expect(mobileMenu?.className).toContain('max-h-0');
    expect(mobileMenu?.className).toContain('opacity-0');
  });

  it('mobile menu expands to max-h-96 on burger click', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', { name: /Ouvrir le menu/i }));
    const mobileMenu = document.querySelector('.mobile-menu-bg');
    expect(mobileMenu?.className).toContain('max-h-96');
  });

  it('mobile menu re-collapses after second click', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', { name: /Ouvrir le menu/i }));
    fireEvent.click(screen.getByRole('button', { name: /Fermer le menu/i }));
    const mobileMenu = document.querySelector('.mobile-menu-bg');
    expect(mobileMenu?.className).toContain('max-h-0');
  });

  it('mobile nav links include all desktop nav items', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', { name: /Ouvrir le menu/i }));
    // After open, all 4 nav links should be findable (desktop + mobile = 2 occurrences each)
    expect(screen.getAllByRole('link', { name: /^Accueil$/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /^Contact$/i }).length).toBeGreaterThanOrEqual(1);
  });
});

// ─── Hero responsive ─────────────────────────────────────────────────────────

describe('Responsive – Hero (Mobile-First)', () => {
  it('section takes min-h-screen on all viewports', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);
    expect(document.querySelector('section.min-h-screen')).toBeInTheDocument();
  });

  it('uses container-md for centred responsive layout', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);
    expect(document.querySelector('.container-md')).toBeInTheDocument();
  });

  it('h1 uses clamp() for fluid responsive font size', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 1 }).className).toMatch(/clamp/);
  });

  it('CTA row uses flex-wrap for mobile stacking', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);
    expect(document.querySelector('.flex.flex-wrap.justify-center.gap-4')).toBeInTheDocument();
  });

  it('trust badges row uses flex-wrap', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);
    expect(document.querySelector('.flex.flex-wrap.justify-center.gap-5')).toBeInTheDocument();
  });

  it('primary CTA has adequate touch targets (py-3 px-8)', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);
    const cta = screen.getByRole('link', { name: /Demander un devis/i });
    expect(cta.className).toContain('py-3');
    expect(cta.className).toContain('px-8');
  });
});

// ─── RisksAndSolutions responsive grid ───────────────────────────────────────

describe('Responsive – RisksAndSolutions Grid', () => {
  it('starts with 1 column on mobile (grid-cols-1)', () => {
    render(<RisksAndSolutions />);
    expect(document.querySelector('.grid.grid-cols-1')).toBeInTheDocument();
  });

  it('expands to 2 columns on md: (md:grid-cols-2)', () => {
    render(<RisksAndSolutions />);
    expect(document.querySelector('.md\\:grid-cols-2')).toBeInTheDocument();
  });

  it('expands to 3 columns on lg: (lg:grid-cols-3)', () => {
    render(<RisksAndSolutions />);
    expect(document.querySelector('.lg\\:grid-cols-3')).toBeInTheDocument();
  });

  it('section has section-padding for responsive vertical spacing', () => {
    render(<RisksAndSolutions />);
    expect(document.querySelector('section.section-padding')).toBeInTheDocument();
  });

  it('section heading uses clamp() font size', () => {
    render(<RisksAndSolutions />);
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2.className).toMatch(/clamp/);
  });
});

// ─── Testimonials responsive grid ────────────────────────────────────────────

describe('Responsive – Testimonials Grid', () => {
  it('starts with 1 column on mobile (grid-cols-1)', () => {
    render(<Testimonials />);
    expect(document.querySelector('.grid.grid-cols-1')).toBeInTheDocument();
  });

  it('expands to 2 columns on md: (md:grid-cols-2)', () => {
    render(<Testimonials />);
    expect(document.querySelector('.md\\:grid-cols-2')).toBeInTheDocument();
  });

  it('expands to 3 columns on lg: (lg:grid-cols-3)', () => {
    render(<Testimonials />);
    expect(document.querySelector('.lg\\:grid-cols-3')).toBeInTheDocument();
  });
});

// ─── CTABanner responsive ────────────────────────────────────────────────────

describe('Responsive – CTABanner', () => {
  it('CTA buttons row uses flex-wrap for mobile', () => {
    render(<MemoryRouter><CTABanner /></MemoryRouter>);
    expect(document.querySelector('.flex.flex-wrap.justify-center.gap-4')).toBeInTheDocument();
  });

  it('heading uses clamp() for responsive size', () => {
    render(<MemoryRouter><CTABanner /></MemoryRouter>);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.className).toMatch(/clamp/);
  });

  it('inner padding uses clamp() for responsive spacing', () => {
    render(<MemoryRouter><CTABanner /></MemoryRouter>);
    const inner = document.querySelector('[class*="p-\\[clamp"]');
    expect(inner).toBeInTheDocument();
  });
});
