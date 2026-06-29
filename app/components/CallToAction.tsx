export default function CallToAction() {
  return (
    <section className="bg-[#0B2341] py-24 text-center text-white">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-5xl font-black">
          Ready for Cleaner Trash Bins?
        </h2>
        <p className="mt-6 text-xl text-slate-300">
          Join homeowners, HOAs, and businesses across Middle Tennessee that trust
          Volunteer State Bin Cleaners.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href="/contact"
            className="rounded-xl bg-red-600 px-10 py-5 text-lg font-bold hover:bg-red-700 transition"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:9312130332"
            className="rounded-xl border border-white px-10 py-5 text-lg font-bold hover:bg-white hover:text-[#0B2341] transition"
          >
            Call (931) 213-0332
          </a>
        </div>
      </div>
    </section>
  );
}
