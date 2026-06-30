export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "🛡️",
      title: "Veteran Owned",
      text: "Built on integrity, reliability, and attention to detail. We treat every customer like family.",
    },
    {
      icon: "🔥",
      title: "200° Hot Water Cleaning",
      text: "High-temperature cleaning removes bacteria, grime, insects, and stubborn odors without harsh chemicals.",
    },
    {
      icon: "♻️",
      title: "Eco-Friendly",
      text: "Our wastewater is responsibly contained and disposed of while using environmentally conscious practices.",
    },
    {
      icon: "⏱️",
      title: "Convenient Service",
      text: "Simply leave your trash bins at the curb after pickup—we'll handle the rest and return them clean.",
    },
  ];
  return (
    <section className="bg-white shadow-xl border border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-5xl font-extrabold text-slate-900">
            Why Volunteer State Bin Cleaners?
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            We don't just wash trash bins—we eliminate bacteria, remove odors,
            and help keep your home cleaner with professional equipment and
            dependable service.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center hover:bg-white shadow-xl border border-slate-200"
            >
              <div className="text-5xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-700 leading-7">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
