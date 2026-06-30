export default function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="max-w-3xl">
          <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-semibold mb-6">
            Veteran Owned • Middle Tennessee
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Professional
            <br />
            Trash Bin Cleaning
          </h1>
          <p className="mt-8 text-xl text-slate-300 leading-8">
            Eliminate odors, bacteria, grime, insects, and maggots with
            commercial-grade hot water cleaning. Serving homeowners,
            HOAs, apartments, and businesses across Middle Tennessee.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#quote"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold text-lg transition"
            >
              Get Free Quote
            </a>
            <a
              href="tel:6155551234"
              className="border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-slate-900 transition"
            >
              Call Now
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-red-500">
                200°
              </h2>
              <p className="text-slate-300">
                Hot Water Cleaning
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-red-500">
                100%
              </h2>
              <p className="text-slate-300">
                Satisfaction
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-red-500">
                Veteran
              </h2>
              <p className="text-slate-300">
                Owned
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
