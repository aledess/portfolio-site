import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "@/styles/main.scss";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // usa solo quelli che ti servono
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
    <html lang="it" data-theme="dark" className={dmSans.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body>
        <div className="page__glow" />
        {children}
      </body>
    </html>
  );
}
