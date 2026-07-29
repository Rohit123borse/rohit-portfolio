import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/common/Navbar";
import { PageTransition } from "@/components/common/PageTransition";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rohit-borse.vercel.app";

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
  authors: [{ name: "Rohit Borse", url: siteUrl }],
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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rohit Borse portfolio preview" }],
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
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
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
      <body className="min-h-full bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_32%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,0.92))] text-zinc-950 transition-colors duration-300 dark:text-zinc-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-sky-700"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-transparent text-zinc-900 transition-colors duration-300 dark:text-zinc-100">
            <ScrollProgress />
            <Navbar />
            <main id="main-content" tabIndex={-1}>
              <PageTransition>{children}</PageTransition>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
