import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | VISION VERSE24",
  description: "Terms and Conditions of service for Vision Verse24 digital development agency.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/30">
            <FileText className="w-3.5 h-3.5" />
            <span>TERMS OF SERVICE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Terms & Conditions</h1>
          <p className="text-xs text-slate-400">Effective Date: November 2026</p>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 text-sm space-y-6 leading-relaxed bg-[#0D1127] p-8 rounded-3xl border border-purple-500/20">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing our website (visionverse24.vercel.app) or engaging VISION VERSE24 for software engineering, web design, resume building, or academic guidance, you agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Scope of Services</h2>
            <p>
              Vision Verse24 provides custom website development, portfolio design, resume websites, academic college project implementation, and technical mentoring. All deliverables are defined prior to project commencement via written communication.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Source Code Ownership & Copyright</h2>
            <p>
              Upon receipt of final payment, full ownership of the developed project source code is transferred to the client or student. You retain the right to modify, host, deploy, and distribute your code freely.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Payment & Delivery Milestones</h2>
            <p>
              Prices listed on our website represent baseline rates. Payment is conducted in Indian Rupees (INR) via UPI (Google Pay, PhonePe, Paytm) or bank transfer. Standard payment terms require a 50% initial commitment deposit and 50% upon review and approval of the staging build.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">5. Revision Policy</h2>
            <p>
              We provide revisions within the original agreed project scope. Significant feature additions requested beyond the agreed initial specification may incur additional nominal charges.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">6. Academic Integrity Notice</h2>
            <p>
              For academic college projects, our source code and documentation are provided as learning aids, architecture templates, and implementation references to help students understand modern software engineering. Students are expected to understand the code for their examination defense.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">7. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of Telangana, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
