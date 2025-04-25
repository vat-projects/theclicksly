"use client";
import { useRef } from "react";
import Image from "next/image";
import type { MotionValue } from "framer-motion";
import { motion, useTransform } from "framer-motion";

import styles from "./PersonalizedSolutions.module.scss";

type PersonalizedCardProps = {
  title: string;
  text: string;
  backImage: string;
  range: [number, number];
  progress: MotionValue<number>;
  i: number;
  targetScale: number;
};

export const PersonalizedCard = ({
  title,
  text,
  range,
  progress,
  i,
  targetScale,
  backImage,
}: PersonalizedCardProps) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className={styles.card}
      style={{ top: `calc(5% + ${i * 40}px)` }}
    >
      <motion.div style={{ scale }}>
        <Image src={backImage} alt="back" width={100} height={100} />
        <div className={styles.number}>0{i + 1}</div>
        <h3>{title}</h3>
        <p>{text}</p>
      </motion.div>
    </div>
  );
};
