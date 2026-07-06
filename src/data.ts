export const portfolioData = [
  {
    id: 1,
    category: 'Indústria',
    title: 'Sistema de Gestão Industrial',
    description: 'Plataforma ERP/BI corporativa que unifica gestão de fornos, logística, manutenção, custos e conformidade fiscal. Inclui dashboard em tempo real, relatórios PDF premium, exportação Excel, sincronização offline e segurança avançada com PIN Lock.',
    metrics: [ { value: '-85%', label: 'Redução de Erros' }, { value: '+60%', label: 'Produtividade' } ],
    accent: 'bg-[#39b8fd]',
    textAccent: 'text-[#39b8fd]',
    image: '/mockups/gestao-industrial.png'
  },
  {
    id: 2,
    category: 'Varejo Digital',
    title: 'Plataforma de Vendas Digital',
    description: 'Vitrine de produtos otimizada para dispositivos móveis com integração direta para o time de fechamento.',
    metrics: [ { value: '+40%', label: 'Conversão Vendas' }, { value: '100+', label: 'Leads Diários' } ],
    accent: 'bg-[#4edea3]',
    textAccent: 'text-[#4edea3]',
    image: '/mockups/vitrine-vendas.png'
  },
  {
    id: 3,
    category: 'Corporativo',
    title: 'Website Institucional',
    description: 'Presença online robusta focada em autoridade de marca e geração de confiança para clientes B2B.',
    metrics: [ { value: '+60%', label: 'Visibilidade' }, { value: '+45%', label: 'Contatos' } ],
    accent: 'bg-black',
    textAccent: 'text-black',
    image: '/mockups/site-institucional.png'
  },
  {
    id: 4,
    category: 'Lançamento',
    title: 'Landing Page Conversão',
    description: 'Página de destino ultrarrápida projetada para tráfego pago, maximizando o ROI de cada clique.',
    metrics: [ { value: '8%', label: 'Taxa de Conversão' }, { value: '300%', label: 'Aumento ROI' } ],
    accent: 'bg-brand-sky',
    textAccent: 'text-brand-sky',
    image: '/mockups/landing-page.png'
  }
];

export const servicesData = [
  { id: 1, icon: 'Zap', title: 'Landing Page', description: 'Páginas de alta performance focadas em um único objetivo: converter visitantes em leads no WhatsApp.' },
  { id: 2, icon: 'ShoppingBag', title: 'Vitrine de Vendas', description: 'Catálogo digital otimizado onde seu cliente escolhe os itens e fecha o pedido diretamente via chat.' },
  { id: 3, icon: 'Building2', title: 'Site Institucional', description: 'Presença profissional para sua empresa, com autoridade e canais de atendimento integrados.' },
  { id: 4, icon: 'Settings', title: 'Sistema de Gestão', description: 'Ferramentas internas personalizadas para organizar seus leads, pedidos e métricas de funil.' }
];

export const processData = [
  { id: 1, title: 'Conversa Inicial', description: 'Entendemos seu público, sua oferta e como seu funil atual funciona para otimizá-lo.' },
  { id: 2, title: 'Design & Estratégia', description: 'Criamos o protótipo focado em persuasão e na melhor experiência do usuário mobile.' },
  { id: 3, title: 'Desenvolvimento', description: 'Codificação limpa, rápida e otimizada para SEO e alta velocidade de carregamento.' },
  { id: 4, title: 'Lançamento', description: 'Seu site no ar, integrado ao WhatsApp e pronto para receber os primeiros clientes.' }
];
