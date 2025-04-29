import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "@/styles/main.scss";
import { ThemeProvider } from "@context/ThemeProvider"; // ✅ usa il tuo context React
import ScrollProgress from "./components/ui/ScrollProgress";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Alessandro Dessì",
  description: "Frontend Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={dmSans.variable} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="page-bg">
            <ScrollProgress /> {/* 👈 barra di progressione scroll */}
            <div className="site-wrapper">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
