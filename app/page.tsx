import Container from '@/components/layout/Container';
import Hero from './components/Hero';
import SelectCountry from './components/SelectCountry';
import AboutFoodely from './components/AboutFoodely';
import FoodelyApp from './components/FoodelyApp';

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <SelectCountry />
        <AboutFoodely />
        <FoodelyApp />
      </Container>
    </>
  );
}
