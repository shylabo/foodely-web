'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { CategoryData } from '@/constants';

interface CategoryCardProps {
  category: CategoryData;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const pathname = usePathname();
  return (
    <Card className="relative w-32 md:w-48 min-h-48 hover:scale-105 transition">
      <Link href={`${pathname}/${category.value}`}>
        <CardContent className="absolute inset-0 z-20 text-white py-4">
          <CardTitle className="text-base md:text-2xl">{category.label}</CardTitle>
        </CardContent>
        <Image
          src={category.image}
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
