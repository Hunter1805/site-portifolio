import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Zap } from 'lucide-react';

/* ─── helper ─────────────────────────────── */
const anim = (visible: boolean, delay: string) =>
  `transition-all duration-700 delay-[${delay}] ${
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  }`;

const BAR_HEIGHTS = [28, 42, 35, 54, 63, 70, 82, 100];

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
    <>
      {/* ═══════════════════════════════════════
          HERO — 2 colunas: texto + mockup
      ═══════════════════════════════════════ */}
      <section
        ref={ref}
        className="relative flex items-center overflow-hidden min-h-screen"
      >
        {/* Background: gradiente suave azul-branco */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-slate-100 pointer-events-none" />
        {/* Padrão de pontos discreto */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #bae6fd 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            opacity: 0.35,
          }}
        />
        {/* Glow difuso no canto superior direito */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-brand-sky/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* ── COLUNA ESQUERDA: Texto ── */}
            <div className="flex flex-col">

              {/* Badge */}
              <div className={`${anim(visible, '0ms')} inline-flex items-center gap-2 self-start border border-brand-sky/25 bg-brand-sky/5 px-4 py-2 rounded-full mb-8 backdrop-blur-sm`}>
                <Zap className="w-3.5 h-3.5 text-brand-sky flex-shrink-0" />
                <span className="font-sans text-[11px] font-bold tracking-[0.18em] uppercase text-gray-600">
                  Liderança em Crescimento Digital
                </span>
              </div>

              {/* Headline */}
              <h1 className={`${anim(visible, '100ms')} font-display font-bold leading-[1.05] text-gray-900 text-5xl md:text-6xl lg:text-[68px] mb-6`}>
                Transforme Seu<br />
                Negócio em Uma<br />
                <em className="italic text-brand-sky not-italic">Máquina de Vendas</em><br />
                Digital
              </h1>

              {/* Subheadline */}
              <p className={`${anim(visible, '200ms')} font-sans text-base text-gray-500 max-w-md leading-relaxed mb-10`}>
                Criamos ativos digitais estratégicos que funcionam como canais de receita.
                Cada projeto é customizado, entregue em até 15 dias e pronto para gerar resultados.
              </p>

              {/* CTAs */}
              <div className={`${anim(visible, '300ms')} flex flex-wrap gap-4`}>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-sans font-semibold text-sm px-7 py-4 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/10"
                >
                  Solicitar Orçamento
                  <TrendingUp className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white/80 border border-gray-200 hover:border-gray-400 hover:bg-white text-gray-700 font-sans font-semibold text-sm px-7 py-4 rounded-lg transition-all duration-200 backdrop-blur-sm"
                >
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>

            {/* ── COLUNA DIREITA: Dashboard Mockup ── */}
            <div className={`${anim(visible, '200ms')} relative flex items-center justify-center`}>

              {/* Ícone flutuante de trend */}
              <div
                className="absolute -top-5 -left-5 z-20 w-12 h-12 bg-white rounded-xl shadow-xl flex items-center justify-center border border-gray-100"
                style={{ animation: 'heroFloat 3.5s ease-in-out infinite' }}
              >
                <TrendingUp className="w-6 h-6 text-brand-sky" />
              </div>

              {/* Card do dashboard */}
              <div className="w-full max-w-[430px] bg-white rounded-2xl shadow-[0_24px_64px_rgba(15,23,42,0.10)] border border-gray-100 overflow-hidden">

                {/* Barra de título (window chrome) */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-gray-200" />
                  </div>
                  <span className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-[0.18em]">
                    Live Reporting ↗
                  </span>
                </div>

                <div className="p-6">
                  {/* Gráfico de barras + label */}
                  <div className="flex items-end gap-2 mb-6">
                    {/* Barras */}
                    <div className="flex items-end gap-1.5 flex-1 h-28">
                      {BAR_HEIGHTS.map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-md transition-all duration-1000"
                          style={{
                            height: visible ? `${h}%` : '0%',
                            transitionDelay: `${400 + i * 80}ms`,
                            backgroundColor:
                              i === BAR_HEIGHTS.length - 1
                                ? '#0EA5E9'
                                : `rgba(14, 165, 233, ${0.15 + i * 0.09})`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Volume Mensal */}
                    <div className="flex flex-col items-end justify-end ml-4 flex-shrink-0 pb-1">
                      <p className="font-sans text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
                        Volume Mensal
                      </p>
                      <p className="font-display text-2xl font-bold text-gray-900">R$ 2.4M</p>
                    </div>
                  </div>

                  {/* Métricas inferiores */}
                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-50">
                    <div>
                      <p className="font-sans text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                        CAC Médio
                      </p>
                      <p className="font-display text-xl font-bold text-gray-900">R$ 14,20</p>
                    </div>
                    <div>
                      <p className="font-sans text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                        ROAS
                      </p>
                      <p className="font-display text-xl font-bold text-gray-900">8.4x</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS STRIP — 3 colunas embaixo
      ═══════════════════════════════════════ */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              {
                value: '+300%',
                label: 'ROI em 6 Meses',
                desc: 'Escalabilidade comprovada em mercados competitivos.',
              },
              {
                value: '100+',
                label: 'Leads por Dia',
                desc: 'Fluxo contínuo de oportunidades qualificadas.',
              },
              {
                value: '8%',
                label: 'Taxa de Conversão',
                desc: 'Otimização máxima de cada clique investido.',
              },
            ].map(({ value, label, desc }) => (
              <div key={label} className="flex flex-col items-center text-center px-8 py-14">
                <p className="font-display text-5xl font-bold text-brand-sky mb-2">{value}</p>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-3">
                  {label}
                </p>
                <p className="font-sans text-sm text-gray-500 max-w-[200px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
