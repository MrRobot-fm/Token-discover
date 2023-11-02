import type { Metadata } from "next";
import { spaceMono, workSans } from "@/public/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${workSans.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}