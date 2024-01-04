import { getMenuItemsByRestaurantId, getRestaurantById } from '@/actions';
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

  const menuItems = await getMenuItemsByRestaurantId(restaurant.id, q);

  return <Client restaurant={restaurant} menuItems={menuItems} />;
};

export default RestaurantPage;
