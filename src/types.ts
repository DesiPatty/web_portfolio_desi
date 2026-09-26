export type Category = 'all' | 'ui' | 'characters' | 'assets' | 'environments' | 'animation' | 'promo';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Category;
  categoryLabel: string;
  gameGenre: string;
  image: string;
  description: string;
  year?: string;
  client?: string;
  tags?: string[];
  whatIDeveloped: string[];
  specs: {
    resolution: string;
    formats: string[];
    tools: string[];
    pipelineStage?: string;
  };
  productionReady: string[];
  colorPalette: string[];
  features?: string[];
  deliverables: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  badge: string;
  deliverables: string[];
  software: string[];
  turnaround: string;
}

export interface PipelineStep {
  step: number;
  tag: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: string;
  youGive?: string;
  iDo?: string;
  definedItems?: string;
  processFlow?: string[];
  deliverablesList?: string;
  keyPoints?: string[];
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
  highlight: string;
}

export interface FaqItem {
  id: string;
  question: string;
  questionEs?: string;
  answer: string;
  answerEs?: string;
  tag: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  quoteEs?: string;
  author: string;
  role: string;
  studio: string;
  game: string;
  gameBadge: string;
  avatarSeed: string;
  rating: number;
}

