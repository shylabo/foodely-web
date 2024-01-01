'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const pathname = usePathname();
  return (
    <Card className="relative w-32 md:w-48 min-h-48 hover:scale-105 transition">
      <Link href={`${pathname}/${category.slug}`}>
        <CardContent className="absolute inset-0 z-20 text-white py-4">
          <CardTitle className="text-base md:text-2xl">{category.label}</CardTitle>
        </CardContent>
        <Image
          src={category.image_url}
          alt="category image"
          sizes="100%"
          fill
          className="object-cover rounded-lg brightness-50"
        />
      </Link>
    </Card>
  );
};

export default CategoryCard;
