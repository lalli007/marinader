import type { Metadata } from "next";
import { Fraunces, Public_Sans, Piazzolla, Newsreader, Inter, Syne } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-public-sans",
});

const piazzolla = Piazzolla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-piazzolla",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-inter-google",
});

const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi-Light.otf", weight: "300" },
    { path: "../public/fonts/Satoshi-Regular.otf", weight: "400" },
    { path: "../public/fonts/Satoshi-Medium.otf", weight: "500" },
    { path: "../public/fonts/Satoshi-Bold.otf", weight: "700" },
  ],
  variable: "--font-satoshi",
});

const marineSikona = localFont({
  src: "../public/fonts/MarineSikona-Regular.otf",
  variable: "--font-marine-sikona",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Marinader for fisk og kjøtt — Ni år med erfaring",
  description:
    "Marinader for fisk, kjøtt og sjømat fra Fiskehuset på Kolbotn — ni års erfaring med marinadekonsentrater for dagligvare, restaurant og catering.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Marinadehuset",
  description:
    "Marinader for fisk, kjøtt og sjømat, utviklet av Fiskehuset på Kolbotn. Ni års erfaring med marinadekonsentrater for dagligvare, restaurant og catering.",
  email: "hei@marinader.no",
  telephone: "+47 123 45 678",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Matverkstedet 12",
    postalCode: "0150",
    addressLocality: "Oslo",
    addressCountry: "NO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${fraunces.variable} ${publicSans.variable} ${satoshi.variable} ${piazzolla.variable} ${newsreader.variable} ${marineSikona.variable} ${inter.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
