export type CategoryType =
  | 'african'
  | 'asian'
  | 'american'
  | 'british'
  | 'cajun'
  | 'caribbean'
  | 'chinese'
  | 'eastern_european'
  | 'european'
  | 'french'
  | 'german'
  | 'greek'
  | 'indian'
  | 'irish'
  | 'italian'
  | 'japanese'
  | 'jewish'
  | 'korean'
  | 'latin_american'
  | 'mediterranean'
  | 'mexican'
  | 'middle_eastern'
  | 'nordic'
  | 'southern'
  | 'spanish'
  | 'thai'
  | 'vietnamese';

export interface Category {
  slug: CategoryType;
  label: string;
  image_url: string;
  created_at: Date;
  updated_at: Date;
}
