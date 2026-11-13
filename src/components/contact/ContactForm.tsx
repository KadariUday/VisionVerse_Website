"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enquirySchema, EnquiryFormValues } from "@/lib/validations/enquiry";
import { siteConfig } from "@/config/site";
import confetti from "canvas-confetti";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageSquareCode,
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
  Calendar,
  Link as LinkIcon,
  Sparkles,
  Mail,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  initialService?: string;
}

export function ContactForm({ initialService }: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    enquiryNumber: string;
    contactPreference: "WhatsApp" | "Email" | "Instagram";
    whatsappUrl?: string;
    whatsappMessage?: string;
    mailtoUrl?: string;
    gmailWebUrl?: string;
    emailBody?: string;
    ownerEmail?: string;
    instagramUrl?: string;
    instagramMessage?: string;
    values: EnquiryFormValues;
  } | null>(null);
  const [copiedId, setCopiedId] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      whatsappNumber: "",
      email: "",
      customerType: "Student",
      serviceRequired: (initialService as any) || "Portfolio Website",
      budget: "₹500–₹1,000",
      projectDescription: "",
      contactPreference: "WhatsApp",
      deliveryDate: "",
      referenceUrl: "",
    },
  });

  const selectedPreference = watch("contactPreference");

  // If initialService prop changes, update form
  useEffect(() => {
    if (initialService) {
      setValue("serviceRequired", initialService as any);
    }
  }, [initialService, setValue]);

  const onSubmit = async (values: EnquiryFormValues) => {
    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit enquiry");
      }

      const channel = values.contactPreference;

      // Success data payload
      setSuccessData({
        enquiryNumber: resData.enquiryNumber,
        contactPreference: channel,
        whatsappUrl: resData.whatsappUrl,
        whatsappMessage: resData.whatsappMessage,
        mailtoUrl: resData.mailtoUrl,
        gmailWebUrl: resData.gmailWebUrl,
        emailBody: resData.emailBody,
        ownerEmail: resData.ownerEmail || siteConfig.owner.email,
        instagramUrl: resData.instagramUrl || "https://ig.me/m/vision_verse24",
        instagramMessage: resData.instagramMessage,
        values,
      });

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Confetti optional
      }

      // Automatically dispatch or open selected communication channel
      if (channel === "Email") {
        if (resData.mailtoUrl) {
          // Open default user email client
          window.location.href = resData.mailtoUrl;
        }
      } else if (channel === "Instagram") {
        // Automatically copy formatted message to clipboard for effortless paste in IG DM
        if (resData.instagramMessage) {
          try {
            await navigator.clipboard.writeText(resData.instagramMessage);
            setCopiedBrief(true);
          } catch (e) {
            // Clipboard write might require user gesture in some browsers
          }
        }
        // Launch Instagram DM in a new tab
        const igUrl = resData.instagramUrl || "https://ig.me/m/vision_verse24";
        window.open(igUrl, "_blank");
      } else {
        // Default: WhatsApp direct chat
        if (resData.whatsappUrl) {
          window.open(resData.whatsappUrl, "_blank");
        }
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setSubmitError(
        err.message || "An unexpected error occurred. Your enquiry is safe; please contact us on WhatsApp directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopyId = () => {
    if (successData?.enquiryNumber) {
      navigator.clipboard.writeText(successData.enquiryNumber);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const handleCopyBrief = (text?: string) => {
    const content = text || successData?.emailBody || successData?.instagramMessage || "";
    if (content) {
      navigator.clipboard.writeText(content);
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    }
  };

  // SUCCESS CONFIRMATION SCREEN
  if (successData) {
    const channel = successData.contactPreference;

    return (
      <div className="rounded-2xl bg-[#15171C] border border-white/15 p-8 md:p-12 shadow-studio-elevated text-center space-y-6">
        {/* Status Indicator by Channel */}
        <div
          className={cn(
            "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto border",
            channel === "Email"
              ? "bg-[#315BFF]/10 border-[#315BFF]/30 text-[#315BFF]"
              : channel === "Instagram"
              ? "bg-[#FF5D65]/10 border-[#FF5D65]/30 text-[#FF5D65]"
              : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
          )}
        >
          {channel === "Email" ? (
            <Mail className="w-8 h-8" />
          ) : channel === "Instagram" ? (
            <Instagram className="w-8 h-8" />
          ) : (
            <CheckCircle2 className="w-8 h-8" />
          )}
        </div>

        <div className="space-y-2">
          <div
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border",
              channel === "Email"
                ? "bg-[#315BFF]/10 border-[#315BFF]/20 text-[#315BFF]"
                : channel === "Instagram"
                ? "bg-[#FF5D65]/10 border-[#FF5D65]/20 text-[#FF5D65]"
                : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
            )}
          >
            COMMISSION REGISTERED · {channel.toUpperCase()} CHANNEL
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">
            Thank You, {successData.values.fullName}
          </h3>
          <p className="text-sm text-[#A0A2AD] max-w-lg mx-auto">
            Your project specification has been recorded into our database. Reference this enquiry identifier for tracking:
          </p>
        </div>

        {/* Unique Enquiry ID Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0C0D10] border border-white/10 font-mono text-base font-bold text-white shadow-inner">
          <span className="text-[#777982]">ID:</span>
          <span className="text-[#315BFF]">{successData.enquiryNumber}</span>
          <button
            onClick={handleCopyId}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#A0A2AD] hover:text-white transition-colors"
            title="Copy Enquiry ID"
            aria-label="Copy identifier"
          >
            {copiedId ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4 text-[#A0A2AD]" />
            )}
          </button>
        </div>

        {/* CHANNEL 1: EMAIL DISPATCH ACTION BOX */}
        {channel === "Email" && (
          <div className="p-6 rounded-xl bg-[#0C0D10] border border-[#315BFF]/30 max-w-lg mx-auto space-y-4 text-left">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#315BFF] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Next Step: Dispatch Email Specification
                </h4>
                <p className="text-xs text-[#A0A2AD] mt-1 leading-relaxed">
                  We&apos;ve pre-formatted your complete project brief addressed to{" "}
                  <strong className="text-white">{successData.ownerEmail}</strong>. If your email application did not launch automatically, choose an option below:
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              {/* Primary: Default Mail App */}
              {successData.mailtoUrl && (
                <a
                  href={successData.mailtoUrl}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-medium text-xs text-white bg-[#315BFF] hover:bg-[#2546cc] transition-all shadow-studio"
                >
                  <Mail className="w-4 h-4" />
                  <span>Launch Default Email App</span>
                </a>
              )}

              {/* Secondary: Gmail Web Compose */}
              {successData.gmailWebUrl && (
                <a
                  href={successData.gmailWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-medium text-xs text-[#E4E4E7] bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Compose Directly in Gmail Web</span>
                </a>
              )}

              {/* Tertiary: Copy Email Brief to Clipboard */}
              <button
                type="button"
                onClick={() => handleCopyBrief(successData.emailBody)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono text-[#A0A2AD] hover:text-white bg-transparent hover:bg-white/5 transition-colors"
              >
                {copiedBrief ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Specification Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Full Email Text</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* CHANNEL 2: INSTAGRAM DM ACTION BOX */}
        {channel === "Instagram" && (
          <div className="p-6 rounded-xl bg-[#0C0D10] border border-[#FF5D65]/30 max-w-lg mx-auto space-y-4 text-left">
            <div className="flex items-start gap-3">
              <Instagram className="w-5 h-5 text-[#FF5D65] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Next Step: Direct Message @vision_verse24 on Instagram
                </h4>
                <p className="text-xs text-[#A0A2AD] mt-1 leading-relaxed">
                  Your complete project brief has been automatically copied to your clipboard. Tap below to launch your chat with <strong className="text-white">@vision_verse24</strong> and simply paste the text.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <a
                href={successData.instagramUrl || "https://ig.me/m/vision_verse24"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-medium text-xs text-white bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:opacity-90 transition-all shadow-studio"
              >
                <Instagram className="w-4 h-4" />
                <span>Open Instagram DM (@vision_verse24)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => handleCopyBrief(successData.instagramMessage)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono text-[#A0A2AD] hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              >
                {copiedBrief ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Project Brief Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Re-copy Project Specification</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* CHANNEL 3: WHATSAPP ACTION BOX */}
        {channel === "WhatsApp" && (
          <div className="p-6 rounded-xl bg-[#0C0D10] border border-emerald-500/30 max-w-lg mx-auto space-y-4 text-left">
            <div className="flex items-start gap-3">
              <MessageSquareCode className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Immediate Engineering Consultation
                </h4>
                <p className="text-xs text-[#A0A2AD] mt-1 leading-relaxed">
                  We&apos;ve pre-filled your project parameters. Tap below to launch WhatsApp and connect directly with lead engineer Kadari Uday.
                </p>
              </div>
            </div>

            <a
              href={successData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-medium text-sm text-black bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 transition-all shadow-glow-sm"
            >
              <span>Continue on WhatsApp (+91-9392438853)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Fallback Option */}
        <div className="text-xs text-[#777982] pt-2 space-y-2">
          <p>
            Need to reach us through an alternative channel? Direct WhatsApp:{" "}
            <a
              href={`https://wa.me/${siteConfig.owner.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#315BFF] hover:underline"
            >
              +91-9392438853
            </a>{" "}
            · Email:{" "}
            <a
              href={`mailto:${siteConfig.owner.email}`}
              className="text-[#315BFF] hover:underline"
            >
              {siteConfig.owner.email}
            </a>
          </p>
          <button
            onClick={() => setSuccessData(null)}
            className="text-[#A0A2AD] hover:text-white text-xs underline pt-1 block mx-auto transition-colors"
          >
            Submit Another Project Brief
          </button>
        </div>
      </div>
    );
  }

  // ACTIVE ENQUIRY FORM
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl bg-[#15171C] border border-white/10 p-6 sm:p-8 md:p-10 shadow-studio-elevated space-y-6"
    >
      <div className="space-y-1.5 border-b border-white/10 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#315BFF] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PROJECT COMMISSION INTAKE</span>
        </div>
        <h3 className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight">
          Define Your Project Scope
        </h3>
        <p className="text-xs text-[#A0A2AD]">
          Provide your specifications below. Submissions are committed to our database and dispatched through your chosen channel.
        </p>
      </div>

      {submitError && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-300 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
          <div>
            <div className="font-semibold text-rose-200">Notice</div>
            <div>{submitError}</div>
          </div>
        </div>
      )}

      {/* Row 1: Full Name & WhatsApp Number */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-xs font-medium text-[#E4E4E7] flex items-center justify-between">
            <span>
              Full Name <span className="text-[#315BFF]">*</span>
            </span>
            <span className="text-[10px] text-[#777982]">e.g. Rahul Sharma</span>
          </label>
          <input
            {...register("fullName")}
            type="text"
            placeholder="Your name or organization"
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-[#0C0D10] border text-sm text-white placeholder-[#777982] focus:outline-none focus:border-[#315BFF] focus:ring-1 focus:ring-[#315BFF] transition-all",
              errors.fullName ? "border-rose-500" : "border-white/10"
            )}
          />
          {errors.fullName && (
            <p className="text-rose-400 text-xs">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-[#E4E4E7] flex items-center justify-between">
            <span>
              WhatsApp Number <span className="text-[#315BFF]">*</span>
            </span>
            <span className="text-[10px] text-[#777982]">10-digit mobile number</span>
          </label>
          <input
            {...register("whatsappNumber")}
            type="tel"
            placeholder="e.g. 9392438853"
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-[#0C0D10] border text-sm text-white placeholder-[#777982] focus:outline-none focus:border-[#315BFF] focus:ring-1 focus:ring-[#315BFF] transition-all",
              errors.whatsappNumber ? "border-rose-500" : "border-white/10"
            )}
          />
          {errors.whatsappNumber && (
            <p className="text-rose-400 text-xs">{errors.whatsappNumber.message}</p>
          )}
        </div>
      </div>

      {/* Row 2: Email & Customer Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-xs font-medium text-[#E4E4E7]">
            Email Address <span className="text-[#315BFF]">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="name@example.com"
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-[#0C0D10] border text-sm text-white placeholder-[#777982] focus:outline-none focus:border-[#315BFF] focus:ring-1 focus:ring-[#315BFF] transition-all",
              errors.email ? "border-rose-500" : "border-white/10"
            )}
          />
          {errors.email && (
            <p className="text-rose-400 text-xs">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-[#E4E4E7]">
            Client Profile <span className="text-[#315BFF]">*</span>
          </label>
          <select
            {...register("customerType")}
            className="w-full px-4 py-3 rounded-xl bg-[#0C0D10] border border-white/10 text-sm text-white focus:outline-none focus:border-[#315BFF] focus:ring-1 focus:ring-[#315BFF] transition-all"
          >
            <option value="Student">Student (Academic / Placement)</option>
            <option value="Startup">Startup Founder</option>
            <option value="Business">Small Business / Enterprise</option>
            <option value="Individual">Individual Freelancer / Creator</option>
            <option value="Other">Other</option>
          </select>
          {errors.customerType && (
            <p className="text-rose-400 text-xs">{errors.customerType.message}</p>
          )}
        </div>
      </div>

      {/* Row 3: Service Required & Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-xs font-medium text-[#E4E4E7]">
            Service Requested <span className="text-[#315BFF]">*</span>
          </label>
          <select
            {...register("serviceRequired")}
            className="w-full px-4 py-3 rounded-xl bg-[#0C0D10] border border-white/10 text-sm text-white focus:outline-none focus:border-[#315BFF] focus:ring-1 focus:ring-[#315BFF] transition-all"
          >
            <option value="Resume Build">Resume Build (₹299)</option>
            <option value="Portfolio Website">Portfolio Website (₹499)</option>
            <option value="College Project">College Project (₹699)</option>
            <option value="Training & Learn">Training & Learn (₹999)</option>
            <option value="Business Website">Business Website (₹1,500+)</option>
            <option value="E-commerce Website">E-commerce Website</option>
            <option value="AI Application">AI Application / Model</option>
            <option value="Custom Web Application">Custom Web Application</option>
            <option value="Other">Other Project</option>
          </select>
          {errors.serviceRequired && (
            <p className="text-rose-400 text-xs">{errors.serviceRequired.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-[#E4E4E7]">
            Budget Tier <span className="text-[#315BFF]">*</span>
          </label>
          <select
            {...register("budget")}
            className="w-full px-4 py-3 rounded-xl bg-[#0C0D10] border border-white/10 text-sm text-white focus:outline-none focus:border-[#315BFF] focus:ring-1 focus:ring-[#315BFF] transition-all"
          >
            <option value="Below ₹500">Below ₹500 (Resume / Micro)</option>
            <option value="₹500–₹1,000">₹500–₹1,000 (Portfolio / Minor)</option>
            <option value="₹1,000–₹3,000">₹1,000–₹3,000 (Major Project / Site)</option>
            <option value="₹3,000–₹5,000">₹3,000–₹5,000 (Business Storefront)</option>
            <option value="Above ₹5,000">Above ₹5,000 (Full-Stack Custom)</option>
            <option value="Not Decided">Not Decided (Let's Discuss)</option>
          </select>
          {errors.budget && (
            <p className="text-rose-400 text-xs">{errors.budget.message}</p>
          )}
        </div>
      </div>

      {/* Row 4: Project Description */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-[#E4E4E7] flex items-center justify-between">
          <span>
            Project Specification <span className="text-[#315BFF]">*</span>
          </span>
          <span className="text-[10px] text-[#777982]">Goals, features, or deadlines</span>
        </label>
        <textarea
          {...register("projectDescription")}
          rows={4}
          placeholder="Outline what you want to build, any reference sites, specific features needed, or deadline expectations..."
          className={cn(
            "w-full px-4 py-3 rounded-xl bg-[#0C0D10] border text-sm text-white placeholder-[#777982] focus:outline-none focus:border-[#315BFF] focus:ring-1 focus:ring-[#315BFF] transition-all resize-y",
            errors.projectDescription ? "border-rose-500" : "border-white/10"
          )}
        />
        {errors.projectDescription && (
          <p className="text-rose-400 text-xs">{errors.projectDescription.message}</p>
        )}
      </div>

      {/* Row 5: Preferred Contact, Expected Delivery & Reference URL */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="space-y-2">
          <label className="text-xs font-medium text-[#E4E4E7]">
            Preferred Channel <span className="text-[#315BFF]">*</span>
          </label>
          <select
            {...register("contactPreference")}
            className="w-full px-4 py-3 rounded-xl bg-[#0C0D10] border border-white/10 text-sm text-white focus:outline-none focus:border-[#315BFF] focus:ring-1 focus:ring-[#315BFF] transition-all"
          >
            <option value="WhatsApp">WhatsApp (Fastest / Real-time)</option>
            <option value="Email">Email (kadariudaycl@gmail.com)</option>
            <option value="Instagram">Instagram DM (@vision_verse24)</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-[#E4E4E7] flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#777982]" />
            <span>Target Date (Optional)</span>
          </label>
          <input
            {...register("deliveryDate")}
            type="text"
            placeholder="e.g. Within 48h / by Dec 1"
            className="w-full px-4 py-3 rounded-xl bg-[#0C0D10] border border-white/10 text-sm text-white placeholder-[#777982] focus:outline-none focus:border-[#315BFF] focus:ring-1 focus:ring-[#315BFF] transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-[#E4E4E7] flex items-center gap-1">
            <LinkIcon className="w-3.5 h-3.5 text-[#777982]" />
            <span>Reference URL (Optional)</span>
          </label>
          <input
            {...register("referenceUrl")}
            type="url"
            placeholder="https://inspiration.com"
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-[#0C0D10] border text-sm text-white placeholder-[#777982] focus:outline-none focus:border-[#315BFF] focus:ring-1 focus:ring-[#315BFF] transition-all",
              errors.referenceUrl ? "border-rose-500" : "border-white/10"
            )}
          />
          {errors.referenceUrl && (
            <p className="text-rose-400 text-xs">{errors.referenceUrl.message}</p>
          )}
        </div>
      </div>

      {/* Trust Notice */}
      <div className="pt-2 flex items-center gap-2 text-xs text-[#777982]">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>Client confidentiality guaranteed. We never distribute specifications or contact info.</span>
      </div>

      {/* Big Submit Button dynamically customized for the selected channel */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 px-8 rounded-xl text-sm font-medium tracking-wide text-white bg-[#315BFF] hover:bg-[#2546cc] shadow-studio hover:shadow-glow-blue transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed uppercase"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>
              {selectedPreference === "Email"
                ? "Securing Specification & Preparing Email..."
                : selectedPreference === "Instagram"
                ? "Securing Specification & Launching Instagram..."
                : "Securing Specification & Launching WhatsApp..."}
            </span>
          </>
        ) : (
          <>
            {selectedPreference === "Email" ? (
              <>
                <Mail className="w-4 h-4 text-cyan-300" />
                <span>Submit Specification & Send Email</span>
              </>
            ) : selectedPreference === "Instagram" ? (
              <>
                <Instagram className="w-4 h-4 text-pink-300" />
                <span>Submit Specification & Open Instagram DM</span>
              </>
            ) : (
              <>
                <MessageSquareCode className="w-4 h-4 text-emerald-300" />
                <span>Submit Specification & Connect on WhatsApp</span>
              </>
            )}
          </>
        )}
      </button>
    </form>
  );
}
