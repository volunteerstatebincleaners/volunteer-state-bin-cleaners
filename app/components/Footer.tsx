export default function Footer() {
  return (
    <>
      {/* Call To Action */}
      <section className="bg-red-600 py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Ready for Cleaner Trash Bins?
          </h2>
          <p className="text-lg text-red-100 max-w-2xl mx-auto mb-8">
            Join homeowners, HOAs, apartments, and businesses across Middle
            Tennessee that trust Volunteer State Bin Cleaners.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#quote"
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              Get Free Quote
            </a>
            <a
              href="tel:9312130332"
              className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-red-600 transition"
            >
              Call (931) 213-0332
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-950 text-gray-300">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Volunteer State
            </h3>
            <p className="text-red-500 font-semibold mb-4">
              Bin Cleaners
            </p>
            <p className="text-sm leading-7">
              Professional trash bin cleaning,
              sanitizing and deodorizing for
              homeowners, HOAs, apartments,
              restaurants and businesses throughout
              Middle Tennessee.
            </p>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">
              Contact
            </h4>
            <p>(931) 213-0332</p>
            <p className="mt-2">
              info@volunteerstatebincleaners.com
            </p>
            <p className="mt-2">
              Middle Tennessee
            </p>
          </div>
          {/* Service Areas */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Nashville</li>
              <li>Murfreesboro</li>
              <li>Franklin</li>
              <li>Hendersonville</li>
              <li>Gallatin</li>
              <li>Mt. Juliet</li>
              <li>Lebanon</li>
            </ul>
          </div>
          {/* Why Choose Us */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">
              Why Choose Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li>✅ Veteran Owned</li>
              <li>✅ 200° Hot Water Cleaning</li>
              <li>✅ Eco-Friendly Wastewater Recovery</li>
              <li>✅ Residential & Commercial</li>
              <li>✅ Licensed & Insured</li>
              <li>✅ Free Estimates</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>
              © {new Date().getFullYear()} Volunteer State Bin Cleaners.
              All Rights Reserved.
            </p>
            <p className="mt-2 md:mt-0">
              Proudly Serving Middle Tennessee
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
