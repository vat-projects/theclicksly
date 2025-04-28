import { AdvertiseHero } from "./components/AdvertiseHero/AdvertiseHero";
import { Experience } from "./components/Experience/Experience";
import { LetsDiscuss } from "./components/LetsDiscuss/LetsDiscuss";
import { OurProcess } from "./components/OurProcess/OurProcess";
import { ToolsFeatures } from "./components/ToolsFeatures/ToolsFeatures";
import { WhyAdvertice } from "./components/WhyAdvertice/WhyAdvertice";

export default function AdvertiseWithUs() {
  return (
    <>
      <AdvertiseHero />
      <Experience />
      <ToolsFeatures />
      <OurProcess />
      <WhyAdvertice />
      <LetsDiscuss />
    </>
  );
}
