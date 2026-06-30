export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="text-red-600 font-semibold uppercase tracking-widest">
          Simple Process
        </span>
        <h2 className="text-5xl font-extrabold mt-3 text-slate-900">
          How It Works
        </h2>
        <p className="mt-4 text-slate-600 text-xl">
          Keeping your trash bins clean has never been easier.
        </p>
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="text-6xl mb-4">🗑️</div>
            <h3 className="text-2xl font-bold">
              Leave Your Bin Out
            </h3>
            <p className="mt-4 text-slate-600">
              Simply leave your trash bin at the curb after pickup.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="text-6xl mb-4">🔥</div>
            <h3 className="text-2xl font-bold">
              We Deep Clean It
            </h3>
            <p className="mt-4 text-slate-600">
              We blast away bacteria, odors and grime using
              commercial-grade 200° hot water.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="text-6xl mb-4">✨</div>
            <h3 className="text-2xl font-bold">
              Enjoy Fresh Bins
            </h3>
            <p className="mt-4 text-slate-600">
              Your bins are sanitized, deodorized and smell fresh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
