export type Category = 
  | 'Feed cost'
  | 'Ration planning'
  | 'Feed comparison'
  | 'Feed conversion'
  | 'Feed storage'
  | 'Feed waste';

export interface MiniSlider {
  id: string;
  label: string;
  min: number;
  max: number;
  val: number;
  step: number;
  fmt: (v: number) => string;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  category: Category;
  primaryOutcome: string;
  iconName?: string;
  sliders?: MiniSlider[];
  calc?: (values: Record<string, number>) => string;
  outCap?: string;
}
