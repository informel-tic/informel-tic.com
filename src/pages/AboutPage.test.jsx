import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import AboutPage from './AboutPage';

const renderAbout = () => render(<MemoryRouter><AboutPage /></MemoryRouter>);

describe('AboutPage – Header', () => {
  it('renders the page heading', () => {
    renderAbout();
    expect(screen.getByRole('heading', { level: 1, name: /Qui est INFORMEL-TIC/i })).toBeInTheDocument();
  });

  it('renders "À propos" badge', () => {
    renderAbout();
    expect(screen.getByText('À propos')).toBeInTheDocument();
  });

  it('mentions the current legal status and location', () => {
    renderAbout();
    expect(screen.getByText(/Entrepreneur Individuel — Lourches/i)).toBeInTheDocument();
  });
});

describe('AboutPage – Story & Identity', () => {
  it('renders founder name "Rachid Chon"', () => {
    renderAbout();
    expect(screen.getByText(/Rachid Chon/i)).toBeInTheDocument();
  });

  it('mentions the local origin story', () => {
    renderAbout();
    expect(screen.getByText(/un seul interlocuteur de confiance/i)).toBeInTheDocument();
  });

  it('emphasizes "sans WordPress"', () => {
    renderAbout();
    expect(screen.getByText(/sans WordPress ni plugin tiers/i)).toBeInTheDocument();
  });

  it('mentions the association commitment', () => {
    renderAbout();
    expect(screen.getByText(/mécénat de compétences/i)).toBeInTheDocument();
  });
});

describe('AboutPage – Valeurs', () => {
  it('renders "Nos valeurs" h2 heading', () => {
    renderAbout();
    expect(screen.getByRole('heading', { level: 2, name: /Nos valeurs/i })).toBeInTheDocument();
  });

  const VALUES = ['Code propre', 'Centré résultats', 'Transparence totale', 'Interlocuteur unique'];
  VALUES.forEach((value) => {
    it(`renders value card "${value}"`, () => {
      renderAbout();
      expect(screen.getByRole('heading', { level: 3, name: new RegExp(value, 'i') })).toBeInTheDocument();
    });
  });

  it('renders the four expertise cards and four value cards', () => {
    renderAbout();
    const h3s = screen.getAllByRole('heading', { level: 3 });
    expect(h3s.length).toBeGreaterThanOrEqual(8);
  });
});

describe('AboutPage – Garanties', () => {
  it('renders "Nos garanties" section', () => {
    renderAbout();
    expect(screen.getByText(/Nos garanties/i)).toBeInTheDocument();
  });

  it('renders the current guarantees copy', () => {
    renderAbout();
    expect(screen.getByText(/Sites 100% sur-mesure, sans WordPress ni plugin tiers/i)).toBeInTheDocument();
  });
});

describe('AboutPage – Navigation', () => {
  it('has at least one link to /contact', () => {
    renderAbout();
    const links = screen.getAllByRole('link');
    const contactLink = links.find((l) => l.getAttribute('href') === '/contact');
    expect(contactLink).toBeDefined();
  });
});
