'use client';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { IconType } from 'react-icons';

interface SearchInputProps {
  destination: string;
  placeholder?: string;
  icon?: IconType;
}

const SearchInput: React.FC<SearchInputProps> = ({ destination, placeholder, icon: Icon }) => {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (keyword.trim() !== '') {
      router.push(`${destination}?q=${keyword}`);
    } else {
      router.push(`${destination}`);
    }
  };

  return (
    <form className="relative w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder={placeholder}
        className={clsx(
          'block w-full h-10',
          'py-3 pr-4',
          Icon ? 'pl-10' : 'pl-4',
          'font-medium',
          'outline-none rounded-full transition-all',
          'border border-grey-light',
          'focus:border-primary/50 focus:bg-white focus:ring-[6px] focus:ring-primary/20'
        )}
      />
      {Icon && <Icon size={20} className="absolute top-[10px] left-3" />}
    </form>
  );
};

export default SearchInput;
