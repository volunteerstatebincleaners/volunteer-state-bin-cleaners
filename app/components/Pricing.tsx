import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold shadow-sm">
            Services & Options
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-6">
            Professional Cleaning Solutions
          </h2>

          <p className="text-slate-600 text-lg lg:text-xl mt-5 max-w-3xl mx-auto leading-8">
            Residential, commercial, and specialty cleaning services designed
            to fit the needs of properties throughout Middle Tennessee.
          </p>
        </div>

        {/* Service Options */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Residential */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              🏠 Residential
            </h3>

            <p className="text-slate-600 leading-7 mb-6">
              Cleaning services designed to help homeowners keep their
              property and outdoor surfaces looking their best.
            </p>

            <ul className="space-y-4 text-lg text-slate-800">
              <li>✓ One-Time Bin Cleaning</li>
              <li>✓ Recurring Bin Cleaning</li>
              <li>✓ Trash & Recycling Bins</li>
              <li>✓ Driveway Pressure Washing</li>
              <li>✓ Sidewalk Pressure Washing</li>
              <li>✓ Exterior Cleaning</li>
            </ul>

            <Link
              href="/quote"
              className="block mt-10 bg-red-600 hover:bg-red-700 text-white text-center py-4 rounded-xl font-bold transition"
            >
              Book Now
            </Link>
          </div>

          {/* Commercial */}
          <div className="bg-red-600 text-white rounded-3xl shadow-2xl p-8 lg:scale-105">
            <div className="bg-white text-red-600 inline-block px-4 py-2 rounded-full font-bold mb-6">
              COMMERCIAL SERVICES
            </div>

            <h3 className="text-3xl font-bold mb-6">
              🏢 Commercial
            </h3>

            <p className="text-red-100 leading-7 mb-6">
              Professional cleaning services for businesses, property
              managers, HOAs, apartment communities, and commercial
              properties.
            </p>

            <ul className="space-y-4 text-lg">
              <li>✓ Commercial Bin Cleaning</li>
              <li>✓ Dumpster Pad Cleaning</li>
              <li>✓ Sidewalk & Concrete Cleaning</li>
              <li>✓ Exterior Pressure Washing</li>
              <li>✓ HOA Communities</li>
              <li>✓ Apartment Complexes</li>
              <li>✓ Commercial Properties</li>
            </ul>

            <Link
              href="/quote"
              className="block mt-10 bg-white text-red-600 hover:bg-slate-200 text-center py-4 rounded-xl font-bold transition"
            >
              Request a Quote
            </Link>
          </div>

          {/* Specialty */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              ⭐ Specialty Services
            </h3>

            <p className="text-slate-600 leading-7 mb-6">
              Cleaning solutions for reusable containers, equipment, and
              specialty projects.
            </p>

            <ul className="space-y-4 text-lg text-slate-800">
              <li>✓ Crate & Tote Cleaning</li>
              <li>✓ Industrial Containers</li>
              <li>✓ Shipping Crates</li>
              <li>✓ Storage Totes</li>
              <li>✓ Reusable Equipment</li>
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

        {/* Pricing Information */}
        <div className="mt-14 bg-white rounded-2xl shadow p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Pricing Information
          </h3>

          <p className="text-slate-600 leading-8">
            Pricing varies depending on the size, condition, accessibility,
            quantity, and severity of the cleaning required. Every property
            and project is different, so we provide customized pricing based
            on your specific needs. Final pricing will be confirmed before
            work begins.
          </p>

          {/* Water Supply */}
          <div className="border-t mt-8 pt-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Water Supply
            </h3>

            <p className="text-slate-600 leading-8">
              When an outdoor water connection is available, customer water
              may be preferred for certain services. If water is unavailable,
              let us know when requesting your quote so we can discuss the
              appropriate service options for your property.
            </p>
          </div>

          {/* Custom Projects */}
          <div className="border-t mt-8 pt-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Have a Larger Project?
            </h3>

            <p className="text-slate-600 leading-8">
              We work with homeowners, businesses, HOAs, apartment
              communities, property managers, and commercial clients. Contact
              us for a customized quote based on the size and scope of your
              project.
            </p>

            <Link
              href="/quote"
              className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
