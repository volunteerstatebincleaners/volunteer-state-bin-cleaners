export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl border border-slate-200">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              Professional, friendly, and my trash bins smell brand new.
            </p>
          </div>
          <div className="bg-white shadow-xl border border-slate-200">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              Fast service and worth every penny.
            </p>
          </div>
          <div className="bg-white shadow-xl border border-slate-200">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              I'll definitely use Volunteer State Bin Cleaners again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
