import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import AboutPage from './AboutPage';

const renderAbout = () => render(<MemoryRouter><AboutPage /></MemoryRouter>);

describe('AboutPage – Header', () => {
  it('renders h1 "Qui est INFORMEL-TIC ?"', () => {
    renderAbout();
    expect(screen.getByRole('heading', { level: 1, name: /Qui est INFORMEL-TIC/i })).toBeInTheDocument();
  });

  it('renders "À propos" badge', () => {
    renderAbout();
    expect(screen.getByText('À propos')).toBeInTheDocument();
  });

  it('renders micro-entreprise location description', () => {
    renderAbout();
    expect(screen.getByText(/micro-entreprise/i)).toBeInTheDocument();
  });

  it('mentions Nord de la France', () => {
    renderAbout();
    expect(screen.getAllByText(/Nord de la France/i).length).toBeGreaterThanOrEqual(1);
  });
});

describe('AboutPage – Story & Identity', () => {
  it('renders founder name "Rachid Chon"', () => {
    renderAbout();
    expect(screen.getByText(/Rachid Chon/i)).toBeInTheDocument();
  });

  it('mentions founder base "Lourches"', () => {
    renderAbout();
    expect(screen.getAllByText(/Lourches/i).length).toBeGreaterThanOrEqual(1);
  });

  it('claims sites 3 to 5× faster', () => {
    renderAbout();
    expect(screen.getByText(/3 à 5/i)).toBeInTheDocument();
  });

  it('emphasizes "sans WordPress"', () => {
    renderAbout();
    expect(screen.getByText(/sans WordPress/i)).toBeInTheDocument();
  });

  it('mentions "générateur de clients locaux"', () => {
    renderAbout();
    expect(screen.getByText(/générateur de clients/i)).toBeInTheDocument();
  });
});

describe('AboutPage – Valeurs', () => {
  it('renders "Nos valeurs" h2 heading', () => {
    renderAbout();
    expect(screen.getByRole('heading', { level: 2, name: /Nos valeurs/i })).toBeInTheDocument();
  });

  const VALUES = ['Code propre', 'Centré résultats', 'Relation de confiance', 'Artisans & PME'];
  VALUES.forEach((value) => {
    it(`renders value card "${value}"`, () => {
      renderAbout();
      expect(screen.getByText(new RegExp(value, 'i'))).toBeInTheDocument();
    });
  });

  it('renders 4 value card headings under "Nos valeurs"', () => {
    renderAbout();
    const h3s = screen.getAllByRole('heading', { level: 3 });
    expect(h3s.length).toBeGreaterThanOrEqual(4);
  });
});

describe('AboutPage – Garanties', () => {
  it('renders "Nos garanties" section', () => {
    renderAbout();
    expect(screen.getByText(/Nos garanties/i)).toBeInTheDocument();
  });

  it('renders "100% sur-mesure, sans WordPress" guarantee', () => {
    renderAbout();
    expect(screen.getByText(/100% sur-mesure, sans WordPress/i)).toBeInTheDocument();
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
