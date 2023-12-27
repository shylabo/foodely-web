import Container from '@/components/layout/Container';

interface MenuIndexPageProps {
  params: {
    city: string;
  };
}
const MenuIndexPage: React.FC<MenuIndexPageProps> = ({ params: { city } }) => {
  return <Container>{city}</Container>;
};

export default MenuIndexPage;
