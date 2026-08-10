export default function Services() {
  const services = [
    {
      title: "Residential Bin Cleaning",
      description:
        "Keep your household trash and recycling bins clean, sanitized, and smelling fresh with one-time or recurring service.",
    },
    {
      title: "Commercial Bin Cleaning",
      description:
        "Professional cleaning for commercial trash containers serving businesses, restaurants, apartments, HOAs, and other properties.",
    },
    {
      title: "Driveway Pressure Washing",
      description:
        "Remove dirt, grime, algae, mildew, and other buildup from concrete driveways and exterior surfaces.",
    },
    {
      title: "Sidewalk Pressure Washing",
      description:
        "Improve curb appeal with professional cleaning for sidewalks, walkways, entrances, and other concrete areas.",
    },
    {
      title: "Crate & Tote Cleaning",
      description:
        "Clean reusable crates, totes, storage containers, industrial bins, and other commercial or agricultural containers.",
    },
    {
      title: "HOA & Apartment Services",
      description:
        "Custom cleaning programs for HOAs, apartment communities, property managers, and multi-property clients.",
    },
    {
      title: "Dumpster Pad Cleaning",
      description:
        "Help keep commercial dumpster areas cleaner and more presentable with professional exterior cleaning.",
    },
    {
      title: "Custom Cleaning Services",
      description:
        "Have a cleaning project that doesn't fit one of our standard services? Contact us and we'll discuss your needs.",
    },
  ];

  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold">
            What We Do
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-6">
            Cleaning Services for Homes & Businesses
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-5 leading-8">
            Professional bin cleaning and exterior washing services designed
            for residential, commercial, HOA, and property management clients
            throughout Middle Tennessee.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service) => (
            <div
              key={service.title}
              className="border border-slate-200 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition"
            >

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-7">
                {service.description}
              </p>

            </div>
          ))}

        </div>

        <div className="text-center mt-14">

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