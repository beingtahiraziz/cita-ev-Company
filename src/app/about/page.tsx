"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Leaf,
  Cpu,
  Users,
  HeartHandshake,
  Target,
  Eye,
  Award,
  ShieldCheck,
  Globe,
  Server,
} from "lucide-react";
import styles from "./page.module.css";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const principles = [
  {
    icon: <Leaf size={32} />,
    title: "Sustainability & Environmental Responsibility",
    text: "We prioritise sustainability at every level, from design and manufacturing to supply chain and end-of-life disposal.",
  },
  {
    icon: <Cpu size={32} />,
    title: "Innovation & Technological Leadership",
    text: "CITA EV chargers are SASO, ADQCC and DEWA-tested and approved, UKCA and CE certified, ensuring compliance with key safety and regulatory standards.",
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Customer-Centricity & User Experience",
    text: "Dependable performance backed by a 3-year extendable warranty on most hardware products and responsive local support.",
  },
  {
    icon: <Users size={32} />,
    title: "Collaboration & Inclusivity",
    text: "We build lasting partnerships with installers, contractors and businesses to grow Pakistan's EV charging ecosystem together.",
  },
];

const certifications = [
  { icon: <Award size={28} />, label: "CES Innovation Award Honoree" },
  { icon: <ShieldCheck size={28} />, label: "UKCA Certified" },
  { icon: <ShieldCheck size={28} />, label: "CE Certified (Conformité Européenne)" },
  { icon: <Server size={28} />, label: "OCPP 1.6 JSON Integration" },
  { icon: <ShieldCheck size={28} />, label: "ADQCC Approved (UAE)" },
  { icon: <ShieldCheck size={28} />, label: "SASO Certified (Saudi Arabia)" },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* 1. HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
          >
            <span className={styles.eyebrow}>About CITA EV</span>
            <h1 className={styles.heroTitle}>Powering a Greener Future</h1>
            <p className={styles.heroSubtitle}>
              Driving the electrification of mobility across Pakistan through
              innovative, intelligent EV charging solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THIS IS CITA EV */}
      <section className={styles.introSection}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <h2 className={styles.sectionTitle}>This is CITA EV</h2>
          <p className={styles.sectionSubtitle}>
            CITA EV is dedicated to delivering cutting-edge, world-class EV
            charging solutions that are driving the future of sustainable
            mobility. With a focus on innovation and smart technology, our range
            of e-mobility products is designed to redefine the EV charging
            experience. As the official distributor in Pakistan, operated by
            BLUEOCEAN TECH IMPEX PRIVATE LIMITED, we are more than just an EV
            charger provider &mdash; we are your trusted partner in the
            transition to cleaner, greener transportation.
          </p>
        </motion.div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className={styles.mvSection}>
        <motion.div
          className={styles.mvGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className={styles.mvCard} variants={fadeUpVariant}>
            <div className={styles.iconWrapper}>
              <Target size={32} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To fuel the process of green transition by deploying
              well-researched expertise on EV charging through smart and
              holistic EV infrastructure.
            </p>
          </motion.div>

          <motion.div className={styles.mvCard} variants={fadeUpVariant}>
            <div className={styles.iconWrapper}>
              <Eye size={32} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To achieve sustainability through long-term success, protecting
              the environment for current and future generations.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. GUIDING PRINCIPLES */}
      <section className={styles.principlesSection}>
        <div className={styles.principlesContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            style={{ textAlign: "center" }}
          >
            <h2 className={styles.sectionTitle}>Our Guiding Principles</h2>
            <p className={styles.sectionSubtitle} style={{ maxWidth: "720px", margin: "0 auto" }}>
              The values that shape how we design, deliver and support EV
              charging in Pakistan.
            </p>
          </motion.div>

          <motion.div
            className={styles.principlesGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {principles.map((p, i) => (
              <motion.div key={i} className={styles.principleCard} variants={fadeUpVariant}>
                <div className={styles.iconWrapper}>{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS */}
      <section className={styles.certSection}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          style={{ textAlign: "center" }}
        >
          <h2 className={styles.sectionTitle}>Trusted & Certified</h2>
          <p className={styles.sectionSubtitle} style={{ maxWidth: "720px", margin: "0 auto" }}>
            CITA EV products meet international safety and quality standards
            across the UK, Europe and the MENA region.
          </p>

          <div className={styles.certGrid}>
            {certifications.map((c, i) => (
              <div key={i} className={styles.certTag}>
                <span className={styles.certIcon}>{c.icon}</span>
                {c.label}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. GLOBAL PRESENCE */}
      <section className={styles.globalSection}>
        <div className={styles.globalContainer}>
          <motion.div
            className={styles.globalContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <div className={styles.iconWrapper}>
              <Globe size={32} />
            </div>
            <h2 className={styles.sectionTitle}>Leading the Charge Worldwide</h2>
            <p className={styles.sectionSubtitle}>
              CITA EV actively drives progress in the electric vehicle industry
              through participation in major global events such as the EVIS
              Event in Abu Dhabi and the EV Auto Show. By unveiling new
              innovations and connecting with industry leaders and global
              stakeholders, CITA EV stays at the forefront of EV technology
              &mdash; and brings that same standard to Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className={styles.ctaSection}>
        <motion.div
          className={styles.ctaCard}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <h2 className={styles.ctaTitle}>EV Charging Made Simple with CITA EV</h2>
          <p className={styles.ctaText}>
            Explore our range of intelligent AC and DC chargers or talk to our
            team about your project.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/products" className={styles.ctaPrimary}>
              Explore Our Chargers
            </Link>
            <Link href="/contact" className={styles.ctaSecondary}>
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
