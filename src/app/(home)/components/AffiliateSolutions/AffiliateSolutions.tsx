"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/components/button/Button";
import { SectionSubtitle } from "@/shared/ui/components/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/components/section-title/SectionTitle";

import styles from "./AffiliateSolutions.module.scss";

export const AffiliateSolutions = () => {
  const solutions = [
    {
      title: "Enhance Visibility",
      description: "Be seen by the right audience at the right time.",
      icon: "/images/home/affiliate-solutions/icon1.svg",
    },
    {
      title: "Maximize ROI",
      description: "Achieve higher returns with optimized ad spend.",
      icon: "/images/home/affiliate-solutions/icon2.svg",
    },
    {
      title: "Drive Quality Conversions",
      description: "Convert traffic into loyal customers with ease.",
      icon: "/images/home/affiliate-solutions/icon3.svg",
    },
    {
      title: "Sustainable Long-Term Growth",
      description: "Build scalable strategies that evolve with your business.",
      icon: "/images/home/affiliate-solutions/icon4.svg",
    },
  ];

  return (
    <section className={styles.affiliateSolutions}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>
              Supercharge Your Business with Tailored Affiliate Solutions
            </SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              Is your affiliate marketing strategy not delivering the expected
              results? The Clicksly offers customized solutions to boost your
              online presence, optimize your marketing investments, and drive
              more conversions. Our team creates measurable strategies that
              deliver sustained results focused on your business goals.
            </SectionSubtitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button url="/" type="link" color="black">
              Let’s Take Your Business to New Heights
            </Button>
          </motion.div>
        </div>
        <div className={styles.solutionsBlock}>
          {solutions.map((solution, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.solutionsBlockItem}
              key={index}
            >
              <div className={styles.solutionsBlockItemTop}>
                <Image src={solution.icon} alt="icon" width={48} height={48} />
                <h3>{solution.title}</h3>
              </div>
              <p>{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
