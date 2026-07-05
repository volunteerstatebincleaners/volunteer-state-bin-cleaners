export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Book Your Cleaning",
      description:
        "Choose a one-time cleaning or recurring monthly service by requesting a free quote online.",
      icon: "📅",
    },
    {
      number: "2",
      title: "We Come To You",
      description:
        "Our specialized trailer arrives at your home and professionally cleans, sanitizes, and deodorizes your trash bins.",
      icon: "🚛",
    },
    {
      number: "3",
      title: "Enjoy Fresh, Clean Bins",
      description:
        "No more odors, bacteria, maggots, or dirty trash cans. Just clean, sanitized bins ready to use.",
      icon: "✨",
    },
  ];

  return (
    <section className="bg-slate-100 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-black text-slate-900">
            How It Works
          </h2>

          <p className="text-xl text-slate-600 mt-5 max-w-3xl mx-auto">
            Keeping your trash bins clean has never been easier.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl transition"
            >

              <div className="text-6xl mb-6">
                {step.icon}
              </div>

              <div className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {step.title}
              </h3>

              <p className="text-slate-600 leading-7">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}