import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import ServiceArea from "./components/ServiceArea";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import QuoteForm from "./components/QuoteForm";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <ServiceArea />
      <Testimonials />
      <FAQ />
      <QuoteForm />
      <CallToAction />
      <Footer />
    </>
  );
}
