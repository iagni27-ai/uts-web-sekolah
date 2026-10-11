import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "SMA Kesatuan Bogor",
    template: "%s | SMA Kesatuan Bogor",
  },
  description: "Website profil SMAS Kesatuan Bogor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${plusJakarta.variable} ${playfair.variable} flex min-h-dvh flex-col`}
      >
        <Link
          href="#konten"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Lewati ke konten utama
        </Link>
        <Navbar />
        <main id="konten" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
