import type { Metadata } from "next";
import localFont from "next/font/local";

import { Footer } from "@/shared/ui/components/footer/Footer";
import { Header } from "@/shared/ui/components/header/Header";

import "@/shared/lib/styles/null.scss";
import "@/shared/lib/styles/base.scss";

const helveticaNowDisplay = localFont({
  src: [
    {
      path: "../shared/lib/fonts/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../shared/lib/fonts/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../shared/lib/fonts/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-now",
});

export const metadata: Metadata = {
  title: "The Clicksly",
  description: "The Clicksly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={helveticaNowDisplay.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
