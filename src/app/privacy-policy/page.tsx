import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | VISION VERSE24 — Independent Digital Product Studio",
  description: "Privacy policy and client data handling standards for Vision Verse24.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#777982] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO STUDIO</span>
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-emerald-400 text-xs font-mono font-medium border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CONFIDENTIALITY & PRIVACY PROTOCOL</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-[#777982]">Effective Date: November 2026 · Hyderabad, India</p>
        </div>

        <div className="rounded-2xl bg-[#15171C] border border-white/10 p-8 sm:p-10 space-y-8 text-sm text-[#A0A2AD] leading-relaxed shadow-studio">
          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold text-white uppercase tracking-wider text-xs">
              01 / Introduction
            </h2>
            <p>
              Welcome to <strong className="text-white">VISION VERSE24</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to safeguarding any personal and project data transmitted via our website and associated communication networks.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold text-white uppercase tracking-wider text-xs">
              02 / Data Collection
            </h2>
            <p>
              When you submit a project enquiry or interact with our services, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#D4D4D8]">
              <li><strong className="text-white">Contact Parameters:</strong> Full name, WhatsApp phone number, and official email address.</li>
              <li><strong className="text-white">Project Specifications:</strong> Client profile, selected service, scope summary, budget tier, delivery date, and reference links.</li>
              <li><strong className="text-white">Infrastructure Logs:</strong> Basic request timestamps and origin details to prevent distributed denial-of-service and automated spam.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold text-white uppercase tracking-wider text-xs">
              03 / Application of Data
            </h2>
            <p>
              We process your submitted information exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#D4D4D8]">
              <li>Register your commission specification and generate a unique tracking identifier.</li>
              <li>Converse directly via WhatsApp or Email regarding system requirements and design feedback.</li>
              <li>Maintain internal development logs and transactional invoicing.</li>
              <li>Safeguard application endpoints against abuse and bot attacks.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold text-white uppercase tracking-wider text-xs">
              04 / Non-Disclosure & Anti-Commercialization
            </h2>
            <p>
              We do <strong className="text-white">not</strong> sell, lease, or distribute your personal details to third-party advertisers or telemarketers. All project materials remain strictly between you and our core engineering team.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold text-white uppercase tracking-wider text-xs">
              05 / Infrastructure & Security
            </h2>
            <p>
              All traffic is routed through encrypted HTTPS/TLS. Database persistence is safeguarded by Supabase PostgreSQL instances with strict Row Level Security (RLS) policies, preventing unauthorized external access.
            </p>
          </section>

          <section className="space-y-2 border-t border-white/10 pt-6">
            <h2 className="font-heading text-base font-bold text-white uppercase tracking-wider text-xs">
              06 / Studio Inquiries
            </h2>
            <p>
              For privacy inquiries or data removal requests:
            </p>
            <div className="font-mono text-xs text-[#E4E4E7] space-y-1 pt-1">
              <div>Email: visionverse24business@gmail.com</div>
              <div>WhatsApp: +91-9392438853</div>
              <div>Location: Hyderabad, Telangana, India</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
