import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mindly - AI Psychological Testing",
  description: "Discover your true self with AI-powered psychological tests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased bg-slate-50 min-h-screen flex flex-col`}>
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-80" />
        <Header />
        <main className="flex-1 pt-24 pb-12 px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
