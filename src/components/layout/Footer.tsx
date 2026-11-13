import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { siteConfig } from "@/config/site";
import {
  Instagram,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#0C0D0E] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden text-[#777982]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/[0.08]">
          {/* Col 1: Brand & Manifesto */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo showTagline size="lg" />
            <p className="text-sm text-[#A2A6B2] max-w-md leading-relaxed pt-2">
              Independent digital development studio based in Hyderabad, India. We engineer modern
              web applications, intelligent AI interfaces, and academic innovations with craft, clarity,
              and disciplined execution.
            </p>

            <div className="flex items-center gap-3 pt-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#15171C] border border-white/10 flex items-center justify-center text-[#A2A6B2] hover:text-white hover:border-[#F97316]/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#15171C] border border-white/10 flex items-center justify-center text-[#A2A6B2] hover:text-white hover:border-white/30 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#15171C] border border-white/10 flex items-center justify-center text-[#A2A6B2] hover:text-white hover:border-[#F59E0B]/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Studio Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase font-mono">
              Studio
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors text-slate-500">
                  Admin Operations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase font-mono">
              Offerings
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/contact?service=Resume%20Build" className="hover:text-white transition-colors">
                  Resume Build <span className="text-[#F59E0B] font-mono">(₹299)</span>
                </Link>
              </li>
              <li>
                <Link href="/contact?service=Portfolio%20Website" className="hover:text-white transition-colors">
                  Portfolio Website <span className="text-[#F59E0B] font-mono">(₹499)</span>
                </Link>
              </li>
              <li>
                <Link href="/contact?service=College%20Project" className="hover:text-white transition-colors">
                  College Projects <span className="text-[#F59E0B] font-mono">(₹699)</span>
                </Link>
              </li>
              <li>
                <Link href="/contact?service=Training%20%26%20Learn" className="hover:text-white transition-colors">
                  Training & Mentorship <span className="text-[#F59E0B] font-mono">(₹999)</span>
                </Link>
              </li>
              <li>
                <Link href="/contact?service=Business%20Website" className="hover:text-white transition-colors">
                  Business Websites <span className="text-[#F59E0B] font-mono">(₹1,500+)</span>
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/projects/sr-jewellery-collections"
                  className="text-[#F59E0B] hover:underline flex items-center gap-1 font-medium"
                >
                  <span>SR Jewellery Case Study</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase font-mono">
              Contact & Office
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                <div>
                  <a
                    href={`https://wa.me/${siteConfig.owner.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block text-[#F7F6F2] font-medium"
                  >
                    {siteConfig.owner.phone}
                  </a>
                  <span className="text-[11px] text-[#777982]">WhatsApp & Direct Line</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F59E0B] mt-0.5 shrink-0" />
                <a
                  href={`mailto:${siteConfig.owner.email}`}
                  className="hover:text-white transition-colors break-all text-[#F7F6F2] font-medium"
                >
                  {siteConfig.owner.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F97316] mt-0.5 shrink-0" />
                <span className="text-xs leading-relaxed text-[#A2A6B2]">
                  Hyderabad, Telangana, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} VISION VERSE24. All rights reserved.</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="text-[#777982] hidden md:inline">
              Built with Next.js, TypeScript, Tailwind CSS & Supabase
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
