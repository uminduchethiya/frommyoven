import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY, NAV_LINKS } from "../constants/company";
import { cakeImages, birthdayImages, weddingImages, celebrationImages } from "../../data/images";
import { openMailto } from "../utils/enquiry";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return;
    openMailto(
      "Newsletter signup",
      `Please add this email to the From My Oven newsletter: ${email}`
    );
    setEmail("");
  };

  const ovenPhotos = [
    { src: cakeImages.birthday, alt: "Birthday cake" },
    { src: cakeImages.wedding, alt: "Wedding cake" },
    { src: cakeImages.cupcakes, alt: "Cupcakes" },
    { src: birthdayImages[52], alt: "Jungle kids birthday cake" },
    { src: weddingImages[0], alt: "Wedding cake jars" },
    { src: celebrationImages[5], alt: "Celebration cake" },
  ];

  return (
    <footer className="relative mt-16 text-white" style={{ backgroundColor: "#3d2418" }}>
      <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-white">
                Fresh from our oven
              </h3>
              <p className="mt-2 text-sm" style={{ color: "#f3e8d8" }}>
                Seasonal flavours, pre-order dates and new cake designs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-5 py-3 rounded-full w-full sm:w-72 outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#ffffff",
                }}
              />
              <button
                onClick={handleSubscribe}
                className="px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2"
                style={{ backgroundColor: "#b76e4d", color: "#ffffff" }}
              >
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-3">
              <img
                src={COMPANY.logo}
                alt={COMPANY.brand}
                className="h-16 w-16 rounded-full object-contain bg-[#faf6f0]"
              />
              <span className="text-2xl font-bold">
                <span className="text-white">FROM MY</span>
                <span style={{ color: "#c4a35a" }}> OVEN</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "#f3e8d8" }}>
              {COMPANY.legalName} bakes homemade birthday, wedding and celebration
              cakes to order. Pickup from our Padukka kitchen, or delivery across
              Colombo and nearby towns.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-5">Explore</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition hover:underline"
                    style={{ color: "#f3e8d8" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-5">Get in touch</h4>
            <div className="space-y-4 text-sm" style={{ color: "#f3e8d8" }}>
              <a href={`tel:${COMPANY.phoneTel}`} className="flex items-start gap-3 hover:text-white">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <Phone className="w-4 h-4" />
                </span>
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 hover:text-white">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <Mail className="w-4 h-4" />
                </span>
                {COMPANY.email}
              </a>
              <p className="flex items-start gap-3">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <MapPin className="w-4 h-4" />
                </span>
                {COMPANY.location}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-5">From the oven</h4>
            <div className="grid grid-cols-3 gap-2">
              {ovenPhotos.map((image) => (
                <Link
                  key={image.alt}
                  to="/gallery"
                  className="aspect-square rounded-lg overflow-hidden bg-black/20"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div
          className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm"
          style={{ color: "#e8d5c4" }}
        >
          <p>
            © {new Date().getFullYear()} {COMPANY.brand} · {COMPANY.legalName}. All rights reserved.
          </p>
          <p>Homemade cakes, made to order</p>
        </div>
      </div>
    </footer>
  );
}
