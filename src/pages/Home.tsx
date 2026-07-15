import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import About from '../components/About';
import StatsSection from '../components/StatsSection';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Cta from '../components/Cta';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      {/* 1. Hero — dark, phones, headline */}
      <Hero />

      {/* 2. Como Funciona — dark, image + 3 cards */}
      <HowItWorks />

      {/* 3. Sobre — image left, text right, vision/mission cards */}
      <About />

      {/* 4. Stats — 4 numbers */}
      <StatsSection />

      {/* 5. Serviços — header + 3 photo cards */}
      <Services />

      {/* 6. Portfólio */}
      <Portfolio />

      {/* 7. Processo */}
      <Process />

      {/* 8. CTA */}
      <Cta />

      {/* 9. FAQ */}
      <FAQ />

      {/* 10. Contato */}
      <Contact />
    </>
  );
}
