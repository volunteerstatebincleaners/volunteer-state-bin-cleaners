export default function CallToAction() {
  return (
    <section className="bg-red-600 text-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-black">
          Ready For Cleaner Trash Bins?
        </h2>
        <p className="mt-6 text-xl">
          Join homeowners across Middle Tennessee who are enjoying cleaner,
          healthier trash bins.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href="#quote"
            className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold"
          >
            Get Free Quote
          </a>
          <a
            href="tel:9312130332/9709994536"
            className="border-2 border-white px-8 py-4 rounded-xl font-bold"
          >
            Call (931) 213-0332
          </a>
        </div>
      </div>
    </section>
  );
}
