import { JoinUs } from "./components/JoinUs/JoinUs";
import { OurTeam } from "./components/OurTeam/OurTeam";
import { OurValues } from "./components/OurValues/OurValues";
import { SuccessStories } from "./components/SuccessStories/SuccessStories";
import { WhoWeAreHero } from "./components/WhoWeAreHero/WhoWeAreHero";

export default function WhoWeAre() {
  return (
    <>
      <WhoWeAreHero />
      <OurValues />
      <OurTeam />
      <SuccessStories />
      <JoinUs />
    </>
  );
}
