import type { Metadata } from "next";

import { ContactInformation } from "./components/ContactInformation/ContactInformation";
import { FormSection } from "./components/FormSection/FormSection";
import { GetHero } from "./components/GetHero/GetHero";
import { SocialMedia } from "./components/SocialMedia/SocialMedia";

export const metadata: Metadata = {
  title: "Get in Touch – Contact The Clicksly for More Information",
  description:
    "Have questions or need assistance? Contact The Clicksly team through our contact form, email, or social media. We’re here to provide the support you need to succeed with affiliate marketing.",
  openGraph: {
    title: "Get in Touch – Contact The Clicksly for More Information",
    description:
      "Have questions or need assistance? Contact The Clicksly team through our contact form, email, or social media. We’re here to provide the support you need to succeed with affiliate marketing.",
    //images: "",
  },
};

export default function GetInTouch() {
  return (
    <>
      <GetHero />
      <ContactInformation />
      <SocialMedia />
      <FormSection />
    </>
  );
}
