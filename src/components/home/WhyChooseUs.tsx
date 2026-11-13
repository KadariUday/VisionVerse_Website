"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Bot,
  Code2,
  Search,
  ShieldCheck,
  Tag,
  Clock,
  MessageSquareHeart,
  CloudUpload,
  Headphones,
  CheckCircle,
} from "lucide-react";

const reasons = [
  {
    title: "Modern & Responsive Design",
    desc: "100% fluid layouts tailored for 320px mobile screens up to 4K ultra-wide monitors.",
    icon: Smartphone,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
  },
  {
    title: "AI-Powered Solutions",
    desc: "Smart assistants, intelligent workflows, and modern AI integrations built by AI/ML engineers.",
    icon: Bot,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
  },
  {
    title: "Clean & Optimized Code",
    desc: "Maintainable TypeScript, component architecture, zero bloat, and performant builds.",
    icon: Code2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    title: "SEO-Friendly Development",
    desc: "Meta tags, Open Graph cards, sitemaps, structured schema and fast Core Web Vitals.",
    icon: Search,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
  },
  {
    title: "Secure Implementation",
    desc: "OWASP-conscious routes, input sanitization, database RLS, and secure environment keys.",
    icon: ShieldCheck,
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/30",
  },
  {
    title: "Affordable Pricing",
    desc: "Student-friendly rates starting from ₹299, and transparent business pricing from ₹1,500.",
    icon: Tag,
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/30",
  },
  {
    title: "On-Time Delivery",
    desc: "Respect for your deadlines with disciplined progress milestones and 24-48h rapid turns.",
    icon: Clock,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
  {
    title: "Friendly Communication",
    desc: "Direct chats via WhatsApp, regular video updates, and collaborative feedback loops.",
    icon: MessageSquareHeart,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/30",
  },
  {
    title: "Deployment Support",
    desc: "Complete production hosting on Vercel with custom domain configuration and SSL certificates.",
    icon: CloudUpload,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/30",
  },
  {
    title: "Ongoing Assistance",
    desc: "Post-delivery support, viva explanations for students, and bug-fix warranty on all deliverables.",
    icon: Headphones,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/30",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#060814]">
      {/* Background orbs */}
      <div className="glow-orb-blue top-1/2 -left-40 opacity-30" />
      <div className="glow-orb-purple top-1/3 -right-40 opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111633] border border-blue-500/30 text-xs font-semibold text-blue-300">
            <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
            <span>REAL VALUE & TECHNICAL INTEGRITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Why Choose <span className="text-gradient-cyan">VISION VERSE24</span>?
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            We bridge the gap between creative visual design and rock-solid software engineering.
            Here is what makes our development experience dependable.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group p-5 rounded-2xl bg-[#0D1127] border border-purple-500/15 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-card-glass"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${item.bg}`}
                  >
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
