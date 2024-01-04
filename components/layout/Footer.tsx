import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between mt-auto py-16 px-8 border-t">
      <Link href={''}>
        <Image src={'/image/foodely-logo.png'} alt={'Foodely logo'} width={120} height={40} />
      </Link>
      <div className="flex items-center justify-center gap-x-10">
        <p>© {new Date().getFullYear()} All Rights Reserved. Shuya Sonoda</p>
        <a href="https://www.shuya-life.com" target="_blank" className="text-primary underline">
          Personal website
        </a>
      </div>
    </footer>
  );
};

export default Footer;
