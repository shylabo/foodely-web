'use client';

import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import Cookies from 'js-cookie';

import { AuthContext } from '@/providers/AuthProvider';
import { SignUpParams } from '@/types';
import { signUp } from '@/lib/api/auth';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { Label } from '@/components/ui/label';

const SignUpPage = () => {
  const router = useRouter();

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const params: SignUpParams = {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };

    try {
      const res = await signUp(params);

      if (res.status === 200) {
        // TODO: Mail confirmation
        Cookies.set('_access_token', res.headers['access-token']);
        Cookies.set('_client', res.headers['client']);
        Cookies.set('_uid', res.headers['uid']);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);

        router.push('/');
      } else {
        setAlertMessageOpen(true);
      }
    } catch (err) {
      console.log(err);
      setAlertMessageOpen(true);
    }
  };

  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-semibold">Sign up</h1>
        <div className="flex gap-x-2">
          <p className="text-muted-foreground">Already have an account?</p>
          <Link href="/signin" className="text-primary underline">
            Sign in
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <form noValidate autoComplete="off" className="grid gap-y-5 w-[360px]">
          <div className="space-y-1">
            <Label>Name</Label>
            <Input required value={name} onChange={(event) => setName(event.target.value)} />
          </div>
          <div className="space-y-1">
            <Label>Email</Label>
            <Input required value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="space-y-1">
            <Label>Password</Label>
            <Input
              required
              type="password"
              value={password}
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label>Confirm Password</Label>
            <Input
              required
              type="password"
              value={passwordConfirmation}
              autoComplete="current-password"
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
          </div>
          <Button
            type="submit"
            disabled={!name || !email || !password || !passwordConfirmation ? true : false}
            onClick={handleSubmit}
          >
            Sign up
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignUpPage;
