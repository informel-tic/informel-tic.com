import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RisksAndSolutions from './RisksAndSolutions';

const renderRisks = () => render(<RisksAndSolutions />);

describe('RisksAndSolutions – Header', () => {
  it('renders the section heading', () => {
    renderRisks();
    expect(screen.getByRole('heading', { level: 2, name: /Vos problèmes, nos solutions/i })).toBeInTheDocument();
  });

  it('renders the introductory description', () => {
    renderRisks();
    expect(screen.getByText(/Web, visibilité Google, logiciel de caisse, dépannage ou formation/i)).toBeInTheDocument();
  });
});

describe('RisksAndSolutions – All Cards', () => {
  it('renders exactly 6 risk card headings', () => {
    renderRisks();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6);
  });

  it('renders the current risk titles', () => {
    renderRisks();
    expect(screen.getByRole('heading', { level: 3, name: /Invisible sur Google/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Site absent ou inefficace/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Caisse mal configurée/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Panne au mauvais moment/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /PC qui ralentit/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Se sentir dépassé/i })).toBeInTheDocument();
  });
});

describe('RisksAndSolutions – Solutions Content', () => {
  it('mentions the main solution phrases', () => {
    renderRisks();
    expect(screen.getByText(/Pack Radar Local/i)).toBeInTheDocument();
    expect(screen.getByText(/site sur-mesure ultra-rapide/i)).toBeInTheDocument();
    expect(screen.getByText(/Dépannage Pro 60 €\/h/i)).toBeInTheDocument();
    expect(screen.getByText(/Formation à domicile 45 €\/h/i)).toBeInTheDocument();
  });

  it('shows the solution label for every card', () => {
    renderRisks();
    expect(screen.getAllByText(/La Solution :/i)).toHaveLength(6);
  });
});

describe('RisksAndSolutions – Structure', () => {
  it('is rendered inside a section with the expected layout classes', () => {
    renderRisks();
    expect(document.querySelector('section.section-padding.section-alt')).toBeInTheDocument();
    expect(document.querySelector('.flex-3col')).toBeInTheDocument();
    expect(document.querySelectorAll('.glass.glass-hover')).toHaveLength(6);
  });
});
