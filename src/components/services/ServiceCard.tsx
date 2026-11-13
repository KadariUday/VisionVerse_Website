"use client";

import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/types";
import {
  FileText,
  Layout,
  GraduationCap,
  Lightbulb,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
  FileText,
  Layout,
  GraduationCap,
  Lightbulb,
  Briefcase,
};

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Layout;

  return (
    <div
      className={cn(
        "group relative rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 backdrop-blur-xl border",
        service.popular || featured
          ? "bg-gradient-to-b from-[#18204A]/90 to-[#0D1127]/95 border-purple-400/50 shadow-glow-md"
          : "bg-[#0D1127]/80 hover:bg-[#111633]/90 border-purple-500/20 hover:border-purple-400/40 shadow-card-glass"
      )}
    >
      {/* Popular / Best Value Badge */}
      {service.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-glow-pink flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Most Popular</span>
        </div>
      )}

      <div>
        {/* Header: Icon & Category */}
        <div className="flex items-center justify-between">
          <div
            className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-110",
              `bg-gradient-to-br ${service.gradient} text-white border-white/20`
            )}
          >
            <IconComponent className="w-7 h-7" />
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
            {service.category}
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="mt-5">
          <h3 className="text-xl font-black text-white group-hover:text-purple-300 transition-colors">
            {service.title}
          </h3>
          <p className="text-xs text-purple-400/90 font-medium mt-1">
            {service.tagline}
          </p>
        </div>

        {/* Price Display */}
        <div className="mt-5 py-3 px-4 rounded-xl bg-[#080B1C]/80 border border-slate-800">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl md:text-3xl font-black text-white">
              {service.priceFormatted}
            </span>
          </div>
          {service.priceNote && (
            <p className="text-[11px] text-slate-400 mt-0.5">
              {service.priceNote}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 mt-4 leading-relaxed">
          {service.description}
        </p>

        {/* Feature List */}
        <div className="mt-6 pt-5 border-t border-slate-800/80">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            What's Included:
          </div>
          <ul className="space-y-2.5">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Button: opens contact form with service preselected */}
      <div className="mt-8 pt-4">
        <Link
          href={`/contact?service=${encodeURIComponent(service.key)}`}
          className={cn(
            "w-full py-3.5 px-6 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-sm",
            service.popular
              ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-500 hover:to-pink-500 shadow-glow-sm hover:shadow-glow-md"
              : "bg-[#18204A] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white border border-purple-500/30 hover:border-transparent"
          )}
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
