import type { Metadata } from "next";

import { ClientTestimonials } from "./components/ClientTestimonials/ClientTestimonials";
import { Industries } from "./components/Industries/Industries";
import { NeedAssistance } from "./components/NeedAssistance/NeedAssistance";
import { SectorsHero } from "./components/SectorsHero/SectorsHero";
import { WhyChooseUs } from "./components/WhyChooseUs/WhyChooseUs";

export const metadata: Metadata = {
  title: "Industries We Serve – Affiliate Marketing for Every Sector",
  description:
    "The Clicksly provides affiliate marketing solutions across various industries, including finance, healthcare, tech, travel, and more. Explore how we can help your sector grow with tailored, data-driven campaigns.",
  openGraph: {
    title: "Industries We Serve – Affiliate Marketing for Every Sector",
    description:
      "The Clicksly provides affiliate marketing solutions across various industries, including finance, healthcare, tech, travel, and more. Explore how we can help your sector grow with tailored, data-driven campaigns.",
    images: "https://theclicksly.com/images/meta.png",
  },
};

export default function TargetedSectors() {
  return (
    <>
      <SectorsHero />
      <Industries />
      <WhyChooseUs />
      <ClientTestimonials />
      <NeedAssistance />
    </>
  );
}
