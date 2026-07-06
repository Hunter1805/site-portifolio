import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, TrendingUp, MessageSquare, Check, ArrowUpRight } from 'lucide-react';

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
    <section ref={ref} className="min-h-screen bg-white flex items-center py-20 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - TEXT CONTENT */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Tagline */}
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-brand-sky tracking-widest uppercase">
                Desenvolvimento Web Estratégico
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Transforme Seu Negócio em Uma{' '}
              <span className="text-brand-sky">Máquina de Vendas Digital</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Criamos ativos digitais estratégicos que funcionam como canais de receita. 
              Cada projeto é customizado, entregue em até 15 dias e pronto para gerar resultados.
            </p>

            {/* Stats Row */}
            <div className="flex gap-8 mb-12 flex-wrap">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-brand-sky">+300%</p>
                <p className="text-sm text-slate-600">Aumento de ROI</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-brand-sky">100+</p>
                <p className="text-sm text-slate-600">Leads / Dia</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-brand-sky">8%</p>
                <p className="text-sm text-slate-600">Conversão</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
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

          {/* RIGHT SIDE - INTERACTIVE DASHBOARD MOCKUP */}
          <div className={`relative w-full aspect-square md:aspect-auto md:h-[550px] flex items-center justify-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 -right-10 w-72 h-72 bg-brand-sky/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-1/4 -left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

            {/* Core Interactive Panel (Glassmorphism) */}
            <div className="relative w-full max-w-[440px] bg-slate-900/95 border border-slate-800 rounded-3xl p-6 shadow-[0_30px_60px_rgba(15,23,42,0.35)] backdrop-blur-xl overflow-hidden z-10">
              
              {/* Top window controls */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                </div>
                <div className="text-[11px] font-medium text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  elevete.com.br/dashboard
                </div>
                <div className="w-6"></div>
              </div>

              {/* Main dashboard stats header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Faturamento do Mês</p>
                  <h3 className="text-2xl font-bold text-white mt-1">R$ 48.290,00</h3>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> +24%
                </span>
              </div>

              {/* Animated Chart SVG */}
              <div className="w-full h-36 mb-6 relative">
                <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="300" y2="20" stroke="#1e293b" strokeDasharray="3,3" />
                  <line x1="0" y1="60" x2="300" y2="60" stroke="#1e293b" strokeDasharray="3,3" />
                  
                  {/* Fill Area */}
                  <path 
                    d="M0,80 Q40,85 80,60 T160,50 T240,25 T300,15 L300,100 L0,100 Z" 
                    fill="url(#chart-glow)" 
                  />
                  
                  {/* Stroke Line */}
                  <path 
                    d="M0,80 Q40,85 80,60 T160,50 T240,25 T300,15" 
                    fill="none" 
                    stroke="#0EA5E9" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                  />
                  
                  {/* Interactive Dot */}
                  <circle cx="300" cy="15" r="4.5" fill="#0EA5E9" />
                  <circle cx="300" cy="15" r="9" fill="#0EA5E9" className="animate-ping" opacity="0.4" />
                </svg>
              </div>

              {/* Recent Activity Mini List */}
              <div className="space-y-3">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Atividade recente</p>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Lead Convertido</p>
                      <p className="text-[10px] text-slate-400">Thiago S. via Landing Page</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">+R$ 3.500</span>
                </div>
              </div>

            </div>

            {/* Floating Widget 1: Lead Notification card (Overlaps top left) */}
            <div 
              className="absolute -top-4 -left-2 md:-left-6 bg-white border border-slate-100 rounded-2xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.06)] flex items-center gap-3.5 max-w-[220px] z-20"
              style={{ animation: 'heroFloat 4s ease-in-out infinite' }}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 flex-shrink-0 border border-emerald-100">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-wide">Novo Lead!</p>
                <p className="text-xs font-bold text-slate-800 mt-0.5">Thiago Silveira</p>
                <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                  Vindo do WhatsApp
                </p>
              </div>
            </div>

            {/* Floating Widget 2: Conversion Badge (Overlaps bottom right) */}
            <div 
              className="absolute -bottom-4 -right-2 md:-right-6 bg-white border border-slate-100 rounded-2xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.06)] flex flex-col gap-1.5 min-w-[150px] z-20"
              style={{ animation: 'heroFloat 4s ease-in-out infinite', animationDelay: '1.5s' }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Conversão</span>
                <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-0.5">
                  <ArrowUpRight className="w-3 h-3" /> 8.2%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand-sky rounded-full w-[82%]"></div>
              </div>
              <p className="text-[9px] text-slate-400">Meta superada em 2%</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
