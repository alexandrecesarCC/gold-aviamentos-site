/**
 * Gold Aviamentos — Constantes da Empresa
 * Dados de contato, horários e informações gerais
 */

export const COMPANY = {
  name: 'Gold Aviamentos',
  tagline: 'Tudo que sua produção precisa.',
  description: 'Atacado e varejo de aviamentos têxteis de qualidade',
  whatsapp: '5581900000000', // Substituir com número real
  email: 'contato@goldaviamentos.com.br',
  address: 'Santa Cruz do Capibaribe, PE',
  hours: 'Seg–Sex 8h–18h · Sáb 8h–12h',
  region: 'Nordeste',
};

export const COLORS = {
  gold: {
    primary: '#C9A227',
    light: '#E8C040',
    dark: '#9A7A1A',
  },
  bg: {
    primary: '#0A0A0A',
    secondary: '#111111',
    tertiary: '#1A1A1A',
    surface: '#1E1E1E',
  },
  border: {
    subtle: 'rgba(255,255,255,0.08)',
    gold: 'rgba(201,162,39,0.25)',
  },
  text: {
    primary: '#F5F3EE',
    secondary: 'rgba(245,243,238,0.55)',
    muted: 'rgba(245,243,238,0.30)',
  },
};

export const STATS = [
  { value: '10+', label: 'Anos no mercado' },
  { value: '3.000+', label: 'Produtos disponíveis' },
  { value: '10.000+', label: 'Clientes atendidos' },
  { value: 'Entregamos', label: 'em todo o Brasil' },
];

export const PRODUCTS = [
  {
    id: 1,
    title: 'Linhas & Linhação',
    description: 'Linhas de costura em diversos tipos e cores',
  },
  {
    id: 2,
    title: 'Botões',
    description: 'Botões decorativos e funcionais',
  },
  {
    id: 3,
    title: 'Zippers & Fechos',
    description: 'Zippers e fechos de qualidade premium',
  },
  {
    id: 4,
    title: 'Tecidos',
    description: 'Seleção de tecidos para confecção',
  },
  {
    id: 5,
    title: 'Elásticos',
    description: 'Elásticos em diversos tipos e espessuras',
  },
  {
    id: 6,
    title: 'Etiquetas',
    description: 'Etiquetas personalizadas e padrão',
  },
  {
    id: 7,
    title: 'Entretela',
    description: 'Entretelas para reforço e acabamento',
  },
  {
    id: 8,
    title: 'Acessórios',
    description: 'Diversos acessórios têxteis',
  },
];

export const DIFFERENTIALS = [
  {
    number: '01',
    title: 'Linha completa num só lugar',
    description:
      'Mais agilidade para sua produção e menos tempo perdido buscando materiais em vários lugares. Na Gold, você encontra uma linha completa de aviamentos com praticidade e consistência.',
  },
  {
    number: '02',
    title: 'Preço justo e negociação transparente',
    description:
      'Atacado e varejo com condições claras, sem surpresas e sem complicação. Trabalhamos com competitividade real para quem precisa comprar bem e manter margem.',
  },
  {
    number: '03',
    title: 'Pronta entrega de verdade',
    description:
      'Mantemos estoque dos produtos de maior giro para atender com rapidez. Quando sua produção precisa continuar, resposta rápida deixa de ser diferencial e vira obrigação.',
  },
  {
    number: '04',
    title: 'Atendimento para quem vive da produção',
    description:
      'De artesãos e costureiras independentes até facções e confecções maiores, entendemos diferentes demandas e atendemos cada cliente com seriedade comercial.',
  },
];

export const WHATSAPP_URL = `https://wa.me/${COMPANY.whatsapp}`;

export const WHATSAPP_MESSAGE = (message: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
