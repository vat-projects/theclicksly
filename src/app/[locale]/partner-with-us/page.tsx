import type { Metadata } from "next";

import { FaqSection } from "./components/FaqSection/FaqSection";
import { GetStarted } from "./components/GetStarted/GetStarted";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import { HowWeHelped } from "./components/HowWeHelped/HowWeHelped";
import { OurPublisher } from "./components/OurPublisher/OurPublisher";
import { PartnerHero } from "./components/PartnerHero/PartnerHero";
import { TheClickslyAdvantage } from "./components/TheClickslyAdvantage/TheClickslyAdvantage";
import { TrafficSources } from "./components/TrafficSources/TrafficSources";
import { WhyChoose } from "./components/WhyChoose/WhyChoose";


export const metadata: Metadata = {
  title: "Partner With The Clicksly – Unlock New Revenue Streams",
  description:
    "Join The Clicksly’s affiliate network and start earning with flexible partnership models. Access high-converting campaigns and optimize your marketing efforts for sustainable growth and success.",
  openGraph: {
    title: "Partner With The Clicksly – Unlock New Revenue Streams",
    description:
      "Join The Clicksly’s affiliate network and start earning with flexible partnership models. Access high-converting campaigns and optimize your marketing efforts for sustainable growth and success.",
    images: "https://theclicksly.com/images/meta.png",
  },
};

export default function PartnerWithUs() {
  return (
    <>
      <PartnerHero />
      <WhyChoose />
      <TrafficSources />
      <OurPublisher />
      <HowItWorks />
      <HowWeHelped />
      <TheClickslyAdvantage />
      <FaqSection />
      <GetStarted />
    </>
  );
}
