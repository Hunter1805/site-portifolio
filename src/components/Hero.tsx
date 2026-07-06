import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Zap } from 'lucide-react';

const STATS = [
  {
    value: '15 dias',
    label: 'Da conversa ao site no ar',
    desc: 'Do briefing à entrega. Sem enrolação.',
  },
  {
    value: '100%',
    label: 'Projetos entregues no prazo',
    desc: 'Sempre. Sem desculpas.',
  },
  {
    value: '8%',
    label: 'Taxa média de conversão',
    desc: 'Dos projetos que acompanhamos.',
  },
];

const PROCESSO = [
  {
    step: '01',
    title: 'Brief',
    desc: 'Uma conversa de 30min para entender o negócio, o público e o objetivo real.',
  },
  {
    step: '02',
    title: 'Desenvolvimento',
    desc: 'Design e código construídos do zero. Sem templates, sem atalhos.',
  },
  {
    step: '03',
    title: 'Entrega',
    desc: 'Site no ar com domínio, hospedagem e WhatsApp integrado.',
  },
];

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

  const slide = (delay: number) =>
    `transition-all duration-500 ${visible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-4'
    }`;

  return (
    <>
      {/* ── HERO ── */}
      <section ref={ref} className="relative flex items-center overflow-hidden min-h-screen">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-slate-100 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #bae6fd 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            opacity: 0.3,
          }}
        />
        <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-brand-sky/8 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16 md:pt-36 md:pb-24">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* ── ESQUERDA: Texto ── */}
            <div className="flex flex-col">

              {/* Badge */}
              <div
                className={`${slide(0)} inline-flex items-center gap-2 self-start border border-brand-sky/20 bg-brand-sky/5 px-4 py-2 rounded-full mb-8`}
                style={{ transitionDelay: '0ms' }}
              >
                <Zap className="w-3.5 h-3.5 text-brand-sky flex-shrink-0" />
                <span className="font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-gray-500">
                  Liderança em Crescimento Digital
                </span>
              </div>

              {/* Headline — sem quebras forçadas */}
              <h1
                className={`${slide(100)} font-display font-bold text-gray-900 leading-[1.08] mb-6 text-[2.125rem] sm:text-[3.25rem] md:text-[3.75rem] lg:text-[4.25rem]`}
                style={{ transitionDelay: '80ms' }}
              >
                Transforme Seu Negócio em Uma{' '}
                <em className="italic text-brand-sky">Máquina de Vendas Digital</em>
              </h1>

              {/* Subheadline */}
              <p
                className={`${slide(0)} font-sans text-sm sm:text-base text-gray-500 max-w-md leading-relaxed mb-10`}
                style={{ transitionDelay: '160ms' }}
              >
                Sites feitos para converter — não para ganhar prêmio de design.
                Cada projeto começa com uma pergunta: qual é o próximo passo que você quer que o cliente dê?
              </p>

              {/* CTAs */}
              <div
                className={`${slide(0)} flex flex-col sm:flex-row gap-4 w-full sm:w-auto`}
                style={{ transitionDelay: '240ms' }}
              >
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-sans font-semibold text-sm px-7 py-4 rounded-lg transition-colors duration-200 shadow-lg shadow-slate-900/10 w-full sm:w-auto"
                >
                  Solicitar Orçamento
                  <TrendingUp className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-white border border-gray-200 hover:border-gray-400 text-gray-700 font-sans font-semibold text-sm px-7 py-4 rounded-lg transition-colors duration-200 w-full sm:w-auto"
                >
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>

            {/* ── DIREITA: Card de Processo ── */}
            <div
              className={`${slide(0)} relative flex items-center justify-center`}
              style={{ transitionDelay: '160ms' }}
            >
              <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-gray-100 p-8">

                <p className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-[0.18em] mb-7">
                  Como funciona
                </p>

                {/* Etapas */}
                <div className="flex flex-col">
                  {PROCESSO.map(({ step, title, desc }, i) => (
                    <div key={step} className="flex gap-4">
                      {/* Linha de tempo */}
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full border-2 border-brand-sky/30 bg-brand-sky/5 flex items-center justify-center flex-shrink-0">
                          <span className="font-display text-xs font-bold text-brand-sky">{step}</span>
                        </div>
                        {i < PROCESSO.length - 1 && (
                          <div className="w-px bg-gray-100 flex-1 my-2 min-h-[20px]" />
                        )}
                      </div>

                      {/* Conteúdo */}
                      <div className={i < PROCESSO.length - 1 ? 'pb-7' : ''}>
                        <p className="font-sans text-sm font-bold text-gray-900 mb-1">{title}</p>
                        <p className="font-sans text-xs text-gray-500 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Rodapé do card */}
                <div className="mt-7 pt-5 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-sans text-xs text-gray-500">Entrega em até 15 dias</span>
                  </div>
                  <span className="font-display text-xs font-bold text-brand-sky tracking-wide">Elevete ↗</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {STATS.map(({ value, label, desc }) => (
              <div key={label} className="flex flex-col items-center text-center px-8 py-14">
                <p className="font-display text-5xl font-bold text-brand-sky mb-2">{value}</p>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2">
                  {label}
                </p>
                <p className="font-sans text-sm text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
