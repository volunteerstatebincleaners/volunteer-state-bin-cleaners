import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
            Our Services
          </span>

          <h2 className="text-5xl font-black text-slate-900 mt-6">
            Professional Exterior Cleaning
          </h2>

          <p className="text-slate-600 text-xl mt-5 max-w-3xl mx-auto">
            Residential and commercial exterior cleaning solutions throughout Middle Tennessee.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Residential */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h3 className="text-3xl font-bold mb-6">
              🏠 Residential
            </h3>

            <ul className="space-y-4 text-lg">

              <li>✓ One-Time Bin Cleaning</li>
              <li>✓ Monthly Bin Cleaning</li>
              <li>✓ Trash & Recycling Bins</li>
              <li>✓ Driveway Pressure Washing</li>
              <li>✓ Sidewalk Pressure Washing</li>

            </ul>

            <Link
              href="/quote"
              className="block mt-10 bg-red-600 hover:bg-red-700 text-white text-center py-4 rounded-xl font-bold transition"
            >
              Book Now
            </Link>

          </div>

          {/* Commercial */}

          <div className="bg-red-600 text-white rounded-3xl shadow-2xl p-8 scale-105">

            <div className="bg-white text-red-600 inline-block px-4 py-2 rounded-full font-bold mb-6">
              MOST POPULAR
            </div>

            <h3 className="text-3xl font-bold mb-6">
              🏢 Commercial
            </h3>

            <ul className="space-y-4 text-lg">

              <li>✓ Commercial Bin Cleaning</li>
              <li>✓ Dumpster Pad Cleaning</li>
              <li>✓ Sidewalk Cleaning</li>
              <li>✓ Loading Areas</li>
              <li>✓ HOA Communities</li>
              <li>✓ Apartment Complexes</li>

            </ul>

            <Link
              href="/quote"
              className="block mt-10 bg-white text-red-600 hover:bg-slate-200 text-center py-4 rounded-xl font-bold transition"
            >
              Request Quote
            </Link>

          </div>

          {/* Specialty */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h3 className="text-3xl font-bold mb-6">
              ⭐ Specialty Services
            </h3>

            <ul className="space-y-4 text-lg">

              <li>✓ Crate & Tote Cleaning</li>
              <li>✓ Industrial Containers</li>
              <li>✓ Shipping Crates</li>
              <li>✓ Storage Totes</li>
              <li>✓ Custom Cleaning Projects</li>

            </ul>

            <Link
              href="/quote"
              className="block mt-10 bg-red-600 hover:bg-red-700 text-white text-center py-4 rounded-xl font-bold transition"
            >
              Get Started
            </Link>

          </div>

        </div>

        <div className="mt-14 bg-white rounded-2xl shadow p-8">

          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Pricing Information
          </h3>

          <p className="text-slate-600 leading-8">
            Prices are subject to change based on the size, condition,
            accessibility, and severity of cleaning required.
            Final pricing will always be confirmed before work begins.
          </p>

          <div className="border-t mt-8 pt-8">

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Water Supply
            </h3>

            <p className="text-slate-600 leading-8">
              If an outdoor water connection is available, we may use the
              customer's water supply to improve efficiency.
              If water is unavailable, simply let us know when requesting your quote
              so we can discuss available service options.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}