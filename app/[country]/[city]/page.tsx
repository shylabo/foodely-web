import { getCategories } from '@/actions';
import Container from '@/components/layout/Container';
import CategorySelector from './components/CategorySelector';

interface MenuIndexPageProps {
  params: {
    city: string;
  };
}
const MenuIndexPage: React.FC<MenuIndexPageProps> = async ({ params: { city } }) => {
  const categories = await getCategories();
  if (!categories) return null;

  return (
    <Container>
      <CategorySelector categories={categories} />
    </Container>
  );
};

export default MenuIndexPage;
