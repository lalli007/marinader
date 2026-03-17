import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi-Light.otf", weight: "300" },
    { path: "../public/fonts/Satoshi-Regular.otf", weight: "400" },
    { path: "../public/fonts/Satoshi-Medium.otf", weight: "500" },
    { path: "../public/fonts/Satoshi-Bold.otf", weight: "700" },
  ],
  variable: "--font-satoshi",
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
      <body className={`${satoshi.variable} antialiased bg-stone-950 text-stone-100`}>
        {children}
      </body>
    </html>
  );
}
