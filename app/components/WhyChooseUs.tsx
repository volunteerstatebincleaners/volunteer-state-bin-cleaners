export default function WhyChooseUs() {
  const features = [
    {
      title: "Veteran-Owned",
      description:
        "Proudly serving Middle Tennessee with dependable, honest service.",
      icon: "🇺🇸",
    },
    {
      title: "200° Hot Water Cleaning",
      description:
        "Powerful hot water removes grime, bacteria, and foul odors.",
      icon: "🔥",
    },
    {
      title: "Eco-Friendly",
      description:
        "Our cleaning process is safe for your family, pets, and the environment.",
      icon: "🌎",
    },
    {
      title: "Residential & Commercial",
      description:
        "From single homes to HOAs, apartments, restaurants, and businesses.",
      icon: "🏡",
    },
    {
      title: "Reliable Scheduling",
      description:
        "Monthly, bi-monthly, one-time, and commercial service plans.",
      icon: "📅",
    },
    {
      title: "Customer Satisfaction",
      description:
        "We aren't happy until your bins are clean, sanitized, and odor free.",
      icon: "⭐",
    },
  ];

  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-black text-slate-900">
            Why Choose Volunteer State Bin Cleaners?
          </h2>

          <p className="text-slate-600 mt-5 text-xl max-w-3xl mx-auto">
            Professional trash bin cleaning that keeps your bins cleaner,
            fresher, and healthier all year long.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >

              <div className="text-5xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
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