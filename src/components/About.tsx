import { Reveal } from './Reveal';
import { Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 md:py-32 px-6 bg-white" id="sobre">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Image ── */}
          <Reveal className="md:col-span-5">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100">
                <img
                  src="/team-about.png"
                  alt="Equipe Elevete"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>

              {/* Floating card — Company Vision */}
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-44 md:w-52">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-sky/10 flex items-center justify-center text-brand-sky">
                    <Eye className="w-4 h-4" />
                  </div>
                  <p className="font-sans text-xs font-bold text-gray-900">Visão</p>
                </div>
                <p className="font-sans text-[11px] text-gray-500 leading-relaxed">
                  Ser a referência em transformação digital para pequenos e médios negócios.
                </p>
              </div>

              {/* Floating stats badge */}
              <div className="absolute -top-4 -right-4 bg-brand-sky text-white rounded-xl px-4 py-3 shadow-lg shadow-brand-sky/30">
                <p className="font-display text-2xl font-bold leading-none">13+</p>
                <p className="font-sans text-[10px] font-semibold leading-tight mt-0.5 text-sky-100">Clientes<br/>Satisfeitos</p>
              </div>
            </div>
          </Reveal>

          {/* ── RIGHT: Text ── */}
          <Reveal className="md:col-span-7 mt-8 md:mt-0">

            {/* Label */}
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-brand-sky border border-brand-sky/30 bg-brand-sky/8 px-3 py-1.5 rounded-sm inline-block mb-5">
              Sobre Nós
            </span>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              A Melhor Agência<br/>
              <span className="text-brand-sky">Digital da Região</span>
            </h2>

            <p className="font-sans text-base text-gray-600 leading-relaxed mb-10">
              Somos especialistas em transformar a presença digital de negócios locais. Cada projeto começa com uma pergunta simples: qual é o próximo passo que você quer que o cliente dê? Todo o design, copy e código é construído para responder isso com clareza.
            </p>

            {/* Two mission/vision cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {/* Company Vision */}
              <div className="border border-gray-200 rounded-xl p-5 hover:border-brand-sky/40 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-sky/10 flex items-center justify-center text-brand-sky">
                    <Eye className="w-5 h-5" />
                  </div>
                  <p className="font-display text-sm font-bold text-gray-900">Visão da Empresa</p>
                </div>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  Alcançar crescimento sustentável através de estratégias digitais que realmente funcionam para o seu público-alvo.
                </p>
              </div>

              {/* Company Mission */}
              <div className="border border-gray-200 rounded-xl p-5 hover:border-brand-sky/40 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-sky/10 flex items-center justify-center text-brand-sky">
                    <Target className="w-5 h-5" />
                  </div>
                  <p className="font-display text-sm font-bold text-gray-900">Missão da Empresa</p>
                </div>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  Atingir crescimento duradouro com as estratégias corretas, guiando seus objetivos de negócio com excelência.
                </p>
              </div>
            </div>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-brand-sky hover:bg-sky-400 text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-md transition-all duration-200 shadow-md shadow-brand-sky/25 hover:-translate-y-0.5"
            >
              Saiba Mais →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
