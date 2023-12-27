import { Category } from '@/types';

export interface CategoryData {
  value: string;
  label: Category;
  image: string;
}

export const categories: CategoryData[] = [
  {
    value: 'african',
    label: 'African',
    image: 'https://plus.unsplash.com/premium_photo-1695297515151-b2af3a60008d',
  },
  {
    value: 'asian',
    label: 'Asian',
    image: 'https://images.unsplash.com/photo-1622643944007-450264a5f9a9',
  },
  {
    value: 'american',
    label: 'American',
    image: 'https://plus.unsplash.com/premium_photo-1672242676665-39db88975682',
  },
  {
    value: 'british',
    label: 'British',
    image: 'https://images.unsplash.com/photo-1583815950467-e7b26a5b56b3',
  },
  {
    value: 'cajun',
    label: 'Cajun',
    image: 'https://images.unsplash.com/photo-1445979323117-80453f573b71',
  },
  {
    value: 'caribbean',
    label: 'Caribbean',
    image:
      'https://images.unsplash.com/photo-1575950674322-3a1977724f2e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'chinese',
    label: 'Chinese',
    image:
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'french',
    label: 'French',
    image:
      'https://images.unsplash.com/photo-1477747219299-60f95c811fef?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'german',
    label: 'German',
    image:
      'https://plus.unsplash.com/premium_photo-1661313627982-615bb6576cc5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'greek',
    label: 'Greek',
    image:
      'https://plus.unsplash.com/premium_photo-1670263780110-29dd7a136a51?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'indian',
    label: 'Indian',
    image:
      'https://images.unsplash.com/photo-1625398407796-82650a8c135f?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'irish',
    label: 'Irish',
    image:
      'https://images.unsplash.com/photo-1513271224036-f526ad664968?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'italian',
    label: 'Italian',
    image:
      'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'japanese',
    label: 'Japanese',
    image:
      'https://plus.unsplash.com/premium_photo-1679862071390-5b6bffa48a2a?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'korean',
    label: 'Korean',
    image:
      'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'mediterranean',
    label: 'Mediterranean',
    image:
      'https://images.unsplash.com/photo-1554998171-89445e31c52b?q=80&w=2739&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'mexican',
    label: 'Mexican',
    image:
      'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'middle_eastern',
    label: 'Middle Eastern',
    image:
      'https://images.unsplash.com/photo-1520252729650-ddced2015543?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'nordic',
    label: 'Nordic',
    image:
      'https://images.unsplash.com/photo-1657299156537-f4bcdced5392?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'southern',
    label: 'Southern',
    image:
      'https://images.unsplash.com/photo-1605926637412-b0cd5a3e3543?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'spanish',
    label: 'Spanish',
    image:
      'https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'thai',
    label: 'Thai',
    image:
      'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'vietnamese',
    label: 'Vietnamese',
    image:
      'https://images.unsplash.com/photo-1597345637412-9fd611e758f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
] as const;
