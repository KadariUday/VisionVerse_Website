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
  ShieldCheck,
  Code2,
  Heart,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#050713] border-t border-purple-500/20 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Background glow orbs */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo showTagline size="lg" />
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed pt-2">
              Transforming innovative ideas into high-impact digital experiences. We engineer
              modern websites, e-commerce stores, AI applications and student project solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#111633] border border-pink-500/30 flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#111633] border border-purple-500/30 flex items-center justify-center text-slate-200 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#111633] border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Student & Business Friendly • 100% Satisfaction Focused</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cyan-400 transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-cyan-400 transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-cyan-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-cyan-400 transition-colors text-slate-500">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact?service=Resume%20Build" className="hover:text-cyan-400 transition-colors">
                  Resume Build (₹299)
                </Link>
              </li>
              <li>
                <Link href="/contact?service=Portfolio%20Website" className="hover:text-cyan-400 transition-colors">
                  Portfolio Website (₹499)
                </Link>
              </li>
              <li>
                <Link href="/contact?service=College%20Project" className="hover:text-cyan-400 transition-colors">
                  College Projects (₹699)
                </Link>
              </li>
              <li>
                <Link href="/contact?service=Training%20%26%20Learn" className="hover:text-cyan-400 transition-colors">
                  Training & Mentorship (₹999)
                </Link>
              </li>
              <li>
                <Link href="/contact?service=Business%20Website" className="hover:text-cyan-400 transition-colors">
                  Business Websites (₹1,500+)
                </Link>
              </li>
              <li>
                <Link href="/projects/sr-jewellery-collections" className="hover:text-gold transition-colors text-amber-400 flex items-center gap-1">
                  <span>SR Jewellery Case Study</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <a
                    href={`https://wa.me/${siteConfig.owner.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block text-slate-200"
                  >
                    {siteConfig.owner.phone}
                  </a>
                  <span className="text-xs text-slate-500">WhatsApp & Direct Call</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
                <a
                  href={`mailto:${siteConfig.owner.email}`}
                  className="hover:text-white transition-colors break-all text-slate-200"
                >
                  {siteConfig.owner.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-400 mt-1 shrink-0" />
                <span className="text-xs leading-relaxed">
                  Institute of Aeronautical Engineering, Dundigal, Hyderabad, Telangana — 500043
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} VISION VERSE24. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="text-slate-500 hidden md:inline">
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
