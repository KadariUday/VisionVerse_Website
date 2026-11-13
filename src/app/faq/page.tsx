import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/home/FinalCta";
import { HelpCircle, Sparkles, ArrowRight, MessageSquareCode } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | VISION VERSE24",
  description:
    "Find answers to frequently asked questions about Vision Verse24's web development, student portfolio services, college projects, and payment terms.",
};

const faqs = [
  {
    category: "General & Identity",
    questions: [
      {
        q: "Who is behind VISION VERSE24?",
        a: "Vision Verse24 was founded by student engineers Kadari Uday, Rajoju Sreeja, and Rapalli Venkat Dathadri from Institute of Aeronautical Engineering (IARE), Hyderabad, B.Tech CSE (AI & ML) 2027 batch. We build professional production web solutions for students, creators, and businesses.",
      },
      {
        q: "Are the prices really as low as ₹299?",
        a: "Yes! Because we are passionate student engineers and keep our operational overhead minimal, we offer student-friendly pricing starting from ₹299 for resume builds and ₹499 for full portfolio websites. Businesses can get storefronts starting at ₹1,500.",
      },
      {
        q: "Why should I choose Vision Verse24 over generic website builders like Wix or WordPress?",
        a: "Generic website builders produce slow, bloated code, charge expensive recurring monthly fees, and trap your content. We write clean, modern Next.js 14 and React code hosted on Vercel's global edge network. Your site loads in milliseconds, has zero mandatory monthly fees, and you own the full GitHub source code.",
      },
    ],
  },
  {
    category: "Delivery & Process",
    questions: [
      {
        q: "How fast will my website be delivered?",
        a: "Resume websites and portfolios are delivered within 24 to 48 hours. Academic college projects take 3 to 5 days including reports and diagrams. Custom business websites and e-commerce storefronts take 5 to 10 days depending on feature complexity.",
      },
      {
        q: "How does the contact-to-WhatsApp workflow function?",
        a: "When you submit an enquiry through our contact form, your details are validated and saved in our Supabase database. A unique Enquiry ID (e.g., VV-2026-0001) is generated, and a preformatted message opens in WhatsApp so you can continue the conversation directly with our lead developer without repeating yourself.",
      },
      {
        q: "What if I need revisions after the website is delivered?",
        a: "We include unlimited revisions within the agreed scope. We want you to be 100% satisfied with the typography, colors, animations, and functionality.",
      },
    ],
  },
  {
    category: "Academic & College Projects",
    questions: [
      {
        q: "What is included with the College Project package (₹699)?",
        a: "You receive the full working source code with clean folder structure, step-by-step installation instructions, project synopsis, detailed final report (Blackbook format), ER diagrams, data flow diagrams, and a 1-on-1 code walkthrough to prepare you for your college viva.",
      },
      {
        q: "Can you help me answer technical viva questions about the project?",
        a: "Absolutely! We provide a curated list of mock viva questions and answers explaining the algorithm choices, database design, API routing, and system architecture so you can present your project with confidence.",
      },
    ],
  },
  {
    category: "Technical & Hosting",
    questions: [
      {
        q: "Where is the website hosted, and do I have to pay for hosting?",
        a: "We deploy websites to Vercel's global edge network, which includes a generous, high-speed free tier suitable for personal portfolios, student projects, and early-stage businesses. This means you do not have to pay expensive monthly server fees.",
      },
      {
        q: "Can I use my own custom domain (e.g. yourname.com)?",
        a: "Yes! We will guide you or directly configure the DNS records to connect your custom domain to your Vercel deployment with automatic free SSL/HTTPS certificates.",
      },
      {
        q: "Do you provide backend database integration?",
        a: "Yes. For dynamic applications, e-commerce stores, and data collection, we integrate Supabase PostgreSQL with secure Row Level Security (RLS) policies, server-side route handlers, and API endpoints.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Header */}
      <section className="relative overflow-hidden text-center max-w-4xl mx-auto px-4 md:px-6 space-y-4">
        <div className="glow-orb-purple -top-20 left-1/2 -translate-x-1/2 opacity-30" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111633] border border-purple-500/30 text-xs font-semibold text-purple-300">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>GOT QUESTIONS? WE HAVE ANSWERS</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          Frequently Asked <span className="text-gradient-brand">Questions</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about our services, student pricing, project lifecycles, and technical deliverables.
        </p>
      </section>

      {/* FAQ Groups */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest pl-2">
                {group.category}
              </div>

              <div className="space-y-4">
                {group.questions.map((faq, qIdx) => (
                  <div
                    key={qIdx}
                    className="p-6 rounded-2xl bg-[#0D1127] border border-purple-500/20 space-y-2.5 shadow-sm"
                  >
                    <h3 className="text-base font-bold text-white flex items-start gap-2.5">
                      <span className="text-purple-400 font-mono text-sm shrink-0 mt-0.5">Q:</span>
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions Banner */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-[#111633] border border-purple-500/30 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Have a question not listed here?</h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Drop us a message directly on WhatsApp and we will answer you personally within minutes.
          </p>
          <a
            href={`https://wa.me/${siteConfig.owner.whatsapp}?text=${encodeURIComponent("Hello Vision Verse24! I have a question about your services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors"
          >
            <MessageSquareCode className="w-4 h-4" />
            <span>Ask Us On WhatsApp</span>
          </a>
        </div>
      </section>

      {/* CTA */}
      <FinalCta />
    </div>
  );
}
