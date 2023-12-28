import { CategoryData } from '@/actions/mock';
import { IntoleranceData } from '@/actions/mock/intolerance';

export interface Restaurant {
  id: number;
  slug: string;
  name: string;
  description: string;
  address: string;
  eye_catch_image: string;
  cover_image: string;
  categories: CategoryData[];
  intolerance: IntoleranceData[];
  min_order_amount: number;
}
