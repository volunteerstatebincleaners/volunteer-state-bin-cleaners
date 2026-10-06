import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Final Call To Action */}
      <section className="bg-red-600">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">

          <h2 className="text-4xl md:text-5xl font-black text-white">
            Ready to Get Your Property Clean?
          </h2>

          <p className="text-lg md:text-xl mt-5 max-w-3xl mx-auto text-white">
            From trash bin cleaning to pressure washing and commercial
            exterior cleaning, we're ready to help.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <Link
              href="/quote"
              className="bg-white text-red-600 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold transition"
            >
              Request a Free Quote
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
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>

            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/logo.png"
                alt="Volunteer State Cleaners, LLC"
                width={90}
                height={90}
              />

              <div>
                <h3 className="text-2xl font-black text-white">
                  Volunteer State
                </h3>

                <p className="text-red-500 font-bold">
                  Cleaners, LLC
                </p>
              </div>
            </Link>

            <p className="text-slate-400 mt-6 leading-7">
              Professional Bin Cleaning & Exterior Washing
              throughout Middle Tennessee.
            </p>

            <p className="text-slate-400 mt-5">
              Veteran-owned & operated.
            </p>

          </div>

          {/* Our Services */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Our Services
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition"
                >
                  Residential Bin Cleaning
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition"
                >
                  Commercial Bin Cleaning
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition"
                >
                  Driveway Pressure Washing
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition"
                >
                  Sidewalk Pressure Washing
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition"
                >
                  Crate & Tote Cleaning
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition"
                >
                  Dumpster Pad Cleaning
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition"
                >
                  HOA & Apartment Services
                </Link>
              </li>

            </ul>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

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
                  href="/#services"
                  className="hover:text-white transition"
                >
                  Services
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
                  href="/#service-area"
                  className="hover:text-white transition"
                >
                  Service Area
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

            <h3 className="text-xl font-bold mb-6">
              Contact Us
            </h3>

            <div className="space-y-6">

              {/* Business Name */}
              <div>
                <p className="text-slate-500 text-sm uppercase tracking-wider">
                  Business Name
                </p>

                <p className="text-slate-300 mt-1">
                  Volunteer State Cleaners, LLC
                </p>
              </div>

              {/* Phone */}
              <div>
                <p className="text-slate-500 text-sm uppercase tracking-wider">
                  Phone
                </p>

                <a
                  href="tel:9312130332"
                  className="text-lg font-semibold hover:text-red-500 transition"
                >
                  (931) 213-0332
                </a>
              </div>

              {/* Email */}
              <div>
                <p className="text-slate-500 text-sm uppercase tracking-wider">
                  Email
                </p>

                <a
                  href="mailto:info@volunteerstatecleaners.com"
                  className="text-slate-300 hover:text-red-500 transition break-all"
                >
                  info@volunteerstatecleaners.com
                </a>
              </div>

              {/* Service Area */}
              <div>
                <p className="text-slate-500 text-sm uppercase tracking-wider">
                  Service Area
                </p>

                <p className="text-slate-300 mt-1">
                  Middle Tennessee
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-500">

          <p>
            © {new Date().getFullYear()} Volunteer State Cleaners, LLC.
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
