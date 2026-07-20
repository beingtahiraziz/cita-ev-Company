"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blog";
import { AnimatedHeroTitle } from "@/components/ui/AnimatedHeroTitle";
import styles from "./BlogArticle.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function BlogArticle({ post }: { post: BlogPost }) {
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link href="/blog" className={styles.back}>
              <ArrowLeft size={16} /> All articles
            </Link>
            <span className={styles.category}>{post.category}</span>
            <AnimatedHeroTitle text={post.title} className={styles.title} />
            <div className={styles.meta}>
              <span>{post.date}</span>
              <span className={styles.dot}>•</span>
              <span className={styles.time}><Clock size={14} /> {post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <div className={styles.featuredWrap}>
        <div className={styles.featured}>
          <Image src={post.image} alt={post.title} fill className={styles.featuredImg} unoptimized priority />
        </div>
      </div>

      {/* ARTICLE */}
      <article className={styles.article}>
        <p className={styles.lead}>{post.excerpt}</p>
        {post.sections.map((sec, i) => (
          <section key={i} className={styles.section}>
            {sec.heading && <h2 className={styles.heading}>{sec.heading}</h2>}
            {sec.paragraphs.map((p, j) => (
              <p key={j} className={styles.paragraph} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            {sec.bullets && (
              <ul className={styles.bullets}>
                {sec.bullets.map((b, k) => (
                  <li key={k}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className={styles.inlineCta}>
          <div>
            <h3>Looking for the right charger?</h3>
            <p>Our team will recommend the perfect CITA EV solution for your site.</p>
          </div>
          <Link href="/contact" className={styles.inlineBtn}>Get a quote <ArrowRight size={16} /></Link>
        </div>
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.relatedContainer}>
            <h2 className={styles.relatedTitle}>More from the blog</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImgWrap}>
                    <Image src={r.image} alt={r.title} fill className={styles.relatedImg} unoptimized />
                  </div>
                  <div className={styles.relatedBody}>
                    <span className={styles.relatedCat}>{r.category}</span>
                    <h3>{r.title}</h3>
                    <span className={styles.relatedLink}>Read article <ArrowRight size={15} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
