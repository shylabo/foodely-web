import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';

import CitySelector from './CitySelector';
import { getCountries } from '@/actions';
import { City } from '@/types';

interface SelectCityProps {
  cities: City[];
}

const SelectCity: React.FC<SelectCityProps> = async ({ cities }) => {
  const countries = await getCountries();
  if (!countries) return null;

  const country = countries.find((country) => country.slug === cities[0].country_code);
  return (
    <section className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl lg:text-4xl font-extrabold">
          {country?.flag} {country?.label}
        </h2>
        <Link
          href={`/`}
          className="text-primary flex items-center gap-x-2 font-semibold hover:underline"
          scroll={false}
        >
          <MdArrowBack />
          Select Country
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
        {cities.map((city) => (
          <CitySelector key={city.slug} city={city} />
        ))}
      </div>
    </section>
  );
};

export default SelectCity;
