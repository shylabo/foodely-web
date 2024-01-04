'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  MdAddCircleOutline,
  MdClear,
  MdLocationOn,
  MdOutlineRemoveCircleOutline,
  MdOutlineReplay,
  MdOutlineRestaurant,
  MdOutlineSchedule,
  MdOutlineSearch,
} from 'react-icons/md';

import Container from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import MenuItemCard from './components/MenuItemCard';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import DateSelector from './components/DateSelector';
import TimeSelector from './components/TimeSelector';
import { getFormatter } from '@/lib/utils';
import { Restaurant } from '@/types/restaurant';
import { MenuItem } from '@/types/menu-item';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import SearchInput from '@/app/(site)/components/SearchInput';
import { usePathname } from 'next/navigation';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

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

interface ClientProps {
  restaurant: Restaurant;
  menuItems: MenuItem[];
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

const Client: React.FC<ClientProps> = ({ restaurant, menuItems }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const pathname = usePathname();

  const formatter = getFormatter();
  const formattedMinAmount = formatter.format(restaurant.min_order_amount);

  const handleAddToCart = (addingItem: CartItem) => {
    const hasItemInCart = cart.find((item) => item.menuItem.id === addingItem.menuItem.id);
    if (hasItemInCart) {
      setCart((prevCart) =>
        prevCart.map((prevItem) =>
          prevItem.menuItem.id === addingItem.menuItem.id
            ? { ...prevItem, quantity: prevItem.quantity + addingItem.quantity }
            : prevItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, addingItem]);
    }
  };

  const handleRemoveFromCart = (itemToRemove: CartItem) => {
    setCart((prevCart) => prevCart.filter((item) => item.menuItem.id !== itemToRemove.menuItem.id));
  };

  const handleIncrementItem = (item: CartItem) => {
    setCart((prevCart) =>
      prevCart.map((prevItem) =>
        prevItem.menuItem.id === item.menuItem.id ? { ...prevItem, quantity: prevItem.quantity + 1 } : prevItem
      )
    );
  };

  const handleDecrementItem = (item: CartItem) => {
    if (item.quantity === 1) {
      handleRemoveFromCart(item);
    }
    setCart((prevCart) =>
      prevCart.map((prevItem) =>
        prevItem.menuItem.id === item.menuItem.id ? { ...prevItem, quantity: prevItem.quantity - 1 } : prevItem
      )
    );
  };

  const handleClearCart = () => {
    const confirmed = window.confirm('Do you really clear cart?');
    if (confirmed) {
      setCart([]);
    }
  };

  const getTotalAmount = () => {
    return cart.reduce((acc, curr) => {
      return acc + curr.menuItem.price * curr.quantity;
    }, 0);
  };
  const totalAmount = getTotalAmount();
  const formattedTotalAmount = formatter.format(totalAmount);
  const canCheckout = totalAmount > 0;

  const getTotalQuantity = () => {
    return cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
  };
  const totalQuantity = getTotalQuantity();

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
          <Badge variant="secondary" className="pointer-events-none">
            Min order: {formattedMinAmount}
          </Badge>
        </div>
      </div>

      {/* Sticky Bar  */}
      <div className="h-20 w-full bg-secondary sticky top-0 z-10 border-b">
        <div className="container flex items-center justify-between h-full">
          <div className="w-1/3">
            <SearchInput
              destination={pathname}
              icon={MdOutlineSearch}
              placeholder={`Search menu in ${restaurant.name}`}
            />
          </div>
          <div className="flex items-end gap-x-4">
            <div>
              <p className="flex items-center gap-x-1 font-semibold pl-1">Delivery schedule</p>
              <div className="flex items-center gap-x-2">
                <DateSelector />
                <TimeSelector />
              </div>
            </div>

            {/* Cart */}
            <Sheet>
              <SheetTrigger asChild>
                <Button className="font-semibold h-12">
                  View order
                  <span className={`ml-2 ${!(totalAmount > 0) && 'hidden'}`}>{formattedTotalAmount}</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col">
                <SheetHeader>
                  <SheetTitle>Your order</SheetTitle>
                </SheetHeader>
                <ul className="p-2 flex-1">
                  {cart.length > 0 &&
                    cart.map((cartItem) => (
                      <li key={cartItem.menuItem.id} className="flex items-center gap-x-2 p-1">
                        <div className="w-20">
                          <AspectRatio ratio={16 / 9}>
                            <Image
                              src={cartItem.menuItem.eye_catch_image}
                              alt={'item eye catch image'}
                              fill
                              className="object-fit rounded-sm"
                            />
                          </AspectRatio>
                        </div>
                        <div className="flex-1 space-y-1">
                          <p>{cartItem.menuItem.name}</p>
                          <p className="text-primary">{formatter.format(cartItem.menuItem.price)}</p>
                        </div>
                        <button type="button" onClick={() => handleDecrementItem(cartItem)}>
                          <MdOutlineRemoveCircleOutline size={20} className="text-primary hover:text-primary/70" />
                        </button>
                        <div>{cartItem.quantity}</div>
                        <button type="button" onClick={() => handleIncrementItem(cartItem)}>
                          <MdAddCircleOutline size={20} className="text-primary hover:text-primary/70" />
                        </button>
                        <button type="button" onClick={() => handleRemoveFromCart(cartItem)}>
                          <MdClear size={20} className="text-primary hover:text-primary/70" />
                        </button>
                      </li>
                    ))}
                </ul>

                {/* Footer */}
                <div className="space-y-2">
                  {/* Checkout Dialog */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button type="submit" className="w-full flex justify-between" disabled={!canCheckout}>
                        <div className="flex items-center gap-x-2">
                          <div className="flex items-center justify-center bg-white rounded-full text-primary w-6 h-6">
                            <div>{totalQuantity}</div>
                          </div>
                          <div>Go to checkout</div>
                        </div>
                        <div>{formattedTotalAmount}</div>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md p-0 border-none">
                      <div className="p-4">
                        <DialogHeader>
                          <div className="space-y-2">
                            <DialogTitle className="text-2xl">Checkout</DialogTitle>
                            <DialogDescription>
                              <p className="flex items-center gap-x-1">
                                <MdOutlineRestaurant />
                                {restaurant.name}
                              </p>
                              <p className="flex items-center gap-x-1">
                                <MdLocationOn />
                                {restaurant.address}
                              </p>
                            </DialogDescription>
                            <div className="flex items-center gap-x-1"></div>
                          </div>
                        </DialogHeader>
                        <ul className="p-2 flex-1">
                          {cart.length > 0 &&
                            cart.map((cartItem) => (
                              <li key={cartItem.menuItem.id} className="flex items-center gap-x-2 p-1">
                                <div className="w-20">
                                  <AspectRatio ratio={16 / 9}>
                                    <Image
                                      src={cartItem.menuItem.eye_catch_image}
                                      alt={'item eye catch image'}
                                      fill
                                      className="object-fit rounded-sm"
                                    />
                                  </AspectRatio>
                                </div>
                                <div className="flex-1 space-y-1">
                                  <p>{cartItem.menuItem.name}</p>
                                  <p className="text-primary">{formatter.format(cartItem.menuItem.price)}</p>
                                </div>
                                <div>{cartItem.quantity}</div>
                              </li>
                            ))}
                        </ul>
                        <Separator className="my-2" />
                        <div className="flex flex-col items-end">
                          <div className="flex items-center justify-between w-1/2">
                            <p>Total</p>
                            <p className="text-primary font-bold">{formattedTotalAmount}</p>
                          </div>
                        </div>
                        <DialogFooter className="pt-4">
                          <DialogClose>
                            <Button variant="ghost" type="button" className="w-full">
                              Cancel
                            </Button>
                          </DialogClose>
                          <DialogClose>
                            <Button type="submit" className="w-full" disabled={!canCheckout}>
                              Place Order
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Clear Cart */}
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleClearCart}
                    className="flex items-center gap-x-1 w-full font-semibold text-primary hover:text-primary/70"
                    disabled={!canCheckout}
                  >
                    <MdOutlineReplay size={20} />
                    Clear Cart
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <Container>
        <div className="h-10" />

        <h3 className="font-extrabold text-3xl">Menu</h3>
        <Separator className="mb-6" />

        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {menuItems.length > 0 &&
            menuItems.map((item) => (
              <li key={item.name}>
                <MenuItemCard menuItem={item} handleAddToCart={handleAddToCart} />
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
                <li key={day} className="flex justify-between gap-x-6">
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

export default Client;
