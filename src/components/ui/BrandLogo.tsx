import React from "react";
import Link from "next/link";
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
      code: "text-xs px-1.5 py-0.5",
      tagline: "text-[9px] tracking-[0.25em]",
    },
    md: {
      text: "text-lg md:text-xl tracking-tight",
      code: "text-xs md:text-sm px-2 py-0.5",
      tagline: "text-[9px] md:text-[10px] tracking-[0.28em]",
    },
    lg: {
      text: "text-2xl md:text-3xl tracking-tight",
      code: "text-base md:text-lg px-2.5 py-1",
      tagline: "text-xs md:text-sm tracking-[0.3em]",
    },
    xl: {
      text: "text-3xl md:text-5xl tracking-tight",
      code: "text-xl md:text-2xl px-3 py-1.5",
      tagline: "text-xs md:text-base tracking-[0.35em]",
    },
  };

  const currentSize = sizeMap[size];

  return (
    <Link href="/" className={cn("group inline-flex flex-col items-start select-none", className)}>
      <div className="flex items-center gap-2.5">
        {/* Crisp Monospace Studio Mark */}
        <span
          className={cn(
            "font-mono font-bold rounded-md bg-[#181A1F] border border-white/10 text-[#F59E0B] group-hover:border-[#F59E0B]/50 group-hover:bg-[#F59E0B]/10 transition-all duration-300",
            currentSize.code
          )}
        >
          &lt;/&gt;
        </span>

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
