import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ThankYouPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-[70vh] bg-slate-100 flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 text-center">
            {/* Success Icon */}
            <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-5xl mb-7">
              ✓
            </div>

            {/* Heading */}
            <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold">
              Volunteer State Cleaners
            </span>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-6">
              Thank You!
            </h1>

            {/* Message */}
            <p className="text-lg text-slate-600 mt-6 leading-8">
              Your service request has been received. We'll review your
              information and contact you as soon as possible regarding your
              project.
            </p>

            <p className="text-slate-600 mt-4">
              Have a question or need immediate assistance?
            </p>

            {/* Call Button */}
            <a
              href="tel:9312130332"
              className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition shadow-lg mt-7"
            >
              Call (931) 213-0332
            </a>

            {/* Home Button */}
            <Link
              href="/"
              className="block w-full border-2 border-slate-300 text-slate-800 py-4 rounded-xl font-semibold hover:bg-slate-100 transition mt-4"
            >
              Return to Home
            </Link>

            {/* Service Area */}
            <p className="text-sm text-slate-500 mt-8">
              Proudly serving Middle Tennessee
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
