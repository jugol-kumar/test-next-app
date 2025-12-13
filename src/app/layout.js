import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "First App",
  description: "Created By JK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <nav className="bg-black p-4">
          <ul className="flex space-x-6 text-white">
            <li>
              <Link href="/" className="hover:text-purple-600">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-600">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-600">Contact</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-purple-600">Blog</Link>
            </li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
