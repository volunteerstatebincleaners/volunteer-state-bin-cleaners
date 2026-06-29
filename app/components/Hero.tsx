export default function Hero() {
  return (
    <section className="bg-slate-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-6xl font-black text-slate-900 mb-6">
          Clean Trash Bins.
          <br />
          Healthier Homes.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-10">
          Professional trash bin cleaning throughout Middle Tennessee.
          We sanitize, deodorize, and leave every bin smelling fresh.
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:9312130332"
            className="border-2 border-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-900 hover:text-white transition"
          >
            Call (931) 213-0332
          </a>
        </div>
      </div>
    </section>
  );
}
