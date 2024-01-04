'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Restaurant } from '@/types/restaurant';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MdLocationOn, MdOutlineError, MdOutlineRestaurant, MdOutlineWallet } from 'react-icons/md';
import { getFormatter } from '@/lib/utils';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const pathname = usePathname();
  const formatter = getFormatter();

  const formattedMinAmount = formatter.format(restaurant.min_order_amount);
  return (
    <Card className="w-full max-w-xl min-h-48 transition hover:scale-105">
      <Link href={`${pathname}/${restaurant.id}`}>
        <div className="relative h-40 w-full">
          <Image
            src={restaurant.eye_catch_image}
            alt="category image"
            sizes="100%"
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <CardContent className="p-2 space-y-2">
          <div>
            <CardTitle className="text-base">{restaurant.name}</CardTitle>
            <CardDescription className="text-base">{restaurant.description}</CardDescription>
          </div>
          <Separator />
          <div className="flex items-center gap-x-1">
            <MdOutlineRestaurant />
            {restaurant.categories.map((category) => (
              <Badge variant="secondary">{category.label}</Badge>
            ))}
          </div>
          <div className="flex items-center gap-x-1">
            <MdOutlineError size={16} />
            {restaurant.allergies.map((allergy) => (
              <Badge variant="secondary">{allergy.label}</Badge>
            ))}
          </div>
          <div className="flex items-center gap-x-1">
            <MdLocationOn size={16} />
            <CardDescription className="text-sm truncate">{restaurant.address}</CardDescription>
          </div>
          <div className="flex items-center gap-x-1">
            <MdOutlineWallet size={16} />
            <CardDescription className="text-sm">Min order: {formattedMinAmount}~</CardDescription>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default RestaurantCard;
