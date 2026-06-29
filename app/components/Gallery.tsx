import Image from "next/image";
const images = [
  {
    src: "/gallery/before-after-1.jpg",
    title: "Before & After",
  },
  {
    src: "/gallery/bin-cleaning.jpg",
    title: "Residential Cleaning",
  },
  {
    src: "/gallery/trailer.jpg",
    title: "Professional Equipment",
  },
];
export default function Gallery() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#0B2341]">
            See the Difference
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real results from professional trash bin cleaning.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.title}
              className="overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <div className="relative h-72">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
