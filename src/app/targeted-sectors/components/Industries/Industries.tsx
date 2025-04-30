"use client";
import { useRef, useState } from "react";
import Image from "next/image";

import { FaqArrow } from "@/shared/ui/icons/faqArrow/faqArrow";
import Button from "@/shared/ui/kit/button/Button";

import styles from "./Industries.module.scss";


export const Industries = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const industries = [
    {
      title: "Finance",
      description:
        "Empower your financial services with high-quality traffic and trusted affiliate partnerships. Whether you’re promoting banking solutions, investment products, or personal finance services, we drive targeted campaigns that build trust and generate conversions.",
    },
    {
      title: "Entertainment",
      description:
        "Captivate global audiences with campaigns tailored to the fast-paced entertainment industry. From movie releases to music promotions, we create engaging affiliate marketing strategies that connect with fans and boost visibility.",
    },
    {
      title: "Education",
      description:
        "Reach the right learners with precision-targeted campaigns for online courses, certifications, and educational content. Our strategies help you engage students, increase sign-ups, and drive long-term learning success.",
    },
    {
      title: "Health & Wellness",
      description:
        "Promote health solutions and wellness products with compliance-driven campaigns that resonate with audiences. Whether you’re in fitness, mental health, or medical products, we craft campaigns that inspire trust and encourage healthy living.",
    },
    {
      title: "Real Estate",
      description:
        "Attract quality leads in the real estate market with hyper-targeted campaigns for buyers, renters, and investors. Our strategies are designed to drive high-intent traffic and connect with individuals actively seeking property investments.",
    },
    {
      title: "Technology",
      description:
        "Empower your tech solutions with data-driven affiliate campaigns. Whether you’re marketing software, gadgets, or IT services, we help you scale your technology-driven campaigns across an audience eager for innovation and progress.",
    },
    {
      title: "Travel",
      description:
        "Boost travel bookings, experiences, and brand awareness with visually stunning and audience-targeted campaigns. From booking services to adventure experiences, we create campaigns that inspire travel and drive action.",
    },
  ];

  return (
    <section className={`${styles.industries}`}>
      <div className="_container">
        <h2>Industries We Work With</h2>
        <div className={styles.industriesBody}>
          <div className={styles.col1}>
            <div className={styles.faqList}>
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`${styles.faqItem} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className={styles.faqHeader}>
                    <h3>{industry.title}</h3>
                    <div className={styles.arrow}>
                      <FaqArrow />
                    </div>
                  </div>
                  <div
                    className={styles.faqContent}
                    style={{
                      height:
                        activeIndex === index
                          ? contentRef.current?.scrollHeight
                          : "0px",
                    }}
                  >
                    <p>{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.col2}>
            <div className={styles.details}>
              <h2>Selective Markets</h2>
              <div>
                <p>
                  We offer specialized solutions for unique or niche industries
                  that may require tailored approaches. Whether your industry is
                  unconventional or regulated, we ensure compliance and deliver
                  targeted results that drive success.
                </p>
              </div>
            </div>
            <div className={styles.details}>
              <h2>Not Seeing Your Industry?</h2>
              <div>
                <p>
                  We thrive on challenges. If you haven’t found your industry
                  listed above, don’t worry. We provide customized affiliate
                  marketing solutions for virtually any sector. Let’s discuss
                  how we can collaborate and elevate your project.
                </p>
                <p>Contact us today, and let’s explore the possibilities!</p>
                <Button url="/registration-form" type="link" color="green">
                  Reach Out to Us Today
                </Button>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="/images/targeted-sectors/industryBack.png"
                alt="Industries"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
