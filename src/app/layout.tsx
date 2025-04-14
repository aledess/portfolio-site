import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import '@/styles/main.scss'


const inter = Inter({ subsets: ['latin'], variable: '--font-primary' })

export const metadata: Metadata = {
  title: "Alessandro Dessì",
  description: "Frontend Web Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" data-theme="dark" className={inter.variable}> {/* Cambia in "dark" per testare */}
      <body>{children}</body>
    </html>
  )
}