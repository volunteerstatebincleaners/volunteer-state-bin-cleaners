import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: "🗑️",
      title: "Residential Bin Cleaning",
      description:
        "Keep household trash and recycling bins cleaner and fresher with professional one-time or recurring cleaning service.",
    },
    {
      icon: "🏢",
      title: "Commercial Bin Cleaning",
      description:
        "Professional cleaning for commercial trash containers serving businesses, restaurants, apartments, HOAs, and other properties.",
    },
    {
      icon: "🚿",
      title: "Pressure Washing",
      description:
        "Remove dirt, grime, algae, mildew, and surface buildup from driveways, sidewalks, walkways, and other appropriate exterior surfaces.",
    },
    {
      icon: "🏠",
      title: "Exterior Cleaning",
      description:
        "Professional exterior cleaning services designed to help residential and commercial properties maintain a clean, professional appearance.",
    },
    {
      icon: "📦",
      title: "Crate & Tote Cleaning",
      description:
        "Clean reusable crates, totes, storage containers, industrial bins, and other commercial or agricultural containers.",
    },
    {
      icon: "🏘️",
      title: "HOA & Apartment Services",
      description:
        "Customized cleaning programs for HOAs, apartment communities, property managers, and multi-property clients.",
    },
    {
      icon: "🧽",
      title: "Dumpster Pad Cleaning",
      description:
        "Help keep commercial dumpster areas cleaner and more presentable with professional exterior cleaning services.",
    },
    {
      icon: "⭐",
      title: "Custom Cleaning Services",
      description:
        "Have a project that doesn't fit one of our standard services? Contact us and we'll discuss a cleaning solution for your needs.",
    },
  ];

  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold shadow-sm">
            What We Do
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-6">
            Professional Cleaning Services
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-5 leading-8">
            Volunteer State Cleaners provides professional bin cleaning,
            pressure washing, exterior cleaning, and commercial cleaning
            services for homes, businesses, HOAs, apartments, and commercial
            properties throughout Middle Tennessee.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-5" aria-hidden="true">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/quote"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg"
          >
            Book Now
          </Link>

          <p className="text-slate-500 mt-4">
            Need a custom cleaning solution? Contact us for a personalized
            quote.
          </p>
        </div>
      </div>
    </section>
  );
}
