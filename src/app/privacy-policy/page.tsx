import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | VISION VERSE24",
  description: "Privacy Policy for Vision Verse24 digital development agency.",
};

export default function PrivacyPolicyPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>LEGAL & PRIVACY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Privacy Policy</h1>
          <p className="text-xs text-slate-400">Effective Date: November 2026</p>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 text-sm space-y-6 leading-relaxed bg-[#0D1127] p-8 rounded-3xl border border-purple-500/20">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Introduction</h2>
            <p>
              Welcome to <strong>VISION VERSE24</strong> ("we," "our," or "us"). We respect your privacy and are committed to protecting any personal data you share with us through our website (visionverse24.vercel.app) and associated communication channels.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
            <p>
              When you submit a project enquiry or communicate with us, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Contact Information: Full name, WhatsApp phone number, email address.</li>
              <li>Project Details: Customer type, selected service, project description, budget tier, and reference URLs.</li>
              <li>Technical Log Data: IP address and browser user-agent for spam prevention and rate limiting.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. How We Use Your Information</h2>
            <p>
              We use your submitted details solely to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Process your project enquiry and generate your unique Enquiry ID.</li>
              <li>Communicate directly with you via WhatsApp or Email regarding project deliverables.</li>
              <li>Maintain development records and project invoices.</li>
              <li>Prevent automated spam and abuse of our enquiry systems.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. No Data Sharing or Selling</h2>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal information to third parties or marketing networks. Your contact information is strictly handled by our internal engineering team.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">5. Data Security</h2>
            <p>
              We utilize encrypted HTTPS connections, secure Supabase PostgreSQL database instances with Row Level Security (RLS), and server-side secret management.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: <strong>kadariudaycl@gmail.com</strong>
              <br />
              WhatsApp: <strong>+91-9392438853</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
