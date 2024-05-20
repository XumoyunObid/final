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
        <div className="flex flex-col justify-between h-screen">
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer/>
        </footer>
        </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
