import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import "./index.css";
import Layout from "./shared/layouts/Layout";
import Home from "./features/home/pages/HomePage";
import AboutUs from "./features/about/pages/AboutUs";
import ContactUs from "./features/contact/pages/ContactUs";
import CakesList from "./features/cakes/pages/CakesList";
import CakeSingle from "./features/cakes/pages/CakeSingle";
import CustomOrder from "./features/custom-order/pages/CustomOrder";
import GalleryPage from "./features/gallery/pages/GalleryPage";
import BakersPage from "./features/bakers/pages/BakersPage";
import OccasionsList from "./features/occasions/pages/OccasionsList";
import OccasionSingle from "./features/occasions/pages/OccasionSingle";

function RedirectCake() {
  const { id } = useParams();
  return <Navigate to={`/cakes/${id}`} replace />;
}

function RedirectOccasion() {
  const { slug } = useParams();
  return <Navigate to={`/occasions/${slug}`} replace />;
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contactus" element={<Navigate to="/contact" replace />} />
        <Route path="/cakes" element={<CakesList />} />
        <Route path="/tours" element={<Navigate to="/cakes" replace />} />
        <Route path="/tourslist" element={<Navigate to="/cakes" replace />} />
        <Route path="/cakes/:id" element={<CakeSingle />} />
        <Route path="/tours/:id" element={<RedirectCake />} />
        <Route path="/custom-order" element={<CustomOrder />} />
        <Route path="/plan-your-tour" element={<Navigate to="/custom-order" replace />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/bakers" element={<BakersPage />} />
        <Route path="/drivers" element={<Navigate to="/bakers" replace />} />
        <Route path="/occasions" element={<OccasionsList />} />
        <Route path="/destinations" element={<Navigate to="/occasions" replace />} />
        <Route path="/occasions/:slug" element={<OccasionSingle />} />
        <Route path="/destinations/:slug" element={<RedirectOccasion />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
