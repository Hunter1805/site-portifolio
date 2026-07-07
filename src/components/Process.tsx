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
              className={`group transition-all duration-700 transform ${
                visibleItems.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Card */}
              <div className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[calc(100%-60%)] h-0.5 bg-gradient-to-r from-blue-600 to-transparent" />
                )}

                {/* Card Content */}
                <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  {/* Number */}
                  <div className="mb-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white font-bold rounded-full text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 text-blue-600">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2 mb-4">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Duration */}
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs font-semibold text-slate-600">
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
          <p className="text-slate-500 text-sm text-center mb-4 tracking-wide uppercase font-semibold">Do briefing inicial ao lançamento completo</p>
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-bold text-blue-600 leading-none">Agilidade</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Entrega Rápida</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl md:text-3xl font-bold text-blue-300">&amp;</span>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-bold text-blue-600 leading-none">Qualidade</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Sem Atalhos</p>
            </div>
          </div>
          <p className="text-slate-500 text-sm text-center mt-4">Entrega rápida, sem abrir mão do resultado</p>
        </div>
      </div>
    </section>
  );
}
