import type { Metadata } from "next";

import { GetStarted } from "./components/GetStarted/GetStarted";
import { OurPublisher } from "./components/OurPublisher/OurPublisher";
import { PartnerHero } from "./components/PartnerHero/PartnerHero";
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
      <GetStarted />
    </>
  );
}
