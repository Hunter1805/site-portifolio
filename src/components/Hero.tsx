import { Reveal } from './Reveal';

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
          {/* Glow de fundo */}
          <div className="absolute inset-0 bg-brand-sky/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

          {/* Grid de cards flutuantes */}
          <div className="relative w-full max-w-sm grid grid-cols-2 gap-4">

            {/* Card 1 — ROI (largura total) */}
            <div
              className="col-span-2 bg-white border border-gray-100 rounded-2xl p-5 shadow-lg flex items-center gap-4"
              style={{ animation: 'heroFloat 3s ease-in-out infinite' }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-sky/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-brand-sky" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
                </svg>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-gray-900">+300%</p>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mt-0.5">Aumento de ROI</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping inline-block"></span>
                <span className="text-xs text-green-500 font-semibold">Ao vivo</span>
              </div>
            </div>

            {/* Card 2 — Leads */}
            <div
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-lg flex flex-col gap-2"
              style={{ animation: 'heroFloat 3.5s ease-in-out 0.5s infinite' }}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                </svg>
              </div>
              <p className="font-display text-2xl font-bold text-gray-900">100+</p>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Leads / Dia</p>
            </div>

            {/* Card 3 — Conversão */}
            <div
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-lg flex flex-col gap-2"
              style={{ animation: 'heroFloat 4s ease-in-out 1s infinite' }}
            >
              <div className="w-10 h-10 rounded-xl bg-brand-sky/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-brand-sky" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
                </svg>
              </div>
              <p className="font-display text-2xl font-bold text-white">8%</p>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Conversão</p>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
