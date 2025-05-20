import type { Metadata } from 'next';

import { JoinUs } from './components/JoinUs/JoinUs';
//import { OurTeam } from "./components/OurTeam/OurTeam";
import { OurValues } from './components/OurValues/OurValues';
import { SuccessStories } from './components/SuccessStories/SuccessStories';
import { WhoWeAreHero } from './components/WhoWeAreHero/WhoWeAreHero';

export const metadata: Metadata = {
  title:
    'About Us – Discover The Clicksly’s Mission and ValuesAbout Us – Discover The Clicksly’s Mission and Values',
  description:
    'Learn more about The Clicksly, our mission, vision, values, and the expert team driving success in affiliate marketing. We help brands and publishers thrive through personalized, results-driven strategies.',
  openGraph: {
    title:
      'About Us – Discover The Clicksly’s Mission and ValuesAbout Us – Discover The Clicksly’s Mission and Values',
    description:
      'Learn more about The Clicksly, our mission, vision, values, and the expert team driving success in affiliate marketing. We help brands and publishers thrive through personalized, results-driven strategies.',
    images: 'https://theclicksly.com/images/meta.png',
  },
};

export default function WhoWeAre() {
  return (
    <>
      <WhoWeAreHero />
      <OurValues />
      {/* <OurTeam /> */}
      <SuccessStories />
      <JoinUs />
    </>
  );
}
