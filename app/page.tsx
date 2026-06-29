import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import BeforeAfter from "./components/BeforeAfter";
import CallToAction from "./components/CallToAction";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BeforeAfter />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Gallery />
      <CallToAction />
    </>
  );
}
