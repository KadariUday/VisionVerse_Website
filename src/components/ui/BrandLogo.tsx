import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export function BrandLogo({ className, showTagline = false, size = "md" }: BrandLogoProps) {
  const sizeMap = {
    sm: {
      text: "text-base tracking-tight",
      logoContainer: "w-6 h-6 rounded-lg",
      logoSize: 24,
      tagline: "text-[9px] tracking-[0.25em]",
    },
    md: {
      text: "text-lg md:text-xl tracking-tight",
      logoContainer: "w-8 h-8 rounded-lg",
      logoSize: 32,
      tagline: "text-[9px] md:text-[10px] tracking-[0.28em]",
    },
    lg: {
      text: "text-2xl md:text-3xl tracking-tight",
      logoContainer: "w-10 h-10 rounded-xl",
      logoSize: 40,
      tagline: "text-xs md:text-sm tracking-[0.3em]",
    },
    xl: {
      text: "text-3xl md:text-5xl tracking-tight",
      logoContainer: "w-14 h-14 rounded-2xl",
      logoSize: 56,
      tagline: "text-xs md:text-base tracking-[0.35em]",
    },
  };

  const currentSize = sizeMap[size];

  return (
    <Link href="/" className={cn("group inline-flex flex-col items-start select-none", className)}>
      <div className="flex items-center gap-2.5">
        {/* Official VisionVerse Brand Icon Emblem */}
        <div
          className={cn(
            "relative overflow-hidden shrink-0 border border-white/10 group-hover:border-[#F59E0B]/50 transition-all duration-300 shadow-sm bg-[#131517]",
            currentSize.logoContainer
          )}
        >
          <Image
            src="/images/visionverse-logo.png"
            alt="VISION VERSE24 Logo"
            width={currentSize.logoSize}
            height={currentSize.logoSize}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>

        {/* Brand Typography */}
        <div className="font-heading font-black flex items-baseline">
          <span className={cn("text-white transition-colors duration-300", currentSize.text)}>
            VISION
          </span>
          <span
            className={cn(
              "ml-1.5 text-[#F59E0B] transition-all duration-300",
              currentSize.text
            )}
          >
            VERSE24
          </span>
        </div>
      </div>

      {showTagline && (
        <span
          className={cn(
            "font-mono text-[#71717A] group-hover:text-[#A1A1AA] transition-colors duration-300 uppercase mt-1 tracking-widest",
            currentSize.tagline
          )}
        >
          IDEAS. CODE. IMPACT.
        </span>
      )}
    </Link>
  );
}
