import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lawmate",
  description: "This is a sample of lawmate's main page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
