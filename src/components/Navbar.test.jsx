import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
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
    expect(screen.getByAltText(/logo INFORMEL-TIC/i)).toBeInTheDocument();
  });
});

describe('Navbar – Desktop Navigation', () => {
  it('renders the current top-level link and dropdown buttons', () => {
    renderNavbar();
    expect(screen.getAllByRole('link', { name: /Accueil/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('button', { name: /Espace Pros/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('button', { name: /Espace Particuliers/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /Notre Engagement/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /Contact/i }).length).toBeGreaterThanOrEqual(1);
  });

  it('renders desktop CTA "Demander un devis"', () => {
    renderNavbar();
    expect(screen.getAllByRole('link', { name: /Demander un devis/i }).length).toBeGreaterThanOrEqual(1);
  });

  it('opens the pro dropdown on click', () => {
    renderNavbar();
    fireEvent.click(screen.getAllByRole('button', { name: /Espace Pros/i })[0]);
    expect(screen.getByRole('menuitem', { name: /Vue d'ensemble/i })).toBeInTheDocument();
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

  it('mobile menu starts closed', () => {
    renderNavbar();
    expect(document.querySelector('.nav-mobile')).toBeInTheDocument();
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

  it('mobile menu renders the current mobile navigation links when open', () => {
    renderNavbar();
    fireEvent.click(screen.getByRole('button', { name: /Ouvrir le menu/i }));
    expect(screen.getAllByRole('link', { name: /Notre Engagement/i }).at(-1)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Contact/i }).at(-1)).toBeInTheDocument();
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
