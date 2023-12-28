import { Intolerance } from '@/types';

export interface IntoleranceData {
  value: string;
  label: Intolerance;
}

export const categories: IntoleranceData[] = [
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
  {
    value: 'grain',
    label: 'Grain',
  },
  {
    value: 'peanut',
    label: 'Peanut',
  },
  {
    value: 'seafood',
    label: 'Seafood',
  },
  {
    value: 'sesame',
    label: 'Sesame',
  },
  {
    value: 'shellfish',
    label: 'Shellfish',
  },
  {
    value: 'soy',
    label: 'Soy',
  },
  {
    value: 'sulfite',
    label: 'Sulfite',
  },
  {
    value: 'tree-nut',
    label: 'Tree Nut',
  },
  {
    value: 'wheat',
    label: 'Wheat',
  },
] as const;
