import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  TrendingUp,
  Activity,
  FileText,
  WifiOff,
  Lock,
  Calendar,
  Image as ImageIcon,
  Heart,
  MessageSquare,
  ShoppingBag,
  ShoppingCart,
  Zap,
  Globe
} from 'lucide-react';

interface TopProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const topProjects = [
  {
    id: 'carbonize',
    title: 'CARBONIZE - Sistema de Gestão Industrial',
    subtitle: 'Plataforma ERP/BI para produção de carvão vegetal',
    category: 'Indústria • ERP / BI',
    accentColor: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-100',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    resultText: '-95% tempo de auditoria, 100% digitalizado',
    features: [
      { text: 'Dashboard em tempo real', icon: Activity },
      { text: 'Relatórios PDF premium', icon: FileText },
      { text: 'Sincronização offline', icon: WifiOff },
      { text: 'Segurança avançada com PIN Lock', icon: Lock }
    ]
  },
  {
    id: 'adpirapora',
    title: 'ADPIRAPORA.COM.BR - Site Institucional',
    subtitle: 'Plataforma digital para comunidade religiosa',
    category: 'Institucional • Comunidade',
    accentColor: 'from-blue-500 to-indigo-600',
    borderColor: 'border-blue-100',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-100',
    resultText: '+300% de engajamento, comunidade conectada',
    features: [
      { text: 'Agenda de eventos e missas', icon: Calendar },
      { text: 'Galeria de fotos e vídeos', icon: ImageIcon },
      { text: 'Sistema de doações online', icon: Heart },
      { text: 'Integração com WhatsApp para contato', icon: MessageSquare }
    ]
  },
  {
    id: 'loja-famme',
    title: 'LOJA FAMME - E-commerce de Moda',
    subtitle: 'Plataforma de vendas online com integração WhatsApp',
    category: 'E-commerce • Vendas',
    accentColor: 'from-rose-500 to-pink-600',
    borderColor: 'border-rose-100',
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-100',
    resultText: '+250% em vendas, +180% em leads',
    features: [
      { text: 'Catálogo dinâmico com fotos em alta qualidade', icon: ShoppingBag },
      { text: 'Carrinho de compras intuitivo', icon: ShoppingCart },
      { text: 'Integração com WhatsApp para atendimento', icon: MessageSquare },
      { text: 'Funil de vendas otimizado para conversão', icon: Zap }
    ]
  }
];

export default function TopProjectsModal({ isOpen, onClose }: TopProjectsModalProps) {
  // Desabilitar rolagem do body quando o modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escutar tecla Escape para fechar o modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Overlay com Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative z-10 bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col my-8 max-h-[85vh]"
          >
            {/* Header Fixo */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-white relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-sky via-indigo-500 to-purple-600" />
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-sky/10 text-brand-sky border border-brand-sky/20 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-sky animate-pulse"></span>
                  Top 3 Projetos em Produção
                </span>
                <h3 className="font-display text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Casos de Sucesso & Faturamento
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Soluções customizadas de alta performance gerando resultados reais.
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-400 hover:text-slate-600 transition-all duration-200 cursor-pointer focus:outline-none"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conteúdo com scroll */}
            <div className="p-6 overflow-y-auto space-y-6 bg-slate-50/50 flex-1">
              {topProjects.map((project) => (
                <div
                  key={project.id}
                  className={`bg-white border ${project.borderColor} rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden`}
                >
                  {/* Accent bar horizontal */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.accentColor}`} />

                  {/* Header do projeto */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${project.badgeBg}`}>
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">
                      <Globe className="w-3 h-3" /> EM OPERAÇÃO
                    </span>
                  </div>

                  {/* Títulos */}
                  <h4 className="font-display text-lg font-bold text-slate-800 tracking-tight leading-snug">
                    {project.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* Destaque de Resultado */}
                  <div className="mt-4 bg-slate-50 border border-slate-100 rounded-lg p-3 flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block leading-none mb-0.5">
                        Resultado Gerado
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-700">
                        {project.resultText}
                      </span>
                    </div>
                  </div>

                  {/* Checklist de Recursos */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                      Principais Funcionalidades
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feat, idx) => {
                        const IconComponent = feat.icon;
                        return (
                          <div key={idx} className="flex items-center gap-2 text-slate-600">
                            <div className="w-5 h-5 rounded-full bg-slate-100/80 border border-slate-200/50 flex items-center justify-center text-slate-500 shrink-0">
                              <IconComponent className="w-3 h-3" />
                            </div>
                            <span className="text-xs font-medium text-slate-600 truncate">
                              {feat.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Fixo */}
            <div className="p-4 border-t border-slate-100 bg-white flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none active:scale-95"
              >
                Voltar ao Portfólio
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
