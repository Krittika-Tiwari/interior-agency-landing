import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { SITE_NAME } from "@/lib/config";
import "./globals.css";

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = `${SITE_NAME} | Client acquisition for interior designers`;
const description =
  "We run Meta and Google ads, build the enquiry funnel and set up the CRM for interior design studios, so homeowners with a real budget and timeline get booked in for a consultation.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
