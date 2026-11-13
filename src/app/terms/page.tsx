import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | VISION VERSE24 — Independent Digital Product Studio",
  description: "Terms and conditions of service for Vision Verse24 digital product studio.",
};

export default function TermsPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[#F59E0B] text-xs font-mono font-medium border border-white/10">
            <FileText className="w-3.5 h-3.5" />
            <span>TERMS OF ENGAGEMENT</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs font-mono text-[#777982]">Effective Date: November 2026 · Hyderabad, India</p>
        </div>

        <div className="rounded-2xl bg-[#15171C] border border-white/10 p-8 sm:p-10 space-y-8 text-sm text-[#A0A2AD] leading-relaxed shadow-studio">
          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold text-white uppercase tracking-wider text-xs">
              01 / Agreement to Terms
            </h2>
            <p>
              By accessing our website or commissioning <strong className="text-white">VISION VERSE24</strong> for software engineering, web design, resume systems, or academic guidance, you agree to these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold text-white uppercase tracking-wider text-xs">
              02 / Scope of Engagement
            </h2>
            <p>
              Vision Verse24 delivers bespoke web engineering, developer portfolio architecture, academic engineering implementations, and commercial web platforms. All project milestones are formally defined prior to engineering kick-off.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold text-white uppercase tracking-wider text-xs">
              03 / Source Code Ownership & Transfer
            </h2>
            <p>
              Upon settlement of the final project milestone, 100% full intellectual property and source code rights transfer to the client or student. You possess complete freedom to fork, host, commercialize, or re-license your repository.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold text-white uppercase tracking-wider text-xs">
              04 / Pricing & Milestone Structure
            </h2>
            <p>
              Listed figures denote baseline rates for standardized configurations. Transactions are settled in Indian Rupees (INR) via UPI (Google Pay, PhonePe, Paytm) or verified banking rails. Standard engagement utilizes a milestone structure: 50% kick-off deposit and 50% upon client acceptance on staging.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold text-white uppercase tracking-wider text-xs">
              05 / Scope Revisions
            </h2>
            <p>
              We provide full revisions within the originally agreed scope parameters. Material feature expansions beyond the initial specification are scoped transparently at nominal rates.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold text-white uppercase tracking-wider text-xs">
              06 / Academic Systems Compliance
            </h2>
            <p>
              For academic engineering commissions, code repositories and accompanying technical reports serve as structured architectural foundations and educational references. Students are guided to understand all underlying logic for their viva voce defense.
            </p>
          </section>

          <section className="space-y-2 border-t border-white/10 pt-6">
            <h2 className="font-heading text-base font-bold text-white uppercase tracking-wider text-xs">
              07 / Jurisdiction
            </h2>
            <p>
              These terms are governed by and construed under the legal jurisdiction of Hyderabad, Telangana, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
