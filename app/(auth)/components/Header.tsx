import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed flex items-center h-20 w-full px-10">
      <Link href={'/'}>
        <Image src={'/image/foodely-logo.png'} alt={'Foodely logo'} width={120} height={40} />
      </Link>
    </header>
  );
};

export default Header;
