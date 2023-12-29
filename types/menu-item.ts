import { IntoleranceData } from '@/actions/mock/intolerance';

export interface MenuItem {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  eye_catch_image: string;
  address: string;
  intolerance: IntoleranceData[];
  amount: number;
  menu_section: string;
}
