"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { getProductBySlug } from "@/data/products";
import { industries, type Industry } from "@/data/industries";
import { AnimatedHeroTitle } from "@/components/ui/AnimatedHeroTitle";
import styles from "./IndustryDetail.module.css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export function IndustryDetail({ industry }: { industry: Industry }) {
  const product = getProductBySlug(industry.recommended);
  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 3);

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section
        className={styles.hero}
        style={{ backgroundImage: `linear-gradient(90deg, rgba(5,14,29,0.92) 0%, rgba(5,14,29,0.6) 100%), url("${encodeURI(industry.image)}")` }}
      >
        <div className={styles.heroContainer}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <span className={styles.eyebrow}>Industries</span>
            <AnimatedHeroTitle text={industry.title} className={styles.heroTitle} />
            <p className={styles.heroSubtitle}>{industry.short}</p>
          </motion.div>
        </div>
      </section>

      {/* INTRO + POINTS */}
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <motion.div className={styles.introText} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className={styles.introTitle}>EV charging for {industry.title.toLowerCase()}</h2>
            <p className={styles.introDesc}>{industry.intro}</p>
            <div className={styles.ctaRow}>
              <Link href="/contact" className={styles.primaryBtn}>Request a Quote</Link>
              {product && (
                <Link href={`/products/${product.slug}`} className={styles.secondaryBtn}>
                  Recommended: {product.name}
                </Link>
              )}
            </div>
          </motion.div>
          <motion.ul className={styles.points} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {industry.points.map((p, i) => (
              <motion.li key={i} className={styles.point} variants={fadeUp}>
                <span className={styles.pointIcon}><Check size={18} /></span>
                {p}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* IMAGE BAND */}
      <section className={styles.bandSection}>
        <div className={styles.band}>
          <Image src={industry.image} alt={industry.title} fill className={styles.bandImg} unoptimized />
        </div>
      </section>

      {/* OTHER INDUSTRIES */}
      <section className={styles.othersSection}>
        <div className={styles.othersContainer}>
          <h2 className={styles.othersTitle}>Explore other sectors</h2>
          <div className={styles.othersGrid}>
            {others.map((o) => (
              <Link key={o.slug} href={`/industries/${o.slug}`} className={styles.otherCard}>
                <div className={styles.otherImgWrap}>
                  <Image src={o.image} alt={o.title} fill className={styles.otherImg} unoptimized />
                </div>
                <div className={styles.otherBody}>
                  <h3>{o.title}</h3>
                  <span className={styles.otherLink}>Learn more <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <motion.div className={styles.ctaCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className={styles.ctaTitle}>Planning EV charging for {industry.title.toLowerCase()}?</h2>
          <p className={styles.ctaText}>Our team will design the right CITA EV solution for your site.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.primaryBtn}>Contact Us</Link>
            <a href="https://wa.me/923007929616" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>WhatsApp Us</a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
