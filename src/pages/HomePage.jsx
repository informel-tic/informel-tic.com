import Hero from '../components/home/Hero';
import StatsBar from '../components/home/StatsBar';
import DualEntry from '../components/home/DualEntry';
import ValuesSection from '../components/home/ValuesSection';
import RisksAndSolutions from '../components/home/RisksAndSolutions';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/home/CTABanner';
import SEO from '../components/SEO';
import LocalBusinessJsonLd from '../components/LocalBusinessJsonLd';

export default function HomePage() {
  return (
    <>
      <SEO
        title="INFORMEL-TIC — Artisan Numérique à Lille & dans le Nord (59)"
        description="Site web sur-mesure, visibilité Google, logiciel de caisse, dépannage et formation. Un interlocuteur unique pour les pros et particuliers du Nord. Devis gratuit sous 24h."
        noSuffix
        url="https://informel-tic.com/"
      />
      <LocalBusinessJsonLd />
      <Hero />
      <StatsBar />
      <DualEntry />
      <RisksAndSolutions />
      <Testimonials />
      <ValuesSection />
      <CTABanner />
    </>
  );
}
