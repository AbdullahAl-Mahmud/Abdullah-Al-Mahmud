import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://abdullahal-mahmud.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "A MAHMUD.LOG | Abdullah Al Mahmud",
    template: "%s | A MAHMUD.LOG",
  },
  description:
    "The merged academic, technical, and leadership portfolio of Abdullah Al Mahmud—an ICE undergraduate working across AI research, software engineering, communication, and community impact.",
  keywords: [
    "Abdullah Al Mahmud",
    "A MAHMUD.LOG",
    "Information and Communication Engineering",
    "AI researcher Bangladesh",
    "OpenCLIP biomedical waste classification",
    "PUST",
    "software engineering portfolio",
  ],
  authors: [{ name: "Abdullah Al Mahmud" }],
  creator: "Abdullah Al Mahmud",
  openGraph: {
    title: "A MAHMUD.LOG — Abdullah Al Mahmud",
    description: "Research with purpose. Build with impact.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    images: [{ url: "/images/formal-portrait.webp", width: 853, height: 1280, alt: "Abdullah Al Mahmud" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "A MAHMUD.LOG — Abdullah Al Mahmud",
    description: "Research with purpose. Build with impact.",
    images: ["/images/formal-portrait.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0e0d" },
    { media: "(prefers-color-scheme: light)", color: "#f4f0e8" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
