export default function Services() {
  const services = [
    {
      title: "Residential Bin Cleaning",
      description:
        "Monthly, bi-monthly, or one-time cleaning for homeowners. Remove odors, bacteria, insects, and grime from your trash bins.",
      icon: "🏡",
    },
    {
      title: "Commercial Dumpster Cleaning",
      description:
        "Restaurants, apartments, HOAs, offices, and businesses can keep dumpster areas cleaner and reduce unpleasant odors.",
      icon: "🏢",
    },
    {
      title: "Trash Can Deodorizing",
      description:
        "After every cleaning we deodorize and sanitize bins so they smell fresh and stay cleaner longer.",
      icon: "✨",
    },
  ];
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
            Our Services
          </span>
          <h2 className="text-5xl font-black mt-6 text-slate-950">
            Professional Bin Cleaning
          </h2>
          <p className="mt-6 text-slate-800 max-w-3xl mx-auto text-lg">
            We help homeowners and businesses eliminate odors, bacteria,
            maggots, and grime using commercial-grade hot water cleaning.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="text-5xl">{service.icon}</div>
              <h3 className="text-2xl font-bold mt-6">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
