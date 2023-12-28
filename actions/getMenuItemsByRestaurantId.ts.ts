import { menuItems } from './mock';
import { restaurants } from './mock/restaurant';
import { MenuItem } from '@/types/menu-item';

export async function getMenuItemsByRestaurantId(id: number): Promise<MenuItem[]> {
  const items = menuItems.filter((item) => item.restaurantId === id);
  return items;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/restaurants`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const restaurants = await res.json();

    return restaurants.data;
  } catch (error: any) {
    throw new Error('Failed to fetch restaurants', error);
  }
}
