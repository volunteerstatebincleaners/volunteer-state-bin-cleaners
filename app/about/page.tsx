import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-slate-100">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block bg-red-600 px-5 py-2 rounded-full font-semibold shadow-lg">
            About Volunteer State Cleaners
          </span>

          <h1 className="text-5xl lg:text-6xl font-black mt-7">
            Professional Cleaning.
            <br />
            <span className="text-red-500">Done Right.</span>
          </h1>

          <p className="text-xl text-slate-300 mt-7 max-w-3xl mx-auto leading-8">
            Volunteer State Cleaners provides professional cleaning services
            for homeowners, businesses, HOAs, apartment communities, and
            commercial properties throughout Middle Tennessee.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Who We Are
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Volunteer State Cleaners is a locally focused cleaning company
              dedicated to providing dependable, professional service
              throughout Middle Tennessee. We work with homeowners, businesses,
              HOAs, apartment communities, property managers, and commercial
              clients.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our services include pressure washing, exterior cleaning,
              residential and commercial bin cleaning, driveway and sidewalk
              cleaning, crate and tote cleaning, dumpster pad cleaning, and
              customized cleaning solutions.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We believe professional cleaning should be straightforward,
              dependable, and done with attention to detail. Whether you need
              a one-time cleaning or a recurring service plan, our goal is to
              provide quality results and a professional customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold">
              Why Volunteer State Cleaners
            </span>

            <h2 className="text-4xl font-black text-slate-900 mt-6">
              Cleaning Services You Can Count On
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 text-center shadow-sm">
              <div className="text-5xl mb-5" aria-hidden="true">
                🇺🇸
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Veteran-Owned & Operated
              </h3>

              <p className="text-slate-600 mt-4 leading-7">
                We take pride in providing professional, dependable service
                throughout the communities we serve.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 text-center shadow-sm">
              <div className="text-5xl mb-5" aria-hidden="true">
                🧼
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Professional Cleaning
              </h3>

              <p className="text-slate-600 mt-4 leading-7">
                From bins and concrete to commercial exteriors and specialty
                containers, we provide cleaning solutions for a variety of
                properties and projects.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 text-center shadow-sm">
              <div className="text-5xl mb-5" aria-hidden="true">
                📍
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Proudly Serving Middle Tennessee
              </h3>

              <p className="text-slate-600 mt-4 leading-7">
                We serve Nashville, Murfreesboro, Franklin, Hendersonville,
                Gallatin, Mt. Juliet, Lebanon, and surrounding communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black">
            Ready to Get Started?
          </h2>

          <p className="text-xl text-red-50 mt-5 leading-8">
            Tell us what you need cleaned and we'll help you find the right
            service for your property.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/quote"
              className="bg-white text-red-600 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold transition shadow-lg"
            >
              Book Now
            </Link>

            <a
              href="tel:9312130332"
              className="border-2 border-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-xl font-bold transition"
            >
              Call (931) 213-0332
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
