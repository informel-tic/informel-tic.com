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

// ─── Contenu – Positionnement (PRD §1–§3) ────────────────────────────────────

describe('Contenu – Promesse Client (PRD §1)', () => {
  it('Homepage Hero: promesse "zone de chalandise"', () => {
    wrap(<Hero />);
    expect(screen.getByText(/zone de chalandise/i)).toBeInTheDocument();
  });

  it('Homepage Hero: promesse "sans stress technique"', () => {
    wrap(<Hero />);
    expect(screen.getByText(/sans stress technique/i)).toBeInTheDocument();
  });

  it('Homepage Hero: "Partenaire Digital des Commerces de Proximité"', () => {
    wrap(<Hero />);
    expect(screen.getByText(/Partenaire Digital des Commerces de Proximité/i)).toBeInTheDocument();
  });

  it('Homepage Hero: badge "Visibilité maximale"', () => {
    wrap(<Hero />);
    expect(screen.getByText('Visibilité maximale')).toBeInTheDocument();
  });

  it('Homepage Hero: badge "Zéro charge mentale"', () => {
    wrap(<Hero />);
    expect(screen.getByText('Zéro charge mentale')).toBeInTheDocument();
  });

  it('Homepage Hero: badge "Code source livré"', () => {
    wrap(<Hero />);
    expect(screen.getByText('Code source livré')).toBeInTheDocument();
  });

  it('Homepage Hero: badge "Sans engagement"', () => {
    wrap(<Hero />);
    expect(screen.getByText('Sans engagement')).toBeInTheDocument();
  });
});

// ─── Contenu – Les 5 Risques (PRD §4) ────────────────────────────────────────

describe('Contenu – 5 Risques Outils mal utilisés (PRD §4)', () => {
  it('Risque 1: Mauvais référencement SEO – titre présent', () => {
    render(<RisksAndSolutions />);
    expect(screen.getByText(/Mauvais Référencement \(SEO\)/i)).toBeInTheDocument();
  });

  it('Risque 1: mots-clés géolocalisés mentionnés dans la solution', () => {
    render(<RisksAndSolutions />);
    expect(screen.getByText(/zone de chalandise/i)).toBeInTheDocument();
  });

  it('Risque 2: Google Business Profile – titre présent', () => {
    render(<RisksAndSolutions />);
    expect(screen.getByText(/Profil Google Business Profile/i)).toBeInTheDocument();
  });

  it('Risque 2: mention double authentification', () => {
    render(<RisksAndSolutions />);
    expect(screen.getByText(/double authentification/i)).toBeInTheDocument();
  });

  it('Risque 3: Incohérences annuaires – Waze/Apple Maps mentionnés', () => {
    render(<RisksAndSolutions />);
    expect(screen.getByText(/Incohérences dans les Annuaires/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Waze/i).length).toBeGreaterThanOrEqual(1);
  });

  it('Risque 4: Site lent – promesse chargement < 1s', () => {
    render(<RisksAndSolutions />);
    expect(screen.getByText(/chargement < 1s/i)).toBeInTheDocument();
  });

  it('Risque 5: Identité visuelle dispersée – charte graphique mentionnée', () => {
    render(<RisksAndSolutions />);
    expect(screen.getByText(/charte graphique/i)).toBeInTheDocument();
  });
});

// ─── Contenu – Offres (PRD §3) ───────────────────────────────────────────────

