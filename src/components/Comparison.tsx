import { Reveal } from './Reveal';
import { X, Check } from 'lucide-react';

export default function Comparison() {
  const genericFeatures = [
    { text: 'Emojis genéricos e excessivos 🚀 💰 ✨' },
    { text: 'Gradientes saturados de roxo para azul' },
    { text: 'Textos clichê como "Bem-vindo"' },
    { text: 'Layout centralizado padrão de template' },
    { text: 'Animações excessivas e sem propósito' },
    { text: 'Visual genérico que parece "gerado por IA"' },
  ];

  const elevateFeatures = [
    { text: 'Ícones minimalistas e sob medida' },
    { text: 'Paleta de cores sólidas e harmônicas' },
    { text: 'Headline impactante e copy de conversão' },
    { text: 'Layout assimétrico contemporâneo' },
    { text: 'Animações propositais e sutis' },
    { text: 'Visual profissional de alta autoridade' },
  ];

  return (
    <section className="py-32 px-6 bg-white" id="diferencial">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-20 text-center max-w-3xl mx-auto">
          <span className="font-sans text-xs font-bold text-brand-sky uppercase tracking-[0.2em] block mb-3">
            O Padrão de Qualidade
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            Você já reparou? Muitos sites criados por IA têm um padrão muito reconhecível.
          </h2>
          <p className="font-sans text-base text-gray-500 leading-relaxed">
            Resultado? Clientes reconhecem como amador. A confiança cai e a conversão desaba. Na <strong className="text-gray-900 font-semibold">Elevete</strong>, criamos sites com design de excelência: profissionais, autênticos e que convertem de verdade.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Card Esquerdo - Site Genérico */}
          <Reveal className="flex flex-col bg-gray-50/50 border border-gray-200/80 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-gray-300">
            <div className="mb-8">
              <span className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                O ERRO COMUM
              </span>
              <h3 className="font-display text-xl font-bold text-gray-700">
                SITE GENÉRICO (Prompts Públicos)
              </h3>
            </div>

            <ul className="space-y-4 flex-1 mb-8">
              {genericFeatures.map((item, index) => (
                <li key={index} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 bg-red-50 text-red-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-sans text-sm text-gray-500 font-normal leading-relaxed">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-200/60 pt-6 mt-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                    RESULTADO
                  </span>
                  <span className="font-sans text-sm font-semibold text-gray-700 block mt-1">
                    Desconfiança
                  </span>
                </div>
                <div>
                  <span className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                    CONVERSÃO
                  </span>
                  <span className="font-display text-2xl font-bold text-red-500 block mt-0.5">
                    1% - 2%
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card Direito - Site Elevete */}
          <Reveal className="flex flex-col bg-white border-2 border-brand-sky/20 shadow-xl shadow-brand-sky/5 rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:border-brand-sky/40">
            {/* Tag de destaque premium */}
            <div className="absolute top-0 right-0 bg-brand-sky text-white font-sans text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-lg shadow-sm">
              Padrão Elevete
            </div>

            <div className="mb-8">
              <span className="font-sans text-[10px] font-bold text-brand-sky uppercase tracking-widest block mb-1">
                NOSSA ABORDAGEM
              </span>
              <h3 className="font-display text-xl font-bold text-gray-900">
                SITE ELEVETE
              </h3>
            </div>

            <ul className="space-y-4 flex-1 mb-8">
              {elevateFeatures.map((item, index) => (
                <li key={index} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-sans text-sm text-gray-700 font-medium leading-relaxed">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-100 pt-6 mt-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                    RESULTADO
                  </span>
                  <span className="font-sans text-sm font-bold text-gray-900 block mt-1">
                    Confiança Máxima
                  </span>
                </div>
                <div>
                  <span className="font-sans text-[10px] font-bold text-brand-sky uppercase tracking-wider block">
                    CONVERSÃO
                  </span>
                  <span className="font-display text-2xl font-bold text-emerald-500 block mt-0.5">
                    8% - 12%
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
