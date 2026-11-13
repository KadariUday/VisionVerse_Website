"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { siteConfig } from "@/config/site";
import { Menu, X, ArrowUpRight, MessageSquareCode } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#101114]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-sm"
          : "bg-transparent py-5 sm:py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <BrandLogo showTagline size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#131517]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.08]">
          {siteConfig.navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full transition-all duration-200",
                  isActive
                    ? "text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20 font-semibold"
                    : "text-[#71717A] hover:text-white hover:bg-white/[0.04]"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#F59E0B] hover:bg-[#D97706] transition-all duration-200 active:scale-[0.98] shadow-[0_0_20px_rgba(245,158,11,0.25)]"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-black" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/contact"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-black bg-[#F59E0B] active:scale-95 transition-transform shadow-[0_0_15px_rgba(245,158,11,0.2)]"
          >
            Get Started
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#131517] border border-white/10 text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#101114]/98 backdrop-blur-2xl border-b border-white/[0.08] px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-65px)] overflow-y-auto">
          <div className="flex flex-col gap-1.5">
            {siteConfig.navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "text-[#F59E0B] bg-[#F59E0B]/10 font-semibold"
                      : "text-[#71717A] hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  <span className="tracking-wide uppercase text-xs">{link.name}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />}
                </Link>
              );
            })}

            <div className="pt-5 mt-3 border-t border-white/[0.08] flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-black bg-[#F59E0B] hover:bg-[#D97706] transition-colors shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              >
                <span>Get Started — Talk to Us</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </Link>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`https://wa.me/${siteConfig.owner.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#15171C] border border-white/10 text-emerald-400 text-xs font-medium hover:bg-white/[0.04] transition-colors"
                >
                  <MessageSquareCode className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#15171C] border border-white/10 text-pink-400 text-xs font-medium hover:bg-white/[0.04] transition-colors"
                >
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
