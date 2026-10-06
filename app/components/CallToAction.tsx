import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-red-600 text-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <span className="inline-block bg-white text-red-600 px-5 py-2 rounded-full font-bold shadow-sm">
          Volunteer State Cleaners
        </span>

        <h2 className="text-4xl lg:text-5xl font-black mt-6">
          Ready for a Cleaner Property?
        </h2>

        {/* Description */}
        <p className="mt-6 text-xl text-red-50 max-w-3xl mx-auto leading-8">
          From pressure washing and exterior cleaning to trash bin cleaning
          and commercial services, Volunteer State Cleaners is ready to help
          keep your property looking its best.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Link
            href="/quote"
            className="bg-white text-red-600 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold transition shadow-lg"
          >
            Book Now
          </Link>

          <a
            href="tel:9312130332"
            className="border-2 border-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-xl font-bold transition"
          >
            Call (931) 213-0332
          </a>
        </div>

        {/* Service Area */}
        <p className="mt-8 text-red-100 font-semibold">
          Proudly serving Middle Tennessee
        </p>
      </div>
    </section>
  );
}
