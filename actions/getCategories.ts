import { Category } from '@/types';

export async function getCategories(): Promise<Category[] | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const categories = await res.json();
    if (!categories) return null;

    return categories;
  } catch (error: any) {
    throw new Error('Failed to fetch categories', error);
  }
}
