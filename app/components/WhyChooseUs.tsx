import {
  ShieldCheck,
  Droplets,
  Recycle,
  Clock,
} from "lucide-react";
const features = [
  {
    icon: ShieldCheck,
    title: "Veteran Owned",
    description:
      "Integrity, reliability, and attention to detail in every service.",
  },
  {
    icon: Droplets,
    title: "200° Hot Water",
    description:
      "High-temperature pressure washing helps eliminate bacteria and grime.",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description:
      "Environmentally responsible cleaning methods and wastewater management.",
  },
  {
    icon: Clock,
    title: "Convenient Service",
    description:
      "Simply leave your bins at the curb after trash day—we handle the rest.",
  },
];
export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#0B2341]">
            Why Choose Volunteer State Bin Cleaners?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Professional bin cleaning with service you can trust.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon
                  className="mb-6 text-red-600"
                  size={42}
                />
                <h3 className="text-2xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
