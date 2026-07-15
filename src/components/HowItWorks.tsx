import { Monitor, Building2, Settings } from 'lucide-react';
import { Reveal } from './Reveal';

const cards = [
  {
    icon: Monitor,
    title: 'Landing Page',
    desc: 'Páginas de alta performance focadas em um único objetivo: converter visitantes em contatos qualificados no WhatsApp.',
  },
  {
    icon: Building2,
    title: 'Site Institucional',
    desc: 'Presença profissional e autoridade de marca online. Transmita confiança e organize informações estratégicas.',
  },
  {
    icon: Settings,
    title: 'Sistema Web',
    desc: 'Ferramentas internas personalizadas para organizar leads, pedidos e métricas do seu funil de vendas.',
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      id="como-funciona"
      style={{ background: 'linear-gradient(135deg, #080d1a 0%, #0c1322 60%, #091020 100%)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(14,165,233,0.1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 -translate-y-1/2 bg-brand-sky/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left — image */}
          <Reveal className="md:col-span-5">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <img
                  src="/team-about.png"
                  alt="Equipe Elevete trabalhando"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/60 via-transparent to-transparent" />
              </div>

              {/* Label overlay */}
              <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-4">
                <p className="font-display text-white text-sm font-bold mb-1">Como Funciona?</p>
                <p className="font-sans text-gray-400 text-xs leading-relaxed">
                  Da primeira conversa à entrega — um processo claro e eficiente.
                </p>
                <a
                  href="#contato"
                  className="mt-3 inline-flex items-center gap-1.5 text-brand-sky font-sans text-xs font-semibold hover:underline"
                >
                  Saiba Mais →
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right — 3 cards */}
          <div className="md:col-span-7 flex flex-col gap-5">
            {cards.map(({ icon: Icon, title, desc }, i) => (
              <Reveal
                key={title}
                className="group glass-card rounded-xl p-6 flex items-start gap-5 hover:border-brand-sky/30 hover:bg-white/8 transition-all duration-300 cursor-default"
              >
                {/* Icon badge */}
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-brand-sky/15 border border-brand-sky/25 text-brand-sky group-hover:bg-brand-sky group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1">
                  {/* Step number */}
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-brand-sky mb-1">
                    Etapa 0{i + 1}
                  </p>
                  <h3 className="font-display text-white font-bold text-base mb-2 leading-snug">{title}</h3>
                  <p className="font-sans text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
