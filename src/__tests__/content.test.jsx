import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Hero from '../components/home/Hero';
import RisksAndSolutions from '../components/home/RisksAndSolutions';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/home/CTABanner';
import PricingPage from '../pages/PricingPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';

const wrap = (comp) => render(<MemoryRouter>{comp}</MemoryRouter>);

describe('Contenu – Homepage', () => {
  it('hero carries the current positioning line', () => {
    wrap(<Hero />);
    expect(screen.getByText(/L'Artisan Numérique du Nord/i)).toBeInTheDocument();
    expect(screen.getByText(/un interlocuteur unique/i)).toBeInTheDocument();
  });

  it('risks section lists the current six themes', () => {
    render(<RisksAndSolutions />);
    ['Invisible sur Google', 'Site absent ou inefficace', 'Caisse mal configurée', 'Panne au mauvais moment', 'PC qui ralentit', 'Se sentir dépassé'].forEach((label) => {
      expect(screen.getByText(new RegExp(label, 'i'))).toBeInTheDocument();
    });
  });

  it('testimonials section communicates the four commitments', () => {
    render(<MemoryRouter><Testimonials /></MemoryRouter>);
    ['Devis écrit & détaillé', 'Code source livré', 'Réponse sous 24h', 'Satisfait ou on corrige'].forEach((label) => {
      expect(screen.getByText(new RegExp(label, 'i'))).toBeInTheDocument();
    });
  });

  it('CTA banner uses the current copy', () => {
    wrap(<CTABanner />);
    expect(screen.getByRole('heading', { level: 2, name: /Prêt à passer au numérique sans stress/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Obtenir mon devis gratuit/i })).toBeInTheDocument();
  });
});

describe('Contenu – Pages métier', () => {
  it('pricing page exposes the key offer families', () => {
    wrap(<PricingPage />);
    expect(screen.getByRole('heading', { level: 3, name: /Pack "Radar Local"/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Pack "Caisse Clé en Main"/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Questions fréquentes/i })).toBeInTheDocument();
  });

  it('contact page keeps the free quote messaging', () => {
    wrap(<ContactPage />);
    expect(screen.getByText(/24 heures/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Envoyer mon message/i })).toBeInTheDocument();
  });

  it('about page keeps the current identity copy', () => {
    wrap(<AboutPage />);
    expect(screen.getByRole('heading', { level: 1, name: /Qui est INFORMEL-TIC/i })).toBeInTheDocument();
    expect(screen.getByText(/sans WordPress ni plugin tiers/i)).toBeInTheDocument();
  });
});
