"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, Tag, MessageCircleQuestion } from "lucide-react";

const indicators = [
  {
    title: "Fast Delivery",
    desc: "Rapid turnarounds from 24-48 hours for portfolios to planned sprints for web applications.",
    icon: Clock,
    color: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  {
    title: "Quality Development",
    desc: "Clean code, modern Next.js/React architecture, strict TypeScript types, and zero shortcuts.",
    icon: ShieldCheck,
    color: "from-purple-500 to-indigo-400",
    iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
  {
    title: "Affordable Pricing",
    desc: "Transparent rates starting at ₹299 for students and ₹1,500 for businesses. No hidden costs.",
    icon: Tag,
    color: "from-pink-500 to-rose-400",
    iconBg: "bg-pink-500/10 text-pink-400 border-pink-500/30",
  },
  {
    title: "Free Initial Consultation",
    desc: "Discuss your ideas, tech stack options, and project roadmap upfront with zero obligation.",
    icon: MessageCircleQuestion,
    color: "from-amber-500 to-yellow-400",
    iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
];

export function TrustIndicators() {
  return (
    <section className="py-12 border-y border-slate-800/80 bg-[#060919]/60 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-5 rounded-2xl bg-[#0D1127] border border-purple-500/15 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1 shadow-card-glass"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
