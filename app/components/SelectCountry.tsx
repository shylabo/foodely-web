import CountrySelector from '@/components/CountrySelector';
import { availableCountries } from '@/constants';

const SelectCountry = () => {
  return (
    <section className="bg-secondary p-8 space-y-8">
      <h2 className="text-2xl lg:text-4xl font-extrabold">Explore Foodely countries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
        {availableCountries.map((country) => (
          <CountrySelector key={country.value} countryCode={country.value} name={country.label} flag={country.flag} />
        ))}
      </div>
    </section>
  );
};

export default SelectCountry;
