import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Palette, Code2, Rocket } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  duration: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Conversa Inicial',
    description: 'Entendemos seu público, sua oferta e como otimizar seu funil',
    icon: <MessageSquare className="w-8 h-8" />,
    details: [
      'Análise do seu negócio',
      'Entrevista com stakeholders',
      'Definição de objetivos'
    ],
    duration: '~30 minutos'
  },
  {
    number: '02',
    title: 'Design & Estratégia',
    description: 'Criamos protótipo focado em persuasão e UX mobile',
    icon: <Palette className="w-8 h-8" />,
    details: [
      'Wireframes e mockups',
      'Estratégia de conversão',
      'Aprovação do cliente'
    ],
    duration: '3-5 dias'
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Codificação limpa, otimizada para SEO e velocidade',
    icon: <Code2 className="w-8 h-8" />,
    details: [
      'Desenvolvimento frontend',
      'Integração com APIs',
      'Testes de qualidade'
    ],
    duration: '5-10 dias'
  },
  {
    number: '04',
    title: 'Lançamento',
    description: 'Site no ar, integrado ao WhatsApp e pronto para vender',
    icon: <Rocket className="w-8 h-8" />,
    details: [
      'Deploy em produção',
      'Configuração de domínio',
      'Suporte inicial'
    ],
    duration: '1-2 dias'
  }
];

export default function Process() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const refs = useRef<Map<number, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.current.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white" id="metodologia">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 tracking-wider">
              METODOLOGIA
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Seu Projeto Pronto em Até 15 Dias
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Processo transparente e eficiente do briefing ao lançamento.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) refs.current.set(index, el);
              }}
              data-index={index}
              className={`group transition-all duration-700 transform h-full ${
                visibleItems.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Card */}
              <div className="relative h-full">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[calc(100%-60%)] h-0.5 bg-gradient-to-r from-blue-600 to-transparent" />
                )}

                {/* Card Content */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between">
                  <div className="flex-1 flex flex-col">
                    {/* Number */}
                    <div className="mb-3 md:mb-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white font-bold rounded-full text-sm md:text-lg">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mb-3 md:mb-4 text-blue-600 [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-8 md:[&>svg]:h-8">
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-sm md:text-lg font-bold text-slate-900 mb-1 md:mb-2 leading-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-[11px] md:text-sm mb-4 leading-relaxed flex-1">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="hidden md:block space-y-2 mb-4">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Duration */}
                  <div className="pt-3 md:pt-4 border-t border-slate-100">
                    <p className="text-[10px] md:text-xs font-semibold text-slate-600">
                      ⏱️ {step.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Total */}
        <div className="bg-blue-50 rounded-2xl p-6 md:p-8">
          {/* Mobile: lado a lado */}
          <div className="flex items-center justify-center gap-6 md:hidden">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600 leading-none">Agilidade</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Entrega Rápida</p>
            </div>
            <span className="text-2xl font-bold text-blue-300">&amp;</span>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600 leading-none">Qualidade</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Sem Atalhos</p>
            </div>
          </div>
          {/* Desktop: layout original centralizado */}
          <div className="hidden md:block text-center">
            <p className="text-4xl font-bold text-blue-600">Agilidade &amp; Qualidade</p>
          </div>
          <p className="text-slate-500 text-sm text-center mt-4">Entrega rápida, sem abrir mão do resultado</p>
        </div>
      </div>
    </section>
  );
}
