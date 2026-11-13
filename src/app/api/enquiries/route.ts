import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validations/enquiry";
import { getServiceRoleClient } from "@/lib/supabase/server";
import { saveLocalEnquiry, getLocalEnquiries } from "@/lib/supabase/mock-db";
import {
  formatWhatsAppMessage,
  buildWhatsAppUrl,
  buildMailtoUrl,
  buildGmailWebUrl,
  formatEmailBody,
  formatInstagramMessage,
  buildInstagramUrl,
} from "@/lib/whatsapp/format";
import { siteConfig } from "@/config/site";

// Simple in-memory rate-limiter by IP (10 requests per minute per IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const current = rateLimitMap.get(ip);

  if (!current || now > current.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (current.count >= 10) {
    return false;
  }

  current.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.ip || "127.0.0.1";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before trying again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parseResult = enquirySchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;
    let enquiryId: string;
    let enquiryNumber: string;

    const supabase = getServiceRoleClient();

    if (supabase) {
      try {
        const { data: dbData, error } = await supabase
          .from("enquiries")
          .insert({
            full_name: data.fullName,
            whatsapp_number: data.whatsappNumber,
            email: data.email,
            customer_type: data.customerType,
            service_required: data.serviceRequired,
            budget: data.budget,
            project_description: data.projectDescription,
            contact_preference: data.contactPreference,
            delivery_date: data.deliveryDate || null,
            reference_url: data.referenceUrl || null,
            attachment_path: data.attachmentPath || null,
            status: "new",
            ip_address: ip,
          })
          .select("id, enquiry_number")
          .single();

        if (error || !dbData) {
          console.error("Supabase insert error, falling back to local store:", error);
          const savedLocal = saveLocalEnquiry({
            full_name: data.fullName,
            whatsapp_number: data.whatsappNumber,
            email: data.email,
            customer_type: data.customerType,
            service_required: data.serviceRequired,
            budget: data.budget,
            project_description: data.projectDescription,
            contact_preference: data.contactPreference,
            delivery_date: data.deliveryDate,
            reference_url: data.referenceUrl,
            attachment_path: data.attachmentPath,
            status: "new",
          });
          enquiryId = savedLocal.id;
          enquiryNumber = savedLocal.enquiry_number;
        } else {
          enquiryId = dbData.id;
          enquiryNumber = dbData.enquiry_number;
        }
      } catch (err) {
        console.error("Error executing Supabase query:", err);
        const savedLocal = saveLocalEnquiry({
          full_name: data.fullName,
          whatsapp_number: data.whatsappNumber,
          email: data.email,
          customer_type: data.customerType,
          service_required: data.serviceRequired,
          budget: data.budget,
          project_description: data.projectDescription,
          contact_preference: data.contactPreference,
          delivery_date: data.deliveryDate,
          reference_url: data.referenceUrl,
          attachment_path: data.attachmentPath,
          status: "new",
        });
        enquiryId = savedLocal.id;
        enquiryNumber = savedLocal.enquiry_number;
      }
    } else {
      // Local fallback
      const savedLocal = saveLocalEnquiry({
        full_name: data.fullName,
        whatsapp_number: data.whatsappNumber,
        email: data.email,
        customer_type: data.customerType,
        service_required: data.serviceRequired,
        budget: data.budget,
        project_description: data.projectDescription,
        contact_preference: data.contactPreference,
        delivery_date: data.deliveryDate,
        reference_url: data.referenceUrl,
        attachment_path: data.attachmentPath,
        status: "new",
      });
      enquiryId = savedLocal.id;
      enquiryNumber = savedLocal.enquiry_number;
    }

    // Format communication channels payloads
    const ownerWhatsApp = process.env.NEXT_PUBLIC_OWNER_WHATSAPP_NUMBER || siteConfig.owner.whatsapp;
    const ownerEmail = process.env.NEXT_PUBLIC_OWNER_EMAIL || siteConfig.owner.email;
    const instagramHandle = siteConfig.socials.instagramHandle || "vision_verse24";

    const whatsappMessage = formatWhatsAppMessage(data, enquiryNumber);
    const whatsappUrl = buildWhatsAppUrl(ownerWhatsApp, whatsappMessage);

    const mailtoUrl = buildMailtoUrl(ownerEmail, data, enquiryNumber);
    const gmailWebUrl = buildGmailWebUrl(ownerEmail, data, enquiryNumber);
    const emailBody = formatEmailBody(data, enquiryNumber);

    const instagramMessage = formatInstagramMessage(data, enquiryNumber);
    const instagramUrl = buildInstagramUrl(instagramHandle);

    return NextResponse.json({
      success: true,
      enquiryId,
      enquiryNumber,
      contactPreference: data.contactPreference,
      whatsappUrl,
      whatsappMessage,
      mailtoUrl,
      gmailWebUrl,
      emailBody,
      ownerEmail,
      instagramUrl,
      instagramMessage,
      message: "Enquiry submitted and secured successfully!",
    });
  } catch (error: any) {
    console.error("Enquiry API POST error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again or reach us on WhatsApp directly." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    // Check admin authentication via cookie or Authorization header
    const authCookie = req.cookies.get("vv24_admin_token");
    const authHeader = req.headers.get("authorization");
    const validSecret = process.env.ADMIN_SECRET_KEY || "visionverse24-admin-dev-key";

    const isAuthorized =
      (authCookie && authCookie.value === validSecret) ||
      (authHeader && authHeader === `Bearer ${validSecret}`);

    if (!isAuthorized) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const supabase = getServiceRoleClient();
    if (supabase) {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        return NextResponse.json({ enquiries: data });
      }
    }

    // Fallback to local store
    const localEnquiries = getLocalEnquiries();
    return NextResponse.json({ enquiries: localEnquiries });
  } catch (error) {
    console.error("Enquiry API GET error:", error);
    return NextResponse.json({ error: "Failed to fetch enquiries" }, { status: 500 });
  }
}