describe('Contenu – Offres (PRD §3)', () => {
  it('Offre 1: "Vitrine Essentielle" présente', () => {
    wrap(<PricingPage />);
    expect(screen.getByRole('heading', { level: 3, name: /Vitrine Essentielle/i })).toBeInTheDocument();
  });

  it('Offre 1: tagline "Exister sur Google"', () => {
    wrap(<PricingPage />);
    expect(screen.getByText(/Exister sur Google/i)).toBeInTheDocument();
  });

  it('Offre 2: "Commerce Connecté" présente', () => {
    wrap(<PricingPage />);
    expect(screen.getByRole('heading', { level: 3, name: /Commerce Connecté/i })).toBeInTheDocument();
  });

  it('Offre 2: Click & Collect (WhatsApp)', () => {
    wrap(<PricingPage />);
    expect(screen.getByText(/Click & Collect/i)).toBeInTheDocument();
  });

  it('Offre 3: "Identité Totale" recommandée', () => {
    wrap(<PricingPage />);
    expect(screen.getByText(/Identité Totale/i)).toBeInTheDocument();
    expect(screen.getByText(/Recommandé/i)).toBeInTheDocument();
  });

  it('Offre 3: SEO local avancé (Pack Domination Locale)', () => {
    wrap(<PricingPage />);
    expect(screen.getByText(/SEO local avancé/i)).toBeInTheDocument();
  });

  it('abonnement: maintenance mensuelle expliquée dans la FAQ', () => {
    wrap(<PricingPage />);
    expect(screen.getByText(/maintenance mensuelle/i)).toBeInTheDocument();
  });

  it('code source livré mentionné dans Vitrine Essentielle', () => {
    wrap(<PricingPage />);
    expect(screen.getByText(/Code source livré/i)).toBeInTheDocument();
  });
});

// ─── Contenu – Témoignages (PRD §5) ──────────────────────────────────────────

describe('Contenu – Témoignages avec preuves sociales', () => {
  it('témoignage Sophie M.: +30% chiffre d\'affaires', () => {
    render(<Testimonials />);
    expect(screen.getByText(/30%/)).toBeInTheDocument();
  });

  it('témoignage Karim L.: 10 demandes de devis par semaine', () => {
    render(<Testimonials />);
    expect(screen.getByText(/10 demandes/i)).toBeInTheDocument();
  });

  it('témoignage Nathalie P.: site mobile responsive mentionné', () => {
    render(<Testimonials />);
    expect(screen.getByText(/mobile/i)).toBeInTheDocument();
  });

  it('section "Ils nous font confiance" présente', () => {
    render(<Testimonials />);
    expect(screen.getByRole('heading', { level: 2, name: /Ils nous font confiance/i })).toBeInTheDocument();
  });
});

// ─── Contenu – CTA et copywriting (PRD §5 directives) ────────────────────────

describe('Contenu – CTAs compatibles copywriting PRD §5', () => {
  it('CTA principal "Je veux une visibilité maximale" (problème/solution)', () => {
    wrap(<CTABanner />);
    expect(screen.getByRole('link', { name: /Je veux une visibilité maximale/i })).toBeInTheDocument();
  });

  it('CTA "Demander un devis" dans la Hero', () => {
    wrap(<Hero />);
    expect(screen.getByRole('link', { name: /Demander un devis/i })).toBeInTheDocument();
  });

  it('Contact: devis "gratuit et sans engagement"', () => {
    wrap(<ContactPage />);
    expect(screen.getByText(/gratuit.*sans engagement|sans engagement.*gratuit/i)).toBeInTheDocument();
  });
});

// ─── Contenu – À propos (PRD §1 identité) ────────────────────────────────────

describe('Contenu – À propos (PRD §1)', () => {
  it('identité: "Rachid Chon" fondateur', () => {
    wrap(<AboutPage />);
    expect(screen.getByText(/Rachid Chon/i)).toBeInTheDocument();
  });

  it('différenciation: "3 à 5× plus rapides" que WordPress', () => {
    wrap(<AboutPage />);
    expect(screen.getByText(/3 à 5/i)).toBeInTheDocument();
  });

  it('valeur "Code propre" (PRD §2 avantage concurrentiel)', () => {
    wrap(<AboutPage />);
    expect(screen.getByText(/Code propre/i)).toBeInTheDocument();
  });

  it('garantie "100% sur-mesure"', () => {
    wrap(<AboutPage />);
    expect(screen.getByText(/100% sur-mesure/i)).toBeInTheDocument();
  });
});
