import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* Hero Content */}
        <div>
          <span className="inline-block bg-red-600 px-5 py-2 rounded-full font-semibold shadow-lg">
            Veteran-Owned • Proudly Serving Middle Tennessee
          </span>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight mt-8">
            Professional Cleaning
            <br />
            <span className="text-red-500">Done Right.</span>
          </h1>

          <p className="text-xl text-slate-300 mt-8 leading-8 max-w-2xl">
            Volunteer State Cleaners provides professional pressure washing,
            exterior cleaning, bin cleaning, and commercial cleaning services
            for homeowners, businesses, apartments, HOAs, and commercial
            properties throughout Middle Tennessee.
          </p>

          {/* Services */}
          <div className="grid sm:grid-cols-2 gap-4 mt-10 text-lg">
            <div className="flex items-center gap-3">
              <span className="text-red-500 font-bold">✓</span>
              <span>Pressure Washing</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-red-500 font-bold">✓</span>
              <span>Exterior Cleaning</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-red-500 font-bold">✓</span>
              <span>Trash Bin Cleaning</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-red-500 font-bold">✓</span>
              <span>Commercial Cleaning</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-red-500 font-bold">✓</span>
              <span>Driveway & Sidewalk Cleaning</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-red-500 font-bold">✓</span>
              <span>HOA & Apartment Services</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-12">
            <Link
              href="/quote"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold transition shadow-lg"
            >
              Book Now
            </Link>

            <a
              href="tel:9312130332"
              className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-bold transition"
            >
              Call (931) 213-0332
            </a>
          </div>

          <p className="text-sm text-slate-400 mt-6">
            Serving Nashville, Murfreesboro, Franklin, Hendersonville,
            Gallatin, Mt. Juliet, Lebanon, and surrounding Middle Tennessee
            communities.
          </p>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
            <Image
              src="/logo.png"
              alt="Volunteer State Cleaners"
              width={360}
              height={360}
              priority
              className="w-full max-w-[360px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
