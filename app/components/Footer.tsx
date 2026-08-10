import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Final Call To Action */}

      <section className="bg-red-600">

        <div className="max-w-7xl mx-auto px-6 py-16 text-center">

          <h2 className="text-4xl md:text-5xl font-black">
            Ready to Get Your Property Clean?
          </h2>

          <p className="text-lg md:text-xl mt-5 max-w-3xl mx-auto">
            From trash bin cleaning to pressure washing and commercial
            cleaning projects, we're ready to help.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <Link
              href="/quote"
              className="bg-white text-red-600 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold transition"
            >
              Request a Free Quote
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

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <Image
              src="/logo.png"
              alt="Volunteer State Bin Cleaners"
              width={90}
              height={90}
            />

            <h3 className="text-2xl font-black mt-5">
              Volunteer State
            </h3>

            <p className="text-red-500 font-bold">
              Bin Cleaners
            </p>

            <p className="text-slate-400 mt-5 leading-7">
              Professional Bin Cleaning & Exterior Washing
              throughout Middle Tennessee.
            </p>

            <p className="text-slate-400 mt-5">
              🇺🇸 Veteran-Owned & Operated
            </p>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>Residential Bin Cleaning</li>

              <li>Commercial Bin Cleaning</li>

              <li>Driveway Pressure Washing</li>

              <li>Sidewalk Pressure Washing</li>

              <li>Crate & Tote Cleaning</li>

              <li>Dumpster Pad Cleaning</li>

              <li>HOA & Apartment Services</li>

            </ul>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <a
                  href="/#services"
                  className="hover:text-white transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="/#pricing"
                  className="hover:text-white transition"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="/#service-area"
                  className="hover:text-white transition"
                >
                  Service Area
                </a>
              </li>

              <li>
                <a
                  href="/#faq"
                  className="hover:text-white transition"
                >
                  FAQ
                </a>
              </li>

              <li>
                <Link
                  href="/quote"
                  className="hover:text-white transition"
                >
                  Request a Quote
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div>

                <p className="text-slate-500 text-sm uppercase tracking-wide">
                  Phone
                </p>

                <a
                  href="tel:9312130332"
                  className="text-lg font-semibold hover:text-red-500 transition"
                >
                  (931) 213-0332
                </a>

              </div>

              <div>

                <p className="text-slate-500 text-sm uppercase tracking-wide">
                  Email
                </p>

                <a
                  href="mailto:info@volunteerstatebincleaners.com"
                  className="break-all hover:text-red-500 transition"
                >
                  info@volunteerstatebincleaners.com
                </a>

              </div>

              <div>

                <p className="text-slate-500 text-sm uppercase tracking-wide">
                  Service Area
                </p>

                <p className="text-slate-300">
                  Middle Tennessee
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-500">

          <p>
            © {new Date().getFullYear()} Volunteer State Bin Cleaners.
            All Rights Reserved.
          </p>

          <p>
            Professional Bin Cleaning & Exterior Washing
          </p>

        </div>

      </div>

    </footer>
  );
}