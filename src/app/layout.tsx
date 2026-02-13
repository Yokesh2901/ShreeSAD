import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import { companyData } from "@/data/companyData";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${companyData.name} | ${companyData.tagline}`,
    template: `%s | ${companyData.name}`,
  },
  description: companyData.description,
  keywords: [
    "Aluminium Fabrication Chennai",
    "ACP Cladding Chennai",
    "Glass Curtain Walls",
    "Aluminium Window Installation",
    "Office Partitions Chennai",
    "Structural Glazing",
    "Shree Srinivasa Aluminium Designs",
    "Industrial Aluminium Works",
  ],
  authors: [{ name: companyData.name }],
  creator: companyData.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shreesad.com",
    title: `${companyData.name} | ${companyData.tagline}`,
    description: companyData.description,
    siteName: companyData.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyData.name} | ${companyData.tagline}`,
    description: companyData.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} antialiased font-body bg-[#0b0b0b] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
