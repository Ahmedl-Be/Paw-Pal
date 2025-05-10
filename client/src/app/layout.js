import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import './globals.css';
import '../../lib/fontawesome.js';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
