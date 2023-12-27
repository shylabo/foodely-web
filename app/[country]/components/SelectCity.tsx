import { City, availableCountries } from '@/constants';
import CitySelector from './CitySelector';

interface SelectCityProps {
  cities: City[];
}

const SelectCity: React.FC<SelectCityProps> = ({ cities }) => {
  const country = availableCountries.find((country) => country.value === cities[0].countryCode);
  return (
    <section className="bg-secondary p-8 space-y-8">
      <h2 className="text-2xl lg:text-4xl font-extrabold">
        {country?.flag} {country?.label}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
        {cities.map((city) => (
          <CitySelector key={city.value} city={city} />
        ))}
      </div>
    </section>
  );
};

export default SelectCity;
