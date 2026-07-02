import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'preco',
    question: 'Quanto custa um projeto?',
    answer: 'Os preços variam de acordo com a complexidade do projeto. Landing pages começam em R$ 2.000, vitrines digitais em R$ 3.000 e sistemas web em R$ 5.000. Fazemos orçamento customizado após a conversa inicial.'
  },
  {
    id: 'tempo',
    question: 'Quanto tempo leva para ficar pronto?',
    answer: 'Em média, 15 dias do briefing ao lançamento. Isso inclui: conversa inicial (30 min), design (3-5 dias), desenvolvimento (5-10 dias) e lançamento (1-2 dias).'
  },
  {
    id: 'revisions',
    question: 'Posso fazer alterações depois de pronto?',
    answer: 'Sim! Todos os projetos incluem 2 rodadas de revisões durante o desenvolvimento. Após o lançamento, oferecemos pacotes de manutenção com suporte contínuo.'
  },
  {
    id: 'whatsapp',
    question: 'Por que focar em WhatsApp?',
    answer: 'Porque 98% dos seus clientes já usam WhatsApp. Integrar o site ao WhatsApp elimina fricção no processo de venda, aumentando conversão em 40-60%.'
  },
  {
    id: 'tecnologia',
    question: 'Qual tecnologia vocês usam?',
    answer: 'Usamos React, Next.js, TypeScript, Tailwind CSS e Node.js. Tudo moderno, rápido e escalável. Os sites são otimizados para SEO e velocidade de carregamento.'
  },
  {
    id: 'suporte',
    question: 'Vocês oferecem suporte após o lançamento?',
    answer: 'Sim! Oferecemos 45 dias de suporte grátis após o lançamento. Depois, temos pacotes de manutenção mensal que incluem atualizações, correções e melhorias.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 tracking-wider">
              DÚVIDAS FREQUENTES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-slate-600">
            Respostas para as dúvidas mais comuns sobre nossos serviços.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Question */}
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
              >
                <span className="font-semibold text-slate-900 text-left">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openId === item.id && (
                <div className="px-6 pb-4 border-t border-slate-200 animate-in fade-in slide-in-from-top-2">
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Ainda tem dúvidas? Vamos conversar!
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
