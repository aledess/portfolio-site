import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import '@/styles/main.scss';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });

export const metadata: Metadata = {
  title: "Alessandro Dessì",
  description: "Frontend Web Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" data-theme="dark" className={inter.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
