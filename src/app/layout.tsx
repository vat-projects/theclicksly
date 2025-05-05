import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";

import { Footer } from "@/shared/ui/components/footer/Footer";
import { Header } from "@/shared/ui/components/header/Header";
import Preloader from "@/shared/ui/components/preloader/Preloader";

import "@/shared/lib/styles/null.scss";
import "@/shared/lib/styles/base.scss";
import { TolgeeNextProvider } from "@/tolgee/client";
import { getLanguage } from "@/tolgee/language";
import { getTolgee } from "@/tolgee/server";

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
  title: "The Clicksly – Your Trusted Affiliate Marketing Partner for Growth",
  description:
    "At The Clicksly, we deliver high-converting affiliate marketing solutions designed to drive traffic, maximize ROI, and grow your business. Join our network and see measurable results today.",
  openGraph: {
    title: "The Clicksly – Your Trusted Affiliate Marketing Partner for Growth",
    description:
      "At The Clicksly, we deliver high-converting affiliate marketing solutions designed to drive traffic, maximize ROI, and grow your business. Join our network and see measurable results today.",
    images: "https://theclicksly.com/images/meta.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLanguage();
  const tolgee = await getTolgee();
  // serializable data that are passed to client components
  const staticData = await tolgee.loadRequired().catch((error) => {
    console.error('Failed to load translations:', error);
    return {};
  });
  
  return (
    <html lang={locale}>
      <GoogleAnalytics gaId="G-WEQDP0H4G9" />
      <body className={helveticaNowDisplay.variable}>
        <Preloader />
        <TolgeeNextProvider language={locale} staticData={staticData}>
          <Header />
          <main>{children}</main>
          <Footer />
        </TolgeeNextProvider>
      </body>
    </html>
  );
}
