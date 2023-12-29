import { getMenuItemsByRestaurantId } from '@/actions/getMenuItemsByRestaurantId.ts';
import { getRestaurantBySlug } from '@/actions/getRestaurantBySlug';
import { getRestaurantIdBySlug } from '@/actions/getRestaurantIdBySlug';
import Container from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { getFormatter } from '@/lib/utils';
import Image from 'next/image';
import MenuItemCard from './components/MenuItemCard';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { MdLocationOn, MdOutlineSchedule } from 'react-icons/md';
import { Separator } from '@/components/ui/separator';
import DateSelector from './components/DateSelector';
import TimeSelector from './components/TimeSelector';

interface RestaurantPageProps {
  params: {
    restaurantSlug: string;
  };
}

const deliveryTimes = [
  {
    day: 'Monday',
    time: '12:00 PM–8:00 PM',
  },
  {
    day: 'Tuesday',
    time: '12:00 PM–8:00 PM',
  },
  {
    day: 'Wednesday',
    time: '12:00 PM–8:00 PM',
  },
  {
    day: 'Thursday',
    time: '12:00 PM–8:00 PM',
  },
  {
    day: 'Friday',
    time: '12:00 PM–8:00 PM',
  },
  {
    day: 'Saturday',
    time: 'CLOSED',
  },
  {
    day: 'Sunday',
    time: 'CLOSED',
  },
];

const RestaurantPage: React.FC<RestaurantPageProps> = async ({ params: { restaurantSlug } }) => {
  const restaurant = await getRestaurantBySlug(restaurantSlug);
  if (!restaurant) return null;

  const restaurantId = await getRestaurantIdBySlug(restaurantSlug);
  if (!restaurantId) return null;

  const menuItems = await getMenuItemsByRestaurantId(restaurantId);

  const formatter = getFormatter();
  const formattedMinAmount = formatter.format(restaurant.min_order_amount);
  return (
    <>
      <div className="relative">
        <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px]">
          <Image
            src={restaurant.cover_image}
            alt={'restaurant cover image'}
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 space-y-4">
          <div>
            <h2 className="text-white text-2xl md:text-6xl font-extrabold">{restaurant.name}</h2>
            <h3 className="text-white text-lg md:text-2xl">{restaurant.description}</h3>
          </div>
          <Badge variant="secondary">Min order: {formattedMinAmount}</Badge>
        </div>
      </div>

      {/* Sticky Bar  */}
      <div className="h-20 w-full bg-secondary sticky top-0 z-10 border-b">
        <div className="container flex items-center justify-between h-full">
          <div className="w-1/3">
            <p className="flex items-center gap-x-1 font-semibold pl-1">Search menu</p>
            <Input placeholder="Search menu..." className="rounded-full" disabled />
          </div>
          <div className="flex items-end gap-x-4">
            <div>
              <p className="flex items-center gap-x-1 font-semibold pl-1">Delivery schedule</p>
              <div className="flex items-center gap-x-2">
                <DateSelector />
                <TimeSelector />
              </div>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button className="font-semibold h-12">
                  View order
                  <span className="ml-2">$5,600</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" value="Pedro Duarte" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="username" value="@peduarte" className="col-span-3" />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        {/* TODO: Menu Section */}
      </div>
      {/* Main Container */}
      <Container>
        <div className="h-10" />

        <h3 className="font-extrabold text-3xl">Menu</h3>
        <Separator className="mb-6" />

        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <MenuItemCard menuItem={item} />
            </li>
          ))}
        </ul>

        <div className="h-20" />

        <section className="flex flex-col md:flex-row bg-secondary gap-8 p-8 h-full">
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-x-1">
              <MdLocationOn size={20} />
              <p>Address</p>
            </h4>
            <p>{restaurant.address}</p>
          </div>

          <div className="w-px bg-muted-foreground/10" />

          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-x-1">
              <MdOutlineSchedule size={20} />
              <p>Delivery times</p>
            </h4>
            <ul className="space-y-2">
              {deliveryTimes.map(({ day, time }) => (
                <li className="flex justify-between gap-x-6">
                  <p>{day}</p>
                  <p>{time}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Container>
    </>
  );
};

export default RestaurantPage;
