"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";

import styles from "./SectorsHero.module.scss";

export const SectorsHero = () => {
  return (
    <section className={styles.sectorsHero}>
      <div className="_container">
        <div className={styles.sectorsHeroTop}>
          <div className={styles.sectorsHeroTopLeft}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Targeted Sectors
            </motion.h1>
          </div>
        </div>
        <div className={styles.sectorsHeroBottom}>
          <div className={styles.sectorsHeroBottomLeft}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.sectorsHeroBottomLeftItem}
            >
              <Image
                src="/images/targeted-sectors/heroIcon1.svg"
                alt="Smart Campaigns"
                width={48}
                height={48}
              />
              <p>Finance</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.sectorsHeroBottomLeftItem}
            >
              <Image
                src="/images/targeted-sectors/heroIcon2.svg"
                alt="Efficient Ad Placements"
                width={48}
                height={48}
              />
              <p>Travel</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.sectorsHeroBottomLeftItem}
            >
              <Image
                src="/images/targeted-sectors/heroIcon3.svg"
                alt="Sustainable Growth"
                width={48}
                height={48}
              />
              <p>Education</p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.sectorsHeroBottomRight}
          >
            <h3>Driving Success Across Multiple Industries</h3>
            <Button url="/registration-form" type="link" color="green">
              Reach Out to Us Today
            </Button>
            <p>
              At The Clicksly, we specialize in creating custom affiliate
              marketing campaigns for various industries. No matter your sector,
              we have the expertise and tools to help you connect with your
              audience and achieve measurable success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
