import Hero from '../components/home/Hero';
import RisksAndSolutions from '../components/home/RisksAndSolutions';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/home/CTABanner';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <main>
      <SEO title="Accueil — INFORMEL-TIC" description="INFORMEL-TIC — Sites web sur-mesure pour artisans et commerces locaux. Sans WordPress, performance et code livré." />
      <Hero />
      <RisksAndSolutions />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
