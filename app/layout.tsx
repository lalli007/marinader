import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Marinader — Håndverk i hver dråpe",
  description:
    "Ni unike marinader laget for å løfte smaken av fisk og kjøtt til nye høyder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-stone-950 text-stone-100`}
      >
        {children}
      </body>
    </html>
  );
}
