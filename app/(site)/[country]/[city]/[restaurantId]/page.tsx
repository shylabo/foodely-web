import { getRestaurantById } from '@/actions';
import Client from './Client';

interface RestaurantPageProps {
  params: {
    restaurantId: string;
  };
  searchParams: { q: string };
}

const RestaurantPage: React.FC<RestaurantPageProps> = async ({ params: { restaurantId }, searchParams: { q } }) => {
  const restaurant = await getRestaurantById(restaurantId);
  if (!restaurant) return null;

  return <Client restaurant={restaurant} menuItems={restaurant.menu_items} />;
};

export default RestaurantPage;
