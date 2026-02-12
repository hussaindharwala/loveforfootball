import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// We use .. to go up one level from 'app' to 'components'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Arsenal Analyst",
  description: "Data-driven insights for Arsenal fans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black text-white antialiased min-h-screen flex flex-col"}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
