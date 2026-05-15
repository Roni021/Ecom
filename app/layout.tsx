import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeWrapper from "@/components/ThemeWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DesignAssets - Premium Digital Marketplace",
  description: "High-quality templates, UI kits, and design assets for creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased theme-text dark:theme-text min-h-screen`}>
        <Script id="theme-script" strategy="beforeInteractive">
          {`(function(){
            try {
              const storedTheme = localStorage.getItem('theme');
              const useDark = storedTheme === 'dark' || (storedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
              document.documentElement.classList.toggle('dark', useDark);
            } catch (e) {
              console.warn('Theme initialization failed', e);
            }
          })();`}
        </Script>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <ThemeWrapper>
              {children}
            </ThemeWrapper>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
