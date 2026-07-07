import { Globe, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between bg-white border-t border-gray-100">
      <div className="mb-10 md:mb-0">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-display text-2xl font-bold text-gray-900 tracking-tighter">Elevete</span>
        </div>
        <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
          Transformando a presença digital de negócios locais através de funis de alta conversão.
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
        <div className="flex flex-col gap-4">
          <span className="font-sans text-sm text-gray-900 font-bold mb-1">Navegação</span>
          <a className="text-gray-500 text-sm hover:text-brand-sky transition-colors font-medium" href="#projetos">Projetos</a>
          <a className="text-gray-500 text-sm hover:text-brand-sky transition-colors font-medium" href="#sobre">Sobre</a>
          <a className="text-gray-500 text-sm hover:text-brand-sky transition-colors font-medium" href="#servicos">Serviços</a>
        </div>
        
        <div className="flex flex-col gap-4">
          <span className="font-sans text-sm text-gray-900 font-bold mb-1">Contato</span>
          <a className="text-gray-500 text-sm hover:text-brand-sky transition-colors font-medium" href="#contato">Falar conosco</a>
          <a className="text-gray-500 text-sm hover:text-brand-sky transition-colors font-medium" href="https://wa.me/5538999908770" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        
        <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
          <span className="font-sans text-sm text-gray-900 font-bold mb-1">Redes</span>
          <div className="flex gap-3">
            <a className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-sky hover:text-white transition-all" href="#globe">
              <Globe className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-sky hover:text-white transition-all" href="#share">
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-16 md:mt-0 md:self-end text-left md:text-right w-full md:w-auto pt-8 border-t border-gray-100 md:border-0 md:pt-0">
        <p className="text-xs text-gray-400 font-medium">© 2026 Elevete Gerenciamento. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
