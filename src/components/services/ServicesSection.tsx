"use client";

import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "@/config/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Sparkles, HelpCircle } from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#080B1C]">
      {/* Background orbs */}
      <div className="glow-orb-purple -top-20 right-0 opacity-40" />
      <div className="glow-orb-blue bottom-10 left-0 opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111633] border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRANSPARENT & AFFORDABLE SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            High-Impact Digital Solutions For{" "}
            <span className="text-gradient-brand">Students & Businesses</span>
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need a resume that lands interviews, a portfolio that proves your capabilities,
            a high-scoring college capstone project, or a full-scale business storefront, we deliver quality without the inflated agency price tag.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Custom Requirements Banner */}
        <div className="mt-14 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#111633] via-[#18204A] to-[#111633] border border-purple-500/30 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-lg">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <span>Need a custom combination or unique architecture?</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-300">
              We frequently develop tailored custom APIs, mobile apps, and AI bots tailored to custom budgets.
            </p>
          </div>
          <Link
            href="/contact?service=Custom%20Web%20Application"
            className="px-6 py-3 rounded-full text-xs md:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 shadow-glow-sm hover:shadow-glow-md transition-all shrink-0"
          >
            Request Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
