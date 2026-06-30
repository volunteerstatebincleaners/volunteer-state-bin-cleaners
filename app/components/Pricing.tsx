export default function Pricing() {
  const plans = [
    {
      title: "One-Time Cleaning",
      price: "$25",
      featured: false,
      features: [
        "Deep Hot Water Cleaning",
        "Sanitized & Deodorized",
        "Odor Removal",
        "Great for First-Time Customers",
      ],
    },
    {
      title: "Monthly Service",
      price: "$20",
      featured: true,
      features: [
        "Best Value",
        "Priority Scheduling",
        "Hot Water Cleaning",
        "Sanitized Every Visit",
        "Keeps Bins Fresh Year Round",
      ],
    },
    {
      title: "Commercial",
      price: "Quote",
      featured: false,
      features: [
        "Apartments",
        "HOAs",
        "Restaurants",
        "Dumpster Pads",
        "Custom Service Plans",
      ],
    },
  ];
  return (
    <section id="pricing" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-red-600 font-bold">
            Pricing
          </span>
          <h2 className="mt-4 text-5xl font-extrabold text-slate-900">
            Simple Pricing
          </h2>
          <p className="mt-5 text-xl text-slate-600 max-w-2xl mx-auto">
            Affordable plans with no contracts and no hidden fees.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-3xl bg-white shadow-xl border transition duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${
                plan.featured
                  ? "border-red-600 ring-4 ring-red-100"
                  : "border-slate-200"
              }`}
            >
              {plan.featured && (
                <div className="bg-red-600 text-white text-center py-3 font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="p-10">
                <h3 className="text-3xl font-bold text-slate-900">
                  {plan.title}
                </h3>
                <div className="mt-6 text-5xl font-extrabold text-red-600">
                  {plan.price}
                </div>
                <div className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <span className="text-green-600 font-bold">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="mt-10 w-full rounded-xl bg-red-600 hover:bg-red-700 text-white py-4 font-bold text-lg transition">
                  Get Free Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
