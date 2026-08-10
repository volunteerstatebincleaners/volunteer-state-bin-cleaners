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
    <section id="service-area" className="bg-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold">
            Proudly Serving
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-6">
            Middle Tennessee
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-5 leading-8">
            Volunteer State Bin Cleaners provides professional bin cleaning,
            pressure washing, and exterior cleaning services throughout
            Middle Tennessee.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          {cities.map((city) => (
            <div
              key={city}
              className="bg-white rounded-xl p-5 text-center font-semibold text-slate-800 shadow-sm hover:bg-red-600 hover:text-white transition"
            >
              {city}
            </div>
          ))}

        </div>

        <div className="bg-slate-900 rounded-3xl p-10 md:p-14 text-center text-white mt-14">

          <h3 className="text-3xl md:text-4xl font-black">
            Don't See Your City?
          </h3>

          <p className="text-slate-300 text-lg mt-5 max-w-2xl mx-auto leading-7">
            We're continuing to expand throughout Middle Tennessee.
            Contact us to see if we can provide service at your property.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <Link
              href="/quote"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold transition"
            >
              Request a Quote
            </Link>

            <a
              href="tel:9312130332"
              className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-bold transition"
            >
              Call (931) 213-0332
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}