export default function WhyChooseUs() {
  const features = [
    {
      icon: "🧼",
      title: "Professional Cleaning",
      description:
        "We provide dependable bin cleaning and exterior washing designed to leave your property cleaner and more presentable.",
    },
    {
      icon: "⭐",
      title: "Satisfaction Focused",
      description:
        "Our goal is simple: leave every property cleaner than we found it.",
    },
    {
      icon: "📅",
      title: "Flexible Service",
      description:
        "Choose one-time cleaning or recurring service based on what works best for your property.",
    },
    {
      icon: "🇺🇸",
      title: "Veteran-Owned & Operated",
      description:
        "We take pride in providing dependable, professional service to homes and businesses throughout Middle Tennessee.",
    },
  ];

  return (
    <section className="bg-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-6">
            Professional Service You Can Count On
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-5 leading-8">
            Volunteer State Bin Cleaners is committed to providing reliable,
            professional cleaning services for homeowners, businesses, HOAs,
            apartments, and commercial properties.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition"
            >

              <div className="text-4xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-7">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}