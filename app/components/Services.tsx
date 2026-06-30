export default function Services() {
  const services = [
    {
      title: "Residential Bin Cleaning",
      icon: "🏡",
      text: "Keep your trash bins clean, sanitized and odor free with scheduled monthly, bi-monthly or one-time cleanings."
    },
    {
      title: "Commercial Dumpster Cleaning",
      icon: "🏢",
      text: "Professional cleaning for restaurants, apartments, HOAs, offices and commercial properties."
    },
    {
      title: "Sanitizing & Deodorizing",
      icon: "✨",
      text: "Our hot-water cleaning removes bacteria, grime, insects, odors and leaves bins smelling fresh."
    }
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="mt-4 text-5xl font-extrabold text-slate-900">
            Professional Trash Bin Cleaning
          </h2>
          <p className="mt-6 text-xl text-slate-700 max-w-3xl mx-auto">
            Professional hot-water pressure washing that removes bacteria,
            odors, grime, insects and maggots from residential and commercial
            trash bins.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service)=>(
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white shadow-xl p-10 hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-700 leading-8">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
