import { Allergy } from '.';

export interface MenuItem {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  eye_catch_image: string;
  address: string;
  allergies: Allergy[];
  amount: number;
  menu_section: string;
}
