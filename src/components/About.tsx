import { Reveal } from './Reveal';
import { Verified, Palette, Code, Target } from 'lucide-react';
import elevateLogo from '@/assets/elevate_banner.png';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden" id="sobre">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <div className="aspect-[4/5] bg-white rounded-md overflow-hidden border border-gray-100 relative">
              <img 
                src={elevateLogo} 
                alt="Elevate Logo" 
                className="object-contain w-full h-full p-6"
              />
            </div>
            <motion.div 
              className="absolute -bottom-8 -right-8 bg-gradient-to-br from-gray-900 via-slate-900 to-slate-950 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-xl w-52 border border-white/10 overflow-hidden backdrop-blur-md"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Efeito de brilho de fundo decorativo */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-brand-sky/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="relative z-10">
                <div className="font-display text-brand-sky text-[10px] font-extrabold uppercase tracking-[0.2em] leading-none mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-sky animate-pulse"></span>
                  Especialistas em
                </div>
                <ul className="text-white font-sans text-xs font-semibold flex flex-col gap-3.5">
                  <li className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-sky group-hover:scale-110 transition-transform">
                      <Palette className="w-4 h-4" />
                    </div>
                    <span className="tracking-wide text-gray-200">DESIGN</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-sky group-hover:scale-110 transition-transform">
                      <Code className="w-4 h-4" />
                    </div>
                    <span className="tracking-wide text-gray-200">DESENVOLVIMENTO</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-sky group-hover:scale-110 transition-transform">
                      <Target className="w-4 h-4" />
                    </div>
                    <span className="tracking-wide text-gray-200">ESTRATÉGIA</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </Reveal>
        
        <Reveal className="md:col-span-7 md:pl-16 mt-16 md:mt-0">
          <span className="font-sans text-sm text-brand-sky uppercase tracking-[0.2em] font-medium block mb-2">Especialista</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Focado em resultados que cabem no seu bolso e tempo.
          </h2>
          <p className="font-sans text-lg text-gray-600 mb-8 leading-relaxed">
            Faço sites para negócios que precisam de resultado. Cada projeto começa com uma pergunta simples: qual é o próximo passo que você quer que o cliente dê? Tudo — o layout, o copy, os botões — é construído para responder isso.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {['Tailwind CSS Expert', 'Foco em Conversão', 'Performance Mobile', 'UI/UX Minimalista'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Verified className="text-brand-sky w-5 h-5" />
                <span className="font-sans text-sm font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'Typescript', 'Node.js'].map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-gray-100 border border-gray-200 text-xs font-bold text-gray-600 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
