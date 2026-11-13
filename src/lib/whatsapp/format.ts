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

export function formatEmailSubject(data: EnquiryFormValues, enquiryId: string): string {
  return `[VISION VERSE24 Enquiry #${enquiryId}] ${data.serviceRequired} - ${data.fullName}`;
}

export function formatEmailBody(data: EnquiryFormValues, enquiryId: string): string {
  const lines: string[] = [
    `Hello Vision Verse24 Team,`,
    ``,
    `I would like to commission a project with Vision Verse24. Here are my project specifications:`,
    ``,
    `========================================`,
    `COMMISSION SPECIFICATION - #${enquiryId}`,
    `========================================`,
    `• Enquiry Reference ID : ${enquiryId}`,
    `• Full Name            : ${data.fullName}`,
    `• WhatsApp / Phone     : ${data.whatsappNumber}`,
    `• Email Address        : ${data.email}`,
    `• Client Profile       : ${data.customerType}`,
    `• Service Required     : ${data.serviceRequired}`,
    `• Budget Tier          : ${data.budget}`,
  ];

  if (data.deliveryDate && data.deliveryDate.trim() !== "") {
    lines.push(`• Expected Delivery    : ${data.deliveryDate}`);
  }

  if (data.referenceUrl && data.referenceUrl.trim() !== "") {
    lines.push(`• Reference URL        : ${data.referenceUrl}`);
  }

  lines.push(
    ``,
    `----------------------------------------`,
    `Project Description:`,
    `----------------------------------------`,
    data.projectDescription,
    ``,
    `----------------------------------------`,
    `Preferred Channel: ${data.contactPreference}`,
    ``,
    `Please review my specification and reply to this email or contact me on WhatsApp at ${data.whatsappNumber}.`,
    ``,
    `Thank you,`,
    data.fullName
  );

  return lines.join("\n");
}

export function buildMailtoUrl(toEmail: string, data: EnquiryFormValues, enquiryId: string): string {
  const subject = formatEmailSubject(data, enquiryId);
  const body = formatEmailBody(data, enquiryId);
  return `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildGmailWebUrl(toEmail: string, data: EnquiryFormValues, enquiryId: string): string {
  const subject = formatEmailSubject(data, enquiryId);
  const body = formatEmailBody(data, enquiryId);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function formatInstagramMessage(data: EnquiryFormValues, enquiryId: string): string {
  const lines: string[] = [
    `🚀 Hello Vision Verse24! (@vision_verse24)`,
    ``,
    `I just submitted a project enquiry on your website:`,
    ``,
    `📋 Commission ID: ${enquiryId}`,
    `• Name: ${data.fullName}`,
    `• Service: ${data.serviceRequired}`,
    `• Budget: ${data.budget}`,
    `• WhatsApp: ${data.whatsappNumber}`,
    `• Email: ${data.email}`,
  ];

  if (data.deliveryDate && data.deliveryDate.trim() !== "") {
    lines.push(`• Delivery: ${data.deliveryDate}`);
  }

  if (data.referenceUrl && data.referenceUrl.trim() !== "") {
    lines.push(`• Reference: ${data.referenceUrl}`);
  }

  lines.push(
    ``,
    `📝 Description:`,
    data.projectDescription,
    ``,
    `Looking forward to collaborating with you!`
  );

  return lines.join("\n");
}

export function buildInstagramUrl(handle: string = "vision_verse24"): string {
  const cleanHandle = handle.replace(/^@/, "");
  return `https://ig.me/m/${cleanHandle}`;
}
