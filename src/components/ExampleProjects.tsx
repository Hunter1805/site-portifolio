import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  results: string[];
  price: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 'consultorio',
    title: 'Landing Page - Consultório Odontológico',
    category: 'Saúde & Bem-estar',
    problem: 'Consultório sem presença online, perdia clientes para concorrentes',
    solution: 'Landing page profissional com agendamento automático via WhatsApp',
    results: ['+50% novos pacientes em 30 dias', '+80% redução em ligações telefônicas'],
    price: 'R$ 2.500 - 6.000',
    image: '/mockups/consultorio.png'
  },
  {
    id: 'imobiliaria',
    title: 'Vitrine Digital - Imobiliária Premium',
    category: 'Imóveis & Construção',
    problem: 'Catálogo desorganizado, sem integração WhatsApp, perdia clientes',
    solution: 'Vitrine digital com 200+ imóveis, filtros avançados, WhatsApp integrado',
    results: ['+60% consultas qualificadas', '+40% redução no tempo de resposta'],
    price: 'R$ 3.000 - 8.000',
    image: '/mockups/imobiliaria.png'
  }
];

export default function ExampleProjects() {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const refs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisibleItems((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.current.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-brand-sky tracking-wider">
              EXEMPLOS DE PROJETOS POSSÍVEIS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nichos Rentáveis Que Podemos Criar
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Projetos conceituais desenvolvidos sob medida para demonstrar o potencial de conversão e design que aplicamos em cada nicho.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) refs.current.set(project.id, el);
              }}
              data-id={project.id}
              className={`group transition-all duration-700 transform ${
                visibleItems.has(project.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Card */}
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="mb-3">
                    <span className="inline-block text-xs font-semibold text-brand-sky bg-sky-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {project.title}
                  </h3>

                  {/* Problem */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-700 mb-2">PROBLEMA</p>
                    <p className="text-slate-600 text-sm">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-700 mb-2">SOLUÇÃO</p>
                    <p className="text-slate-600 text-sm">
                      {project.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="mb-6 space-y-2">
                    {project.results.map((result, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-brand-sky mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{result}</span>
                      </div>
                    ))}
                  </div>


                  {/* CTA */}
                  <button className="w-full bg-brand-sky hover:bg-sky-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group/btn">
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-slate-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Seu nicho não está aqui?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Podemos criar soluções customizadas para qualquer nicho. 
            Vamos conversar sobre seu negócio.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-brand-sky hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Falar com Especialista
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
