export default function Services() {
  const services = [
    {
      icon: "🏠",
      title: "Residential Bin Cleaning",
      description:
        "Monthly, bi-monthly, quarterly or one-time trash bin cleaning that removes grime, bacteria, insects and foul odors."
    },
    {
      icon: "🏢",
      title: "HOA & Apartment Service",
      description:
        "Keep entire communities clean with scheduled sanitation for every resident's trash bins."
    },
    {
      icon: "🗑️",
      title: "Dumpster Pad Cleaning",
      description:
        "Pressure washing and deodorizing dumpster pads to eliminate grease, bacteria and unpleasant odors."
    },
    {
      icon: "✨",
      title: "Sanitize & Deodorize",
      description:
        "Every cleaning finishes with a professional deodorizer leaving bins smelling fresh and clean."
    }
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">
            OUR SERVICES
          </span>
          <h2 className="text-5xl font-extrabold text-slate-900 mt-6">
            Professional Trash Bin Cleaning
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Professional hot-water pressure washing that removes bacteria,
            grime, insects, maggots and odors from residential and commercial
            trash bins.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
