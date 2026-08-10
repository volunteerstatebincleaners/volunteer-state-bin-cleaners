import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <span className="inline-block bg-red-600 px-5 py-2 rounded-full font-semibold">
            Veteran-Owned • Proudly Serving Middle Tennessee
          </span>

           <h1 className="text-5xl lg:text-7xl font-black leading-tight mt-8">
            Professional Bin Cleaning
            <br />
            & Exterior Washing
           </h1>

          <p className="text-xl text-slate-300 mt-8 leading-8">
  Volunteer State Bin Cleaners provides professional bin cleaning,
  pressure washing, and exterior cleaning services for homeowners,
  businesses, apartment communities, and HOAs throughout Middle Tennessee.
</p>

          <div className="grid grid-cols-2 gap-4 mt-10 text-lg">

            <div>✅ Trash Bin Cleaning</div>

            <div>✅ Commercial Bin Cleaning</div>

            <div>✅ Driveway Pressure Washing</div>

            <div>✅ Sidewalk Pressure Washing</div>

            <div>✅ Crate & Tote Cleaning</div>

            <div>✅ HOA & Apartment Services</div>

          </div>

          <div className="flex flex-wrap gap-4 mt-12">

            <Link
              href="/quote"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold transition"
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

        </div>

        <div className="flex justify-center">

          <div className="bg-white rounded-3xl shadow-2xl p-10">

            <Image
              src="/logo.png"
              alt="Volunteer State Bin Cleaners"
              width={320}
              height={320}
              priority
            />

          </div>

        </div>

      </div>
    </section>
  );
}