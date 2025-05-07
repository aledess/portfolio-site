import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "@context/ThemeProvider";
import ScrollProgress from "./components/ui/ScrollProgress";
import Analytics from "./components/system/analytics";
import { GA_ID } from "@config";
import "@/styles/main.scss";

const dmSans = Manrope({
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider>
          <div className="page-bg">
            <ScrollProgress />
            <Analytics gaId={GA_ID} />

            <div className="site-wrapper">
              {children}
              <footer className="site-footer">
                <p>© {new Date().getFullYear()} Alessandro Dessì</p>
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
