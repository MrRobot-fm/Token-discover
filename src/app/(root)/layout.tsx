import type { Metadata } from "next";
import TanstackQUeryProvider from "@/utils/providers/tanstack-query-provider";
import { Navbar } from "@/components/molecules/nav/Navbar/Navbar";
import { Footer } from "@/components/organism/Footer/Footer";
import { workSans } from "@/public/fonts/fonts";
import "../globals.css";

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
    <html lang="en" className={workSans.variable}>
      <body>
        <TanstackQUeryProvider>
          <Navbar />
          {children}
          <Footer />
        </TanstackQUeryProvider>
      </body>
    </html>
  );
}
