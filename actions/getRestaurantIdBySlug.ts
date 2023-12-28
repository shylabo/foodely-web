import { Restaurant } from '@/types/restaurant';
import { restaurants } from './mock/restaurant';

export async function getRestaurantIdBySlug(slug: string): Promise<number | null> {
  const restaurant = restaurants.find((restaurant) => restaurant.slug === slug);
  return restaurant?.id ?? null;
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
    if (!restaurants.data) return null;

    return restaurants.data;
  } catch (error: any) {
    throw new Error('Failed to fetch restaurants', error);
  }
}
