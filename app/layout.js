import "./globals.css";

import { Nunito } from "next/font/google";

import MainHeader from "@/components/main-header/Main-header";
import PageBanner from "@/components/main-header/Page-banner";
import Footer from "@/components/footer/Footer";
import CookiesModal from "@/components/legal/Cookies-modal";

import NotificationWrapper from "@/components/ui/Notification-wrapper";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const metadata = {
  title: "Relayable",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="relative min-h-[100vh] pb-[200px]">
        <div
          className="fixed h-full w-full top-0 right-0 translate-x-full z-40"
          id="mobile-menu"
        />
        <PageBanner />
        <MainHeader />
        <main className="relative mx-auto max-w-[1200px] overflow-x-hidden">
          <NotificationWrapper>{children}</NotificationWrapper>
        </main>
        <CookiesModal />
        <Footer />
      </body>
    </html>
  );
}
