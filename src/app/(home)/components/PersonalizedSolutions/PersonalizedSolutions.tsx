"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import { PersonalizedCard } from "./PersonalizedCard";
import styles from "./PersonalizedSolutions.module.scss";

export const PersonalizedSolutions = () => {
  const items = [
    {
      title: "How can The Clicksly help me grow my business?",
      text: "Our customized affiliate marketing solutions are designed to help you grow your business, increase conversions, and expand your reach.",
      backImage: "/images/home/personalized-card/image1.svg",
    },
    {
      title: "Who can benefit from The Clicksly’s services?",
      text: "We work with businesses, entrepreneurs, and publishers looking for results-driven affiliate marketing solutions to help them scale their operations.",
      backImage: "/images/home/personalized-card/image2.svg",
    },
    {
      title: "Do you provide ongoing support and optimization?",
      text: "Yes! We continuously monitor, analyze, and optimize your campaigns to ensure long-term success. We stay ahead of trends and keep your strategies up-to-date.",
      backImage: "/images/home/personalized-card/image3.svg",
    },
    {
      title: "Can I get a personalized affiliate marketing strategy?",
      text: "Absolutely! Our strategies are custom-built based on your goals, target audience, and market conditions. We provide clear, actionable steps for your success.",
      backImage: "/images/home/personalized-card/image4.svg",
    },
  ];

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 10%", "end end"],
  });

  return (
    <section className={styles.personalizedSolutions}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>
              Unleash the Power of Personalized Marketing Solutions
            </SectionTitle>
          </motion.div>
        </div>
        <div className={styles.scrollBlock} ref={container}>
          {items.map((item, index) => {
            const targetScale = 1 - (items.length - 1 - index) * 0.05;

            return (
              <PersonalizedCard
                key={index}
                {...item}
                range={[index * 0.33, 1]}
                progress={scrollYProgress}
                i={index}
                targetScale={targetScale}
              />
            );
          })}
        </div>
        <div className={styles.buttonBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>Have Questions? Let’s Connect!</SectionSubtitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button url="/get-in-touch" type="link" color="green-white">
              Reach Out to Us Today
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
