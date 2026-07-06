import { useEffect, useRef, useState } from 'react';
import { ArrowRight, TrendingUp, Users, Zap, MessageSquare } from 'lucide-react';

/* ─── animação helper ─────────────────────────────────── */
const cls = (base: string, visible: boolean, from: string) =>
  `${base} transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : `opacity-0 ${from}`}`;

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-20 overflow-hidden"
    >
      {/* ── Background ── */}
      {/* Gradient de cima pra baixo: branco → azul-50 → branco */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/60 to-white pointer-events-none" />
      {/* Padrão de pontos suave sobre o gradiente */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #bfdbfe 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.45,
        }}
      />

      {/* ── Conteúdo ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Badge tagline */}
        <div
          className={cls(
            'flex items-center gap-2 bg-white/80 border border-sky-100 px-4 py-2 rounded-full shadow-sm mb-8 backdrop-blur-sm',
            visible, '-translate-y-4'
          )}
          style={{ transitionDelay: '0ms' }}
        >
          <span className="w-2 h-2 rounded-full bg-brand-sky animate-pulse flex-shrink-0" />
          <span className="font-sans text-xs font-bold tracking-[0.18em] uppercase text-gray-500">
            Desenvolvimento Web Estratégico
          </span>
        </div>

        {/* Headline */}
        <h1
          className={cls(
            'font-display text-5xl md:text-6xl lg:text-[76px] font-bold text-gray-900 leading-[1.1] mb-6',
            visible, '-translate-y-4'
          )}
          style={{ transitionDelay: '100ms' }}
        >
          Transforme Seu Negócio em Uma{' '}
          <em className="italic text-brand-sky">Máquina de Vendas Digital</em>
        </h1>

        {/* Subheadline */}
        <p
          className={cls(
            'font-sans text-lg text-gray-500 max-w-2xl leading-relaxed mb-10',
            visible, '-translate-y-4'
          )}
          style={{ transitionDelay: '200ms' }}
        >
          Criamos ativos digitais estratégicos que funcionam como canais de receita.
          Cada projeto é customizado, entregue em até 15 dias e pronto para gerar resultados reais.
        </p>

        {/* CTA Buttons */}
        <div
          className={cls(
            'flex flex-col sm:flex-row items-center gap-4 mb-20',
            visible, '-translate-y-4'
          )}
          style={{ transitionDelay: '300ms' }}
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2.5 bg-gray-900 text-white font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-gray-900/10"
          >
            Solicitar Orçamento
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/55"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white/80 border border-gray-200 text-gray-700 font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:border-gray-400 hover:bg-white transition-all duration-200 backdrop-blur-sm"
          >
            WhatsApp
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>

        {/* Stats Panel + Floating card */}
        <div
          className={cls('relative w-full', visible, 'translate-y-6')}
          style={{ transitionDelay: '450ms' }}
        >
          {/* Floating Revenue Card */}
          <div
            className="absolute -top-5 right-0 md:-right-4 z-20 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
            style={{ animation: 'heroFloat 4s ease-in-out infinite' }}
          >
            <div className="w-9 h-9 rounded-full bg-brand-sky flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-4.5 h-4.5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-0.5">
                Real-Time Growth
              </p>
              <p className="text-sm font-bold text-gray-900">Receita +R$ 12,4k</p>
            </div>
          </div>

          {/* Stats White Card */}
          <div className="bg-white/90 border border-gray-100/80 rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-md overflow-hidden">

            {/* Top thin line decoration */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-brand-sky/40 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100/80 p-2">
              
              {/* Stat 1 */}
              <div className="flex flex-col gap-3 px-8 py-7 relative">
                <div className="w-10 h-10 rounded-full bg-brand-sky/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-brand-sky" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold text-gray-900">+300%</span>
                    <span className="font-sans text-xs font-bold text-brand-sky tracking-widest">ROI</span>
                  </div>
                  <p className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mt-2 mb-1">
                    Desempenho Anual
                  </p>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed">
                    Retorno sobre investimento otimizado através de funis proprietários.
                  </p>
                </div>
                {/* Mini chart line */}
                <svg viewBox="0 0 120 24" className="w-full h-5 mt-1 opacity-30">
                  <polyline points="0,20 20,18 40,14 60,10 80,6 100,4 120,1"
                    fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col gap-3 px-8 py-7 relative">
                <div className="w-10 h-10 rounded-full bg-brand-sky/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-brand-sky" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold text-gray-900">100+</span>
                    <span className="font-sans text-xs font-bold text-brand-sky tracking-widest">LEADS/DIA</span>
                  </div>
                  <p className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mt-2 mb-1">
                    Volume de Aquisição
                  </p>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed">
                    Escalabilidade horizontal para negócios em fase de crescimento.
                  </p>
                </div>
                <svg viewBox="0 0 120 24" className="w-full h-5 mt-1 opacity-30">
                  <polyline points="0,22 20,19 40,17 60,13 80,8 100,5 120,2"
                    fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col gap-3 px-8 py-7 relative">
                <div className="w-10 h-10 rounded-full bg-brand-sky/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-brand-sky" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold text-gray-900">8.2%</span>
                    <span className="font-sans text-xs font-bold text-brand-sky tracking-widest">BENCHMARK</span>
                  </div>
                  <p className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mt-2 mb-1">
                    Taxa de Eficiência
                  </p>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed">
                    Conversão média 3x superior à média do mercado nacional.
                  </p>
                </div>
                <svg viewBox="0 0 120 24" className="w-full h-5 mt-1 opacity-30">
                  <polyline points="0,18 20,16 40,15 60,11 80,9 100,6 120,3"
                    fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
