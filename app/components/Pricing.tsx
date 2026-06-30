export default function Pricing() {
  const plans = [
    {
      title: "One-Time",
      price: "$35",
      description: "Perfect for a deep clean anytime.",
      featured: false,
      features: [
        "Complete wash",
        "Sanitized",
        "Deodorized",
        "1 Trash Bin",
      ],
    },
    {
      title: "Monthly",
      price: "$20",
      description: "Our most popular service.",
      featured: true,
      features: [
        "Every 4 weeks",
        "Kills bacteria",
        "Stops odors",
        "Priority scheduling",
      ],
    },
    {
      title: "Every 2 Months",
      price: "$25",
      description: "Great value with fewer visits.",
      featured: false,
      features: [
        "Every 8 weeks",
        "Sanitized",
        "Fresh smelling bins",
        "Flexible scheduling",
      ],
    },
  ];
  return (
    <section id="pricing" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
            Simple Pricing
          </span>
          <h2 className="text-5xl font-black mt-6 text-slate-900">
            Choose Your Cleaning Plan
          </h2>
          <p className="mt-5 text-gray-600">
            No contracts. Cancel anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-3xl p-8 shadow-lg ${
                plan.featured
                  ? "bg-red-600 text-white scale-105"
                  : "bg-white"
              }`}
            >
              {plan.featured && (
                <div className="mb-6 bg-white text-red-600 rounded-full text-center py-2 font-bold">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-3xl font-bold">
                {plan.title}
              </h3>
              <div className="text-6xl font-black mt-6">
                {plan.price}
              </div>
              <p className="mt-4 opacity-80">
                {plan.description}
              </p>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature}>✔ {feature}</li>
                ))}
              </ul>
              <a
                href="#quote"
                className={`block text-center mt-10 py-4 rounded-xl font-bold ${
                  plan.featured
                    ? "bg-white text-red-600"
                    : "bg-red-600 text-white"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
