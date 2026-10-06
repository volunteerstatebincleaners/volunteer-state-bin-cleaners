import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Call To Action */}
      <section className="bg-red-600">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">

          <h2 className="text-4xl md:text-5xl font-black text-white">
            Ready to Get Your Property Clean?
          </h2>

          <p className="text-lg md:text-xl mt-5 max-w-3xl mx-auto text-white">
            From trash bin cleaning to pressure washing and commercial
            exterior cleaning, Volunteer State Cleaners is ready to help.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <Link
              href="/quote"
              className="bg-white text-red-600 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold transition"
            >
              Book Now
            </Link>

            <a
              href="tel:9312130332"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-xl font-bold transition"
            >
              Call (931) 213-0332
            </a>

          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Business */}
          <div>
            <h3 className="text-2xl font-black">
              Volunteer State
            </h3>

            <p className="text-red-600 font-bold text-lg">
              Cleaners
            </p>

            <p className="text-slate-300 mt-5 leading-relaxed">
              Professional bin cleaning, pressure washing, and exterior
              cleaning services proudly serving Middle Tennessee.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition"
                >
                  Trash Bin Cleaning
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition"
                >
                  Dumpster Cleaning
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition"
                >
                  Pressure Washing
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition"
                >
                  Exterior Cleaning
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition"
                >
                  Commercial Cleaning
                </Link>
              </li>

            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li>
                <Link
                  href="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/#pricing"
                  className="hover:text-white transition"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="/#faq"
                  className="hover:text-white transition"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/#service-area"
                  className="hover:text-white transition"
                >
                  Service Areas
                </Link>
              </li>

              <li>
                <Link
                  href="/quote"
                  className="hover:text-white transition"
                >
                  Book Now
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-slate-300">

              <p>
                Proudly Serving Middle Tennessee
              </p>

              <a
                href="tel:9312130332"
                className="block hover:text-white transition"
              >
                (931) 213-0332
              </a>

              <a
                href="mailto:info@volunteerstatecleaners.com"
                className="block hover:text-white transition break-words"
              >
                info@volunteerstatecleaners.com
              </a>

              <Link
                href="/quote"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition"
              >
                Request a Quote
              </Link>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">

            <p>
              © {new Date().getFullYear()} Volunteer State Cleaners. All rights reserved.
            </p>

            <p>
              Proudly Serving Middle Tennessee
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}
