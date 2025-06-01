import type { Metadata } from "next";
import { Geist, Geist_Mono, Crete_Round, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const creteRound = Crete_Round({
  variable: "--font-crete-round",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ready - AI-Powered Moving Assistant",
  description: "Transform your relocation experience with AI-driven recommendations and automated task management",
  icons: {
    icon: '/favicon.svg',
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
        className={`${geistSans.variable} ${geistMono.variable} ${creteRound.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
