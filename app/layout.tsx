import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';
import { AuthProvider } from '@/providers/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Foodely',
  description: 'Office catering application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('grid grid-cols-1 min-h-screen bg-background antialiased', inter.className)}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
