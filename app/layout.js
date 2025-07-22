import MainHeader from "@/components/main-header/Main-header";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-[100vh]">
        <MainHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
