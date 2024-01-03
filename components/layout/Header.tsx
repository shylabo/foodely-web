'use client';

import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useContext } from 'react';

import { Button } from '../ui/button';
import { AuthContext } from '@/providers/AuthProvider';
import { signOut } from '@/lib/api/auth';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { loading, isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const router = useRouter();

  const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const res = await signOut();

      if (res.data.success === true) {
        Cookies.remove('_access_token');
        Cookies.remove('_client');
        Cookies.remove('_uid');

        setIsSignedIn(false);
        router.push('/signin');
      } else {
        console.log('Failed in sign out');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const AuthButtons = () => {
    if (!loading) {
      if (isSignedIn) {
        return (
          <Button variant="ghost" onClick={handleSignOut}>
            Sign out
          </Button>
        );
      } else {
        return (
          <>
            <Button variant="ghost" className="font-semibold" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button variant="outline-primary" className="font-semibold" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </>
        );
      }
    } else {
      return <></>;
    }
  };

  return (
    <header className="flex items-center justify-between h-20 w-full px-10 border-b">
      <Link href={'/'}>
        <Image src={'/image/foodely-logo.png'} alt={'Foodely logo'} width={120} height={40} />
      </Link>
      <nav className="flex items-center space-x-2">
        <AuthButtons />
      </nav>
    </header>
  );
};

export default Header;
