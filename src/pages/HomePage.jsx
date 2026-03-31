import Hero from '../components/home/Hero';
import DualEntry from '../components/home/DualEntry';
import ValuesSection from '../components/home/ValuesSection';
import CTABanner from '../components/home/CTABanner';
import SEO from '../components/SEO';
import LocalBusinessJsonLd from '../components/LocalBusinessJsonLd';

export default function HomePage() {
  return (
    <main>
      <SEO title="Accueil — INFORMEL-TIC" description="L'Artisan Numérique du Nord : services de grande agence, proximité d'un artisan. Site web, dépannage, formation — pros et particuliers à Lille & dans le 59." />
      <LocalBusinessJsonLd />
      <Hero />
      <DualEntry />
      <ValuesSection />
      <CTABanner />
    </main>
  );
}
