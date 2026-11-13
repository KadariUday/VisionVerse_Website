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
    whatsappUrl: string;
    values: EnquiryFormValues;
  } | null>(null);
  const [copied, setCopied] = useState(false);

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

      // Success
      setSuccessData({
        enquiryNumber: resData.enquiryNumber,
        whatsappUrl: resData.whatsappUrl,
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

      // Automatically open WhatsApp in a new tab
      if (resData.whatsappUrl) {
        const win = window.open(resData.whatsappUrl, "_blank");
        if (!win) {
          // If popup blocked, user will click the explicit continue button in the success view
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
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // SUCCESS CONFIRMATION SCREEN
  if (successData) {
    return (
      <div className="rounded-3xl bg-[#0D1127] border border-emerald-500/40 p-8 md:p-12 shadow-glow-md text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
            Enquiry Recorded Successfully!
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-white">
            Thank You, {successData.values.fullName}!
          </h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Your project details have been safely registered into our system. Your unique reference number is:
          </p>
        </div>

        {/* Unique Enquiry ID Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#080B1C] border border-purple-500/40 font-mono text-lg font-bold text-white shadow-inner">
          <span className="text-purple-400">ID:</span>
          <span>{successData.enquiryNumber}</span>
          <button
            onClick={handleCopyId}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            title="Copy Enquiry ID"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* WhatsApp Notification Prompt */}
        <div className="p-6 rounded-2xl bg-[#111633] border border-emerald-500/30 max-w-lg mx-auto space-y-4 text-left">
          <div className="flex items-start gap-3">
            <MessageSquareCode className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">
                Next Step: Continue in WhatsApp
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                We've prepared your complete message. Click below to open WhatsApp, then simply click <strong className="text-emerald-400">Send</strong> to start chatting directly with Kadari Uday.
              </p>
            </div>
          </div>

          <a
            href={successData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 transition-all shadow-glow-sm"
          >
            <span>Open WhatsApp Chat Now</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Fallback Option */}
        <div className="text-xs text-slate-400 pt-2 space-y-1">
          <p>
            WhatsApp not opening? You can also email us directly at{" "}
            <a
              href={`mailto:${siteConfig.owner.email}?subject=Project Enquiry ${successData.enquiryNumber}`}
              className="text-purple-400 hover:underline"
            >
              {siteConfig.owner.email}
            </a>
          </p>
          <button
            onClick={() => setSuccessData(null)}
            className="text-slate-500 hover:text-slate-300 text-xs underline pt-2"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  // ACTIVE ENQUIRY FORM
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl bg-[#0D1127]/90 border border-purple-500/20 p-6 md:p-10 shadow-2xl backdrop-blur-xl space-y-6"
    >
      <div className="space-y-1 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PROJECT ENQUIRY SYSTEM</span>
        </div>
        <h3 className="text-xl md:text-2xl font-black text-white">
          Tell Us About Your Project
        </h3>
        <p className="text-xs text-slate-400">
          Fill in your details below. Once submitted, your enquiry is saved in our database and opens instantly in WhatsApp.
        </p>
      </div>

      {submitError && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-300 text-xs">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
          <div>
            <div className="font-bold">Submission Notice</div>
            <div>{submitError}</div>
          </div>
        </div>
      )}

      {/* Row 1: Full Name & WhatsApp Number */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
            <span>Full Name *</span>
            <span className="text-[10px] text-slate-500">e.g. Rahul Sharma</span>
          </label>
          <input
            {...register("fullName")}
            type="text"
            placeholder="Your Full Name"
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-[#080B1C] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors",
              errors.fullName ? "border-rose-500" : "border-slate-800 focus:border-purple-400"
            )}
          />
          {errors.fullName && (
            <p className="text-rose-400 text-xs">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
            <span>WhatsApp Number *</span>
            <span className="text-[10px] text-slate-500">10-digit mobile number</span>
          </label>
          <input
            {...register("whatsappNumber")}
            type="tel"
            placeholder="e.g. 9392438853"
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-[#080B1C] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors",
              errors.whatsappNumber ? "border-rose-500" : "border-slate-800 focus:border-purple-400"
            )}
          />
          {errors.whatsappNumber && (
            <p className="text-rose-400 text-xs">{errors.whatsappNumber.message}</p>
          )}
        </div>
      </div>

      {/* Row 2: Email & Customer Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">
            Email Address *
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="name@example.com"
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-[#080B1C] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors",
              errors.email ? "border-rose-500" : "border-slate-800 focus:border-purple-400"
            )}
          />
          {errors.email && (
            <p className="text-rose-400 text-xs">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">
            Customer Type *
          </label>
          <select
            {...register("customerType")}
            className="w-full px-4 py-3 rounded-xl bg-[#080B1C] border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-400 transition-colors"
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
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">
            Service Required *
          </label>
          <select
            {...register("serviceRequired")}
            className="w-full px-4 py-3 rounded-xl bg-[#080B1C] border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-400 transition-colors"
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

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">
            Project Budget *
          </label>
          <select
            {...register("budget")}
            className="w-full px-4 py-3 rounded-xl bg-[#080B1C] border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-400 transition-colors"
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
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
          <span>Project Description *</span>
          <span className="text-[10px] text-slate-500">Be as descriptive as you like</span>
        </label>
        <textarea
          {...register("projectDescription")}
          rows={4}
          placeholder="Describe your idea, desired features, target deadline, or any special requirements..."
          className={cn(
            "w-full px-4 py-3 rounded-xl bg-[#080B1C] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors",
            errors.projectDescription ? "border-rose-500" : "border-slate-800 focus:border-purple-400"
          )}
        />
        {errors.projectDescription && (
          <p className="text-rose-400 text-xs">{errors.projectDescription.message}</p>
        )}
      </div>

      {/* Row 5: Preferred Contact, Expected Delivery & Reference URL */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">
            Preferred Contact *
          </label>
          <select
            {...register("contactPreference")}
            className="w-full px-4 py-3 rounded-xl bg-[#080B1C] border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-400 transition-colors"
          >
            <option value="WhatsApp">WhatsApp (Fastest)</option>
            <option value="Email">Email</option>
            <option value="Instagram">Instagram DM</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Expected Delivery (Optional)</span>
          </label>
          <input
            {...register("deliveryDate")}
            type="text"
            placeholder="e.g. Within 3 days / by Dec 1"
            className="w-full px-4 py-3 rounded-xl bg-[#080B1C] border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
            <LinkIcon className="w-3.5 h-3.5 text-slate-400" />
            <span>Reference URL (Optional)</span>
          </label>
          <input
            {...register("referenceUrl")}
            type="url"
            placeholder="https://example.com"
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-[#080B1C] border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors",
              errors.referenceUrl ? "border-rose-500" : "border-slate-800"
            )}
          />
          {errors.referenceUrl && (
            <p className="text-rose-400 text-xs">{errors.referenceUrl.message}</p>
          )}
        </div>
      </div>

      {/* Trust Notice */}
      <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>Your contact info is strictly confidential and never shared with third parties.</span>
      </div>

      {/* Big Submit Button */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 px-8 rounded-2xl text-base font-black text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 shadow-glow-md hover:shadow-glow-pink transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wide"
      >
        {submitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Securing Enquiry & Connecting to WhatsApp...</span>
          </>
        ) : (
          <>
            <MessageSquareCode className="w-5 h-5 text-cyan-300" />
            <span>SUBMIT ENQUIRY & CONTINUE TO WHATSAPP</span>
          </>
        )}
      </button>
    </form>
  );
}
