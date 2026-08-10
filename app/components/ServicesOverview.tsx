export default function ServicesOverview() {
  const services = [
    {
      icon: "🗑️",
      title: "Residential Bin Cleaning",
      description:
        "One-time and recurring cleaning for residential trash and recycling bins.",
    },
    {
      icon: "🏢",
      title: "Commercial Bin Cleaning",
      description:
        "Professional bin and container cleaning for businesses, restaurants, apartments, and commercial properties.",
    },
    {
      icon: "🚿",
      title: "Driveway Pressure Washing",
      description:
        "Remove dirt, buildup, algae, mildew, and other surface grime from concrete driveways.",
    },
    {
      icon: "🚶",
      title: "Sidewalk Pressure Washing",
      description:
        "Refresh sidewalks, walkways, entrances, and other concrete surfaces around your property.",
    },
    {
      icon: "📦",
      title: "Crate & Tote Cleaning",
      description:
        "Cleaning for reusable totes, shipping crates, storage containers, industrial bins, and other equipment.",
    },
    {
      icon: "🏘️",
      title: "HOA & Apartment Services",
      description:
        "Community-wide cleaning programs designed for HOAs, apartment communities, and property managers.",
    },
  ];

  return (
    <section id="services" className="bg-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold">
            Our Services
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-6">
            Bin Cleaning & Exterior Washing
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-5 leading-8">
            From residential trash bins to commercial properties,
            Volunteer State provides dependable cleaning services
            throughout Middle Tennessee.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
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

        <div className="text-center mt-12">

          <a
            href="/quote"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition"
          >
            Request a Free Quote
          </a>

        </div>

      </div>
    </section>
  );
}