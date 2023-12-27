import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20 w-full px-10 border-b">
      <Link href={'/'}>
        <Image src={'/image/foodely-logo.png'} alt={'Foodely logo'} width={120} height={40} />
      </Link>
      <nav className="flex items-center space-x-2">
        <Button variant="ghost" className="font-semibold">
          Login
        </Button>
        <Button variant="outline-primary" className="font-semibold">
          Find a Restaurant
        </Button>
      </nav>
    </header>
  );
};

export default Header;
