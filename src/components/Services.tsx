import { Reveal } from './Reveal';

const services = [
  {
    tag: 'LANDING PAGE',
    title: 'Página para Gerar Contatos',
    description: 'Para campanhas, anúncios e serviços específicos. Ideal para transformar visitantes em leads qualificados direto no WhatsApp.',
    image: '/service-landing.png',
    icon: '🎯',
  },
  {
    tag: 'SITE INSTITUCIONAL',
    title: 'Presença Profissional para sua Empresa',
    description: 'Para negócios que precisam transmitir autoridade, contar sua história e organizar informações estratégicas de forma clara.',
    image: '/service-institutional.png',
    icon: '🏢',
  },
  {
    tag: 'SISTEMA WEB',
    title: 'Sistema para Organizar a Operação',
    description: 'Ferramentas internas personalizadas para controlar informações, fluxos de trabalho e rotinas com interfaces intuitivas.',
    image: '/service-system.png',
    icon: '⚙️',
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-32 px-6 bg-white" id="servicos">
      <div className="max-w-7xl mx-auto">

        {/* Header row — title left, text+CTA right */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="md:max-w-lg">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-brand-sky block mb-3">
              Nossos Serviços
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Serviços Digitais Para{' '}
              <span className="text-brand-sky">Crescer e Conquistar</span>{' '}
              Seus Clientes
            </h2>
          </div>

          <div className="md:max-w-xs md:text-right flex flex-col items-start md:items-end gap-5">
            <p className="font-sans text-sm text-gray-500 leading-relaxed">
              Cada solução é construída com foco em resultado. Nada de template ou atalho — desenvolvimento personalizado do zero.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-brand-sky hover:bg-sky-400 text-white font-sans font-semibold text-sm px-6 py-3 rounded-md transition-all duration-200 shadow-md shadow-brand-sky/25 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Saiba Mais →
            </a>
          </div>
        </Reveal>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ tag, title, description, image, icon }) => (
            <Reveal
              key={tag}
              className="group relative bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-brand-sky/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
                {/* Icon badge */}
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-lg shadow-md">
                  {icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-brand-sky mb-2 block">
                  {tag}
                </span>
                <h3 className="font-display text-base font-bold text-gray-900 mb-3 leading-snug">
                  {title}
                </h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed flex-1">
                  {description}
                </p>
                <a
                  href="#contato"
                  className="mt-5 inline-flex items-center gap-1.5 text-brand-sky font-sans text-sm font-semibold hover:gap-2.5 transition-all duration-200"
                >
                  Ver detalhes →
                </a>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
