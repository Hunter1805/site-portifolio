import { Reveal } from './Reveal';
import { MessageSquare } from 'lucide-react';

export default function Cta() {
  return (
    <section className="py-24 px-6 bg-[#0b0f19] text-white overflow-hidden relative">
      {/* Detalhes de iluminação decorativos para um visual premium */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-sky/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Vamos desenhar a melhor estrutura para o seu negócio?
          </h2>
        </Reveal>
        
        <Reveal className="delay-100">
          <p className="font-sans text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Se você sente que sua empresa é melhor do que o seu site atual mostra, está na hora de elevar o nível.
          </p>
        </Reveal>

        <Reveal className="delay-200">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5538999908770"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-brand-sky text-white px-8 py-4 rounded-md font-sans text-sm font-semibold hover:bg-sky-500 transition-colors w-full sm:w-auto shadow-lg shadow-sky-500/10 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 shrink-0" />
              Falar pelo WhatsApp
            </a>
            
            <a
              href="#contato"
              className="flex items-center justify-center border border-gray-800 text-white px-8 py-4 rounded-md font-sans text-sm font-semibold hover:bg-white/5 transition-colors w-full sm:w-auto cursor-pointer"
            >
              Enviar mensagem
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
