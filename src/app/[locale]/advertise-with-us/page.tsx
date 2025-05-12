import type { Metadata } from "next";

import { AdvertiseHero } from "./components/AdvertiseHero/AdvertiseHero";
import { CampaignModels } from "./components/CampaignModels/CampaignModels";
import { ClickslyAdvantage } from "./components/ClickslyAdvantage/ClickslyAdvantage";
import { Experience } from "./components/Experience/Experience";
import { FaqSection } from "./components/FaqSection/FaqSection";
import { LetsDiscuss } from "./components/LetsDiscuss/LetsDiscuss";
import { OurProcess } from "./components/OurProcess/OurProcess";
import { ToolsFeatures } from "./components/ToolsFeatures/ToolsFeatures";
import { WhyAdvertice } from "./components/WhyAdvertice/WhyAdvertice";

export const metadata: Metadata = {
  title: "Advertise With The Clicksly – Maximize Your Brand’s Reach",
  description:
    "Partner with The Clicksly to elevate your brand through high-converting affiliate marketing campaigns. Reach your target audience with precision and drive measurable results for your business.",
  openGraph: {
    title: "Advertise With The Clicksly – Maximize Your Brand’s Reach",
    description:
      "Partner with The Clicksly to elevate your brand through high-converting affiliate marketing campaigns. Reach your target audience with precision and drive measurable results for your business.",
    images: "https://theclicksly.com/images/meta.png",
  },
};

export default function AdvertiseWithUs() {
  return (
    <>
      <AdvertiseHero />
      <Experience />
      <ToolsFeatures />
      <OurProcess />
      <WhyAdvertice />
      <CampaignModels />
      <ClickslyAdvantage />
      <FaqSection />
      <LetsDiscuss />
    </>
  );
}
