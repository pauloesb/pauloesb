import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Paulo Borba | Software Engineer",
  description: "Software Engineer with 8+ years of experience building scalable web applications. Expert in Ruby on Rails, JavaScript/TypeScript, and cloud-native architectures.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Paulo Borba | Software Engineer",
    description: "Software Engineer with 8+ years of experience building scalable web applications. Expert in Ruby on Rails, JavaScript/TypeScript, and cloud-native architectures.",
    url: "https://pauloesb.dev",
    siteName: "Paulo Borba",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Paulo Borba - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Borba | Software Engineer",
    description: "Software Engineer with 8+ years of experience building scalable web applications. Expert in Ruby on Rails, JavaScript/TypeScript, and cloud-native architectures.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${dmSans.variable} font-[family-name:var(--font-dm-sans)] antialiased paper-texture`}>
        {children}
      </body>
    </html>
  );
}
