import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <div>

          <div className="inline-flex items-center bg-red-600 px-4 py-2 rounded-full font-semibold mb-6">
            ⭐ Middle Tennessee's Professional Bin Cleaning Service
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">

            Clean Bins.

            <br />

            Cleaner Neighborhoods.

          </h1>

          <p className="text-xl text-slate-300 mt-8 leading-8">

            Professional trash bin cleaning for homeowners,
            HOAs, apartments and businesses throughout
            Middle Tennessee.

          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              href="/quote"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold text-lg transition"
            >
              Book Now
            </Link>

            <a
              href="tel:9312130332"
              className="border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-slate-900 transition"
            >
              Call (931) 213-0332
            </a>

          </div>

          <div className="grid grid-cols-2 gap-6 mt-14">

            <div>

              <h3 className="text-4xl font-black text-red-500">
                200°
              </h3>

              <p className="text-slate-300">
                Hot Water Cleaning
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-red-500">
                Eco
              </h3>

              <p className="text-slate-300">
                Friendly Process
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-red-500">
                HOA
              </h3>

              <p className="text-slate-300">
                Community Service
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-red-500">
                Local
              </h3>

              <p className="text-slate-300">
                Veteran-Owned
              </p>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="relative flex justify-center">

          <div className="bg-white rounded-3xl shadow-2xl p-10">

            <Image
              src="/logo.png"
              alt="Volunteer State Bin Cleaners"
              width={320}
              height={320}
              className="mx-auto"
              priority
            />

            <div className="text-center mt-8">

              <h2 className="text-slate-900 text-3xl font-bold">
                Volunteer State
              </h2>

              <p className="text-red-600 font-bold text-xl">
                Bin Cleaners
              </p>

              <p className="text-slate-500 mt-6">

                Residential

                •

                Commercial

                •

                HOA

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}