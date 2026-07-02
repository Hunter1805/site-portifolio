export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-outline transition-all duration-300 h-20 flex items-center">
      <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto">
        <a href="#" className="flex items-center gap-1 font-display text-lg font-extrabold tracking-[0.2em] text-gray-900 group">
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
        </a>
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-sans text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors nav-underline-anim" href="#projetos">Projetos</a>
          <a className="font-sans text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors nav-underline-anim" href="#sobre">Sobre</a>
          <a className="font-sans text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors nav-underline-anim" href="#servicos">Serviços</a>
          <a className="font-sans text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors nav-underline-anim" href="#contato">Contato</a>
        </div>
        <div className="flex items-center gap-4">
          <a className="bg-gray-900 text-white px-8 py-3 rounded-md font-sans text-sm font-medium hover:bg-gray-800 transition-colors" href="#contato">Vamos Conversar</a>
        </div>
      </div>
    </nav>
  );
}
