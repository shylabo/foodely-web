import { Allergy, Category } from '.';

export interface Restaurant {
  id: number;
  slug: string;
  name: string;
  description: string;
  address: string;
  eye_catch_image: string;
  cover_image: string;
  categories: Category[];
  allergies: Allergy[];
  min_order_amount: number;
}
