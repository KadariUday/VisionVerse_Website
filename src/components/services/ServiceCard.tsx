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
  Check,
  ArrowUpRight,
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
        "group relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border",
        service.popular || featured
          ? "bg-[#181B24] border-[#315BFF]/40 shadow-studio"
          : "bg-[#15171C] hover:bg-[#181B24] border-white/[0.08] hover:border-white/20"
      )}
    >
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#315BFF] text-white shadow-subtle">
          Most Popular
        </div>
      )}

      <div className="space-y-4">
        {/* Header: Icon & Category */}
        <div className="flex items-center justify-between">
          <div className="w-11 h-11 rounded-lg bg-[#1B1E26] border border-white/10 flex items-center justify-center text-[#315BFF]">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="font-mono text-[11px] text-[#A2A6B2] uppercase tracking-wider bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/5">
            {service.category}
          </span>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="font-heading text-xl font-bold text-white group-hover:text-white transition-colors">
            {service.title}
          </h3>
          <p className="text-xs text-[#777982] font-mono uppercase tracking-wider mt-1">
            {service.tagline}
          </p>
        </div>

        {/* Price Display */}
        <div className="py-2">
          <div className="flex items-baseline gap-1.5">
            <span className="font-heading text-3xl font-black text-white">
              {service.priceFormatted}
            </span>
            <span className="text-xs text-[#777982] font-mono">fixed rate</span>
          </div>
          {service.priceNote && (
            <p className="text-[11px] text-[#A2A6B2] mt-0.5">{service.priceNote}</p>
          )}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#A2A6B2] leading-relaxed">
          {service.description}
        </p>

        {/* Feature List */}
        <div className="pt-4 border-t border-white/[0.08] space-y-2">
          <div className="font-mono text-[11px] text-[#777982] uppercase tracking-wider">
            Included Deliverables:
          </div>
          <ul className="space-y-1.5 text-xs text-[#D3D5DC]">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#315BFF] shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-6 mt-4 border-t border-white/[0.08]">
        <Link
          href={`/contact?service=${encodeURIComponent(service.key)}`}
          className={cn(
            "w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 group/btn",
            service.popular || featured
              ? "bg-[#315BFF] hover:bg-[#2546CC] text-white shadow-subtle"
              : "bg-[#1B1E26] hover:bg-[#315BFF] text-white border border-white/10 hover:border-[#315BFF]"
          )}
        >
          <span>Enquire for {service.key}</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
