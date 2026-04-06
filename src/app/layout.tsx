import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeInitScript } from "@/components/ThemeInitScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tashi Sherpa · Software Engineer",
    template: "%s · Tashi Sherpa",
  },
  description:
    "Software engineer at The New York Times. Go, TypeScript, Next.js, cloud infrastructure, and reliable systems.",
  openGraph: {
    title: "Tashi Sherpa · Software Engineer",
    description:
      "Software engineer at The New York Times. Go, TypeScript, Next.js, and cloud infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col text-zinc-900 dark:text-zinc-100">
        <ThemeInitScript />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}