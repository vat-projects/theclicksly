import type { Metadata } from "next";

import { FAQContent } from "./components/FAQContent/FAQContent";
import { HelpHero } from "./components/HelpHero/HelpHero";
import { NeedAssistance } from "./components/NeedAssistance/NeedAssistance";

export const metadata: Metadata = {
  title: "Help & Support – The Clicksly's Customer Assistance",
  description:
    "Get the help you need with our comprehensive support. Find answers to frequently asked questions, contact us for assistance, or explore resources to optimize your affiliate campaigns.",
  openGraph: {
    title: "Help & Support – The Clicksly's Customer Assistance",
    description:
      "Get the help you need with our comprehensive support. Find answers to frequently asked questions, contact us for assistance, or explore resources to optimize your affiliate campaigns.",
    images: "https://theclicksly.com/images/meta.png",
  },
};

export default function HelpAndSupport() {
  return (
    <>
      <HelpHero />
      <FAQContent />
      <NeedAssistance />
    </>
  );
}
