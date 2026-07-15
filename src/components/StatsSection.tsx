import { Reveal } from './Reveal';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '25+',   suffix: '',  label: 'Anos de Experiência',     desc: 'Uma trajetória de expertise e conquistas.' },
  { value: '150',   suffix: 'K+', label: 'Onde ideias florescem',   desc: 'Onde as ideias florescem e prosperam.' },
  { value: '98',    suffix: '%', label: 'Satisfação dos Clientes',  desc: 'Superando expectativas é nossa prioridade.' },
  { value: '13',    suffix: '+', label: 'Projetos Entregues',       desc: 'Resultados reais para cada cliente.' },
];

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-20 px-6 bg-gray-50 border-y border-gray-100" id="numeros">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map(({ value, suffix, label, desc }, i) => (
            <Reveal
              key={label}
              className="flex flex-col items-center text-center py-8 md:py-0 px-4 md:px-8"
            >
              <p
                className={`font-display font-bold leading-none mb-2 transition-all duration-700 ${
                  visible ? 'text-brand-sky text-3xl md:text-4xl lg:text-5xl' : 'text-gray-300 text-2xl'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {value}<span className="text-brand-sky">{suffix}</span>
              </p>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-gray-500 mb-1 leading-tight">
                {label}
              </p>
              <p className="font-sans text-xs text-gray-400 leading-snug hidden md:block">
                {desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
