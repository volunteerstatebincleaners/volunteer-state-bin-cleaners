import Link from "next/link";

export default function Navbar() {

  return (

    <header className="sticky top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <Link

          href="/"

          className="text-2xl font-black text-slate-900"

        >

          Volunteer State

          <span className="block text-red-600 text-base">

            Bin Cleaners

          </span>

        </Link>

        <nav className="hidden md:flex gap-8 font-semibold text-slate-700">

          <a href="#services">Services</a>

          <a href="#pricing">Pricing</a>

          <a href="#service-area">Service Area</a>

          <a href="#quote">Free Quote</a>

        </nav>

        <a

          href="tel:9312130332"

          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold"

        >

          Call Now

        </a>

      </div>

    </header>

  );

}
