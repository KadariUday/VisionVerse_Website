import { EnquiryFormValues } from "@/lib/validations/enquiry";

export function formatWhatsAppMessage(data: EnquiryFormValues, enquiryId: string): string {
  const lines: string[] = [
    "🚀 *Hello Vision Verse24!*",
    "",
    "I am interested in your services and would like to discuss my project.",
    "",
    "📋 *ENQUIRY DETAILS*",
    `• *Enquiry ID:* ${enquiryId}`,
    `• *Name:* ${data.fullName}`,
    `• *WhatsApp:* ${data.whatsappNumber}`,
    `• *Email:* ${data.email}`,
    `• *Customer Type:* ${data.customerType}`,
    `• *Service Required:* ${data.serviceRequired}`,
    `• *Budget:* ${data.budget}`,
  ];

  if (data.deliveryDate && data.deliveryDate.trim() !== "") {
    lines.push(`• *Expected Delivery:* ${data.deliveryDate}`);
  }

  lines.push("", "📝 *Project Description:*", `${data.projectDescription}`);

  if (data.referenceUrl && data.referenceUrl.trim() !== "") {
    lines.push("", `🔗 *Reference:* ${data.referenceUrl}`);
  }

  lines.push(
    "",
    `📲 *Preferred Contact:* ${data.contactPreference}`,
    "",
    "Please let me know your availability to discuss this project.",
    "",
    "Thank you!",
    "— *Vision Verse24 Website Enquiry*"
  );

  return lines.join("\n");
}

export function buildWhatsAppUrl(
  phone: string,
  message: string
): string {
  // Strip non-numeric characters
  const cleanPhone = phone.replace(/\D/g, "");
  // Default to 919392438853 if phone is empty or malformed
  const targetPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone || "919392438853";
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${targetPhone}?text=${encodedText}`;
}
