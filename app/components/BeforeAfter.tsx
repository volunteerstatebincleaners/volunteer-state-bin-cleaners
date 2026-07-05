export default function BeforeAfter() {
  const photos = [
    {
      before: "/before-placeholder.jpg",
      after: "/after-placeholder.jpg",
      title: "Residential Trash Bin",
    },
    {
      before: "/before-placeholder.jpg",
      after: "/after-placeholder.jpg",
      title: "HOA Community",
    },
    {
      before: "/before-placeholder.jpg",
      after: "/after-placeholder.jpg",
      title: "Commercial Service",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
            Real Results
          </span>

          <h2 className="text-5xl font-black text-slate-900 mt-6">
            See the Difference
          </h2>

          <p className="text-slate-600 text-xl mt-5 max-w-3xl mx-auto">
            These placeholders will be replaced with your actual customer
            photos as you grow. Nothing builds trust better than real results.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {photos.map((photo) => (
            <div
              key={photo.title}
              className="rounded-2xl overflow-hidden shadow-xl bg-white"
            >
              <div className="grid grid-cols-2">

                <div className="bg-slate-200 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-3">🗑️</div>
                    <p className="font-bold">Before</p>
                  </div>
                </div>

                <div className="bg-green-100 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-3">✨</div>
                    <p className="font-bold">After</p>
                  </div>
                </div>

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {photo.title}
                </h3>

                <p className="text-slate-600 mt-3">
                  Replace these placeholders with your own before-and-after
                  photos after your first few jobs.
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}