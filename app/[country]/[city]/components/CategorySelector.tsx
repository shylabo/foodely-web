import { Category } from '@/types';
import CategoryCard from './CategoryCard';

interface CategorySelectorProps {
  categories: Category[];
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories }) => {
  return (
    <section className="space-y-4">
      <h2 className="font-extrabold text-3xl">Explore by category</h2>
      <ul className="flex flex-col flex-wrap h-96 md:h-[420px] gap-x-4 gap-y-2 p-2 overflow-auto no-scrollbar">
        {categories?.map((category) => (
          <li>
            <CategoryCard key={category.slug} category={category} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategorySelector;
