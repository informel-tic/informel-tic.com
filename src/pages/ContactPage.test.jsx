import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import ContactPage from './ContactPage';

const renderContact = () => render(<MemoryRouter><ContactPage /></MemoryRouter>);

describe('ContactPage – Header', () => {
  it('renders h1 heading "Parlons de votre projet"', () => {
    renderContact();
    expect(screen.getByRole('heading', { level: 1, name: /Parlons de votre projet/i })).toBeInTheDocument();
  });

  it('renders "Contactez-nous" badge', () => {
    renderContact();
    expect(screen.getByText(/Contactez-nous/i)).toBeInTheDocument();
  });

  it('mentions response time "24 heures"', () => {
    renderContact();
    expect(screen.getByText(/24 heures/i)).toBeInTheDocument();
  });

  it('renders "devis personnalisé" mention', () => {
    renderContact();
    expect(screen.getAllByText(/devis personnalisé/i).length).toBeGreaterThanOrEqual(1);
  });
});

describe('ContactPage – Formulaire de Contact', () => {
  it('form has aria-label "Formulaire de contact"', () => {
    renderContact();
    expect(screen.getByRole('form', { name: /Formulaire de contact/i })).toBeInTheDocument();
  });

  it('renders "Nom complet" input field', () => {
    renderContact();
    expect(screen.getByLabelText(/Nom complet/i)).toBeInTheDocument();
  });

  it('renders "Adresse e-mail" input field with type email', () => {
    renderContact();
    const email = screen.getByLabelText(/Adresse e-mail/i);
    expect(email).toBeInTheDocument();
    expect(email).toHaveAttribute('type', 'email');
  });

  it('renders "Téléphone" field with type tel', () => {
    renderContact();
    const phone = screen.getByLabelText(/Téléphone/i);
    expect(phone).toHaveAttribute('type', 'tel');
  });

  it('renders "Sujet" input field', () => {
    renderContact();
    expect(screen.getByLabelText(/^Sujet/i)).toBeInTheDocument();
  });

  it('renders "Votre message" textarea', () => {
    renderContact();
    const textarea = screen.getByLabelText(/Votre message/i);
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('renders submit button "Envoyer mon message"', () => {
    renderContact();
    expect(screen.getByRole('button', { name: /Envoyer mon message/i })).toBeInTheDocument();
  });

  it('submit button has type="submit"', () => {
    renderContact();
    expect(screen.getByRole('button', { name: /Envoyer mon message/i })).toHaveAttribute('type', 'submit');
  });

  it('includes honeypot hidden field (anti-spam)', () => {
    renderContact();
    const honeypot = document.querySelector('input[name="website"]');
    expect(honeypot).toBeInTheDocument();
  });
});

describe('ContactPage – Accessibilité du Formulaire', () => {
  it('name field has required attribute', () => {
    renderContact();
    expect(screen.getByLabelText(/Nom complet/i)).toHaveAttribute('required');
  });

  it('email field has required attribute', () => {
    renderContact();
    expect(screen.getByLabelText(/Adresse e-mail/i)).toHaveAttribute('required');
  });

  it('subject field has required attribute', () => {
    renderContact();
    expect(screen.getByLabelText(/^Sujet/i)).toHaveAttribute('required');
  });

  it('message field has required attribute', () => {
    renderContact();
    expect(screen.getByLabelText(/Votre message/i)).toHaveAttribute('required');
  });

  it('phone field is optional (no required attribute)', () => {
    renderContact();
    expect(screen.getByLabelText(/Téléphone/i)).not.toHaveAttribute('required');
  });

  it('inputs have aria-invalid="false" initially', () => {
    renderContact();
    expect(screen.getByLabelText(/Nom complet/i)).toHaveAttribute('aria-invalid', 'false');
    expect(screen.getByLabelText(/Adresse e-mail/i)).toHaveAttribute('aria-invalid', 'false');
  });

  it('each field has an id matching its label htmlFor', () => {
    renderContact();
    expect(screen.getByLabelText(/Nom complet/i)).toHaveAttribute('id', 'name');
    expect(screen.getByLabelText(/Adresse e-mail/i)).toHaveAttribute('id', 'email');
    expect(screen.getByLabelText(/^Sujet/i)).toHaveAttribute('id', 'subject');
    expect(screen.getByLabelText(/Votre message/i)).toHaveAttribute('id', 'message');
  });
});

describe('ContactPage – Validation', () => {
  it('shows validation errors after submit with empty required fields', async () => {
    renderContact();
    fireEvent.click(screen.getByRole('button', { name: /Envoyer mon message/i }));
    const errors = await screen.findAllByRole('alert');
    expect(errors.length).toBeGreaterThanOrEqual(1);
  });

  it('name input becomes aria-invalid after failed submit', async () => {
    renderContact();
    fireEvent.click(screen.getByRole('button', { name: /Envoyer mon message/i }));
    const nameInput = await screen.findByLabelText(/Nom complet/i);
    expect(nameInput).toHaveAttribute('aria-invalid', 'true');
  });

  it('does not show success toast when form has validation errors', () => {
    renderContact();
    fireEvent.click(screen.getByRole('button', { name: /Envoyer mon message/i }));
    expect(screen.queryByText(/Message envoyé/i)).not.toBeInTheDocument();
  });

  it('shows error on name blur with empty value', async () => {
    renderContact();
    fireEvent.blur(screen.getByLabelText(/Nom complet/i));
    const error = await screen.findByRole('alert');
    expect(error).toBeInTheDocument();
  });

  it('clears name error when valid value typed', async () => {
    renderContact();
    const nameInput = screen.getByLabelText(/Nom complet/i);
    fireEvent.blur(nameInput);
    await screen.findByRole('alert');
    fireEvent.change(nameInput, { target: { name: 'name', value: 'Jean Dupont' } });
    expect(screen.queryAllByRole('alert').filter((a) => a.textContent?.match(/Prénom et nom/))).toHaveLength(0);
  });
});

describe('ContactPage – Informations de Contact', () => {
  it('renders email address contact@informel-tic.com', () => {
    renderContact();
    expect(screen.getByText(/contact@informel-tic.com/i)).toBeInTheDocument();
  });

  it('email is a valid mailto: link', () => {
    renderContact();
    const emailLink = screen.getByRole('link', { name: /contact@informel-tic.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:contact@informel-tic.com');
  });

  it('renders physical address with Lourches', () => {
    renderContact();
    expect(screen.getByText(/Lourches/i)).toBeInTheDocument();
  });

  it('renders "Réponse sous 24h" reassurance block', () => {
    renderContact();
    expect(screen.getByText(/Réponse sous 24h/i)).toBeInTheDocument();
  });

  it('renders link to /offres in sidebar', () => {
    renderContact();
    expect(screen.getAllByRole('link', { name: /offres & tarifs/i }).length).toBeGreaterThanOrEqual(1);
  });
});
