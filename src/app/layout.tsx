"use client"
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/Header";

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <header>
          <Header />
        </header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
