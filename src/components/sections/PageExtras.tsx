"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";
import styles from "./PageExtras.module.css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export interface FeatureItem {
  title: string;
  text: string;
}

interface PageExtrasProps {
  trustItems: string[];
  whyTitle: string;
  whySubtitle?: string;
  features: FeatureItem[];
  altBackground?: boolean;
}

export function PageExtras({ trustItems, whyTitle, whySubtitle, features, altBackground }: PageExtrasProps) {
  return (
    <>
      {/* SECTION A: Trust band */}
      <section className={styles.trustSection}>
        <motion.div
          className={styles.trustBand}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {trustItems.map((item, i) => (
            <motion.div key={i} className={styles.trustItem} variants={fadeUp}>
              <span className={styles.trustIcon}><Check size={20} /></span>
              <span className={styles.trustLabel}>{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION B: Why / feature cards */}
      <section className={`${styles.whySection} ${altBackground ? styles.whyAlt : ""}`}>
        <div className={styles.whyContainer}>
          <motion.div
            className={styles.whyHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className={styles.whyTitle}>{whyTitle}</h2>
            {whySubtitle && <p className={styles.whySubtitle}>{whySubtitle}</p>}
          </motion.div>

          <motion.div
            className={styles.whyGrid}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {features.map((f, i) => (
              <motion.div key={i} className={styles.whyCard} variants={fadeUp}>
                <div className={styles.whyNum}>{String(i + 1).padStart(2, "0")}</div>
                <h3 className={styles.whyCardTitle}>{f.title}</h3>
                <p className={styles.whyCardText}>{f.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
