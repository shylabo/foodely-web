import Client from './Client';
import { getRestaurantBySlug } from '@/actions/getRestaurantBySlug';
import { getMenuItemsByRestaurantId } from '@/actions/getMenuItemsByRestaurantId.ts';

interface RestaurantPageProps {
  params: {
    restaurantSlug: string;
  };
}

const RestaurantPage: React.FC<RestaurantPageProps> = async ({ params: { restaurantSlug } }) => {
  const restaurant = await getRestaurantBySlug(restaurantSlug);
  if (!restaurant) return null;

  const menuItems = await getMenuItemsByRestaurantId(restaurant.id);

  return <Client restaurant={restaurant} menuItems={menuItems} />;
};

export default RestaurantPage;
