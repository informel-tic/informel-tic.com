import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from '../App';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/home/Hero';
import RisksAndSolutions from '../components/home/RisksAndSolutions';
import Testimonials from '../components/home/Testimonials';
import ContactPage from '../pages/ContactPage';

const wrap = (comp) => render(<MemoryRouter>{comp}</MemoryRouter>);

// ─── Navigation par clavier / skip link ──────────────────────────────────────

describe('A11y – Skip Link', () => {
  it('skip link "Aller au contenu" is present', () => {
    render(<App />);
    expect(screen.getByText(/Aller au contenu/i)).toBeInTheDocument();
  });

  it('skip link targets #content', () => {
    render(<App />);
    expect(screen.getByText(/Aller au contenu/i)).toHaveAttribute('href', '#content');
  });

  it('skip link has skip-link class for focus-visible positioning', () => {
    render(<App />);
    expect(screen.getByText(/Aller au contenu/i).className).toContain('skip-link');
  });
});

// ─── Structure HTML sémantique ────────────────────────────────────────────────

describe('A11y – Semantic HTML', () => {
  it('<main id="content"> wraps page routes', () => {
    render(<App />);
    const main = document.getElementById('content');
    expect(main).toBeInTheDocument();
    expect(main?.tagName).toBe('MAIN');
  });

  it('<header> element wraps the Navbar', () => {
    wrap(<Navbar />);
    expect(document.querySelector('header')).toBeInTheDocument();
  });

  it('<footer> element is present', () => {
    wrap(<Footer />);
    expect(document.querySelector('footer')).toBeInTheDocument();
  });

  it('<nav> element is inside Navbar header', () => {
    wrap(<Navbar />);
    expect(document.querySelector('header nav')).toBeInTheDocument();
  });

  it('<ul> used for nav links list', () => {
    wrap(<Navbar />);
    expect(document.querySelector('nav ul')).toBeInTheDocument();
  });

  it('Hero Section is wrapped in <section>', () => {
    wrap(<Hero />);
    expect(document.querySelector('section')).toBeInTheDocument();
  });

  it('RisksAndSolutions is wrapped in <section>', () => {
    render(<RisksAndSolutions />);
    expect(document.querySelector('section')).toBeInTheDocument();
  });
});

// ─── Hiérarchie des titres ────────────────────────────────────────────────────

