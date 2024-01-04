import { Restaurant } from '@/types/restaurant';

export async function getRestaurantById(id: string): Promise<Restaurant | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const restaurant = await res.json();
    if (!restaurant) return null;

    return restaurant;
  } catch (error: any) {
    throw new Error('Failed to fetch restaurant', error);
  }
}
