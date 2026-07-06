import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';

import Services from '../components/Services';
import Process from '../components/Process';
import Cta from '../components/Cta';
import ExampleProjects from '../components/ExampleProjects';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />

      <Services />
      <Process />
      <Cta />
      <ExampleProjects />
      <FAQ />
      <Contact />
    </>
  );
}
