"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedHeroTitleProps {
  text: string;
  className?: string;
  startDelay?: number;
  perChar?: number;
}

/**
 * Character-by-character "typing" reveal, using the exact same technique as the
 * homepage hero (animating display none -> inline so each letter pops in and
 * takes space one at a time). Works regardless of gradient / text-fill styling
 * or any parent motion context, because each letter animates on its own delay.
 *
 * Words are grouped with white-space: nowrap so the title only wraps at spaces,
 * never mid-word.
 */
export function AnimatedHeroTitle({
  text,
  className,
  startDelay = 0.4,
  perChar = 0.09,
}: AnimatedHeroTitleProps) {
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <h1 className={className} aria-label={text} style={{ overflowWrap: "break-word" }}>
      {words.map((word, wi) => {
        const chars = Array.from(word).map((ch, ci) => {
          const delay = startDelay + charIndex * perChar;
          charIndex += 1;
          return (
            <motion.span
              key={ci}
              aria-hidden="true"
              initial={{ opacity: 0, visibility: "hidden" }}
              animate={{ opacity: 1, visibility: "visible" }}
              transition={{ delay, duration: 0.15 }}
            >
              {ch === " " ? " " : ch}
            </motion.span>
          );
        });
        return (
          <React.Fragment key={wi}>
            <span style={{ whiteSpace: "nowrap" }}>{chars}</span>
            {wi < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </h1>
  );
}
