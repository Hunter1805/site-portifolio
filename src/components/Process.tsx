import { Reveal } from './Reveal';
import { processData } from '../data';

export default function Process() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <Reveal className="mb-16">
        <span className="font-sans text-sm text-brand-sky uppercase tracking-[0.2em] font-medium block mb-2">Metodologia</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Seu projeto pronto em até uma semana</h2>
      </Reveal>
      
      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {processData.map((step) => (
            <Reveal key={step.id} className="bg-white border border-gray-200 p-8 z-10 hover-lift rounded-md shadow-sm">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg mb-6 ${step.id === 4 ? 'bg-brand-sky text-white' : 'bg-black text-white'}`}>
                {String(step.id).padStart(2, '0')}
              </div>
              <h4 className="font-display text-xl font-semibold mb-3 text-gray-900">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
