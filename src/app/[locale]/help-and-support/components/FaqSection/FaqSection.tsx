"use client";
import { useRef, useState } from "react";

import { FaqArrow } from "@/shared/ui/icons/faqArrow/faqArrow";

import styles from "./FaqSection.module.scss";

export const FaqSection = ({
  questions,
  title,
  theme,
}: {
  questions: { question: string; answer: string }[];
  title: string;
  theme: "dark" | "white";
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`${styles.faqSection} ${styles[theme]}`}>
      <div className="_container">
        <h2>{title}</h2>
        <div className={styles.faqList}>
          {questions.map((question, index) => (
            <div
              key={index}
              className={`${styles[theme]} ${styles.faqItem} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <div className={styles.faqHeader}>
                <h3>{question.question}</h3>
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
                <p>{question.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
