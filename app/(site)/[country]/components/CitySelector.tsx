'use client';

import { MdOutlineArrowForwardIos } from 'react-icons/md';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { City } from '@/types';

interface CitySelectorProps {
  city: City;
}

const CountrySelector: React.FC<CitySelectorProps> = ({ city }) => {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      className="flex justify-between h-16 w-full hover:text-primary"
      onClick={() => router.push(`/${city.country_code}/${city.slug}`)}
      // TODO: Remove disability
      disabled={city.slug !== 'vancouver'}
    >
      <p className="flex items-center gap-x-2 text-lg">{city.label}</p>
      <MdOutlineArrowForwardIos />
    </Button>
  );
};

export default CountrySelector;
