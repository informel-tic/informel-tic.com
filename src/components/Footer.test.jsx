import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

const renderFooter = () => render(<MemoryRouter><Footer /></MemoryRouter>);

describe('Footer – Branding', () => {
  it('renders brand INFORMEL-TIC link to home', () => {
    renderFooter();
    expect(screen.getAllByRole('link', { name: /INFORMEL-TIC/i }).length).toBeGreaterThanOrEqual(1);
  });

  it('renders availability badge "Disponible"', () => {
    renderFooter();
    expect(screen.getByText(/Disponible/i)).toBeInTheDocument();
  });

  it('renders the current tagline', () => {
    renderFooter();
    expect(screen.getByText(/Services de grande agence, proximité d'un artisan/i)).toBeInTheDocument();
  });

  it('renders the Nord positioning', () => {
    renderFooter();
    expect(screen.getByText(/Lille et dans le 59/i)).toBeInTheDocument();
  });
});

describe('Footer – Navigation Links', () => {
  const NAV_ITEMS = ['Accueil', 'Espace Pros', 'Espace Particuliers', 'Notre Engagement', 'Contact', 'Mentions légales'];

  NAV_ITEMS.forEach((label) => {
    it(`renders nav link "${label}"`, () => {
      renderFooter();
      expect(
        screen.getAllByRole('link', { name: new RegExp(label, 'i') }).length
      ).toBeGreaterThanOrEqual(1);
    });
  });

  it('renders CTA "Demander un devis"', () => {
    renderFooter();
    expect(screen.getAllByRole('link', { name: /Demander un devis/i }).length).toBeGreaterThanOrEqual(1);
  });
});

describe('Footer – Contact Info', () => {
  it('renders email address contact@informel-tic.com', () => {
    renderFooter();
    expect(screen.getByText(/contact@informel-tic.com/i)).toBeInTheDocument();
  });

  it('email is a mailto: link', () => {
    renderFooter();
    const emailLink = screen.getByRole('link', { name: /contact@informel-tic.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:contact@informel-tic.com');
  });

  it('renders physical address including Lourches', () => {
    renderFooter();
    expect(screen.getByText(/Lourches/i)).toBeInTheDocument();
  });

  it('renders street address Jean Jaurès', () => {
    renderFooter();
    expect(screen.getByText(/Jean Jaurès/i)).toBeInTheDocument();
  });
});

describe('Footer – Legal & Copyright', () => {
  it('renders copyright with current year', () => {
    renderFooter();
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('renders SIREN number', () => {
    renderFooter();
    expect(screen.getByText(/SIREN/i)).toBeInTheDocument();
  });

  it('renders "TVA non applicable"', () => {
    renderFooter();
    expect(screen.getByText(/TVA non applicable/i)).toBeInTheDocument();
  });

  it('renders "Politique de confidentialité" link', () => {
    renderFooter();
    expect(
      screen.getAllByRole('link', { name: /Politique de confidentialité/i }).length
    ).toBeGreaterThanOrEqual(1);
  });
});

describe('Footer – Semantic HTML', () => {
  it('uses a <footer> element', () => {
    renderFooter();
    expect(document.querySelector('footer')).toBeInTheDocument();
  });
});
