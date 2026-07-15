import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const navLinks = [
    { label: 'Home',      to: '/' },
    { label: 'Sobre',     to: '/#sobre' },
    { label: 'Serviços',  to: '/#servicos' },
    { label: 'Projetos',  to: '/#projetos' },
    { label: 'Contato',   to: '/#contato' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-20 flex items-center ${
        scrolled
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 font-display text-lg font-extrabold tracking-[0.15em] text-white group">
          <span>E</span><span>L</span><span>E</span><span>V</span>
          <svg className="w-[12px] h-[13px] inline-block -mt-[2px] mx-[1px]" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 14L7 1.5L12.5 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.5 9.5H10.5" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <span>T</span><span>E</span>
          <span className="text-brand-sky font-sans text-xl font-black -ml-0.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 select-none">↗</span>
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors nav-underline-anim"
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburguer */}
        <div className="flex items-center gap-4">
          <Link
            className="hidden sm:inline-flex items-center gap-2 bg-brand-sky hover:bg-sky-400 text-white px-6 py-2.5 rounded-md font-sans text-sm font-semibold transition-all duration-200 shadow-lg shadow-brand-sky/25 hover:shadow-brand-sky/40 hover:-translate-y-0.5"
            to="/#contato"
          >
            Solicitar Orçamento
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none rounded"
            aria-label="Alternar Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Overlay Mobile */}
      <div
        className={`fixed inset-0 top-20 bg-black/60 backdrop-blur-sm md:hidden z-30 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Dropdown Mobile */}
      <div
        className={`absolute top-20 left-0 w-full bg-brand-dark border-b border-white/10 shadow-2xl md:hidden flex flex-col px-6 py-8 gap-2 z-40 transition-all duration-300 origin-top ${
          isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            className="font-sans text-base font-semibold text-gray-300 hover:text-white py-3 border-b border-white/5 flex items-center justify-between"
            to={link.to}
          >
            <span>{link.label}</span>
            <span className="text-brand-sky text-xs">→</span>
          </Link>
        ))}
        <Link
          className="mt-4 bg-brand-sky text-white text-center py-3.5 rounded-md font-sans text-sm font-semibold hover:bg-sky-400 shadow-md shadow-brand-sky/20 transition-colors"
          to="/#contato"
        >
          Solicitar Orçamento
        </Link>
      </div>
    </nav>
  );
}
