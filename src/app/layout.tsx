import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";

const onest = Onest({
  subsets: ["latin"],
 // variable: true,
});

export const metadata: Metadata = {
  title: "Portfolio Daniela Salazar",
  description: "Portfolio by Daniela Salazar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${onest.className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}