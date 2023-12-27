'use client';

import { MdOutlineArrowForwardIos } from 'react-icons/md';

import { useRouter } from 'next/navigation';
import { City } from '@/constants';
import { Button } from '@/components/ui/button';

interface CitySelectorProps {
  city: City;
}

const CountrySelector: React.FC<CitySelectorProps> = ({ city }) => {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      className="flex justify-between h-16 w-full hover:text-primary"
      onClick={() => router.push(`/${city.countryCode}/${city.value}`)}
    >
      <p className="flex items-center gap-x-2 text-lg">{city.label}</p>
      <MdOutlineArrowForwardIos />
    </Button>
  );
};

export default CountrySelector;
