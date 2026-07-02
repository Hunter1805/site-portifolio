import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  result: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Carlos Silva',
    role: 'Proprietário',
    company: 'Clínica Sorriso',
    content: 'Aumentei meus pacientes em 50% em apenas 30 dias. O site ficou profissional e o WhatsApp integrado mudou tudo. Recomendo muito!',
    result: '+50% novos pacientes',
    avatar: '/avatars/avatar1.png',
    rating: 5
  },
  {
    id: '2',
    name: 'Mariana Costa',
    role: 'Gerente de Vendas',
    company: 'Imóveis Premium',
    content: 'Antes perdia clientes por falta de organização. Agora a vitrine digital organiza tudo e o WhatsApp integrado fecha vendas automaticamente.',
    result: '+60% consultas qualificadas',
    avatar: '/avatars/avatar2.png',
    rating: 5
  },
  {
    id: '3',
    name: 'João Pereira',
    role: 'Proprietário',
    company: 'Loja Online Moda',
    content: 'Meu catálogo ficou elegante e simples. Clientes veem, se interessam e chamam no WhatsApp. Conversão subiu muito.',
    result: '+35% vendas',
    avatar: '/avatars/avatar3.png',
    rating: 5
  }
];

export default function Testimonials() {
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
    <section className="py-20 bg-slate-50">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 tracking-wider">
              DEPOIMENTOS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Resultados reais de clientes que transformaram seus negócios com a Elevete.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => {
                if (el) refs.current.set(testimonial.id, el);
              }}
              data-id={testimonial.id}
              className={`group transition-all duration-700 transform ${
                visibleItems.has(testimonial.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="w-6 h-6 text-blue-600 mb-3 opacity-50" />

                {/* Content */}
                <p className="text-slate-700 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Result */}
                <div className="mb-6 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-semibold text-blue-600">
                    {testimonial.result}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
