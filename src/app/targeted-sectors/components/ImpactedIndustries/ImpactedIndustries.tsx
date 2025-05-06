"use client";

import Image from "next/image";
import { useTranslate } from "@tolgee/react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./ImpactedIndustries.module.scss";

export const ImpactedIndustries = () => {
  const { t } = useTranslate();

  const industries = [
    {
      title: t("targetedSectors.impactedIndustries.items.item1.title"),
      description: t(
        "targetedSectors.impactedIndustries.items.item1.description"
      ),
      icon: "/images/targeted-sectors/industry1.svg",
    },
    {
      title: t("targetedSectors.impactedIndustries.items.item2.title"),
      description: t(
        "targetedSectors.impactedIndustries.items.item2.description"
      ),
      icon: "/images/targeted-sectors/industry2.svg",
    },
    {
      title: t("targetedSectors.impactedIndustries.items.item3.title"),
      description: t(
        "targetedSectors.impactedIndustries.items.item3.description"
      ),
      icon: "/images/targeted-sectors/industry3.svg",
    },
    {
      title: t("targetedSectors.impactedIndustries.items.item4.title"),
      description: t(
        "targetedSectors.impactedIndustries.items.item4.description"
      ),
      icon: "/images/targeted-sectors/industry4.svg",
    },
    {
      title: t("targetedSectors.impactedIndustries.items.item5.title"),
      description: t(
        "targetedSectors.impactedIndustries.items.item5.description"
      ),
      icon: "/images/targeted-sectors/industry5.svg",
    },
    {
      title: t("targetedSectors.impactedIndustries.items.item6.title"),
      description: t(
        "targetedSectors.impactedIndustries.items.item6.description"
      ),
      icon: "/images/targeted-sectors/industry6.svg",
    },
  ];

  return (
    <div className={styles.impactedIndustries}>
      <div className={"_container"}>
        <h2>{t("targetedSectors.impactedIndustries.title")}</h2>
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
