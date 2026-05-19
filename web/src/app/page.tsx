import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Values from '@/components/sections/Values';
import Portfolio from '@/components/sections/Portfolio';
import Pricing from '@/components/sections/Pricing';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Values />
      <Portfolio />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
