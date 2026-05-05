"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  amount?: number;
  once?: boolean;
};

export function Reveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  amount = 0.25,
  once = true,
}: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -10% 0px" }}
      transition={{ delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
