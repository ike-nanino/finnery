import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export const metadata: Metadata = {
  title: "Finnery Nutritional Centre",
  description:
    "Finnery Nutritional Centre is a leading provider of nutritional services, offering personalized nutrition plans, expert dietary advice, and a wide range of resources to help individuals achieve their health and wellness goals.",
  keywords: [
    "nutrition",
    "Finnery Nutritional Centre",
    "diet",
    "health",
    "wellness",
    "personalized nutrition",
    "dietary advice",
    "nutritional services",
    "healthy eating",
    "wellness center",
    "Finnery Nutritional Centre",
    "nutrition plans",
    "dietitian",
    "nutritionist",
    "healthy lifestyle",
    "nutrition education",
    "wellness coaching",
    "nutritional counseling",
    "meal planning",
    "nutrition resources",
    "health improvement",
  ],
  authors: [
    { name: "Finnery Nutritional Centre", url: "https://www.finnerynutritionalcentre.com" },
  ],
  creator: "Finnery Nutritional Centre",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  metadataBase: new URL("https://www.finnerynutritionalcentre.com"),
  alternates: {
    canonical: "https://www.finnerynutritionalcentre.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-16x16.png",
      },
    ],
  },
  openGraph: {
    title: "Finnery Nutritional Centre",
    description:
      "Finnery Nutritional Centre is a leading provider of nutritional services, offering personalized nutrition plans, expert dietary advice, and a wide range of resources to help individuals achieve their health and wellness goals.",
    url: "https://www.finnerynutritionalcentre.com",
    siteName: "Morgan & Associates",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.morgannassociates.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Morgan & Associates - Global Law Firm",
      },
    ],
  },
};






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed z-50 transition-all duration-300 w-full">

        <Header />
        <Header2 />
        </div>
        {children}

        <Footer />
      </body>
    </html>
  );
}
