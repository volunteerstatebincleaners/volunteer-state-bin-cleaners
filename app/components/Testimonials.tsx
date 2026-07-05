import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
            Customer Satisfaction
          </span>

          <h2 className="text-5xl font-black text-slate-900 mt-6">
            Building Our Reputation One Clean Bin at a Time
          </h2>

          <p className="text-slate-600 text-xl mt-5 max-w-3xl mx-auto">
            Volunteer State Bin Cleaners is committed to delivering reliable,
            professional service throughout Middle Tennessee.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <div className="text-5xl mb-5">⭐</div>

            <h3 className="text-2xl font-bold">
              Honest Service
            </h3>

            <p className="text-slate-600 mt-4">
              We believe in earning every review through dependable service,
              professionalism, and great results.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <div className="text-5xl mb-5">🏡</div>

            <h3 className="text-2xl font-bold">
              Local Company
            </h3>

            <p className="text-slate-600 mt-4">
              Proudly serving homeowners, HOAs, apartment communities,
              and businesses across Middle Tennessee.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <div className="text-5xl mb-5">💬</div>

            <h3 className="text-2xl font-bold">
              Your Review Matters
            </h3>

            <p className="text-slate-600 mt-4 mb-6">
              As we grow, we look forward to sharing real customer
              experiences right here.
            </p>

            <Link
              href="/quote"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition"
            >
              Become Our Next Customer
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}