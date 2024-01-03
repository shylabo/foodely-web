import { Restaurant } from '@/types/restaurant';
import { restaurants } from './mock/restaurant';

export async function getRestaurants(): Promise<Restaurant[] | null> {
  return restaurants;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants`, {
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
