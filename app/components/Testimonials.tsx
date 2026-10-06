import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold shadow-sm">
            Customer Satisfaction
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-6">
            Building Our Reputation One Clean at a Time
          </h2>

          <p className="text-slate-600 text-lg lg:text-xl mt-5 max-w-3xl mx-auto leading-8">
            Volunteer State Cleaners is committed to providing dependable,
            professional service and quality results throughout Middle
            Tennessee.
          </p>
        </div>

        {/* Customer Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Professional Service */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
            <div className="text-5xl mb-5" aria-hidden="true">
              ⭐
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Professional Service
            </h3>

            <p className="text-slate-600 mt-4 leading-7">
              We believe in earning our customers' trust through dependable
              communication, professional service, and attention to detail.
            </p>
          </div>

          {/* Local Company */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
            <div className="text-5xl mb-5" aria-hidden="true">
              🏡
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Proudly Local
            </h3>

            <p className="text-slate-600 mt-4 leading-7">
              We proudly serve homeowners, HOAs, apartment communities,
              businesses, and commercial properties throughout Middle
              Tennessee.
            </p>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
            <div className="text-5xl mb-5" aria-hidden="true">
              💬
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Your Review Matters
            </h3>

            <p className="text-slate-600 mt-4 mb-6 leading-7">
              We're building our customer base and look forward to showcasing
              real customer experiences as Volunteer State Cleaners grows.
            </p>

            <Link
              href="/quote"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition shadow-md"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center mt-14">
          <p className="text-slate-700 font-semibold text-lg">
            Professional cleaning. Dependable service. Proudly serving Middle
            Tennessee.
          </p>
        </div>
      </div>
    </section>
  );
}
