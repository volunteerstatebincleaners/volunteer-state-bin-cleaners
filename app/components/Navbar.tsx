import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Business Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Volunteer State Cleaners"
            width={55}
            height={55}
            priority
          />

          <div>
            <h1 className="text-xl font-extrabold text-slate-900 leading-none">
              Volunteer State
            </h1>

            <p className="text-red-600 font-bold text-sm">
              Cleaners
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="/"
            className="font-semibold text-slate-900 hover:text-red-600 transition"
          >
            Home
          </Link>

          <Link
            href="/#pricing"
            className="font-semibold text-slate-900 hover:text-red-600 transition"
          >
            Pricing
          </Link>

          <Link
            href="/#faq"
            className="font-semibold text-slate-900 hover:text-red-600 transition"
          >
            FAQ
          </Link>

          <Link
            href="/#service-area"
            className="font-semibold text-slate-900 hover:text-red-600 transition"
          >
            Service Areas
          </Link>

        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">

          <a
            href="tel:9312130332"
            className="hidden md:block border-2 border-red-600 text-red-600 px-5 py-2 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition"
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
