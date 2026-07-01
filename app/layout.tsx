import type { Metadata } from "next";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundAnimations from "@/components/BackgroundAnimations";
import { CONFERENCE } from "@/lib/conference";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: CONFERENCE.shortName,
    template: `%s | ${CONFERENCE.shortName}`,
  },
  description: `${CONFERENCE.sessionName}. Join us on ${CONFERENCE.dates}. ${CONFERENCE.hashtag}`,
  keywords: [
    "MUN",
    "Vice Model United Nations",
    CONFERENCE.shortName,
    CONFERENCE.brandName,
    "Model United Nations",
    "Turkey MUN 2026",
    "Izmir MUN",
  ],
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [
      {
        url: "/logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: `${CONFERENCE.shortName} | ${CONFERENCE.fullName}`,
    description: `${CONFERENCE.dates} | ${CONFERENCE.sessionName}.`,
    url: CONFERENCE.siteUrl,
    siteName: CONFERENCE.shortName,
    images: [
      {
        url: `${CONFERENCE.siteUrl}/icon.png`,
        width: 1200,
        height: 630,
        alt: `${CONFERENCE.shortName} - ${CONFERENCE.fullName}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${CONFERENCE.shortName} | ${CONFERENCE.fullName}`,
    description: `${CONFERENCE.dates} | ${CONFERENCE.hashtag}`,
    images: [`${CONFERENCE.siteUrl}/icon.png`],
  },
  metadataBase: new URL(CONFERENCE.siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-screen scroll-smooth">
      <body
        className={`overflow-x-hidden max-w-screen ${montserrat.variable} ${montserrat.className} antialiased`}
        style={{ scrollbarWidth: "none" }}
      >
        <BackgroundAnimations />

        <div className="min-h-screen relative z-10">
          <Navbar />
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
