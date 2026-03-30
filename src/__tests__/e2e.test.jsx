import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import HomePage from '../pages/HomePage';
import PricingPage from '../pages/PricingPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// TestApp uses MemoryRouter so navigation works reliably in jsdom
function TestApp({ initialRoute = '/' }) {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <div className="noise min-h-screen flex flex-col theme-light">
        <a href="#content" className="skip-link">Aller au contenu</a>
        <Navbar />
        <main id="content" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/offres" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<p>404 – Page introuvable</p>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </MemoryRouter>
  );
}

// ─── Chargement initial ────────────────────────────────────────────────────────

describe('E2E – Homepage Initial Load', () => {
  it('renders h1 homepage heading', () => {
    render(<TestApp />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Votre site et votre visibilité/i })
    ).toBeInTheDocument();
  });

  it('renders Navbar with brand link', () => {
    render(<TestApp />);
    expect(screen.getAllByRole('link', { name: /INFORMEL-TIC/i }).length).toBeGreaterThanOrEqual(1);
  });

  it('renders Footer tagline', () => {
    render(<TestApp />);
    expect(screen.getByText(/Développement web sur-mesure/i)).toBeInTheDocument();
  });

  it('renders all 4 homepage sections', () => {
    render(<TestApp />);
    expect(screen.getByRole('heading', { level: 1, name: /Votre site et votre visibilité/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Risques/i })).toBeInTheDocument();
    expect(screen.getByText(/Ils nous font confiance/i)).toBeInTheDocument();
    expect(screen.getByText(/Prêt à lancer votre projet/i)).toBeInTheDocument();
  });
});

// ─── Navigation via la barre de navigation ────────────────────────────────────

describe('E2E – Navbar Navigation', () => {
  it('navigates to Contact page via "Contact" nav link', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getAllByRole('link', { name: /^Contact$/i })[0]);
    expect(await screen.findByRole('heading', { level: 1, name: /Parlons de votre projet/i })).toBeInTheDocument();
  });

  it('navigates to Pricing page via "Offres & Tarifs" nav link', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getAllByRole('link', { name: /Offres & Tarifs/i })[0]);
    expect(await screen.findByRole('heading', { level: 1, name: /Des offres/i })).toBeInTheDocument();
  });

  it('navigates to About page via "À propos" nav link', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getAllByRole('link', { name: /^À propos$/i })[0]);
    expect(await screen.findByRole('heading', { level: 1, name: /Qui est INFORMEL-TIC/i })).toBeInTheDocument();
  });

  it('returns to Home page via "Accueil" nav link', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getAllByRole('link', { name: /^Contact$/i })[0]);
    await screen.findByRole('heading', { level: 1, name: /Parlons de votre projet/i });
    fireEvent.click(screen.getAllByRole('link', { name: /^Accueil$/i })[0]);
    expect(
      await screen.findByRole('heading', { level: 1, name: /Votre site et votre visibilité/i })
    ).toBeInTheDocument();
  });

  it('Navbar persists across page changes (stays mounted)', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getAllByRole('link', { name: /Offres & Tarifs/i })[0]);
    await screen.findByRole('heading', { level: 1, name: /Des offres/i });
    expect(screen.getAllByRole('link', { name: /INFORMEL-TIC/i }).length).toBeGreaterThanOrEqual(1);
  });

  it('Footer persists across page changes', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getAllByRole('link', { name: /^À propos$/i })[0]);
    await screen.findByRole('heading', { level: 1, name: /Qui est INFORMEL-TIC/i });
    // Footer element persists after navigation
    expect(document.querySelector('footer')).toBeInTheDocument();
  });
});

// ─── Flux CTA Hero → Contact / Pricing ───────────────────────────────────────

describe('E2E – Hero CTA Flows', () => {
  it('"Demander un devis" Hero CTA navigates to Contact', async () => {
    render(<TestApp />);
    // getAllByRole because Navbar desktop CTA also has "Demander un devis"
    fireEvent.click(screen.getAllByRole('link', { name: /Demander un devis/i })[0]);
    expect(await screen.findByRole('heading', { level: 1, name: /Parlons de votre projet/i })).toBeInTheDocument();
  });

  it('"Voir nos offres" Hero CTA navigates to Pricing', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getByRole('link', { name: /Voir nos offres/i }));
    expect(await screen.findByRole('heading', { level: 1, name: /Des offres/i })).toBeInTheDocument();
  });

  it('"Je veux une visibilité maximale" CTABanner → Contact', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getByRole('link', { name: /Je veux une visibilité maximale/i }));
    expect(await screen.findByRole('heading', { level: 1, name: /Parlons de votre projet/i })).toBeInTheDocument();
  });

  it('"Voir nos packs" CTABanner → Pricing', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getByRole('link', { name: /Voir nos packs/i }));
    expect(await screen.findByRole('heading', { level: 1, name: /Des offres/i })).toBeInTheDocument();
  });
});

// ─── Navigation via le menu mobile ──────────────────────────────────────────

describe('E2E – Mobile Menu Navigation', () => {
  it('opens mobile menu and navigates to Contact', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getByRole('button', { name: /Ouvrir le menu/i }));
    const contactLinks = screen.getAllByRole('link', { name: /^Contact$/i });
    fireEvent.click(contactLinks[contactLinks.length - 1]);
    expect(await screen.findByRole('heading', { level: 1, name: /Parlons de votre projet/i })).toBeInTheDocument();
  });

  it('mobile menu closes after clicking a link', () => {
    render(<TestApp />);
    fireEvent.click(screen.getByRole('button', { name: /Ouvrir le menu/i }));
    expect(screen.getByRole('button', { name: /Fermer le menu/i })).toBeInTheDocument();
    const aboutLinks = screen.getAllByRole('link', { name: /^À propos$/i });
    fireEvent.click(aboutLinks[aboutLinks.length - 1]);
    // setOpen(false) called on NavLink onClick → burger resets to "Ouvrir"
    expect(screen.getByRole('button', { name: /Ouvrir le menu/i })).toBeInTheDocument();
  });
});

// ─── Flux Pricing → Contact ───────────────────────────────────────────────────

describe('E2E – Pricing → Contact', () => {
  it('"Commencer" plan button navigates to Contact', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getAllByRole('link', { name: /Offres & Tarifs/i })[0]);
    await screen.findByRole('heading', { level: 1, name: /Des offres/i });
    fireEvent.click(screen.getAllByRole('link', { name: /^Commencer$/i })[0]);
    expect(await screen.findByRole('heading', { level: 1, name: /Parlons de votre projet/i })).toBeInTheDocument();
  });
});

// ─── Footer navigation ────────────────────────────────────────────────────────

describe('E2E – Footer Navigation', () => {
  it('Footer "Accueil" link navigates to homepage', async () => {
    render(<TestApp />);
    fireEvent.click(screen.getAllByRole('link', { name: /^Contact$/i })[0]);
    await screen.findByRole('heading', { level: 1, name: /Parlons de votre projet/i });
    const footerAccueil = screen.getAllByRole('link', { name: /^Accueil$/i });
    fireEvent.click(footerAccueil[footerAccueil.length - 1]);
    expect(
      await screen.findByRole('heading', { level: 1, name: /Votre site et votre visibilité/i })
    ).toBeInTheDocument();
  });
});

// ─── Page 404 ────────────────────────────────────────────────────────────────

describe('E2E – 404 Not Found', () => {
  it('unknown route renders 404 message', () => {
    render(<TestApp initialRoute="/route-inconnue" />);
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
