import type { Metadata } from "next";
import { Geist, Geist_Mono, Crete_Round, Montserrat } from "next/font/google";
import "./globals.css";
import LayoutNavbar from "./components/LayoutNavbar";
import Footer from "./components/Footer";
import { SideNavProvider } from "./components/SideNavContext";

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
        className={`${geistSans.variable} ${geistMono.variable} ${creteRound.variable} ${montserrat.variable} antialiased min-h-screen flex flex-col`}
      >
        <SideNavProvider>
          <LayoutNavbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </SideNavProvider>
      </body>
    </html>
  );
}
