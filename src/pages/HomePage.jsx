import Hero from '../components/home/Hero';
import RisksAndSolutions from '../components/home/RisksAndSolutions';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/home/CTABanner';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <RisksAndSolutions />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
