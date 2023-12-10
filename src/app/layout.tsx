import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qventus Assignment ~ Marcos Aurélio",
  description: "Qventus Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="qventus-logo.png" />

      <body className={inter.className}>
        <main className="flex justify-center">{children}</main>
      </body>
    </html>
  );
}
