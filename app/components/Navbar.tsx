import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Volunteer State Bin Cleaners"
            width={60}
            height={60}
            priority
          />
          <div>
            <h1 className="text-2xl font-black text-slate-900">
              Volunteer State
            </h1>
            <span className="block text-red-600 text-base font-bold">
              Bin Cleaners
            </span>
          </div>
        </Link>
        {/* Navigation */}
        <nav className="hidden md:flex gap-8 font-semibold text-slate-700">
          <a href="#services" className="hover:text-red-600 transition">
            Services
          </a>
          <a href="#pricing" className="hover:text-red-600 transition">
            Pricing
          </a>
          <a href="#service-area" className="hover:text-red-600 transition">
            Service Area
          </a>
          <a href="#quote" className="hover:text-red-600 transition">
            Free Quote
          </a>
        </nav>
        {/* Call Button */}
        <a
          href="tel:9312788332"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
