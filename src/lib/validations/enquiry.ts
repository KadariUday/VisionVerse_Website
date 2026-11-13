import { z } from "zod";

// Phone regex that supports 10-digit Indian numbers with optional +91 or 91 prefix or 10-digit standalone
const indianPhoneRegex = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full Name must be at least 2 characters")
    .max(100, "Full Name must be under 100 characters"),
  
  whatsappNumber: z
    .string()
    .trim()
    .refine((val) => {
      const cleaned = val.replace(/[\s\-\(\)]/g, "");
      return indianPhoneRegex.test(cleaned) || /^\d{10,14}$/.test(cleaned);
    }, "Please enter a valid 10-digit WhatsApp number (e.g., 9392438853)"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(120, "Email must be under 120 characters"),

  customerType: z.enum([
    "Student",
    "Startup",
    "Business",
    "Individual",
    "Other",
  ], {
    errorMap: () => ({ message: "Please select your customer profile" }),
  }),

  serviceRequired: z.enum([
    "Resume Build",
    "Portfolio Website",
    "College Project",
    "Training & Learn",
    "Business Website",
    "E-commerce Website",
    "AI Application",
    "Custom Web Application",
    "Other",
  ], {
    errorMap: () => ({ message: "Please select the service required" }),
  }),

  budget: z.enum([
    "Below ₹500",
    "₹500–₹1,000",
    "₹1,000–₹3,000",
    "₹3,000–₹5,000",
    "Above ₹5,000",
    "Not Decided",
  ], {
    errorMap: () => ({ message: "Please select your estimated budget" }),
  }),

  projectDescription: z
    .string()
    .trim()
    .min(10, "Please provide at least 10 characters describing your project or idea")
    .max(2500, "Description cannot exceed 2500 characters"),

  contactPreference: z.enum(["WhatsApp", "Email", "Instagram"], {
    errorMap: () => ({ message: "Please choose your preferred contact channel" }),
  }),

  deliveryDate: z.string().optional().nullable(),

  referenceUrl: z
    .string()
    .trim()
    .optional()
    .nullable()
    .refine(
      (val) => !val || val === "" || /^https?:\/\/.+/.test(val),
      "Please enter a valid URL beginning with http:// or https://"
    ),
  
  attachmentPath: z.string().optional().nullable(),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;
