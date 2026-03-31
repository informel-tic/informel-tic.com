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

describe('A11y – Skip link and landmarks', () => {
  it('skip link is present and targets the main content', () => {
    render(<App />);
    const skipLink = screen.getByText(/Aller au contenu/i);
    expect(skipLink).toHaveAttribute('href', '#content');
    expect(skipLink).toHaveClass('skip-link');
  });

  it('main, header, nav and footer landmarks exist', () => {
    render(<App />);
    expect(document.querySelector('main#content')).toBeInTheDocument();
    expect(document.querySelector('header')).toBeInTheDocument();
    expect(document.querySelector('header nav')).toBeInTheDocument();
    expect(document.querySelector('footer')).toBeInTheDocument();
  });
});

describe('A11y – Headings', () => {
  it('Hero exposes a single h1', () => {
    wrap(<Hero />);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('RisksAndSolutions exposes a h2 and six h3 headings', () => {
    render(<RisksAndSolutions />);
    expect(screen.getByRole('heading', { level: 2, name: /Vos problèmes, nos solutions/i })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6);
  });

  it('Testimonials exposes a h2', () => {
    render(<MemoryRouter><Testimonials /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 2, name: /Pourquoi nous faire confiance/i })).toBeInTheDocument();
  });
});

describe('A11y – Interactions', () => {
  it('navbar burger has accessible labels and state', () => {
    wrap(<Navbar />);
    const burger = screen.getByRole('button', { name: /Ouvrir le menu/i });
    expect(burger).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(burger);
    expect(screen.getByRole('button', { name: /Fermer le menu/i })).toHaveAttribute('aria-expanded', 'true');
  });

  it('contact form exposes an accessible form label', () => {
    wrap(<ContactPage />);
    expect(screen.getByRole('form', { name: /Formulaire de contact/i })).toBeInTheDocument();
  });
});

describe('A11y – Form and media semantics', () => {
  it('contact honeypot is hidden from keyboard focus', () => {
    wrap(<ContactPage />);
    expect(document.querySelector('input[name="website"]')).toHaveAttribute('tabindex', '-1');
  });

  it('decorative icons are hidden from assistive tech', () => {
    wrap(<Hero />);
    expect(document.querySelectorAll('[aria-hidden="true"]').length).toBeGreaterThan(0);
  });
});

describe('A11y – Footer and CTA semantics', () => {
  it('footer contains a privacy policy link', () => {
    wrap(<Footer />);
    expect(screen.getByRole('link', { name: /Politique de confidentialité/i })).toBeInTheDocument();
  });

  it('primary CTA is still a semantic link', () => {
    wrap(<Hero />);
    expect(screen.getByRole('link', { name: /Obtenir mon diagnostic gratuit/i })).toHaveAttribute('href', '/contact');
  });
});
