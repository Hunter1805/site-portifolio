import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

// 🎨 Escolha a composição do Hero:
// '/hero-composition-1.png' → Geometric Growth    (recomendado)
// '/hero-composition-2.png' → Tech Ecosystem      (dinâmico)
// '/hero-composition-3.png' → Layered Abstraction (elegante)
const HERO_IMAGE = '/hero-composition-1.png';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="min-h-screen bg-white flex items-center py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - TEXT CONTENT */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Tagline */}
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
                Desenvolvimento Web Estratégico
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Transforme Seu Negócio em Uma{' '}
              <span className="text-blue-600">Máquina de Vendas Digital</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Criamos ativos digitais estratégicos que funcionam como canais de receita. 
              Cada projeto é customizado, entregue em até uma semana e pronto para gerar resultados.
            </p>

            {/* Stats Row */}
            <div className="flex gap-8 mb-12 flex-wrap">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-blue-600">+300%</p>
                <p className="text-sm text-slate-600">Aumento de ROI</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-blue-600">100+</p>
                <p className="text-sm text-slate-600">Leads / Dia</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-blue-600">8%</p>
                <p className="text-sm text-slate-600">Conversão</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - ABSTRACT COMPOSITION */}
          <div className={`relative h-96 md:h-full min-h-96 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-3xl opacity-50"></div>

              {/* Abstract composition image */}
              <img
                src={HERO_IMAGE}
                alt="Composição abstrata - Elementos geométricos e ícones"
                className="relative z-10 w-full h-full object-contain p-4"
                loading="lazy"
              />

              {/* Floating accent elements */}
              <div className="absolute top-12 right-8 w-24 h-24 bg-blue-100 rounded-lg opacity-30 animate-pulse"></div>
              <div className="absolute bottom-16 left-8 w-20 h-20 bg-blue-50 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-200 rounded opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
