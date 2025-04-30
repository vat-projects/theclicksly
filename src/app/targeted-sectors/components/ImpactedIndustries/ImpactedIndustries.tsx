"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./ImpactedIndustries.module.scss";

export const ImpactedIndustries = () => {
  const industries = [
    {
      title: "Case Study: <br/>Real Estate",
      description:
        "By leveraging highly targeted campaigns for real estate clients, we helped drive a 50% increase in qualified leads within just 3 months. Our precision targeting and content strategy connected potential buyers with the right properties, optimizing conversions across multiple channels.",
      icon: "/images/targeted-sectors/industry1.svg",
    },
    {
      title: "Case Study: <br/>Finance",
      description:
        "We partnered with a leading finance brand to optimize their affiliate marketing efforts, increasing qualified lead volume by 70% and reducing marketing spend by 30%. We improved their ROI by focusing on quality traffic sources and refining their campaign messages.",
      icon: "/images/targeted-sectors/industry2.svg",
    },
    {
      title: "Case Study: <br/>Health & Wellness",
      description:
        "A health supplement company turned to us for help expanding its customer base. Through targeted content and SEO optimization, we boosted their website traffic by 60% and increased sales conversions by 45% in just six months, helping them establish a strong foothold in the competitive wellness market.",
      icon: "/images/targeted-sectors/industry3.svg",
    },
    {
      title: "Case Study: <br/>Technology",
      description:
        "We implemented a conversion optimization strategy for a SaaS provider that increased their free trial sign-ups by 80%. By targeting the right decision-makers and fine-tuning their ad placements, we successfully improved their lead generation efforts, setting them up for a steady growth trajectory.",
      icon: "/images/targeted-sectors/industry4.svg",
    },
    {
      title: "Case Study: <br/>Education",
      description:
        "An online course provider partnered with us to promote their certifications. We developed an affiliate strategy that increased course registrations by 120% within 4 months, thanks to strategic content creation, PPC optimization, and a targeted email campaign that spoke directly to their audience's learning needs.",
      icon: "/images/targeted-sectors/industry5.svg",
    },
    {
      title: "Case Study: <br/>Entertainment",
      description:
        "We worked with a digital entertainment platform to increase user engagement and subscriptions. Through tailored ad creatives and precise audience segmentation, we boosted their conversion rate by 50% and significantly expanded their subscriber base in just 2 months.",
      icon: "/images/targeted-sectors/industry6.svg",
    },
  ];

  return (
    <div className={styles.impactedIndustries}>
      <div className={"_container"}>
        <h2>Industries We&apos;ve Impacted</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          pagination={{ clickable: true }}
          className={styles.swiper}
          breakpoints={{
            992: {
              slidesPerView: 4,
              noSwiping: false,
              allowTouchMove: true,
            },
            300: {
              slidesPerView: 1,
              noSwiping: true,
              allowTouchMove: false,
            },
          }}
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.top}>
                  <h3
                    className={styles.title}
                    dangerouslySetInnerHTML={{ __html: industry.title }}
                  />
                  <Image
                    src={industry.icon}
                    alt={industry.title.replace(/<br\/>/g, " ")}
                    width={48}
                    height={48}
                  />
                </div>

                <p className={styles.description}>{industry.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
