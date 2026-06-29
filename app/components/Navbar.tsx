import Link from "next/link";
export default function Navbar() {
  return (
    <header className="sticky top-0 bg-[#0B2341] text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-black">
          Volunteer State
          <span className="block text-red-500 text-base">
            Bin Cleaners
          </span>
        </Link>
        <nav className="hidden md:flex gap-8 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a
          href="tel:9312130332"
          className="bg-red-600 px-5 py-3 rounded-lg font-bold hover:bg-red-700 transition"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
