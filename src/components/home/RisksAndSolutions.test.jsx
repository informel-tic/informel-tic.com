import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RisksAndSolutions from './RisksAndSolutions';

const renderRisks = () => render(<RisksAndSolutions />);

describe('RisksAndSolutions – Header', () => {
  it('renders h2 section heading about "Risques"', () => {
    renderRisks();
    expect(screen.getByRole('heading', { level: 2, name: /Les.*Risques.*des Outils Mal Utilisés/i })).toBeInTheDocument();
  });

  it('renders introductory description about pièges fréquents', () => {
    renderRisks();
    expect(screen.getByText(/pièges les plus fréquents/i)).toBeInTheDocument();
  });
});

describe('RisksAndSolutions – All 5 Risk Cards', () => {
  it('renders exactly 5 risk card h3 headings', () => {
    renderRisks();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(5);
  });

  it('card 1 – Mauvais Référencement (SEO)', () => {
    renderRisks();
    expect(screen.getByText(/Mauvais Référencement \(SEO\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Vous êtes invisible sur Google/i)).toBeInTheDocument();
  });

  it('card 2 – Profil Google Business Profile', () => {
    renderRisks();
    expect(screen.getByText(/Profil Google Business Profile/i)).toBeInTheDocument();
    expect(screen.getByText(/Laissé vide, incomplet ou piraté/i)).toBeInTheDocument();
  });

  it('card 3 – Incohérences dans les Annuaires', () => {
    renderRisks();
    expect(screen.getByText(/Incohérences dans les Annuaires/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Waze/i).length).toBeGreaterThanOrEqual(1);
  });

  it('card 4 – Un Site Lent ou Non Sécurisé', () => {
    renderRisks();
    expect(screen.getByText(/Un Site Lent ou Non Sécurisé/i)).toBeInTheDocument();
    expect(screen.getByText(/Impact fort sur la rétention/i)).toBeInTheDocument();
  });

  it('card 5 – Une Identité Visuelle Dispersée', () => {
    renderRisks();
    expect(screen.getByText(/Une Identité Visuelle Dispersée/i)).toBeInTheDocument();
    expect(screen.getByText(/Site, Réseaux, Impression/i)).toBeInTheDocument();
  });
});

describe('RisksAndSolutions – Solutions Content', () => {
  it('mentions "zone de chalandise" in SEO solution', () => {
    renderRisks();
    expect(screen.getByText(/zone de chalandise/i)).toBeInTheDocument();
  });

  it('mentions "double authentification" in GBP solution', () => {
    renderRisks();
    expect(screen.getByText(/double authentification/i)).toBeInTheDocument();
  });

  it('mentions "chargement < 1s" in speed solution', () => {
    renderRisks();
    expect(screen.getByText(/chargement < 1s/i)).toBeInTheDocument();
  });

  it('all 5 cards display "La Solution :"', () => {
    renderRisks();
    expect(screen.getAllByText(/La Solution :/i)).toHaveLength(5);
  });
});

describe('RisksAndSolutions – Structure & Responsive', () => {
  it('is rendered inside a <section> element', () => {
    renderRisks();
    expect(document.querySelector('section')).toBeInTheDocument();
  });

  it('uses section-padding class', () => {
    renderRisks();
    expect(document.querySelector('section.section-padding')).toBeInTheDocument();
  });

  it('grid is responsive: grid-cols-1 md:grid-cols-2 lg:grid-cols-3', () => {
    renderRisks();
    const grid = document.querySelector('.grid.grid-cols-1');
    expect(grid).toBeInTheDocument();
    expect(grid?.className).toContain('md:grid-cols-2');
    expect(grid?.className).toContain('lg:grid-cols-3');
  });

  it('each card has glass glass-hover classes', () => {
    renderRisks();
    const cards = document.querySelectorAll('.glass.glass-hover');
    expect(cards.length).toBe(5);
  });
});
