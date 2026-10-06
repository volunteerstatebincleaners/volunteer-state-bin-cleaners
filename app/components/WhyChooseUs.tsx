export default function WhyChooseUs() {
  const features = [
    {
      icon: "🧼",
      title: "Professional Cleaning",
      description:
        "We provide professional pressure washing, exterior cleaning, bin cleaning, and commercial cleaning services designed to leave your property looking its best.",
    },
    {
      icon: "⭐",
      title: "Quality You Can See",
      description:
        "We take pride in the details and work hard to deliver clean, professional results that make a noticeable difference.",
    },
    {
      icon: "📅",
      title: "Flexible Service",
      description:
        "Choose one-time cleaning or recurring service based on what works best for your home, business, HOA, apartment community, or commercial property.",
    },
    {
      icon: "🇺🇸",
      title: "Veteran-Owned & Operated",
      description:
        "Volunteer State Cleaners is veteran-owned and operated, providing dependable and professional cleaning services throughout Middle Tennessee.",
    },
  ];

  return (
    <section className="bg-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold shadow-sm">
            Why Choose Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-6">
            Professional Service You Can Count On
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-5 leading-8">
            Volunteer State Cleaners provides dependable cleaning services for
            homeowners, businesses, HOAs, apartment communities, and
            commercial properties throughout Middle Tennessee.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-5" aria-hidden="true">
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

        {/* Bottom Statement */}
        <div className="text-center mt-14">
          <p className="text-slate-700 font-semibold text-lg">
            Proudly serving Middle Tennessee with professional cleaning
            services.
          </p>
        </div>
      </div>
    </section>
  );
}
