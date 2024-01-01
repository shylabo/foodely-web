import { Country } from '@/types';

export async function getCountries(): Promise<Country[] | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/countries`, {
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
    if (!countries) return null;

    return countries;
  } catch (error: any) {
    throw new Error('Failed to fetch countries', error);
  }
}
