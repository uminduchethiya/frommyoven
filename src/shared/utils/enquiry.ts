import { COMPANY } from "../constants/company";

export type EnquiryType = "cake" | "baker" | "custom" | "contact";

export interface EnquiryPayload {
  type: EnquiryType;
  name: string;
  email: string;
  phone: string;
  message: string;
  contextTitle?: string;
  contextDetails?: string;
}

export interface StoredEnquiry extends EnquiryPayload {
  id: number;
  createdAt: string;
}

const STORAGE_KEY = "frommyoven-enquiries";

export function saveEnquiry(payload: EnquiryPayload): StoredEnquiry {
  const enquiry: StoredEnquiry = {
    ...payload,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  };

  try {
    const existing: StoredEnquiry[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify([enquiry, ...existing]));
  } catch {
    // Ignore storage errors in private browsing
  }

  return enquiry;
}

export function formatEnquiryMessage(payload: EnquiryPayload): string {
  const lines = [
    `Hello ${COMPANY.brand},`,
    "",
    `I would like to enquire about: ${payload.contextTitle || payload.type}.`,
  ];

  if (payload.contextDetails) {
    lines.push("", payload.contextDetails);
  }

  lines.push(
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    "",
    "Message:",
    payload.message
  );

  return lines.join("\n");
}

export function openWhatsApp(message: string) {
  window.open(
    `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );
}

export function openMailto(subject: string, body: string) {
  window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function submitEnquiry(payload: EnquiryPayload) {
  const saved = saveEnquiry(payload);
  const message = formatEnquiryMessage(payload);
  const subject = `${payload.contextTitle || "Cake enquiry"} — ${payload.name}`;
  openWhatsApp(message);
  return { saved, message, subject };
}
