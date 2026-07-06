import { Reveal } from './Reveal';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gray-50 border-y border-gray-200" id="contato">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Vamos acelerar suas vendas?
            </h2>
            <p className="font-sans text-lg text-gray-600 mb-10 leading-relaxed">
              Preencha o formulário ou entre em contato direto pelo WhatsApp. Respondemos em até 24h úteis.
            </p>
            <div className="flex flex-col gap-6">
              <a className="flex items-center gap-4 group" href="#whatsapp">
                <div className="w-12 h-12 bg-brand-sky/10 flex items-center justify-center rounded-md group-hover:bg-brand-sky transition-colors text-brand-sky group-hover:text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-sans text-sm font-medium text-gray-900">(11) 99999-9999</span>
              </a>
              <a className="flex items-center gap-4 group" href="mailto:contato@elevete.com.br">
                <div className="w-12 h-12 bg-brand-sky/10 flex items-center justify-center rounded-md group-hover:bg-brand-sky transition-colors text-brand-sky group-hover:text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-sans text-sm font-medium text-gray-900">contato@elevete.com.br</span>
              </a>
            </div>
          </Reveal>
          
          <Reveal className="md:col-span-7">
            <form className="bg-white border border-gray-200 p-6 sm:p-8 rounded-md shadow-sm space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-xs uppercase tracking-widest text-gray-500 font-medium">Nome</label>
                  <input className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-md focus:border-brand-sky focus:outline-none focus:ring-1 focus:ring-brand-sky transition-all text-sm" placeholder="Seu nome" type="text" required />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-xs uppercase tracking-widest text-gray-500 font-medium">Email</label>
                  <input className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-md focus:border-brand-sky focus:outline-none focus:ring-1 focus:ring-brand-sky transition-all text-sm" placeholder="seu@email.com" type="email" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-sans text-xs uppercase tracking-widest text-gray-500 font-medium">Mensagem</label>
                <textarea className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-md focus:border-brand-sky focus:outline-none focus:ring-1 focus:ring-brand-sky transition-all text-sm resize-none" placeholder="Como podemos ajudar?" rows={4} required></textarea>
              </div>
              <button className="w-full bg-black text-white py-4 rounded-md font-sans text-sm font-medium uppercase tracking-widest hover:bg-brand-sky transition-colors mt-2" type="submit">
                Enviar Solicitação
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
