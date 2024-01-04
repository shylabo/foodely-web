'use client';

import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { getFormatter } from '@/lib/utils';
import { MenuItem } from '@/types/menu-item';

import { Button } from '@/components/ui/button';
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
import { Separator } from '@/components/ui/separator';
import { MdAddCircleOutline, MdOutlineRemoveCircleOutline } from 'react-icons/md';
import { useState } from 'react';
import { CartItem } from '../Client';

interface MenuItemCardProps {
  menuItem: MenuItem;
  handleAddToCart: (cartItem: CartItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ menuItem, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const formatter = getFormatter();

  const formattedAmount = formatter.format(menuItem.price);

  const total = menuItem.price * quantity;
  const formattedTotal = formatter.format(total);

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (!orderAddable) return;
    setQuantity(quantity - 1);
  };

  const handleAddToOrder = () => {
    if (!orderAddable) return;
    const cartItem = { menuItem, quantity };
    handleAddToCart(cartItem);
    // Reset
    setQuantity(1);
  };

  const orderAddable = quantity > 0;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="w-full max-w-xl min-h-48 transition hover:scale-105 cursor-pointer">
          <div className="relative">
            <div className="relative h-56 w-full">
              <Image
                src={menuItem.eye_catch_image ?? '/image/no-image.png'}
                alt="category image"
                sizes="100%"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-black/40 h-max w-max p-1">
              <p className="text-white font-medium">{formattedAmount}</p>
            </div>
          </div>
          <CardContent className="p-2 space-y-2">
            <div>
              <CardTitle className="text-base">{menuItem.name}</CardTitle>
              <CardDescription className="text-base">{menuItem.description}</CardDescription>
            </div>
            <div className="flex items-center gap-x-1">
              {menuItem.allergies.map((allergy) => (
                <Badge key={allergy.slug} variant="secondary">
                  {allergy.label}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 border-none">
        <div className="relative h-56 w-full">
          <Image
            src={menuItem.eye_catch_image}
            alt="category image"
            sizes="100%"
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <DialogHeader>
            <div className="space-y-2">
              <DialogTitle className="text-2xl">{menuItem.name}</DialogTitle>
              <p>{formattedAmount}</p>
              <DialogDescription>{menuItem.description}</DialogDescription>
              <div className="flex items-center gap-x-1">
                {menuItem.allergies.map((allergy) => (
                  <Badge key={allergy.slug} variant="secondary">
                    {allergy.label}
                  </Badge>
                ))}
              </div>
            </div>
          </DialogHeader>
          <Separator className="my-6" />
          <DialogFooter>
            <div className="flex items-center justify-between w-full gap-x-4">
              <div className="flex items-center gap-x-6 bg-primary/10 p-2 rounded-md">
                <button
                  type="button"
                  onClick={handleDecrementQuantity}
                  className={`${!orderAddable && 'cursor-not-allowed'}`}
                  disabled={!orderAddable}
                >
                  <MdOutlineRemoveCircleOutline size={20} className="text-primary hover:text-primary/70" />
                </button>
                <p className="text-primary font-semibold">{quantity}</p>
                <button type="button" onClick={handleIncrementQuantity}>
                  <MdAddCircleOutline size={20} className="text-primary hover:text-primary/70" />
                </button>
              </div>

              <DialogClose disabled={!orderAddable}>
                <Button type="submit" className="flex-1" disabled={!orderAddable} onClick={handleAddToOrder}>
                  <p className="font-semibold">Add to order</p>
                  <span className="ml-2 font-semibold">{formattedTotal}</span>
                </Button>
              </DialogClose>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuItemCard;
