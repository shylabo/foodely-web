import { City, availableCities } from './mock';

export async function getCities(): Promise<City[] | null> {
  return availableCities;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/countries`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const countries = await res.json();
    if (!countries.data) return null;

    return countries.data;
  } catch (error: any) {
    throw new Error('Failed to fetch countries', error);
  }
}