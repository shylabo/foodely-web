import { Allergy } from '.';

export interface MenuItem {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  eye_catch_image: string;
  allergies: Allergy[];
  price: number;
}
