import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import ServiceArea from "./components/ServiceArea";
import FAQ from "./components/FAQ";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <WhyChooseUs />

        <HowItWorks />

        <Pricing />

        <ServiceArea />

        <FAQ />

        <QuoteForm />
      </main>

      <Footer />
    </>
  );
}