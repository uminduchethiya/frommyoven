import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import PageHero from "../../../shared/components/PageHero";
import { occasionsData } from "../../occasions/data/occasionsData";
import { CAKE_CATEGORIES } from "../../cakes/data/cakesData";
import { cakeImages } from "../../../data/images";
import { openMailto, openWhatsApp, saveEnquiry } from "../../../shared/utils/enquiry";

const frostings = ["Buttercream", "Ganache", "Cream cheese", "Whipped cream", "Fondant accents", "Mix"];
const deliveries = ["Pickup from kitchen", "Home delivery", "Office delivery", "Venue setup"];
const budgets = ["Under LKR 6,000", "LKR 6,000–12,000", "LKR 12,000–25,000", "LKR 25,000+", "Flexible"];

export default function CustomOrder() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    arrivalDate: "",
    departureDate: "",
    adults: 12,
    children: 0,
    tourType: "Birthday Cakes",
    budget: "Flexible",
    hotelCategory: "Buttercream",
    vehicleType: "Pickup from kitchen",
    airportPickup: "Yes",
    airportDropoff: "No",
    specialRequests: "",
  });
  const [destinations, setDestinations] = useState<string[]>(["Birthday", "Any Celebration"]);
  const [sent, setSent] = useState<string | null>(null);

  const toggleDestination = (name: string) => {
    setDestinations((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "adults" || name === "children" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = [
      `Event date: ${form.arrivalDate || "not set"}`,
      `Delivery / pickup date: ${form.departureDate || "not set"}`,
      `Servings: ${form.adults}`,
      `Kids portions: ${form.children}`,
      `Occasions: ${destinations.join(", ") || "not selected"}`,
      `Cake type: ${form.tourType}`,
      `Budget: ${form.budget}`,
      `Frosting: ${form.hotelCategory}`,
      `Delivery: ${form.vehicleType}`,
      `Message on cake: ${form.airportPickup}`,
      `Candles included: ${form.airportDropoff}`,
      `Special requests: ${form.specialRequests || "none"}`,
    ].join("\n");

    const message = [
      "Hello From My Oven,",
      "",
      "I would like to order a custom cake.",
      "",
      details,
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
    ].join("\n");

    saveEnquiry({
      type: "custom",
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: details,
      contextTitle: "Custom cake order",
      contextDetails: details,
    });
    openWhatsApp(message);
    setSent(message);
  };

  return (
    <>
      <PageHero
        title="Custom Cake Order"
        subtitle="Tell us the date, servings and style. We will reply with a size, flavour and price."
        image={cakeImages.wedding}
        crumb="Custom Order"
      />

      <section className="max-w-5xl mx-auto px-4 pb-20">
        {sent ? (
          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
            <h2 className="text-2xl font-display font-semibold mb-2">Order ready</h2>
            <p className="text-gray-600 mb-6">
              WhatsApp should have opened with your custom cake request. You can also email it to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={() => openWhatsApp(sent)} className="bg-[#25D366] text-white px-6 py-3 rounded-full">
                Open WhatsApp
              </button>
              <button
                onClick={() => openMailto("Custom cake order", sent)}
                className="bg-primary text-white px-6 py-3 rounded-full"
              >
                Send by Email
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
            <div>
              <h2 className="text-2xl font-display font-semibold text-forest mb-1">Your cake details</h2>
              <p className="text-gray-500 text-sm">We use this to suggest a size, flavour and finish.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Event date">
                <input type="date" name="arrivalDate" value={form.arrivalDate} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Pickup / delivery date">
                <input type="date" name="departureDate" value={form.departureDate} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Servings">
                <input type="number" min={1} name="adults" value={form.adults} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Kids portions">
                <input type="number" min={0} name="children" value={form.children} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Cake type">
                <select name="tourType" value={form.tourType} onChange={handleChange} className={inputClass}>
                  {CAKE_CATEGORIES.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </Field>
              <Field label="Budget range">
                <select name="budget" value={form.budget} onChange={handleChange} className={inputClass}>
                  {budgets.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </Field>
              <Field label="Frosting">
                <select name="hotelCategory" value={form.hotelCategory} onChange={handleChange} className={inputClass}>
                  {frostings.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </Field>
              <Field label="How you want it">
                <select name="vehicleType" value={form.vehicleType} onChange={handleChange} className={inputClass}>
                  {deliveries.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </Field>
              <Field label="Message on cake">
                <select name="airportPickup" value={form.airportPickup} onChange={handleChange} className={inputClass}>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </Field>
              <Field label="Include candles">
                <select name="airportDropoff" value={form.airportDropoff} onChange={handleChange} className={inputClass}>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </Field>
            </div>

            <div>
              <h3 className="font-semibold text-forest mb-3">Occasion</h3>
              <p className="text-sm text-gray-500 mb-3">Select as many as you like.</p>
              <div className="flex flex-wrap gap-2">
                {occasionsData.map((occasion) => {
                  const selected = destinations.includes(occasion.name);
                  return (
                    <button
                      type="button"
                      key={occasion.slug}
                      onClick={() => toggleDestination(occasion.name)}
                      className={`px-4 py-2 rounded-full text-sm border transition ${
                        selected
                          ? "bg-primary text-white border-primary"
                          : "bg-sand text-forest border-transparent hover:border-primary"
                      }`}
                    >
                      {occasion.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Field label="Your name">
                <input name="name" required value={form.name} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Email">
                <input type="email" name="email" required value={form.email} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="WhatsApp / phone">
                <input name="phone" required value={form.phone} onChange={handleChange} className={inputClass} />
              </Field>
            </div>

            <Field label="Special requests">
              <textarea
                name="specialRequests"
                value={form.specialRequests}
                onChange={handleChange}
                rows={4}
                placeholder="Allergies, colours, photo cake, flavour notes, delivery address..."
                className={inputClass}
              />
            </Field>

            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-full font-semibold text-lg hover:bg-[#9a5a3d] transition"
            >
              Request Custom Cake
            </button>
          </form>
        )}
      </section>
    </>
  );
}

const inputClass =
  "w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-600 mb-1.5">{label}</span>
      {children}
    </label>
  );
}
