import { getMenuItemsByRestaurantId, getRestaurantBySlug } from '@/actions';
import Client from './Client';

interface RestaurantPageProps {
  params: {
    restaurantSlug: string;
  };
  searchParams: { q: string };
}

const RestaurantPage: React.FC<RestaurantPageProps> = async ({ params: { restaurantSlug }, searchParams: { q } }) => {
  const restaurant = await getRestaurantBySlug(restaurantSlug);
  if (!restaurant) return null;

  const menuItems = await getMenuItemsByRestaurantId(restaurant.id, q);

  return <Client restaurant={restaurant} menuItems={menuItems} />;
};

export default RestaurantPage;
