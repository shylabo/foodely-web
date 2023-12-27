import CategoryCard from './CategoryCard';
import { CategoryData } from '@/constants';

interface CategorySelectorProps {
  categories: CategoryData[];
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories }) => {
  return (
    <div className="space-y-4">
      <h2 className="font-extrabold text-3xl">Explore by category</h2>
      <ul className="flex flex-col flex-wrap h-96 md:h-[420px] gap-x-4 gap-y-2 p-2 overflow-auto no-scrollbar">
        {categories?.map((category) => (
          <li>
            <CategoryCard key={category.value} category={category} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelector;
