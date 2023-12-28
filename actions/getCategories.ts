import { CategoryData, categories } from './mock/category';

export async function getCategories(): Promise<CategoryData[] | null> {
  return categories;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/categories`, {
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
    if (!categories.data) return null;

    return categories.data;
  } catch (error: any) {
    throw new Error('Failed to fetch categories', error);
  }
}
