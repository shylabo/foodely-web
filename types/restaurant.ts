import { Allergy, Category, MenuItem } from '.';

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
  menu_items: MenuItem[];
  min_order_amount: number;
}
