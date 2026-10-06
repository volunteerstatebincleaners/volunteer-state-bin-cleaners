export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: "📋",
      title: "Request a Free Quote",
      description:
        "Tell us what you need cleaned, where you're located, and any details that will help us understand your project.",
    },
    {
      number: "2",
      icon: "📅",
      title: "Schedule Your Service",
      description:
        "We'll review your request, confirm the details and pricing, and work with you to find a convenient service date.",
    },
    {
      number: "3",
      icon: "✨",
      title: "We Clean. You Enjoy.",
      description:
        "Our professional equipment gets to work cleaning your bins, concrete surfaces, exterior areas, containers, or other approved areas.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold shadow-sm">
            Simple Process
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-6">
            How It Works
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-5 leading-8">
            Whether you need a residential cleaning service, a commercial
            project, or recurring service, getting started with Volunteer State
            Cleaners is simple.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              {/* Step Number */}
              <div className="absolute top-5 right-5 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-sm">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-6" aria-hidden="true">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-lg text-slate-700 font-semibold">
            Ready to get your property cleaned?
          </p>

          <a
            href="/quote"
            className="inline-block mt-5 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
