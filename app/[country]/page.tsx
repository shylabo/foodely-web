import Container from '@/components/layout/Container';

interface CitySelectPageProps {
  params: {
    country: string;
  };
}

const CitySelectPage: React.FC<CitySelectPageProps> = ({ params: { country } }) => {
  return <Container>{country}</Container>;
};

export default CitySelectPage;
