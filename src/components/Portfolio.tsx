import { Reveal } from './Reveal';
import { portfolioData } from '../data';

export default function Portfolio() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gray-50" id="projetos">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="font-sans text-sm text-brand-sky uppercase tracking-[0.2em] font-medium block mb-2">Portfolio</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Projetos que geraram resultados reais</h2>
          </div>
          <div className="h-1 w-24 bg-brand-sky mb-4"></div>
        </Reveal>
        
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-8">
          {portfolioData.map((project) => (
            <Reveal key={project.id} className="group bg-white border border-gray-200 hover-lift flex flex-col relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300">
              {/* Barra de acento no topo */}
              <div className={`absolute top-0 left-0 w-full h-1 z-10 ${project.accent}`}></div>

              {/* Imagem do projeto */}
              <div className="relative h-28 sm:h-40 md:h-52 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={`Mockup - ${project.title}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-4 text-[9px] sm:text-xs font-bold text-white bg-black/40 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2 md:mb-4">
                  <h3 className="font-display text-xs sm:text-base md:text-xl font-bold md:font-semibold text-gray-900 leading-tight">{project.title}</h3>
                  <div className="hidden sm:flex gap-1 ml-3 flex-shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`w-2 h-2 rounded-full ${i < (project.id === 1 ? 4 : project.id === 3 ? 3 : project.id === 4 ? 4 : 5) ? project.accent : 'bg-gray-200'}`}></span>
                    ))}
                  </div>
                </div>
                <p className="hidden md:block text-gray-600 mb-6 flex-1 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="grid grid-cols-2 gap-2 sm:gap-4 border-t border-gray-100 pt-3 md:pt-5">
                  {project.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className={`font-display text-base sm:text-2xl md:text-3xl font-bold ${project.textAccent}`}>{metric.value}</div>
                      <div className="text-[9px] sm:text-xs text-gray-500 font-semibold md:font-medium uppercase tracking-wider mt-0.5 sm:mt-1 leading-tight">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
