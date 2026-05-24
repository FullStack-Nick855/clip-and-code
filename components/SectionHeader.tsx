"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.6 }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <div className={align === "center" ? "mx-auto chip mb-4" : "chip mb-4"}>
        {eyebrow}
      </div>
      <h2 className="font-display text-display-lg text-gradient">{title}</h2>
      {description && (
        <p className="mt-5 text-white/60 md:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
