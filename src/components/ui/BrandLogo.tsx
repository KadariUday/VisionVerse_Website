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
      text: "text-lg",
      code: "text-base px-1.5 py-0.5",
      tagline: "text-[9px] tracking-widest",
    },
    md: {
      text: "text-xl md:text-2xl",
      code: "text-base md:text-lg px-2 py-0.5",
      tagline: "text-[10px] md:text-xs tracking-[0.25em]",
    },
    lg: {
      text: "text-2xl md:text-3xl",
      code: "text-xl md:text-2xl px-2.5 py-1",
      tagline: "text-xs md:text-sm tracking-[0.3em]",
    },
    xl: {
      text: "text-3xl md:text-5xl",
      code: "text-2xl md:text-4xl px-3 py-1.5",
      tagline: "text-xs md:text-base tracking-[0.35em]",
    },
  };

  const currentSize = sizeMap[size];

  return (
    <Link href="/" className={cn("group inline-flex flex-col items-start select-none", className)}>
      <div className="flex items-center gap-2">
        {/* Code Symbol Icon Badge */}
        <span
          className={cn(
            "font-mono font-black rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/40 text-blue-400 group-hover:border-purple-400/60 group-hover:text-purple-300 transition-all duration-300 shadow-glow-sm",
            currentSize.code
          )}
        >
          &lt;/&gt;
        </span>

        {/* Brand Name */}
        <div className="font-extrabold tracking-tight flex items-baseline">
          <span className={cn("text-white transition-colors duration-300", currentSize.text)}>
            VISION
          </span>
          <span
            className={cn(
              "ml-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-pink-400 transition-all duration-300",
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
            "font-semibold text-slate-400 group-hover:text-slate-300 transition-colors duration-300 uppercase mt-0.5 pl-0.5",
            currentSize.tagline
          )}
        >
          IDEAS. CODE. IMPACT.
        </span>
      )}
    </Link>
  );
}
