import { MenuItem } from '@/types/menu-item';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    restaurantId: 1,
    name: 'Dish 1',
    description: 'Delicious dish with special sauce',
    eye_catch_image:
      'https://plus.unsplash.com/premium_photo-1668618295237-f1d8666812c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    address: '123 Main Street',
    intolerance: [
      {
        value: 'dairy',
        label: 'Dairy',
      },
      {
        value: 'egg',
        label: 'Egg',
      },
      {
        value: 'gluten',
        label: 'Gluten',
      },
    ],
    amount: 12.99,
    menu_section: 'Main Course',
  },
  {
    id: 2,
    restaurantId: 1,
    name: 'Dish 2',
    description: 'Spicy and flavorful',
    eye_catch_image:
      'https://plus.unsplash.com/premium_photo-1668618295237-f1d8666812c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    address: '456 Oak Avenue',
    intolerance: [
      {
        value: 'dairy',
        label: 'Dairy',
      },
      {
        value: 'egg',
        label: 'Egg',
      },
      {
        value: 'gluten',
        label: 'Gluten',
      },
    ],
    amount: 15.99,
    menu_section: 'Appetizer',
  },
  {
    id: 3,
    restaurantId: 1,
    name: 'Dish 3',
    description: 'Vegetarian delight',
    eye_catch_image:
      'https://plus.unsplash.com/premium_photo-1668618295237-f1d8666812c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    address: '789 Pine Street',
    intolerance: [
      {
        value: 'dairy',
        label: 'Dairy',
      },
      {
        value: 'egg',
        label: 'Egg',
      },
      {
        value: 'gluten',
        label: 'Gluten',
      },
    ],
    amount: 9.99,
    menu_section: 'Vegetarian',
  },
  {
    id: 4,
    restaurantId: 1,
    name: 'Dish 4',
    description: 'Classic comfort food',
    eye_catch_image:
      'https://plus.unsplash.com/premium_photo-1668618295237-f1d8666812c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    address: '101 Maple Avenue',
    intolerance: [
      {
        value: 'dairy',
        label: 'Dairy',
      },
      {
        value: 'egg',
        label: 'Egg',
      },
      {
        value: 'gluten',
        label: 'Gluten',
      },
    ],
    amount: 17.99,
    menu_section: 'Comfort Food',
  },
  {
    id: 5,
    restaurantId: 1,
    name: 'Dish 5',
    description: 'Sweet treat for dessert lovers',
    eye_catch_image:
      'https://plus.unsplash.com/premium_photo-1668618295237-f1d8666812c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    address: '202 Elm Street',
    intolerance: [
      {
        value: 'dairy',
        label: 'Dairy',
      },
      {
        value: 'egg',
        label: 'Egg',
      },
      {
        value: 'gluten',
        label: 'Gluten',
      },
    ],
    amount: 8.99,
    menu_section: 'Dessert',
  },
];

export default menuItems;
