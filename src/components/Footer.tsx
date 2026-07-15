import { Globe, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="w-full relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0c1322 0%, #0d1829 100%)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(14,165,233,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-1 font-display text-xl font-extrabold tracking-[0.15em] text-white mb-4">
              <span>ELEV</span>
              <svg className="w-[13px] h-[14px] inline-block -mt-[2px] mx-[1px]" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 14L7 1.5L12.5 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.5 9.5H10.5" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <span>TE</span>
              <span className="text-brand-sky font-sans text-xl font-black -ml-0.5">↗</span>
            </div>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed mb-6">
              Transformando a presença digital de negócios locais através de funis de alta conversão e sites que realmente vendem.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/5538999908770" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md glass-card flex items-center justify-center text-gray-400 hover:text-brand-sky hover:border-brand-sky/30 transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-md glass-card flex items-center justify-center text-gray-400 hover:text-brand-sky hover:border-brand-sky/30 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-md glass-card flex items-center justify-center text-gray-400 hover:text-brand-sky hover:border-brand-sky/30 transition-all">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2 md:col-start-6">
            <span className="font-sans text-xs text-white font-bold uppercase tracking-[0.15em] mb-5 block">Navegação</span>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Projetos', href: '#projetos' },
                { label: 'Sobre',    href: '#sobre' },
                { label: 'Serviços', href: '#servicos' },
                { label: 'Processo', href: '#metodologia' },
              ].map(({ label, href }) => (
                <a key={label} className="text-gray-400 text-sm hover:text-brand-sky transition-colors" href={href}>{label}</a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <span className="font-sans text-xs text-white font-bold uppercase tracking-[0.15em] mb-5 block">Contato</span>
            <div className="flex flex-col gap-3">
              <a className="text-gray-400 text-sm hover:text-brand-sky transition-colors" href="#contato">Falar conosco</a>
              <a className="text-gray-400 text-sm hover:text-brand-sky transition-colors" href="https://wa.me/5538999908770" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a className="text-gray-400 text-sm hover:text-brand-sky transition-colors" href="mailto:elevategerenciamento@gmail.com">E-mail</a>
            </div>
          </div>

          {/* CTA card */}
          <div className="md:col-span-3">
            <div className="glass-card rounded-xl p-5">
              <p className="font-display text-white font-bold text-sm mb-2">Pronto para começar?</p>
              <p className="font-sans text-gray-400 text-xs leading-relaxed mb-4">Entre em contato e transforme sua presença digital hoje.</p>
              <a
                href="#contato"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-sky-400 text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-md transition-all duration-200 shadow-md shadow-brand-sky/25"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2026 Elevete Gerenciamento. Todos os direitos reservados.</p>
          <p className="text-xs text-gray-600">Feito com ❤️ para pequenos negócios que querem crescer</p>
        </div>
      </div>
    </footer>
  );
}
