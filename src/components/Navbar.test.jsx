import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import Navbar from './Navbar';

const renderNavbar = (path = '/') =>
  render(<MemoryRouter initialEntries={[path]}><Navbar /></MemoryRouter>);

describe('Navbar – Branding', () => {
  it('renders logo link with aria-label INFORMEL-TIC', () => {
    renderNavbar();
    expect(screen.getByRole('link', { name: /INFORMEL-TIC/i })).toBeInTheDocument();
  });

  it('renders logo image with alt text', () => {
    renderNavbar();
    expect(screen.getByAltText('INFORMEL-TIC')).toBeInTheDocument();
  });
});

describe('Navbar – Desktop Navigation', () => {
  const NAV_ITEMS = ['Accueil', 'À propos', 'Offres & Tarifs', 'Contact'];

  NAV_ITEMS.forEach((label) => {
    it(`renders nav link "${label}"`, () => {
      renderNavbar();
      expect(
        screen.getAllByRole('link', { name: new RegExp(`^${label}$`, 'i') }).length
      ).toBeGreaterThanOrEqual(1);
    });
  });

  it('renders desktop CTA "Demander un devis"', () => {
    renderNavbar();
    expect(screen.getAllByRole('link', { name: /Demander un devis/i }).length).toBeGreaterThanOrEqual(1);
  });

  it('desktop nav list has hidden md:flex classes', () => {
    renderNavbar();
    expect(document.querySelector('ul.hidden.md\\:flex')).toBeInTheDocument();
  });

  it('desktop CTA wrapper has hidden md:block class', () => {
    renderNavbar();
    expect(document.querySelector('.hidden.md\\:block')).toBeInTheDocument();
  });
});

describe('Navbar – Mobile Menu', () => {
  it('mobile burger button is visible initially', () => {
    renderNavbar();
    expect(screen.getByRole('button', { name: /Ouvrir le menu/i })).toBeInTheDocument();
  });

  it('burger has aria-expanded="false" initially', () => {
    renderNavbar();
    expect(screen.getByRole('button', { name: /Ouvrir le menu/i })).toHaveAttribute('aria-expanded', 'false');
  });

  it('burger has md:hidden class', () => {
    renderNavbar();
    expect(screen.getByRole('button', { name: /Ouvrir le menu/i }).className).toContain('md:hidden');
  });

  it('mobile menu starts collapsed (max-h-0)', () => {
    renderNavbar();
    const mobileMenu = document.querySelector('.mobile-menu-bg');
    expect(mobileMenu?.className).toContain('max-h-0');
  });

  it('opens mobile menu on burger click', () => {
    renderNavbar();
    fireEvent.click(screen.getByRole('button', { name: /Ouvrir le menu/i }));
    expect(screen.getByRole('button', { name: /Fermer le menu/i })).toBeInTheDocument();
  });

  it('burger aria-expanded becomes "true" when menu opens', () => {
    renderNavbar();
    fireEvent.click(screen.getByRole('button', { name: /Ouvrir le menu/i }));
    expect(screen.getByRole('button', { name: /Fermer le menu/i })).toHaveAttribute('aria-expanded', 'true');
  });

  it('mobile menu expands to max-h-96 when open', () => {
    renderNavbar();
    fireEvent.click(screen.getByRole('button', { name: /Ouvrir le menu/i }));
    const mobileMenu = document.querySelector('.mobile-menu-bg');
    expect(mobileMenu?.className).toContain('max-h-96');
  });

  it('closes menu on second click', () => {
    renderNavbar();
    fireEvent.click(screen.getByRole('button', { name: /Ouvrir le menu/i }));
    fireEvent.click(screen.getByRole('button', { name: /Fermer le menu/i }));
    expect(screen.getByRole('button', { name: /Ouvrir le menu/i })).toBeInTheDocument();
  });

  it('closes menu on Escape key', () => {
    renderNavbar();
    fireEvent.click(screen.getByRole('button', { name: /Ouvrir le menu/i }));
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.getByRole('button', { name: /Ouvrir le menu/i })).toBeInTheDocument();
  });
});

describe('Navbar – Accessibility', () => {
  it('<header> element wraps the nav', () => {
    renderNavbar();
    expect(document.querySelector('header')).toBeInTheDocument();
  });

  it('<nav> element is present inside header', () => {
    renderNavbar();
    expect(document.querySelector('header nav')).toBeInTheDocument();
  });

  it('all rendered links are <a> elements', () => {
    renderNavbar();
    screen.getAllByRole('link').forEach((link) => expect(link.tagName).toBe('A'));
  });

  it('logo link has aria-label', () => {
    renderNavbar();
    expect(screen.getByRole('link', { name: /INFORMEL-TIC/i })).toHaveAttribute('aria-label');
  });
});
