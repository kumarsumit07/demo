import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RealAura – Find Your Dream Home | Rent, Sell & Upcoming Projects",
  description:
    "Discover premium properties to rent or buy across Bengaluru and India. Browse top apartments, villas, and upcoming projects with RealAura.",
  keywords: "real estate, rent property, buy property, apartments, Bengaluru, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-white antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
