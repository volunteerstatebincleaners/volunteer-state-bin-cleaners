export default function Pricing() {
  const plans = [
    {
      title: "One Bin",
      price: "$25",
      features: [
        "Deep Clean",
        "Deodorized",
        "Sanitized",
        "Eco-Friendly Wash",
      ],
    },
    {
      title: "Two Bins",
      price: "$40",
      features: [
        "Everything in One Bin",
        "Save $10",
        "Same-Day Service",
        "Great for Families",
      ],
    },
    {
      title: "Monthly Service",
      price: "From $20/mo",
      features: [
        "Recurring Cleaning",
        "Priority Scheduling",
        "Best Value",
        "Always Fresh",
      ],
    },
  ];
  return (
    <section className="bg-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-4">
          Simple Pricing
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Affordable, professional trash bin cleaning with no hidden fees.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold mb-3">
                {plan.title}
              </h3>
              <div className="text-5xl font-black text-red-600 mb-6">
                {plan.price}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature}>✅ {feature}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center bg-[#0B2341] text-white py-3 rounded-lg font-bold hover:bg-slate-800"
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
