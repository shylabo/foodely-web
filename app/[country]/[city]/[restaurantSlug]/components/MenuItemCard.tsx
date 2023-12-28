'use client';

import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { getFormatter } from '@/lib/utils';
import { MenuItem } from '@/types/menu-item';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { MdAddCircleOutline, MdOutlineRemoveCircleOutline } from 'react-icons/md';

interface MenuItemCardProps {
  menuItem: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ menuItem }) => {
  const formatter = getFormatter();

  const formattedAmount = formatter.format(menuItem.amount);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="w-full max-w-xl min-h-48 transition hover:scale-105 cursor-pointer">
          <div className="relative">
            <div className="relative h-56 w-full">
              <Image
                src={menuItem.eye_catch_image}
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
              {menuItem.intolerance.map((item) => (
                <Badge variant="secondary">{item.label}</Badge>
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
                {menuItem.intolerance.map((item) => (
                  <Badge variant="secondary">{item.label}</Badge>
                ))}
              </div>
            </div>
          </DialogHeader>
          <Separator className="my-6" />
          <DialogFooter>
            <div className="flex items-center justify-between w-full gap-x-4">
              <div className="flex items-center gap-x-6 bg-primary/10 p-2 rounded-md">
                <button type="button">
                  <MdOutlineRemoveCircleOutline size={20} />
                </button>
                <p>1</p>
                <button type="button">
                  <MdAddCircleOutline size={20} />
                </button>
              </div>

              <Button type="submit" className="flex-1 flex justify-between">
                <p>Add order</p>
                <span className="ml-2">$9.99</span>
              </Button>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuItemCard;
