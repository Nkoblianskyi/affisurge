
import "./globals.css";

import { MantineProvider } from "@mantine/core";
import { Epilogue } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import CookieConsent from "@/components/CookieConsent";

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "600", "700"] });


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
