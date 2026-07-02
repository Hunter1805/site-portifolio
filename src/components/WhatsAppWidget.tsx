import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = '5511999999999'; // Substituir pelo seu número
  const whatsappMessage = 'Olá! Gostaria de saber mais sobre os serviços da Elevete.';

  return (
    <>
      {/* Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Abrir WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Widget Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 bg-white rounded-lg shadow-xl p-6 w-80 animate-in fade-in slide-in-from-bottom-2">
          {/* Header */}
          <div className="mb-4">
            <h3 className="font-bold text-slate-900">Fale com a Elevete</h3>
            <p className="text-sm text-slate-600">Respondemos em até 24h</p>
          </div>

          {/* Message */}
          <p className="text-slate-700 text-sm mb-4">
            Tem dúvidas? Quer saber mais sobre nossos serviços? Clique no botão abaixo para conversar conosco no WhatsApp!
          </p>

          {/* CTA Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg text-center transition-colors duration-200"
          >
            Abrir WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
