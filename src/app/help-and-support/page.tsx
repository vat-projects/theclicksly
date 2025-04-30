import type { Metadata } from "next";

import { FaqSection } from "./components/FaqSection/FaqSection";
import { HelpHero } from "./components/HelpHero/HelpHero";
import { NeedAssistance } from "./components/NeedAssistance/NeedAssistance";
import { advertisersFAQ, generalFAQ, publishersFAQ } from "./lib/faq";

export const metadata: Metadata = {
  title: "Help & Support – The Clicksly’s Customer Assistance",
  description:
    "Get the help you need with our comprehensive support. Find answers to frequently asked questions, contact us for assistance, or explore resources to optimize your affiliate campaigns.",
  openGraph: {
    title: "Help & Support – The Clicksly’s Customer Assistance",
    description:
      "Get the help you need with our comprehensive support. Find answers to frequently asked questions, contact us for assistance, or explore resources to optimize your affiliate campaigns.",
    images: "https://theclicksly.com/images/meta.png",
  },
};

export default function HelpAndSupport() {
  return (
    <>
      <HelpHero />
      <FaqSection
        theme="dark"
        questions={advertisersFAQ}
        title="For Advertisers"
      />
      <FaqSection
        theme="white"
        questions={publishersFAQ}
        title="For Publishers"
      />
      <FaqSection
        theme="white"
        questions={generalFAQ}
        title="General"
      />
      <NeedAssistance />
    </>
  );
}
