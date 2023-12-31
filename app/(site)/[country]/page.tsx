import Container from '@/components/layout/Container';
import Hero from '../components/Hero';
import AboutFoodely from '../components/AboutFoodely';
import FoodelyApp from '../components/FoodelyApp';
import SelectCity from './components/SelectCity';
import Link from 'next/link';
import { getCities } from '@/actions';

interface CitySelectPageProps {
  params: {
    country: string;
  };
}

const CitySelectPage: React.FC<CitySelectPageProps> = async ({ params: { country } }) => {
  const cities = await getCities();
  if (!cities) return;
  const selectableCities = cities.filter((city) => city.country_code === country);

  return (
    <>
      <Hero />
      {selectableCities.length > 0 ? (
        <SelectCity cities={selectableCities} />
      ) : (
        <section className="h-80 flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-extrabold text-3xl">Sorry. Available only in Vancouver for now.</h2>
            <Link href={'/'} className="text-primary underline">
              Go back
            </Link>
          </div>
        </section>
      )}
      <Container>
        <AboutFoodely />
        <FoodelyApp />
      </Container>
    </>
  );
};

export default CitySelectPage;
