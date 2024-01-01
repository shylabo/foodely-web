export type AllergyType =
  | 'dairy'
  | 'egg'
  | 'gluten'
  | 'grain'
  | 'peanut'
  | 'seafood'
  | 'sesame'
  | 'shellfish'
  | 'soy'
  | 'sulfite'
  | 'Tree Nut'
  | 'wheat';

export interface Allergy {
  id: number;
  slug: AllergyType;
  label: string;
  created_at: Date;
  updated_at: Date;
}
