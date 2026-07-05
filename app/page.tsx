import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import BeforeAfter from "./components/BeforeAfter";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <WhyChooseUs />

        <HowItWorks />

        <BeforeAfter />

        <Pricing />

      </main>

      <Footer />
    </>
  );
}