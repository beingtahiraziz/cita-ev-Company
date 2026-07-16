"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Home,
  Building2,
  Hotel,
  ShoppingBag,
  Plane,
  Fuel,
  Car,
  GraduationCap,
  Cross,
  Trophy,
  Landmark,
  Truck,
  ParkingCircle,
} from "lucide-react";
import styles from "./page.module.css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const industries = [
  { icon: <Home size={30} />, title: "Homes & Villas", text: "Fast, safe and future-ready home EV charging." },
  { icon: <Building2 size={30} />, title: "Gated Communities", text: "Efficient, smart shared charging for residents." },
  { icon: <Building2 size={30} />, title: "Office Buildings", text: "Support employee mobility and future-proof your workplace." },
  { icon: <ParkingCircle size={30} />, title: "Parking Garages", text: "Convenient on-site charging for every visitor." },
  { icon: <Hotel size={30} />, title: "Hotels & Resorts", text: "Improve guest experience with reliable EV charging." },
  { icon: <ShoppingBag size={30} />, title: "Shopping Malls", text: "Enhance the shopping experience with charging facilities." },
  { icon: <Plane size={30} />, title: "Airports", text: "Convenient charging for travellers and airport fleets." },
  { icon: <Fuel size={30} />, title: "Petrol Pumps", text: "Attract modern drivers by adding EV charging." },
  { icon: <Car size={30} />, title: "Car Rentals", text: "Dependable charging for electric rental fleets." },
  { icon: <GraduationCap size={30} />, title: "Schools & Colleges", text: "Greener commuting across campuses." },
  { icon: <Cross size={30} />, title: "Hospitals", text: "Always-available charging for staff and visitors." },
  { icon: <Trophy size={30} />, title: "Sports Stadiums", text: "High-capacity charging for large-scale venues." },
  { icon: <Landmark size={30} />, title: "Government Buildings", text: "Cleaner commuting for public employees and visitors." },
  { icon: <Truck size={30} />, title: "Fleets & Depots", text: "High-performance systems to accelerate fleet electrification." },
];

export default function IndustriesPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <span className={styles.eyebrow}>Industries</span>
            <h1 className={styles.heroTitle}>EV Charging for Every Sector</h1>
            <p className={styles.heroSubtitle}>
              From homes and workplaces to fleets and public infrastructure,
              CITA EV delivers tailored charging solutions across Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <section className={styles.gridSection}>
        <div className={styles.gridContainer}>
          <motion.div className={styles.grid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {industries.map((ind, i) => (
              <motion.div key={i} className={styles.card} variants={fadeUp}>
                <div className={styles.iconWrap}>{ind.icon}</div>
                <h3 className={styles.cardTitle}>{ind.title}</h3>
                <p className={styles.cardText}>{ind.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <motion.div className={styles.ctaCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className={styles.ctaTitle}>Not sure which solution fits your site?</h2>
          <p className={styles.ctaText}>Our team designs charging setups for any property or fleet in Pakistan.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>Request a Consultation</Link>
            <Link href="/products" className={styles.ctaSecondary}>Explore Chargers</Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
