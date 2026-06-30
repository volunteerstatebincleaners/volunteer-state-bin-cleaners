import Link from "next/link";
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="max-w-3xl">
          <span className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            Veteran Owned • Serving Middle Tennessee
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Clean Trash Bins.
            <br />
            Healthier Home.
            <br />
            Zero Odors.
          </h1>
          <p className="mt-8 text-xl text-slate-300 leading-8 max-w-2xl">
            Volunteer State Bin Cleaners professionally cleans,
            sanitizes and deodorizes residential and commercial
            trash bins using commercial-grade 200° hot water.
            Proudly serving homeowners, HOAs and businesses
            throughout Middle Tennessee.
          </p>
          <div className="flex flex-wrap gap-5 mt-10">
            <Link
              href="#quote"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold text-lg transition"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:9312130332"
              className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition"
            >
              Call (931) 213-0332
            </a>
          </div>
          <div className="grid grid-cols-3 gap-10 mt-16">
            <div>
              <h3 className="text-4xl font-extrabold text-red-500">
                200°
              </h3>
              <p className="text-slate-300 mt-2">
                Commercial Hot Water
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-red-500">
                100%
              </h3>
              <p className="text-slate-300 mt-2">
                Satisfaction Guaranteed
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-red-500">
                Veteran
              </h3>
              <p className="text-slate-300 mt-2">
                Owned & Operated
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
