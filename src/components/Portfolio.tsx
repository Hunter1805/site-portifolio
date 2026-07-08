import { useState } from 'react';
import { Reveal } from './Reveal';
import { portfolioData } from '../data';
import { X, ArrowUpRight } from 'lucide-react';
import TopProjectsModal from './TopProjectsModal';

type Project = (typeof portfolioData)[number];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra de acento no topo */}
        <div className={`w-full h-1.5 ${project.accent}`} />

        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div>
            <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full mb-3 ${project.textAccent} bg-gray-50 border border-current/20`}>
              {project.category}
            </span>
            <h3 className="font-display text-xl font-bold text-gray-900 leading-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="ml-4 mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-800 flex-shrink-0"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Imagem */}
        <div className="mx-6 rounded-xl overflow-hidden h-40 bg-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Descrição */}
        <div className="px-6 pt-5 pb-2">
          <p className="text-gray-600 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Métricas */}
        <div className="mx-6 mt-4 mb-6 grid grid-cols-2 gap-3">
          {project.metrics.map((metric, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
              <div className={`font-display text-2xl font-bold ${project.textAccent}`}>
                {metric.value}
              </div>
              <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mt-1 leading-tight">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [isTopProjectsOpen, setIsTopProjectsOpen] = useState(false);

  return (
    <>
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
                  <p className="hidden md:block text-gray-600 mb-4 flex-1 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 border-t border-gray-100 pt-3 md:pt-5 mb-3">
                    {project.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className={`font-display text-base sm:text-2xl md:text-3xl font-bold ${project.textAccent}`}>{metric.value}</div>
                        <div className="text-[9px] sm:text-xs text-gray-500 font-semibold md:font-medium uppercase tracking-wider mt-0.5 sm:mt-1 leading-tight">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Botão Saiba Mais — apenas mobile */}
                  <button
                    onClick={() => setOpenProject(project)}
                    className={`md:hidden w-full flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] py-2 sm:py-2.5 px-3 rounded-lg border transition-all duration-200 hover:opacity-70 ${project.textAccent} border-current bg-transparent`}
                  >
                    Saiba mais
                    <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Botão de Destaque: Top 3 Projetos */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setIsTopProjectsOpen(true)}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 hover:from-black hover:to-slate-900 text-white font-sans text-xs sm:text-sm font-extrabold uppercase tracking-[0.15em] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-white/10"
            >
              {/* Indicador pulsante */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-sky opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-sky"></span>
              </span>
              <span>🏆 Top 3 Projetos (Operação & Faturamento)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Modal Padrão do Projeto */}
      {openProject && (
        <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
      )}

      {/* Modal Top 3 Projetos */}
      <TopProjectsModal
        isOpen={isTopProjectsOpen}
        onClose={() => setIsTopProjectsOpen(false)}
      />
    </>
  );
}
