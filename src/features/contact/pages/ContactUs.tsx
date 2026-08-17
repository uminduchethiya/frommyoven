import { MapPin, Phone, Mail } from "lucide-react";
import PageHero from "../../../shared/components/PageHero";
import EnquiryForm from "../../../shared/components/EnquiryForm";
import { COMPANY } from "../../../shared/constants/company";
import { cakeImages } from "../../../data/images";

export default function ContactUs() {
  const contactInfo = [
    { icon: MapPin, title: "Kitchen", details: [COMPANY.location] },
    { icon: Phone, title: "Phone / WhatsApp", details: [COMPANY.phone] },
    { icon: Mail, title: "Email", details: [COMPANY.email] },
  ];

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Ask about a menu cake, a custom design, a tasting or a delivery slot."
        image={cakeImages.bakery}
        crumb="Contact"
      />

      <section className="py-8 pb-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="bg-white p-8 rounded-3xl text-center shadow-sm">
                  <div className="flex justify-center mb-4">
                    <div className="bg-sand p-4 rounded-full">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-forest mb-2">{info.title}</h3>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <iframe
              src={COMPANY.mapEmbed}
              width="100%"
              height="520"
              className="rounded-3xl border-0 shadow-sm"
              loading="lazy"
              title="Kitchen location"
            />
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-forest mb-5">Send a message</h2>
              <EnquiryForm type="contact" contextTitle="General contact" submitLabel="Send Message" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
