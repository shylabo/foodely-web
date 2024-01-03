'use client';

import Link from 'next/link';
import Cookies from 'js-cookie';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

import { AuthContext } from '@/providers/AuthProvider';
import { SignInParams } from '@/types';
import { signIn } from '@/lib/api/auth';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const SignInPage = () => {
  const router = useRouter();

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const params: SignInParams = {
      email: email,
      password: password,
    };

    try {
      const res = await signIn(params);

      if (res.status === 200) {
        Cookies.set('_access_token', res.headers['access-token']);
        Cookies.set('_client', res.headers['client']);
        Cookies.set('_uid', res.headers['uid']);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);

        router.push('/');

        console.log('Signed in successfully!');
      } else {
        setAlertMessageOpen(true);
      }
    } catch (err) {
      console.error(err);
      setAlertMessageOpen(true);
    }
  };

  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <div className="flex gap-x-2">
          <p className="text-muted-foreground">Don't have an account yet?</p>
          <Link href="/signup" className="text-primary underline">
            Sign up
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <form noValidate autoComplete="off" className="grid gap-y-5 w-[360px]">
          <div>
            <Label>Email</Label>
            <Input
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="foodely@example.com"
            />
          </div>
          <div className="space-y-1">
            <Label>Password</Label>
            <Input
              required
              type="password"
              value={password}
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="At least 6 characters"
            />
          </div>
          <Button type="submit" disabled={!email || !password ? true : false} onClick={handleSubmit}>
            Sign in
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignInPage;
