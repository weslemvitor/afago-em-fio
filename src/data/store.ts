export const whatsappUrl = 'https://wa.me/5547999003068'

export const navLinks = [
  { label: 'Produtos', href: '#produtos' },
  { label: 'Como Funciona', href: '#processo' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'WhatsApp', href: whatsappUrl },
]

export const marqueeItems = [
  'Feito a mao',
  'Sob encomenda',
  '100% artesanal',
  'Personalizado',
  'Com amor',
  'Entrega combinada',
]

export const products = [
  {
    id: 'cachepo-verde',
    name: 'Cachepo Trancado Verde',
    category: 'Decoracao',
    price: 'R$30,00',
    badge: 'Mais pedido',
    images: [
      {
        src: '/products/IMG_4724.jpg',
        alt: 'Cachepo de croche verde com planta em mesa de madeira',
      },
    ],
    message: 'Ola! Gostaria de encomendar um Cachepo Trancado Verde',
  },
  {
    id: 'descanso-pink',
    name: 'Porta-copos em fio de malha',
    category: 'Mesa & Decoracao',
    price: 'R$10,00',
    badge: null,
    images: [
      {
        src: '/products/IMG_4725.jpg',
        alt: 'Descansos circulares de croche pink em fio grosso',
      },
    ],
    message: 'Ola! Gostaria de encomendar um Porta-copos em fio de malha',
  },
  {
    id: 'kit-cesto-marinho',
    name: 'Kit porta copos + cesto organizador em fio de malha',
    category: 'Organizadores',
    price: 'R$70,00',
    badge: 'Com carrossel',
    images: [
      {
        src: '/products/IMG_4726.jpg',
        alt: 'Kit de cesto e descanso azul marinho com detalhe em cru',
      },
      {
        src: '/products/IMG_4727.jpg',
        alt: 'Cesto azul marinho com descanso circular combinando',
      },
    ],
    message: 'Ola! Gostaria de encomendar um Kit porta copos + cesto organizador em fio de malha',
  },
  {
    id: 'kit-cesto-uva',
    name: 'Porta copo + porta canetas',
    category: 'Organizadores',
    price: 'R$25,00',
    badge: null,
    images: [
      {
        src: '/products/IMG_4728.jpg',
        alt: 'Cesto uva e descanso circular combinando em croche',
      },
    ],
    message: 'Ola! Gostaria de encomendar um Porta copo + porta canetas',
  },
  {
    id: 'kit-cesto-vinho',
    name: 'Porta canetas + porta clips + porta copo',
    category: 'Organizadores',
    price: 'R$35,00',
    badge: null,
    images: [
      {
        src: '/products/IMG_4729.jpg',
        alt: 'Conjunto vinho com cestos e descanso circular em croche',
      },
    ],
    message: 'Ola! Gostaria de encomendar um Porta canetas + porta clips + porta copo',
  },
  {
    id: 'cesto-tampa-lilas',
    name: 'Cesto Organizador com Tampa Lilas',
    category: 'Organizadores',
    price: 'R$29,99',
    badge: 'Novo',
    images: [
      {
        src: '/products/kit-lilas-catalogo-02.png',
        alt: 'Cesto organizador lilas com tampa branca em croche',
      },
    ],
    message: 'Ola! Gostaria de encomendar um Cesto Organizador com Tampa Lilas',
  },
  {
    id: 'bandeja-lilas',
    name: 'Bandeja Organizadora com Alcas Lilas',
    category: 'Organizadores',
    price: 'R$74,99',
    badge: 'Novo',
    images: [
      {
        src: '/products/kit-lilas-catalogo-04.png',
        alt: 'Bandeja organizadora lilas e branca com alcas em croche',
      },
    ],
    message: 'Ola! Gostaria de encomendar uma Bandeja Organizadora com Alcas Lilas',
  },
  {
    id: 'kit-organizador-lilas',
    name: 'Kit Bandeja e Cesto com Tampa Lilas',
    category: 'Organizadores',
    price: 'R$104,99',
    badge: 'Novo',
    images: [
      {
        src: '/products/kit-lilas-catalogo-01.png',
        alt: 'Kit lilas com cesto de tampa branca e bandeja organizadora em croche',
      },
      {
        src: '/products/kit-lilas-catalogo-03.png',
        alt: 'Bandeja organizadora lilas com cesto de tampa branca ao centro',
      },
    ],
    message: 'Ola! Gostaria de encomendar um Kit Bandeja e Cesto com Tampa Lilas',
  },
  {
    id: 'kit-organizador-infantil-rosa',
    name: 'Kit Organizador Infantil Rosa',
    category: 'Organizadores',
    price: 'R$150,00',
    badge: 'Novo',
    images: [
      {
        src: '/products/kit-organizador-infantil-rosa-01.png',
        alt: 'Kit organizador infantil rosa e branco com quatro pecas em croche',
      },
      {
        src: '/products/kit-organizador-infantil-rosa-02.png',
        alt: 'Vista superior do kit organizador infantil rosa em croche',
      },
      {
        src: '/products/kit-organizador-infantil-rosa-03.png',
        alt: 'Detalhes dos pingentes do kit organizador infantil rosa em croche',
      },
    ],
    message: 'Ola! Gostaria de encomendar um Kit Organizador Infantil Rosa',
  },
] as const

export const processSteps = [
  {
    title: 'Entre em contato',
    description:
      'Mande uma mensagem no WhatsApp contando o que voce deseja: tipo de peca, cores, tamanho e qualquer detalhe especial.',
    icon: 'message',
  },
  {
    title: 'Combinamos tudo',
    description:
      'Juntos escolhemos materiais, cores e detalhes. Voce recebe uma previa e aprovamos o projeto antes de comecar.',
    icon: 'check',
  },
  {
    title: 'Criamos com amor',
    description:
      'Sua peca e produzida com cuidado e atencao aos detalhes. Acompanhe o processo pelo WhatsApp com fotos.',
    icon: 'sparkles',
  },
  {
    title: 'Combine a entrega',
    description:
      'Alinhamos a melhor forma de entrega ou retirada para sua encomenda chegar com cuidado e pronta para encantar.',
    icon: 'package',
  },
] as const

export const footerColumns = [
  {
    title: 'Produtos',
    links: ['Bolsas & Acessorios', 'Decoracao', 'Encomendas Especiais'],
  },
  {
    title: 'Informacoes',
    links: ['Como Funciona', 'Prazos de Entrega', 'Entrega combinada', 'Trocas e Devolucoes'],
  },
]
