
import "./globals.css";

import { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import { Epilogue } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import CookieConsent from "@/components/CookieConsent";

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "AffiSurge – Affiliate Growth Engine",
  description: "Boost your affiliate campaigns with smart automation and data-driven strategies.",
  metadataBase: new URL("https://affisurge.com"),
  openGraph: {
    title: "AffiSurge – Affiliate Growth Engine",
    description: "Boost your affiliate campaigns with smart automation and data-driven strategies.",
    url: "https://affisurge.com",
    siteName: "AffiSurge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AffiSurge"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={epilogue.className}>
      <body className="bg-lightBg text-graphite">
        <MantineProvider defaultColorScheme="light">
          <main>
            <Topbar />
            <Header />
            {children}
            <Footer />
            <CookieConsent/>
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}
