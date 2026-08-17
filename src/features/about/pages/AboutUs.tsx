import { Link } from "react-router-dom";
import OrderYourCake from "../../home/components/OrderYourCake";
import TestimonialCarousel from "../../home/components/TestimonialCarousel";
import CoreFeatures from "../components/CoreFeatures";
import BakerTeam from "../components/BakerTeam";
import PageHero from "../../../shared/components/PageHero";
import { cakeImages } from "../../../data/images";
import { COMPANY } from "../../../shared/constants/company";

export default function AboutUs() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle={`${COMPANY.legalName} — homemade cakes from ${COMPANY.location}.`}
        image={cakeImages.kitchen}
        crumb="About Us"
      />
      <section className="max-w-5xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-3xl font-display font-semibold text-forest mb-4">
            A home bakery for cakes made to order
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            From My Oven is the name on the box. We bake birthday, wedding and
            celebration cakes from our kitchen in {COMPANY.location} — small batches,
            real butter, and time to do the finish properly.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            You can choose a cake from the menu or send us a photo, a guest count
            and a date. We reply on WhatsApp with a size, a flavour and a pickup
            or delivery time.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/cakes" className="bg-primary text-white px-5 py-2.5 rounded-full font-medium">
              Browse cakes
            </Link>
            <Link to="/bakers" className="border border-primary text-primary px-5 py-2.5 rounded-full font-medium">
              Meet our baker
            </Link>
          </div>
        </div>
      </section>
      <OrderYourCake />
      <CoreFeatures />
      <BakerTeam />
      <TestimonialCarousel />
    </>
  );
}
