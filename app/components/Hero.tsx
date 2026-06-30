export default function Hero() {

  return (

    <section className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-28">

        <span className="bg-red-600 px-4 py-2 rounded-full text-sm font-semibold">

          Middle Tennessee's Premium Bin Cleaning Service

        </span>

        <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight">

          Clean Trash Bins.

          <br />

          Healthier Homes.

        </h1>

        <p className="mt-8 text-xl text-slate-700 max-w-2xl">

          We professionally sanitize residential and commercial trash bins

          throughout Middle Tennessee using high-pressure hot water that kills

          bacteria, removes odors, and leaves every bin smelling fresh.

        </p>

        <div className="flex flex-wrap gap-4 mt-10">

          <a

            href="#quote"

            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-bold"

          >

            Get Free Quote

          </a>

          <a

            href="tel:9312130332"

            className="border border-white px-8 py-4 rounded-lg font-bold"

          >

            Call (931) 213-0332

          </a>

        </div>

        <div className="grid grid-cols-3 gap-10 mt-20 text-center">

          <div>

            <h2 className="text-4xl font-black text-red-500">200°F</h2>

            <p className="text-slate-700 mt-2">

              Hot Water Cleaning

            </p>

          </div>

          <div>

            <h2 className="text-4xl font-black text-red-500">99.9%</h2>

            <p className="text-slate-700 mt-2">

              Bacteria Eliminated

            </p>

          </div>

          <div>

            <h2 className="text-4xl font-black text-red-500">100%</h2>

            <p className="text-slate-700 mt-2">

              Satisfaction Guaranteed

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}
