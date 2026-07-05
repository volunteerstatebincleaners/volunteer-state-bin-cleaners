import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="Volunteer State Bin Cleaners"
            width={55}
            height={55}
            priority
          />

          <div>

            <h1 className="text-xl font-extrabold text-slate-900 leading-none">
              Volunteer State
            </h1>

            <p className="text-red-600 font-bold text-sm">
              Bin Cleaners
            </p>

          </div>

        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="/"
            className="font-semibold hover:text-red-600 transition"
          >
            Home
          </Link>

          <a
            href="/#pricing"
            className="font-semibold hover:text-red-600 transition"
          >
            Pricing
          </a>

          <a
            href="/#faq"
            className="font-semibold hover:text-red-600 transition"
          >
            FAQ
          </a>

          <a
            href="/#service-area"
            className="font-semibold hover:text-red-600 transition"
          >
            Service Areas
          </a>

        </nav>

        {/* Buttons */}

        <div className="flex items-center gap-3">

          <a
            href="tel:9312130332"
            className="hidden md:block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-5 py-2 rounded-xl font-bold transition"
          >
            Call Now
          </a>

          <Link
            href="/quote"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            Book Now
          </Link>

        </div>

      </div>
    </header>
  );
}