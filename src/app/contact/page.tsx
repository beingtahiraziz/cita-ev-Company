"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import styles from "./page.module.css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const contactCards = [
  {
    icon: <Phone size={24} />,
    title: "Call Us",
    lines: ["0300-1002226", "0300-2929616"],
    href: "tel:+923001002226",
  },
  {
    icon: <MessageCircle size={24} />,
    title: "WhatsApp",
    lines: ["0300-1002226", "0300-2929616"],
    href: "https://wa.me/923001002226",
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    lines: ["contact@superfastevcharger.com"],
    href: "mailto:contact@superfastevcharger.com",
  },
  {
    icon: <MapPin size={24} />,
    title: "Head Office",
    lines: ["Office No 810, Level 8, HI Q Towers,", "Jail Road, Lahore, Punjab, Pakistan"],
  },
];

export default function ContactPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <span className={styles.eyebrow}>Contact Us</span>
            <h1 className={styles.heroTitle}>Let&apos;s Power Your EV Charging</h1>
            <p className={styles.heroSubtitle}>
              Tell us about your site and vehicles and our team will recommend
              the right CITA EV solution across Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN */}
      <section className={styles.mainSection}>
        <div className={styles.mainContainer}>
          {/* Contact info */}
          <motion.div className={styles.infoColumn} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className={styles.blockTitle}>Get in touch</h2>
            <p className={styles.blockText}>
              Operated by BLUEOCEAN TECH IMPEX PRIVATE LIMITED, official
              distributor of CITA EV charging solutions in Pakistan.
            </p>
            <div className={styles.infoGrid}>
              {contactCards.map((c, i) => {
                const inner = (
                  <>
                    <span className={styles.infoIcon}>{c.icon}</span>
                    <div>
                      <h3 className={styles.infoTitle}>{c.title}</h3>
                      {c.lines.map((l, j) => (
                        <p key={j} className={styles.infoLine}>{l}</p>
                      ))}
                    </div>
                  </>
                );
                return c.href ? (
                  <a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={styles.infoCard}>
                    {inner}
                  </a>
                ) : (
                  <div key={i} className={styles.infoCard}>{inner}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Quote form */}
          <motion.div className={styles.formCard} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className={styles.formTitle}>Request a Quote</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! Our team will contact you shortly."); }}>
              <div className={styles.formRow}>
                <input type="text" placeholder="Full Name *" className={styles.input} required />
                <input type="tel" placeholder="Phone Number *" className={styles.input} required />
              </div>
              <div className={styles.formRow}>
                <input type="email" placeholder="Email Address *" className={styles.input} required />
                <input type="text" placeholder="City *" className={styles.input} required />
              </div>
              <select className={styles.input} defaultValue="" required>
                <option value="" disabled>What type of charger are you looking for? *</option>
                <option>Home EV Charger</option>
                <option>Commercial EV Charger</option>
                <option>Fleet EV Charger</option>
                <option>Public / Fast DC Charger</option>
                <option>Not sure (need expert advice)</option>
              </select>
              <select className={styles.input} defaultValue="">
                <option value="" disabled>When do you want it installed?</option>
                <option>Immediately</option>
                <option>Within 1 month</option>
                <option>1-3 months</option>
                <option>Just exploring</option>
              </select>
              <textarea placeholder="Describe your requirement" className={styles.textarea}></textarea>
              <button type="submit" className={styles.submitBtn}>Submit Request</button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
