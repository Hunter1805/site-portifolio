import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Play, Star } from 'lucide-react';

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

  const anim = (delay: number) =>
    `transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <>
      {/* ── HERO ── */}
      <section
        ref={ref}
        className="relative flex flex-col justify-center overflow-hidden min-h-screen"
        style={{ background: 'linear-gradient(135deg, #0c1322 0%, #0d1829 50%, #091020 100%)' }}
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(14,165,233,0.12) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-sky/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-sky-400/5 blur-[100px] pointer-events-none" />

        {/* Marquee banner */}
        <div className="w-full bg-brand-sky/10 border-b border-brand-sky/15 py-3 z-10 relative">
          <div className="relative w-full overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee select-none">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="mx-8 font-sans text-xs font-bold tracking-[0.18em] uppercase text-brand-sky/80">
                  Liderança em Crescimento Digital &nbsp;&nbsp;•&nbsp;&nbsp;
                </span>
              ))}
            </div>
            <div className="inline-block animate-marquee select-none" aria-hidden="true">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="mx-8 font-sans text-xs font-bold tracking-[0.18em] uppercase text-brand-sky/80">
                  Liderança em Crescimento Digital &nbsp;&nbsp;•&nbsp;&nbsp;
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-12 pb-20 md:pt-16 md:pb-28">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── LEFT: Text ── */}
            <div className="flex flex-col">

              {/* Label */}
              <div
                className={`${anim(0)} inline-flex items-center gap-2 self-start mb-6`}
                style={{ transitionDelay: '0ms' }}
              >
                <span className="font-sans text-[11px] font-bold tracking-[0.18em] uppercase text-brand-sky border border-brand-sky/30 bg-brand-sky/10 px-3 py-1.5 rounded-sm">
                  Bem-vindo à Elevete
                </span>
              </div>

              {/* Headline */}
              <h1
                className={`${anim(0)} font-display font-bold text-white leading-[1.06] mb-6 text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem]`}
                style={{ transitionDelay: '80ms' }}
              >
                Onde a Expertise{' '}
                <span className="block text-gradient-sky">Cria Excelência</span>
              </h1>

              {/* Subheadline */}
              <p
                className={`${anim(0)} font-sans text-sm sm:text-base text-gray-400 max-w-md leading-relaxed mb-10`}
                style={{ transitionDelay: '160ms' }}
              >
                Transformamos presença digital em resultados reais. Sites, sistemas e estratégias construídas para converter visitantes em clientes — sem atalhos.
              </p>

              {/* CTAs */}
              <div
                className={`${anim(0)} flex flex-col sm:flex-row gap-4 mb-10`}
                style={{ transitionDelay: '240ms' }}
              >
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2.5 bg-brand-sky hover:bg-sky-400 text-white font-sans font-semibold text-sm px-8 py-4 rounded-md transition-all duration-200 shadow-lg shadow-brand-sky/30 hover:shadow-brand-sky/50 hover:-translate-y-0.5"
                >
                  Vamos Começar
                  <TrendingUp className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/5538999908770"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 glass-card text-white font-sans font-semibold text-sm px-8 py-4 rounded-md transition-all duration-200 hover:bg-white/10"
                >
                  <span className="w-8 h-8 flex items-center justify-center bg-brand-sky/20 rounded-full">
                    <Play className="w-3 h-3 text-brand-sky fill-brand-sky" />
                  </span>
                  Ver Projetos
                </a>
              </div>

              {/* Stars / social proof */}
              <div
                className={`${anim(0)} flex items-center gap-5`}
                style={{ transitionDelay: '320ms' }}
              >
                {/* Avatars */}
                <div className="flex -space-x-2">
                  {['#0EA5E9','#38bdf8','#7dd3fc','#bae6fd'].map((c, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-brand-dark flex items-center justify-center font-bold text-[10px] text-white"
                      style={{ background: c }}
                    >
                      {['PV','MA','JC','LR'][i]}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-brand-dark bg-brand-sky/20 flex items-center justify-center text-brand-sky font-bold text-[10px]">
                    +
                  </div>
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="font-sans text-xs text-gray-400">
                    <span className="font-bold text-white">4.9</span> (13/13) Clientes Satisfeitos
                  </p>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Floating Phones ── */}
            <div
              className={`${anim(0)} relative flex items-center justify-center min-h-[420px] md:min-h-[500px]`}
              style={{ transitionDelay: '200ms' }}
            >
              {/* Phone 1 — back, tilted right */}
              <div
                className="absolute animate-float-2 z-10"
                style={{
                  right: '2%',
                  top: '8%',
                  transform: 'rotate(5deg)',
                  filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))',
                }}
              >
                <div className="w-[140px] sm:w-[160px] md:w-[180px] bg-gray-950 rounded-[28px] p-[6px] border border-white/10 shadow-2xl">
                  <div className="rounded-[22px] overflow-hidden bg-white">
                    <img
                      src="/hero-phones.png"
                      alt="Preview do projeto web"
                      className="w-full h-[260px] sm:h-[300px] md:h-[340px] object-cover object-left"
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-900 rounded-full" />
                </div>
              </div>

              {/* Phone 2 — front, tilted left, lower */}
              <div
                className="absolute animate-float-1 z-20"
                style={{
                  left: '5%',
                  bottom: '5%',
                  transform: 'rotate(-3deg)',
                  filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.7))',
                }}
              >
                <div className="w-[155px] sm:w-[175px] md:w-[200px] bg-gray-950 rounded-[30px] p-[6px] border border-white/10 shadow-2xl">
                  <div className="rounded-[24px] overflow-hidden bg-white">
                    <img
                      src="/hero-phones.png"
                      alt="Preview do projeto web"
                      className="w-full h-[280px] sm:h-[320px] md:h-[380px] object-cover object-right"
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-900 rounded-full" />
                </div>
              </div>

              {/* Badge "25+" */}
              <div className="absolute top-4 left-4 md:top-6 md:left-8 z-30 bg-brand-sky text-white rounded-xl px-4 py-3 shadow-lg shadow-brand-sky/30">
                <p className="font-display text-2xl font-bold leading-none">25+</p>
                <p className="font-sans text-[10px] font-semibold leading-tight mt-0.5 text-sky-100">Anos de<br/>Experiência</p>
              </div>

              {/* Card flutuante de projeto */}
              <div className="absolute bottom-6 right-4 z-30 glass-card rounded-xl p-3 max-w-[140px] shadow-2xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-sans text-[9px] text-white/60 font-medium uppercase tracking-wider">Projeto Ativo</span>
                </div>
                <p className="font-display text-white text-xs font-bold leading-tight">Site no Ar em<br/>até 15 dias</p>
              </div>

              {/* Decorative glow ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 rounded-full border border-brand-sky/10" />
                <div className="absolute w-48 h-48 rounded-full border border-brand-sky/15" />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #080d1a)' }} />
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 divide-x divide-gray-100 py-7 lg:py-12">
            {[
              { value: 'Ágil',  label: 'Da conversa ao site no ar', desc: 'Do briefing à entrega.' },
              { value: '100%',  label: 'Projetos no prazo',          desc: 'Sempre. Sem desculpas.' },
              { value: '8%',    label: 'Taxa de Conversão',          desc: 'Média dos projetos.' },
              { value: '24/7',  label: 'Suporte Disponível',         desc: 'Parceria contínua.' },
            ].map(({ value, label, desc }) => (
              <div key={label} className="flex flex-col items-center text-center px-2 lg:px-8">
                <p className="font-display text-base sm:text-2xl lg:text-4xl font-bold text-brand-sky mb-0.5 lg:mb-2 leading-none">{value}</p>
                <p className="font-sans text-[7px] sm:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400 mb-0 lg:mb-1 leading-tight">{label}</p>
                <p className="hidden lg:block font-sans text-xs text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
