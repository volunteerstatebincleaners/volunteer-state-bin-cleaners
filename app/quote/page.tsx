import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuoteForm from "../components/QuoteForm";

export default function QuotePage() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block bg-red-600 px-5 py-2 rounded-full font-semibold shadow-lg">
            Book Your Service
          </span>

          <h1 className="text-5xl md:text-6xl font-black mt-7">
            Let's Get Your Property Cleaned
          </h1>

          <p className="text-xl text-slate-300 mt-6 max-w-3xl mx-auto leading-8">
            Tell us what you need cleaned, where you're located, and a few
            details about your project. We'll review your request and contact
            you with pricing and availability.
          </p>

          {/* Service Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 text-sm md:text-base">
            <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-full">
              Pressure Washing
            </span>

            <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-full">
              Exterior Cleaning
            </span>

            <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-full">
              Bin Cleaning
            </span>

            <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-full">
              Commercial Cleaning
            </span>
          </div>
        </div>
      </section>

      {/* Quote / Booking Form */}
      <QuoteForm />

      {/* Footer */}
      <Footer />
    </>
  );
}
