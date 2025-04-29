import { ContactInformation } from "./components/ContactInformation/ContactInformation";
import { FormSection } from "./components/FormSection/FormSection";
import { GetHero } from "./components/GetHero/GetHero";
import { SocialMedia } from "./components/SocialMedia/SocialMedia";
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
