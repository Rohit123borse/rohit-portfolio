import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { Navbar } from "@/components/common/Navbar";
import { PageTransition } from "@/components/common/PageTransition";
import { ScrollProgress } from "@/components/common/ScrollProgress";

import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rohit-borse.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rohit Borse | Flutter Developer",
    template: "%s | Rohit Borse",
  },

  description:
    "Rohit Borse is a Flutter Developer crafting polished mobile experiences with Flutter, Firebase, REST APIs, and thoughtful UI design.",

  keywords: [
    "flutter developer",
    "mobile developer",
    "portfolio",
    "dart",
    "firebase",
    "react",
    "next.js",
    "typescript",
  ],

  authors: [
    {
      name: "Rohit Borse",
      url: siteUrl,
    },
  ],

  creator: "Rohit Borse",

  metadataBase: new URL(siteUrl),

  openGraph: {
    title: "Rohit Borse | Flutter Developer",
    description:
      "Explore a modern portfolio showcasing Flutter app development, mobile product engineering, and polished user experiences.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rohit Borse Portfolio",

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rohit Borse portfolio preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rohit Borse | Flutter Developer",
    description:
      "Explore a modern portfolio showcasing Flutter app development, mobile product engineering, and polished user experiences.",
    creator: "@rohitborse",
    images: ["/opengraph-image"],
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,

  themeColor: "#050912",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#050912] text-white antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <ScrollProgress />

          <Navbar />

          <PageTransition>
            <main>{children}</main>
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}