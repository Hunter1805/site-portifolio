import { Reveal } from './Reveal';
import { MessageSquare, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <Reveal className="md:col-span-7">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-sky">Desenvolvimento Web Estratégico</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Transforme Seu Negócio em Uma <span className="text-brand-sky">Máquina de Vendas Digital</span>
          </h1>
          <p className="font-sans text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Criamos ativos digitais estratégicos que funcionam como canais de receita. Cada projeto é customizado, entregue em até uma semana e pronto para gerar resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a className="bg-gray-900 text-white px-10 py-4 rounded-md font-sans text-sm font-medium text-center hover:bg-gray-800 transition-all" href="#contato">Solicitar Orçamento</a>
          </div>
        </Reveal>
        
        <Reveal className="md:col-span-5 relative h-full min-h-[400px] flex justify-center items-center mt-12 md:mt-0">
          <div className="absolute inset-0 bg-brand-sky/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="relative w-full max-w-sm">
            <div className="aspect-square bg-white border border-gray-200 rounded-lg p-8 flex flex-col gap-4 shadow-xl transform rotate-3">
              <div className="h-12 w-full bg-brand-sky/10 border-b border-brand-sky/20 rounded-t-md flex items-center px-4">
                <div className="w-2 h-2 rounded-full bg-red-400 mr-2"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 flex flex-col gap-3 p-4">
                <div className="h-4 bg-gray-100 w-3/4 rounded-sm"></div>
                <div className="h-4 bg-gray-100 w-1/2 rounded-sm"></div>
                <div className="h-32 bg-gray-50 border border-gray-100 rounded-md mt-2 flex items-center justify-center">
                  <MessageSquare className="text-brand-sky w-12 h-12" />
                </div>
                <div className="h-10 bg-brand-sky w-full rounded-md mt-2 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">ENVIAR PARA WHATSAPP</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-white border border-gray-200 rounded-md flex items-center justify-center shadow-lg transform -rotate-12">
              <TrendingUp className="text-brand-sky w-10 h-10" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
