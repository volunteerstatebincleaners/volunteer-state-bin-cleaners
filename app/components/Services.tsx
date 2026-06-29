export default function Services() {
  const services = [
    {
      title: "Residential Bin Cleaning",
      description: "Monthly, bi-monthly, or one-time trash bin cleaning."
    },
    {
      title: "HOA Communities",
      description: "Affordable neighborhood-wide trash bin cleaning programs."
    },
    {
      title: "Dumpster Cleaning",
      description: "Commercial dumpster washing and odor elimination."
    },
    {
      title: "Odor Removal",
      description: "Eliminate bacteria, insects, and unpleasant smells."
    }
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Professional cleaning solutions for homes, neighborhoods, and businesses.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border p-8 shadow hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">🧼</div>
              <h3 className="font-bold text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
