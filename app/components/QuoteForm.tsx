"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xzdlaobe", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      alert("Unable to send your request. Please call us at (931) 213-0332.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section className="bg-slate-100 py-24">
        <div className="max-w-2xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 text-center">

            <div className="text-6xl mb-6">
              ✓
            </div>

            <h2 className="text-4xl font-black text-slate-900">
              Request Received!
            </h2>

            <p className="text-lg text-slate-600 mt-6 leading-8">
              Thank you for contacting Volunteer State Bin Cleaners.
              We've received your request and will contact you as soon as
              possible.
            </p>

            <p className="text-slate-600 mt-4">
              Need immediate assistance?
            </p>

            <a
              href="tel:9312130332"
              className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition"
            >
              Call (931) 213-0332
            </a>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="bg-slate-100 py-24">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">

          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold">
            Free Quote
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-6">
            Tell Us What You Need
          </h2>

          <p className="text-lg text-slate-600 mt-5 max-w-2xl mx-auto">
            Complete the form below and we'll review your request and
            contact you with pricing and availability.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-7"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block font-semibold text-slate-900 mb-2">
                Full Name *
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-900 mb-2">
                Phone Number *
              </label>

              <input
                type="tel"
                name="phone"
                required
                placeholder="(931) 555-5555"
                className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block font-semibold text-slate-900 mb-2">
                Email Address *
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-900 mb-2">
                City *
              </label>

              <input
                type="text"
                name="city"
                required
                placeholder="City"
                className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

          </div>

          <div>
            <label className="block font-semibold text-slate-900 mb-3">
              What service are you interested in? *
            </label>

            <select
              name="service"
              required
              className="w-full border border-slate-300 rounded-xl p-4 bg-white focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="">
                Select a service
              </option>

              <option value="Residential Bin Cleaning">
                Residential Bin Cleaning
              </option>

              <option value="Commercial Bin Cleaning">
                Commercial Bin Cleaning
              </option>

              <option value="Monthly Bin Cleaning">
                Monthly Bin Cleaning
              </option>

              <option value="Driveway Pressure Washing">
                Driveway Pressure Washing
              </option>

              <option value="Sidewalk Pressure Washing">
                Sidewalk Pressure Washing
              </option>

              <option value="Crate & Tote Cleaning">
                Crate & Tote Cleaning
              </option>

              <option value="Dumpster Pad Cleaning">
                Dumpster Pad Cleaning
              </option>

              <option value="HOA or Apartment Community">
                HOA or Apartment Community
              </option>

              <option value="Multiple Services">
                Multiple Services
              </option>

              <option value="Other">
                Other
              </option>

            </select>
          </div>

          <div>

            <label className="block font-semibold text-slate-900 mb-3">
              Service Details
            </label>

            <textarea
              name="message"
              rows={6}
              placeholder="Tell us what you'd like cleaned, how many bins or the approximate size of the area, and anything else we should know."
              className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-600"
            />

          </div>

          <div>

            <label className="block font-semibold text-slate-900 mb-3">
              Water Availability
            </label>

            <select
              name="water_availability"
              className="w-full border border-slate-300 rounded-xl p-4 bg-white focus:outline-none focus:ring-2 focus:ring-red-600"
            >

              <option value="">
                Select an option
              </option>

              <option value="Outdoor water connection available">
                Outdoor water connection available
              </option>

              <option value="No outdoor water connection available">
                No outdoor water connection available
              </option>

              <option value="Not sure">
                Not sure
              </option>

            </select>

            <p className="text-sm text-slate-500 mt-2">
              If an outdoor water connection is available, we may use the
              customer's water supply when appropriate.
            </p>

          </div>

          <div className="bg-slate-50 rounded-2xl p-6">

            <h3 className="font-bold text-slate-900">
              Pricing Notice
            </h3>

            <p className="text-sm text-slate-600 mt-2 leading-6">
              Pricing is subject to change based on the size, condition,
              accessibility, and severity of cleaning required. Final pricing
              will be confirmed before service begins.
            </p>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-slate-400 text-white py-5 rounded-xl font-bold text-lg transition"
          >
            {loading ? "Sending Request..." : "Request My Free Quote"}
          </button>

          <p className="text-center text-sm text-slate-500">
            Prefer to talk with us directly? Call{" "}
            <a
              href="tel:9312130332"
              className="font-semibold text-red-600"
            >
              (931) 213-0332
            </a>
          </p>

        </form>

      </div>

    </section>
  );
}