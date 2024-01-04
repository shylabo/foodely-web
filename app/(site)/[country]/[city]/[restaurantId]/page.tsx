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

  // TODO: Filter by requesting server
  const menuItems = q
    ? restaurant.menu_items.filter((item) => item.name.toLowerCase().includes(q.toLowerCase()))
    : restaurant.menu_items;

  return <Client restaurant={restaurant} menuItems={menuItems} />;
};

export default RestaurantPage;
