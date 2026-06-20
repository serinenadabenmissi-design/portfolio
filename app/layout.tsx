import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: {
    default: "Serine Benmissi — Software Engineer",
    template: "%s | Serine Benmissi",
  },
  description:
    "Software Engineering Student specializing in AI, Web Development, and IoT. Building impactful digital solutions.",
  keywords: [
    "Serine Benmissi",
    "Software Engineer",
    "Flutter Developer",
    "Web Developer",
    "AI",
    "IoT",
    "Portfolio",
  ],
  authors: [{ name: "Serine Benmissi" }],
  creator: "Serine Benmissi",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Serine Benmissi Portfolio",
    title: "Serine Benmissi — Software Engineer",
    description:
      "Software Engineering Student specializing in AI, Web Development, and IoT.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serine Benmissi — Software Engineer",
    description:
      "Software Engineering Student specializing in AI, Web Development, and IoT.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
