import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Call to Action */}

      <section className="bg-red-600">

        <div className="max-w-7xl mx-auto px-6 py-16 text-center">

          <h2 className="text-4xl md:text-5xl font-black">
            Ready for Cleaner Trash Bins?
          </h2>

          <p className="text-xl mt-5 opacity-95 max-w-3xl mx-auto">
            Join homeowners, HOAs, apartment communities, and businesses
            across Middle Tennessee who trust Volunteer State Bin Cleaners.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <Link
              href="/quote"
              className="bg-white text-red-600 hover:bg-slate-200 px-8 py-4 rounded-xl font-bold transition"
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

      {/* Footer */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <Image
              src="/logo.png"
              alt="Volunteer State Bin Cleaners"
              width={70}
              height={70}
            />

            <h3 className="text-2xl font-bold mt-5">
              Volunteer State
            </h3>

            <p className="text-red-500 font-bold">
              Bin Cleaners
            </p>

            <p className="text-slate-400 mt-5">
              Professional trash bin cleaning for homeowners,
              businesses, apartment communities, and HOAs throughout
              Middle Tennessee.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li><Link href="/">Home</Link></li>

              <li><a href="/#pricing">Pricing</a></li>

              <li><a href="/#faq">FAQ</a></li>

              <li><Link href="/quote">Book Now</Link></li>

            </ul>

          </div>

          {/* Service Areas */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Service Areas
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li>Nashville</li>
              <li>Franklin</li>
              <li>Murfreesboro</li>
              <li>Gallatin</li>
              <li>Mt. Juliet</li>
              <li>Lebanon</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">

              <a
                href="tel:9312130332"
                className="block hover:text-red-500"
              >
                📞 (931) 213-0332
              </a>

              <a
                href="mailto:info@volunteerstatebincleaners.com"
                className="block hover:text-red-500"
              >
                📧 info@volunteerstatebincleaners.com
              </a>

              <p className="text-slate-400">
                Veteran-Owned & Proudly Serving
                Middle Tennessee
              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-14 pt-8 text-center text-slate-500">

          © {new Date().getFullYear()} Volunteer State Bin Cleaners.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}