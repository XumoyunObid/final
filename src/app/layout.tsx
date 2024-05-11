"use client"
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import ReduxProvider from "@/providers/redux-provider";

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <ReduxProvider>
        <header>
          <Header />
        </header>
        {children}
        <footer>
          <Footer/>
        </footer>
        </ReduxProvider>
      </body>
    </html>
  );
}
