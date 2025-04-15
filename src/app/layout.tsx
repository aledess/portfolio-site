import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import '@/styles/main.scss';
import Header from '@/app/components/layout/Header';


const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });

export const metadata: Metadata = {
  title: "Alessandro Dessì",
  description: "Frontend Web Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" data-theme="dark" className={inter.variable}>
       <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body>
      <div className="page__glow" />
        <Header />
        {children}
      </body>
    </html>
  );
}
