import { City } from '@/types';

export async function getCities(): Promise<City[] | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cities`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const cities = await res.json();
    if (!cities) return null;

    return cities;
  } catch (error: any) {
    throw new Error('Failed to fetch cities', error);
  }
}
