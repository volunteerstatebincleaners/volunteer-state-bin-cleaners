import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuoteForm from "../components/QuoteForm";

export default function QuotePage() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
            Free Quote
          </span>

          <h1 className="text-5xl md:text-6xl font-black mt-6">
            Request Your Free Quote
          </h1>

          <p className="text-xl text-slate-300 mt-6 max-w-3xl mx-auto">
            Whether you need a one-time cleaning, recurring residential
            service, HOA community cleaning, or commercial service,
            we'll provide a fast, free quote.
          </p>

        </div>
      </section>

      <QuoteForm />

      <Footer />
    </>
  );
}