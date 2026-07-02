/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Comparison from './components/Comparison';
import Services from './components/Services';
import Process from './components/Process';
import Cta from './components/Cta';
import ExampleProjects from './components/ExampleProjects';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Comparison />
        <Services />
        <Process />
        <Cta />
        <ExampleProjects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}


