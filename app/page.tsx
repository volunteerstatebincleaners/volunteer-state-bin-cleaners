import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import ServicesOverview from "./components/ServicesOverview";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import ServiceArea from "./components/ServiceArea";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Main Hero Section */}
        <Hero />

        {/* Why Choose Volunteer State Cleaners */}
        <WhyChooseUs />

        {/* Cleaning & Exterior Services */}
        <ServicesOverview />

        {/* How Our Services Work */}
        <HowItWorks />

        {/* Pricing & Service Options */}
        <Pricing />

        {/* Middle Tennessee Service Areas */}
        <ServiceArea />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer & Final Call To Action */}
      <Footer />
    </>
  );
}