describe('A11y – Heading Hierarchy', () => {
  it('Hero has exactly one h1', () => {
    wrap(<Hero />);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('Hero has no h3 before h2 (no hierarchy skip)', () => {
    wrap(<Hero />);
    expect(screen.queryAllByRole('heading', { level: 3 })).toHaveLength(0);
  });

  it('RisksAndSolutions has a h2 (below page h1)', () => {
    render(<RisksAndSolutions />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('RisksAndSolutions has exactly 5 h3 (one per risk card)', () => {
    render(<RisksAndSolutions />);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(5);
  });

  it('Testimonials has a h2', () => {
    render(<Testimonials />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
});

// ─── ARIA sur les éléments interactifs ───────────────────────────────────────

describe('A11y – ARIA Attributes', () => {
  it('Navbar burger has aria-label', () => {
    wrap(<Navbar />);
    expect(screen.getByRole('button', { name: /Ouvrir le menu/i })).toHaveAttribute('aria-label');
  });

  it('Navbar burger has aria-expanded (initially false)', () => {
    wrap(<Navbar />);
    expect(screen.getByRole('button', { name: /Ouvrir le menu/i })).toHaveAttribute('aria-expanded', 'false');
  });

  it('Navbar burger aria-expanded toggles to true when open', () => {
    wrap(<Navbar />);
    fireEvent.click(screen.getByRole('button', { name: /Ouvrir le menu/i }));
    expect(screen.getByRole('button', { name: /Fermer le menu/i })).toHaveAttribute('aria-expanded', 'true');
  });

  it('Navbar logo link has aria-label containing INFORMEL-TIC', () => {
    wrap(<Navbar />);
    const logoLink = screen.getByRole('link', { name: /INFORMEL-TIC/i });
    expect(logoLink).toHaveAttribute('aria-label');
  });

  it('Contact form has aria-label="Formulaire de contact"', () => {
    wrap(<ContactPage />);
    expect(screen.getByRole('form', { name: /Formulaire de contact/i })).toBeInTheDocument();
  });

  it('Contact inputs have aria-invalid initially set to false', () => {
    wrap(<ContactPage />);
    expect(screen.getByLabelText(/Nom complet/i)).toHaveAttribute('aria-invalid', 'false');
  });

  it('Contact inputs have aria-describedby when error exists', async () => {
    wrap(<ContactPage />);
    fireEvent.click(screen.getByRole('button', { name: /Envoyer mon message/i }));
    const nameInput = await screen.findByLabelText(/Nom complet/i);
    expect(nameInput).toHaveAttribute('aria-describedby', 'name-error');
  });
});

// ─── Images et icônes décoratives ─────────────────────────────────────────────

describe('A11y – Images & Icônes', () => {
  it('all <img> elements have alt attributes', () => {
    wrap(<Navbar />);
    document.querySelectorAll('img').forEach((img) => {
      expect(img).toHaveAttribute('alt');
    });
  });

  it('logo image has non-empty alt text', () => {
    wrap(<Navbar />);
    const logo = screen.getByAltText('INFORMEL-TIC');
    expect(logo.getAttribute('alt')).not.toBe('');
  });

  it('decorative icons in Hero have aria-hidden="true"', () => {
    wrap(<Hero />);
    const hiddenIcons = document.querySelectorAll('[aria-hidden="true"]');
    expect(hiddenIcons.length).toBeGreaterThan(0);
  });

  it('decorative icons in RisksAndSolutions have aria-hidden="true"', () => {
    render(<RisksAndSolutions />);
    const hiddenIcons = document.querySelectorAll('[aria-hidden="true"]');
    expect(hiddenIcons.length).toBeGreaterThan(0);
  });
});

// ─── Formulaire – accessibilité ──────────────────────────────────────────────

describe('A11y – Form Labels & Associations', () => {
  it('all required fields have a visible required indicator (*)', () => {
    wrap(<ContactPage />);
    const requiredSpans = document.querySelectorAll('label span[style*="var(--accent)"]');
    expect(requiredSpans.length).toBeGreaterThanOrEqual(4); // name, email, subject, message
  });

  it('error message has role="alert" for screen readers', async () => {
    wrap(<ContactPage />);
    fireEvent.blur(screen.getByLabelText(/Nom complet/i));
    const alert = await screen.findByRole('alert');
    expect(alert).toBeInTheDocument();
  });

  it('error message is linked via aria-describedby', async () => {
    wrap(<ContactPage />);
    fireEvent.blur(screen.getByLabelText(/Nom complet/i));
    await screen.findByRole('alert');
    expect(screen.getByLabelText(/Nom complet/i)).toHaveAttribute('aria-describedby', 'name-error');
  });
});

// ─── Focus management ────────────────────────────────────────────────────────

describe('A11y – Focus Management', () => {
  it('nav links are accessible via keyboard (not tabIndex=-1)', () => {
    wrap(<Navbar />);
    screen.getAllByRole('link').forEach((link) => {
      expect(link.getAttribute('tabindex')).not.toBe('-1');
    });
  });

  it('honeypot input is hidden from keyboard (tabIndex=-1)', () => {
    wrap(<ContactPage />);
    const honeypot = document.querySelector('input[name="website"]');
    expect(honeypot).toHaveAttribute('tabindex', '-1');
  });
});

// ─── Mouvement réduit (prefers-reduced-motion) ────────────────────────────────

describe('A11y – Reduced Motion Support', () => {
  it('reveal class applied to animated sections (CSS handles prefers-reduced-motion)', () => {
    render(<RisksAndSolutions />);
    const reveals = document.querySelectorAll('.reveal');
    expect(reveals.length).toBeGreaterThan(0);
  });

  it('hero-bg class present (animation controlled via CSS @media)', () => {
    wrap(<Hero />);
    expect(document.querySelector('.hero-bg')).toBeInTheDocument();
  });
});

// ─── Contraste couleurs (vérification sémantique) ────────────────────────────

describe('A11y – Color Contrast Semantics', () => {
  it('btn-primary uses accent-contrast for text (WCAG)', () => {
    wrap(<Hero />);
    const btn = screen.getByRole('link', { name: /Demander un devis/i });
    // btn-primary CSS uses var(--accent-contrast) = #1f2937 on orange
    expect(btn.className).toContain('btn-primary');
  });

  it('muted text uses var(--muted) semantic token (not hardcoded gray)', () => {
    render(<Testimonials />);
    // Testimonial quote uses text-[color:var(--muted)] (semantic)
    const quoteTexts = document.querySelectorAll('[class*="text-\\[color:var\\(--muted\\)\\]"]');
    expect(quoteTexts.length).toBeGreaterThanOrEqual(1);
  });
});
