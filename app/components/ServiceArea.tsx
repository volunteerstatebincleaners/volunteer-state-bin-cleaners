import Link from "next/link";

const cities = [
  "Nashville",
  "Murfreesboro",
  "Franklin",
  "Hendersonville",
  "Gallatin",
  "Mt. Juliet",
  "Lebanon",
  "Smyrna",
  "La Vergne",
  "Brentwood",
  "Spring Hill",
  "Columbia",
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
            Proudly Serving
          </span>

          <h2 className="text-5xl font-black text-slate-900 mt-6">
            Middle Tennessee
          </h2>

          <p className="text-slate-600 text-xl mt-5 max-w-3xl mx-auto">
            Volunteer State Bin Cleaners proudly provides residential,
            commercial, HOA, and apartment trash bin cleaning throughout
            Middle Tennessee.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">

          {cities.map((city) => (
            <div
              key={city}
              className="bg-slate-100 rounded-xl p-5 text-center font-semibold hover:bg-red-600 hover:text-white transition"
            >
              {city}
            </div>
          ))}

        </div>

        <div className="bg-slate-900 rounded-3xl p-12 text-center text-white">

          <h3 className="text-4xl font-bold">
            Don't See Your City?
          </h3>

          <p className="text-slate-300 mt-5 text-lg">
            Contact us today. We're expanding throughout Middle Tennessee
            and may already service your area.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <a
              href="tel:9312130332"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold transition"
            >
              Call Now
            </a>

            <Link
              href="/quote"
              className="bg-white text-slate-900 hover:bg-slate-200 px-8 py-4 rounded-xl font-bold transition"
            >
              Request a Quote
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}