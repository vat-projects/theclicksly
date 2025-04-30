"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./NeedAssistance.module.scss";

export const NeedAssistance = () => {
  return (
    <section className={styles.needAssistance}>
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.titleBlock}
        >
          <SectionTitle>
            Ready to Take Your Affiliate Marketing to the Next Level?
          </SectionTitle>
          <SectionSubtitle>
            Join our network of successful partners and start driving
            high-quality traffic with campaigns designed to deliver results.
            Whether you’re looking to boost conversions, enhance brand
            visibility, or generate sustainable growth, The Clicksly is your
            trusted partner for success.
          </SectionSubtitle>
          <Button type="link" color="black" url="/registration-form">
            Join Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
