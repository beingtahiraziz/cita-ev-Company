"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Zap, Building2, ShieldCheck, Headset } from "lucide-react";
import styles from "./page.module.css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const projects = [
  { img: "/images/project_corporate.jpg", title: "Corporate Headquarters", type: "Commercial Charging Hub", spec: "Smart 22kW AC array" },
  { img: "/images/project_condo.jpg", title: "Luxury Condominium", type: "Residential Load Balancing", spec: "Smart 7kW home chargers" },
  { img: "/images/project_highway.jpg", title: "Highway Service Area", type: "DC Fast Charging", spec: "160kW DC ECO chargers" },
  { img: "/images/car.jpg", title: "Corporate Fleet Depot", type: "Fleet Electrification", spec: "Smart 44 Gen 3 dual AC" },
  { img: "/images/ready_bg.jpg", title: "Shopping Mall", type: "Public Fast Charging", spec: "Smart DC 30kW" },
  { img: "/images/why-choose-us.jpg", title: "Hotel & Resort", type: "Destination Charging", spec: "Smart 22kW AC" },
];

const highlights = [
  { icon: <Building2 size={28} />, title: "Nationwide Installations", text: "Deployments across homes, businesses and public sites in Pakistan." },
  { icon: <Zap size={28} />, title: "AC & DC Deployments", text: "From 7kW home units to ultra-rapid DC charging hubs." },
  { icon: <ShieldCheck size={28} />, title: "Certified Hardware", text: "UKCA, CE, ADQCC and SASO certified equipment." },
  { icon: <Headset size={28} />, title: "Local Support", text: "Installation, maintenance and technical support by local partners." },
];

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <span className={styles.eyebrow}>Projects</span>
            <h1 className={styles.heroTitle}>Our Recent Installations</h1>
            <p className={styles.heroSubtitle}>
              A look at CITA EV charging deployments powering homes, businesses
              and public infrastructure across Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className={styles.gridSection}>
        <div className={styles.gridContainer}>
          <motion.div className={styles.grid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {projects.map((p, i) => (
              <motion.div key={i} className={styles.card} variants={fadeUp}>
                <div className={styles.imageWrap}>
                  <Image src={p.img} alt={p.title} fill className={styles.image} unoptimized />
                  <span className={styles.typeBadge}>{p.type}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardSpec}><Zap size={15} /> {p.spec}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className={styles.highlightSection}>
        <div className={styles.highlightContainer}>
          <motion.h2 className={styles.sectionTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Why partners choose CITA EV
          </motion.h2>
          <motion.div className={styles.highlightGrid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {highlights.map((h, i) => (
              <motion.div key={i} className={styles.highlightCard} variants={fadeUp}>
                <div className={styles.hIcon}>{h.icon}</div>
                <h3 className={styles.hTitle}>{h.title}</h3>
                <p className={styles.hText}>{h.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <motion.div className={styles.ctaCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className={styles.ctaTitle}>Planning an EV charging project?</h2>
          <p className={styles.ctaText}>Contact our team for a free consultation or custom quotation for your site.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>Start Your Project</Link>
            <Link href="/products" className={styles.ctaSecondary}>Explore Chargers</Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
