'use client';

import { MdOutlineArrowForwardIos } from 'react-icons/md';

import { Button } from '../../../components/ui/button';
import { useRouter } from 'next/navigation';

interface CountrySelectorProps {
  countryCode: string;
  name: string;
  flag: string;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ countryCode, name, flag }) => {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      className="flex justify-between h-16 w-full hover:text-primary"
      onClick={() => router.push(`/${countryCode}`)}
    >
      <p className="flex items-center gap-x-2 text-lg">
        <span className="text-2xl">{flag}</span>
        {name}
      </p>
      <MdOutlineArrowForwardIos />
    </Button>
  );
};

export default CountrySelector;
