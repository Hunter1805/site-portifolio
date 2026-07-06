import { Reveal } from './Reveal';
import { MousePointerClick, ShoppingBag, Building2, LayoutGrid } from 'lucide-react';

const solutions = [
  {
    id: 1,
    tag: 'LANDING PAGE',
    title: 'Página para gerar contatos',
    description: 'Para campanhas, anúncios e serviços específicos. Ideal para transformar visitantes em leads qualificados no WhatsApp.',
    icon: MousePointerClick,
  },
  {
    id: 2,
    tag: 'VITRINE DIGITAL',
    title: 'Vitrine para apresentar produtos',
    description: 'Para empresas que querem mostrar produtos online sem checkout pesado. O cliente vê, se interessa e chama no WhatsApp.',
    icon: ShoppingBag,
  },
  {
    id: 3,
    tag: 'SITE INSTITUCIONAL',
    title: 'Presença profissional para sua empresa',
    description: 'Para negócios que precisam transmitir autoridade, contar sua história e organizar informações estratégicas.',
    icon: Building2,
  },
  {
    id: 4,
    tag: 'SISTEMA WEB',
    title: 'Sistema para organizar a operação',
    description: 'Para empresas que precisam controlar informações, fluxos de trabalho e rotinas internas com interfaces intuitivas.',
    icon: LayoutGrid,
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gray-50 border-t border-gray-100" id="servicos">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Soluções para vender com mais clareza
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-16">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.id} className="flex items-start gap-4 md:gap-6">
                <div className="w-14 h-14 bg-gray-100 flex items-center justify-center rounded-md shrink-0 text-brand-sky">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="font-sans text-[10px] font-bold text-brand-sky uppercase tracking-[0.15em] block">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-lg font-bold text-gray-900 mt-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2.5 leading-relaxed font-sans font-normal">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

