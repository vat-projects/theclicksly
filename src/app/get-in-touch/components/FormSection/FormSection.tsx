"use client";
import { motion } from "framer-motion";

import { ContactForm } from "@/features/contact-form/ui/ContactForm";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./FormSection.module.scss";

export const FormSection = () => {
  return (
    <section className={styles.formSection}>
      <div className="_container">
        <div className={styles.formSectionInner}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            We’d Love to Hear from You!
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p>
              Got a question, comment, or request? Please fill out the form
              below, and one of our team members will get back to you as soon as
              possible. Whether you need assistance with a campaign, have
              inquiries about our services, or want to explore partnership
              opportunities, we’re here to help.
            </p>
            <p>
              We value your time and aim to respond quickly, providing you with
              the answers and support you need to move forward. Fill in the
              details, and we’ll ensure your message reaches the right team
              member for a timely and personalized response.
            </p>
          </motion.div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
