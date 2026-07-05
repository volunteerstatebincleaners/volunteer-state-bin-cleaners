import Link from "next/link";

const plans = [
  {
    title: "One-Time Cleaning",
    price: "$25",
    featured: false,
    button: "Book Now",
    features: [
      "Deep Hot Water Cleaning",
      "Sanitized & Deodorized",
      "Odor Elimination",
      "Perfect for First-Time Customers",
    ],
  },
  {
    title: "Monthly Service",
    price: "$20",
    featured: true,
    button: "Book Now",
    features: [
      "Best Value",
      "Priority Scheduling",
      "Hot Water Cleaning Every Visit",
      "Keeps Bins Fresh Year-Round",
    ],
  },
  {
    title: "Commercial",
    price: "Custom",
    featured: false,
    button: "Get Free Quote",
    features: [
      "HOAs",
      "Apartment Communities",
      "Restaurants",
      "Commercial Properties",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
            Simple Pricing
          </span>

          <h2 className="text-5xl font-black text-slate-900 mt-6">
            Affordable Plans
          </h2>

          <p className="text-slate-600 text-xl mt-4">
            Choose the service that fits your home or business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-3xl p-8 shadow-xl ${
                plan.featured
                  ? "bg-red-600 text-white scale-105"
                  : "bg-white"
              }`}
            >
              {plan.featured && (
                <div className="inline-block bg-white text-red-600 px-4 py-2 rounded-full font-bold mb-6">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-bold">
                {plan.title}
              </h3>

              <div className="text-5xl font-black mt-6">
                {plan.price}
              </div>

              <ul className="space-y-4 mt-8">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/quote"
                className={`block mt-10 text-center rounded-xl py-4 font-bold transition ${
                  plan.featured
                    ? "bg-white text-red-600 hover:bg-slate-200"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                {plan.button}
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}