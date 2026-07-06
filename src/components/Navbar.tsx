import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when page/hash changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Scroll to hash when route changes or component mounts
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // A little delay to ensure the DOM is painted and scroll works
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-outline transition-all duration-300 h-20 flex items-center">
      <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-1 font-display text-lg font-extrabold tracking-[0.2em] text-gray-900 group">
          <span>E</span>
          <span>L</span>
          <span>E</span>
          <span>V</span>
          {/* Letra A customizada com barra azul em SVG */}
          <svg className="w-[12px] h-[13px] inline-block -mt-[2px] mx-[2px]" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 14L7 1.5L12.5 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.5 9.5H10.5" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <span>T</span>
          <span>E</span>
          <span className="text-brand-sky font-sans text-xl font-black -ml-0.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 select-none">↗</span>
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          <Link className="font-sans text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors nav-underline-anim" to="/">Home</Link>
          <Link className="font-sans text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors nav-underline-anim" to="/#projetos">Projetos</Link>
          <Link className="font-sans text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors nav-underline-anim" to="/sobre">Sobre</Link>
          <Link className="font-sans text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors nav-underline-anim" to="/#servicos">Serviços</Link>
          <Link className="font-sans text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors nav-underline-anim" to="/#contato">Contato</Link>
        </div>

        {/* Botão de Conversar e Hambúrguer */}
        <div className="flex items-center gap-4">
          <Link className="hidden sm:inline-block bg-gray-900 text-white px-6 py-2.5 rounded-md font-sans text-sm font-medium hover:bg-gray-800 transition-colors" to="/#contato">
            Vamos Conversar
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-sky/20 rounded"
            aria-label="Alternar Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Overlay do Menu Mobile com Blur */}
      <div 
        className={`fixed inset-0 top-20 bg-slate-900/10 backdrop-blur-xs md:hidden z-30 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Dropdown Mobile */}
      <div 
        className={`absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden flex flex-col px-6 py-8 gap-4 z-40 transition-all duration-300 origin-top ${
          isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible pointer-events-none'
        }`}
      >
        <Link className="font-sans text-base font-semibold text-gray-700 hover:text-gray-900 py-2.5 border-b border-gray-50 flex items-center justify-between" to="/">
          <span>Home</span>
          <span className="text-gray-400 text-xs font-normal">→</span>
        </Link>
        <Link className="font-sans text-base font-semibold text-gray-700 hover:text-gray-900 py-2.5 border-b border-gray-50 flex items-center justify-between" to="/#projetos">
          <span>Projetos</span>
          <span className="text-gray-400 text-xs font-normal">→</span>
        </Link>
        <Link className="font-sans text-base font-semibold text-gray-700 hover:text-gray-900 py-2.5 border-b border-gray-50 flex items-center justify-between" to="/sobre">
          <span>Sobre</span>
          <span className="text-gray-400 text-xs font-normal">→</span>
        </Link>
        <Link className="font-sans text-base font-semibold text-gray-700 hover:text-gray-900 py-2.5 border-b border-gray-50 flex items-center justify-between" to="/#servicos">
          <span>Serviços</span>
          <span className="text-gray-400 text-xs font-normal">→</span>
        </Link>
        <Link className="font-sans text-base font-semibold text-gray-700 hover:text-gray-900 py-2.5 border-b border-gray-50 flex items-center justify-between" to="/#contato">
          <span>Contato</span>
          <span className="text-gray-400 text-xs font-normal">→</span>
        </Link>
        <Link className="bg-brand-sky text-white text-center py-3.5 rounded-md font-sans text-sm font-semibold hover:bg-sky-500 shadow-md shadow-sky-500/10 transition-colors mt-4" to="/#contato">
          Vamos Conversar
        </Link>
      </div>
    </nav>
  );
}
