import Link from "next/link";

export default function ServicesOverview() {
  const services = [
    {
      icon: "🚿",
      title: "Pressure Washing",
      description:
        "Professional pressure washing to remove dirt, grime, algae, mildew, and buildup from concrete and other exterior surfaces.",
    },
    {
      icon: "🏠",
      title: "Exterior Cleaning",
      description:
        "Professional exterior cleaning services to help keep residential and commercial properties looking clean, well-maintained, and presentable.",
    },
    {
      icon: "🗑️",
      title: "Residential Bin Cleaning",
      description:
        "One-time and recurring cleaning for residential trash and recycling bins to help keep them cleaner and fresher.",
    },
    {
      icon: "🏢",
      title: "Commercial Bin Cleaning",
      description:
        "Professional cleaning for commercial trash bins and containers serving businesses, restaurants, apartments, and other properties.",
    },
    {
      icon: "🚶",
      title: "Driveway & Sidewalk Cleaning",
      description:
        "Refresh driveways, sidewalks, walkways, entrances, and other concrete surfaces by removing built-up dirt and surface grime.",
    },
    {
      icon: "📦",
      title: "Crate & Tote Cleaning",
      description:
        "Cleaning for reusable totes, shipping crates, storage containers, industrial bins, and other reusable equipment.",
    },
    {
      icon: "🏘️",
      title: "HOA & Apartment Services",
      description:
        "Community-wide cleaning programs designed for HOAs, apartment communities, property managers, and multi-property clients.",
    },
    {
      icon: "🏬",
      title: "Commercial Property Cleaning",
      description:
        "Exterior cleaning services for commercial properties, helping businesses maintain a clean and professional appearance.",
    },
    {
      icon: "🧽",
      title: "Recurring Cleaning Services",
      description:
        "Flexible recurring cleaning options for properties that need dependable service on a regular schedule.",
    },
  ];

  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold shadow-sm">
            Our Services
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-6">
            Professional Cleaning Services
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-5 leading-8">
            From pressure washing and exterior cleaning to residential and
            commercial bin cleaning, Volunteer State Cleaners provides
            dependable cleaning services throughout Middle Tennessee.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="text-5xl mb-6" aria-hidden="true">
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

        {/* Quote CTA */}
        <div className="text-center mt-14">
          <Link
            href="/quote"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg"
          >
            Book Now
          </Link>

          <p className="text-slate-500 mt-4">
            Need something not listed? Contact us for a custom cleaning quote.
          </p>
        </div>
      </div>
    </section>
  );
}
