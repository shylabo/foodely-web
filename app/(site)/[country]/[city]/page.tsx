import { getCategories, getRestaurants } from '@/actions';
import Container from '@/components/layout/Container';
import CategorySelector from './components/CategorySelector';
import RestaurantCard from './components/RestaurantCard';
import { Separator } from '@/components/ui/separator';

interface MenuIndexPageProps {
  params: {
    city: string;
  };
}
const MenuIndexPage: React.FC<MenuIndexPageProps> = async ({ params: { city } }) => {
  const [categories, restaurants] = await Promise.all([getCategories(), getRestaurants()]);
  if (!categories) return null;
  if (!restaurants) return null;

  return (
    <Container className="space-y-4">
      <div className="h-12" />
      <CategorySelector categories={categories} />
      <Separator />
      {/* Restaurant List */}
      <section className="space-y-4">
        <h2 className="font-extrabold text-3xl">Offers near you</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
};

export default MenuIndexPage;
