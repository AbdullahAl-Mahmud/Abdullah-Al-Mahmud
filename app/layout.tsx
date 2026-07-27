import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdullah-al-mahmud.vercel.app"),
  title: {
    default: "Abdullah Al Mahmud | AI Research, Engineering & Leadership",
    template: "%s | Abdullah Al Mahmud",
  },
  description:
    "Portfolio of Abdullah Al Mahmud, an ICE undergraduate working across AI research, software engineering, communication, and community leadership in Bangladesh.",
  keywords: [
    "Abdullah Al Mahmud",
    "Information and Communication Engineering",
    "AI researcher Bangladesh",
    "OpenCLIP biomedical waste classification",
    "PUST",
    "software engineering portfolio",
  ],
  authors: [{ name: "Abdullah Al Mahmud" }],
  creator: "Abdullah Al Mahmud",
  openGraph: {
    title: "Abdullah Al Mahmud — Project Ascend",
    description: "Research with purpose. Build with impact.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/abdullah-portrait.jpg", width: 1280, height: 960, alt: "Abdullah Al Mahmud" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Al Mahmud — Project Ascend",
    description: "Research with purpose. Build with impact.",
    images: ["/images/abdullah-portrait.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050711" },
    { media: "(prefers-color-scheme: light)", color: "#f7f8fc" },
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
