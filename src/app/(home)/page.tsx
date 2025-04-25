import { AdvertiseWithUs } from "./components/AdvertiseWithUs/AdvertiseWithUs";
import { AffiliateSolutions } from "./components/AffiliateSolutions/AffiliateSolutions";
import { ExecutionForResults } from "./components/ExecutionForResults/ExecutionForResults";
import { HomeHero } from "./components/HomeHero/HomeHero";
import { MarketingServices } from "./components/MarketingServices/MarketingServices";
import { PartnerWithUs } from "./components/PartnerWithUs/PartnerWithUs";
import { PersonalizedSolutions } from "./components/PersonalizedSolutions/PersonalizedSolutions";
import { WhyChooseUs } from "./components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AffiliateSolutions />
      <MarketingServices />
      <AdvertiseWithUs />
      <PartnerWithUs />
      <WhyChooseUs />
      <ExecutionForResults />
      <PersonalizedSolutions />
    </>
  );
}
