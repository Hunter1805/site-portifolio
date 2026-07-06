import { motion } from 'motion/react';
import { Reveal } from '../components/Reveal';
import {
  Target,
  Eye,
  Heart,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Star,
  Palette,
  Code,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── dados ──────────────────────────────────────────────── */
const stats = [
  { icon: Award, value: '50+', label: 'Projetos Entregues' },
  { icon: Users, value: '100+', label: 'Clientes Satisfeitos' },
  { icon: TrendingUp, value: '+40%', label: 'Aumento Médio em Vendas' },
  { icon: Star, value: '98%', label: 'Taxa de Satisfação' },
];

const mvv = [
  {
    icon: Target,
    title: 'Nossa Missão',
    text: 'Democratizar o acesso a funis de vendas digitais de alta qualidade, permitindo que negócios de todos os tamanhos cresçam de forma estratégica e sustentável.',
  },
  {
    icon: Eye,
    title: 'Nossa Visão',
    text: 'Ser a agência de referência em funis de vendas no Brasil — reconhecida por resultados mensuráveis, entrega ágil e designs que convertem.',
  },
  {
    icon: Heart,
    title: 'Nossos Valores',
    text: 'Excelência sem atalhos, transparência em cada etapa e compromisso inabalável com os resultados do cliente.',
  },
];

const diferenciais = [
  { icon: Zap, title: 'Entrega Ágil', text: 'Projetos prontos em até 7 dias, sem enrolação.' },
  { icon: Palette, title: 'Design Autêntico', text: 'Cada layout é criado do zero, sem templates genéricos.' },
  { icon: Code, title: 'Código de Qualidade', text: 'React, TypeScript e as melhores práticas de performance.' },
  { icon: TrendingUp, title: 'Foco em Conversão', text: 'Cada detalhe é pensado para transformar visitantes em clientes.' },
];

/* ─── componente ─────────────────────────────────────────── */
export default function Sobre() {
  return (
    <div className="pt-20 overflow-hidden">

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative py-32 px-6 text-center bg-white">
        {/* glow de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-sky/8 rounded-full blur-3xl pointer-events-none" />

        <Reveal>
          <span className="font-sans text-sm text-brand-sky uppercase tracking-[0.2em] font-semibold">
            Conheça a Elevete
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] font-bold text-gray-900 mt-4 mb-6 leading-tight tracking-tight">
            Mais que uma agência.{' '}
            <span className="text-brand-sky">Uma parceria de crescimento.</span>
          </h1>
          <p className="font-sans text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Transformamos negócios através de funis de vendas digitais que funcionam de verdade — estratégicos, rápidos e prontos para gerar receita.
          </p>
        </Reveal>
      </section>

      {/* ── QUEM SOMOS ─────────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* Card visual lado esquerdo */}
          <Reveal className="md:col-span-5">
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
                {/* glows decorativos */}
                <div className="absolute -top-16 -left-16 w-48 h-48 bg-brand-sky/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <span className="font-sans text-xs text-brand-sky uppercase tracking-[0.2em] font-bold flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-sky animate-pulse inline-block" />
                    Especialistas em
                  </span>

                  <ul className="flex flex-col gap-5">
                    {[
                      { icon: Palette, label: 'Design Estratégico' },
                      { icon: Code, label: 'Desenvolvimento Web' },
                      { icon: Target, label: 'Funis de Conversão' },
                      { icon: TrendingUp, label: 'Growth Digital' },
                    ].map(({ icon: Icon, label }) => (
                      <li key={label} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-sky group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-sans text-sm font-semibold text-gray-200 tracking-wide uppercase">
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Badge flutuante */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white border border-gray-100 rounded-xl p-4 shadow-xl flex items-center gap-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-gray-900">Entrega Garantida</p>
                  <p className="font-sans text-xs text-gray-400">Em até 7 dias úteis</p>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Texto lado direito */}
          <Reveal className="md:col-span-7 md:pl-12 mt-10 md:mt-0">
            <span className="font-sans text-sm text-brand-sky uppercase tracking-[0.2em] font-semibold block mb-3">
              Quem somos
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Não criamos sites bonitos.{' '}
              <span className="text-brand-sky">Criamos máquinas de venda.</span>
            </h2>
            <p className="font-sans text-lg text-gray-600 mb-6 leading-relaxed">
              A Elevete é uma agência especializada em funis de vendas digitais. Nossa metodologia une design de impacto, código de alta performance e estratégia de conversão — tudo entregue em tempo recorde.
            </p>
            <p className="font-sans text-lg text-gray-600 mb-8 leading-relaxed">
              Cada projeto é tratado como um ativo estratégico do seu negócio, não apenas mais uma página na internet.
            </p>

            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Figma', 'Tailwind'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 border border-gray-200 text-xs font-bold text-gray-600 rounded-full hover:border-brand-sky hover:text-brand-sky transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MISSÃO VISÃO VALORES ───────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="font-sans text-sm text-brand-sky uppercase tracking-[0.2em] font-semibold">
              Fundamentos
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mt-3 tracking-tight">
              O que nos guia
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {mvv.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title}>
                <motion.div
                  className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-sky/0 to-brand-sky/0 group-hover:from-brand-sky/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-brand-sky/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-brand-sky" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{title}</h3>
                    <p className="font-sans text-gray-600 leading-relaxed">{text}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NÚMEROS ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.12),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.08),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal className="text-center mb-16">
            <span className="font-sans text-sm text-brand-sky uppercase tracking-[0.2em] font-semibold">
              Resultados
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 tracking-tight">
              Números que falam por si
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <Reveal key={label}>
                <motion.div
                  className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-brand-sky/40 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon className="w-8 h-8 text-brand-sky mx-auto mb-4 opacity-80" />
                  <p className="font-display text-4xl md:text-5xl font-bold text-white mb-2">{value}</p>
                  <p className="font-sans text-sm text-gray-400">{label}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ───────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="font-sans text-sm text-brand-sky uppercase tracking-[0.2em] font-semibold">
              Por que Elevete?
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mt-3 tracking-tight">
              O que nos torna diferentes
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {diferenciais.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title}>
                <motion.div
                  className="flex items-start gap-5 p-7 bg-gray-50 border border-gray-100 rounded-2xl hover:border-brand-sky/30 hover:bg-brand-sky/5 transition-all duration-300 group"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-brand-sky/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-brand-sky" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="font-sans text-gray-600 leading-relaxed">{text}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────────── */}
      <section className="py-28 px-6 text-center bg-gray-50 border-t border-gray-100">
        <Reveal>
          <span className="font-sans text-sm text-brand-sky uppercase tracking-[0.2em] font-semibold">
            Próximo passo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 tracking-tight">
            Pronto para elevar seu negócio?
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
            Fale com um especialista e descubra como podemos transformar sua presença digital em um canal de receita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contato"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold px-10 py-4 rounded-lg hover:bg-gray-800 transition-all hover:scale-105 font-sans"
            >
              Conversar com Especialista
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/#projetos"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-10 py-4 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-all font-sans"
            >
              Ver Projetos
            </Link>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
