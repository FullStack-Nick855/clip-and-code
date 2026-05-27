"use client";

import { motion } from "framer-motion";
import {
  Search,
  Target,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  LucideIcon,
} from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We deep dive into your business, goals, and target audience to understand what success looks like.",
    Icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We create a comprehensive plan including site architecture, user flows, and conversion strategies.",
    Icon: Target,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our designers craft beautiful mockups that align with your brand and conversion goals.",
    Icon: Palette,
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build your site using modern technologies, ensuring performance, security, and scalability.",
    Icon: Code2,
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Rigorous testing across devices and browsers to ensure everything works perfectly.",
    Icon: TestTube2,
  },
  {
    number: "06",
    title: "Launch & Optimize",
    description:
      "We launch your site and continuously monitor and optimize for better performance.",
    Icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Heading */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
              Our Process
            </h2>
            <p className="text-base text-white/60 font-light max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const { Icon } = step;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 relative overflow-hidden h-full">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="text-4xl md:text-5xl font-extralight text-white/30 group-hover:text-white/40 transition-colors leading-none flex-shrink-0">
                          {step.number}
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors flex-shrink-0">
                          <Icon className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg md:text-xl font-light text-white group-hover:text-white/90 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-white/60 group-hover:text-white/70 leading-relaxed font-light text-sm transition-colors">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}