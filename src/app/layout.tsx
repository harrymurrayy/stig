import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "The Stig Initiative — Peer-led suicide prevention & grief support, Banbridge",
  description:
    "The Stig Initiative is a peer-led suicide prevention and grief support charity in Banbridge, Northern Ireland. You don't have to face this alone.",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: { url: "/favicon/apple-touch-icon.png" },
    other: [
      { rel: "android-chrome-192x192", url: "/favicon/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/favicon/android-chrome-512x512.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans text-[17px] leading-[1.6] text-ink bg-paper antialiased">{children}</body>
    </html>
  );
}
