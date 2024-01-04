import { Restaurant } from '@/types/restaurant';

export async function getRestaurants(): Promise<Restaurant[] | null> {
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
    if (!restaurants) return null;

    return restaurants;
  } catch (error: any) {
    throw new Error('Failed to fetch restaurants', error);
  }
}
