import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import {
  openMailto,
  openWhatsApp,
  submitEnquiry,
  type EnquiryType,
} from "../utils/enquiry";

interface EnquiryFormProps {
  type: EnquiryType;
  contextTitle?: string;
  contextDetails?: string;
  submitLabel?: string;
}

export default function EnquiryForm({
  type,
  contextTitle,
  contextDetails,
  submitLabel = "Send Enquiry",
}: EnquiryFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState<{ message: string; subject: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = submitEnquiry({
      type,
      ...form,
      contextTitle,
      contextDetails,
    });
    setSent({ message: result.message, subject: result.subject });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  if (sent) {
    return (
      <div className="bg-sand rounded-2xl p-6 text-center">
        <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
        <h3 className="text-xl font-display font-semibold text-forest mb-2">
          Enquiry ready
        </h3>
        <p className="text-gray-600 text-sm mb-5">
          WhatsApp should have opened with this request. If it did not, send it
          again below. We also saved a copy in this browser.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => openWhatsApp(sent.message)}
            className="bg-[#25D366] text-white px-5 py-2.5 rounded-full font-medium"
          >
            Open WhatsApp
          </button>
          <button
            type="button"
            onClick={() => openMailto(sent.subject, sent.message)}
            className="bg-primary text-white px-5 py-2.5 rounded-full font-medium"
          >
            Send by Email
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {contextTitle && (
        <div className="bg-sand text-forest text-sm rounded-xl px-4 py-3">
          Enquiring about: <strong>{contextTitle}</strong>
        </div>
      )}
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        placeholder="Your name"
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        placeholder="Email"
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
      />
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        required
        placeholder="WhatsApp / phone"
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        required
        rows={5}
        placeholder="Event date, servings, flavour and any allergies"
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
      />
      <button
        type="submit"
        className="w-full bg-primary text-white font-semibold py-3 rounded-full hover:bg-[#9a5a3d] transition"
      >
        {submitLabel}
      </button>
    </form>
  );
}
