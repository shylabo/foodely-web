'use client';

import { MdOutlineArrowForwardIos } from 'react-icons/md';

import { Button } from './ui/button';

interface CountrySelectorProps {
  name: string;
  flag: string;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ name, flag }) => {
  return (
    <Button variant="outline" className="flex justify-between h-16 w-full hover:text-primary">
      <p className="flex items-center gap-x-2 text-lg">
        <span className="text-2xl">{flag}</span>
        {name}
      </p>
      <MdOutlineArrowForwardIos />
    </Button>
  );
};

export default CountrySelector;
