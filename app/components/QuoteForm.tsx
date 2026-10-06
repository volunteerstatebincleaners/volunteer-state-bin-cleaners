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
        alert(
          "Something went wrong. Please try again or call us directly at (931) 213-0332."
        );
      }
    } catch {
      alert(
        "Unable to send your request. Please call us at (931) 213-0332."
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section className="bg-slate-100 py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 text-center">
            {/* Success Icon */}
            <div className="mx-auto w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl font-black mb-6">
              ✓
            </div>

            <h2 className="text-4xl font-black text-slate-900">
              Request Received!
            </h2>

            <p className="text-lg text-slate-600 mt-6 leading-8">
              Thank you for contacting Volunteer State Cleaners. We've
              received your request and will review your project and contact
              you as soon as possible.
            </p>

            <p className="text-slate-600 mt-6">
              Need immediate assistance?
            </p>

            <a
              href="tel:9312130332"
              className="inline-block mt-5 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg"
            >
              Call (931) 213-0332
            </a>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="block mx-auto mt-5 text-red-600 hover:text-red-700 font-semibold"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="bg-slate-100 py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold shadow-sm">
            Book Your Service
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-6">
            Tell Us What You Need
          </h2>

          <p className="text-lg text-slate-600 mt-5 max-w-2xl mx-auto leading-8">
            Complete the form below and we'll review your request and contact
            you with pricing and availability.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-7"
        >
          {/* Name & Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block font-semibold text-slate-900 mb-2"
              >
                Full Name *
              </label>

              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block font-semibold text-slate-900 mb-2"
              >
                Phone Number *
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                required
                placeholder="(931) 555-5555"
                className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>

          {/* Email & City */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block font-semibold text-slate-900 mb-2"
              >
                Email Address *
              </label>

              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block font-semibold text-slate-900 mb-2"
              >
                City *
              </label>

              <input
                id="city"
                type="text"
                name="city"
                required
                placeholder="City"
                className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>

          {/* Service */}
          <div>
            <label
              htmlFor="service"
              className="block font-semibold text-slate-900 mb-3"
            >
              What service are you interested in? *
            </label>

            <select
              id="service"
              name="service"
              required
              className="w-full border border-slate-300 rounded-xl p-4 bg-white focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="">Select a service</option>

              <option value="Residential Bin Cleaning">
                Residential Bin Cleaning
              </option>

              <option value="Commercial Bin Cleaning">
                Commercial Bin Cleaning
              </option>

              <option value="Recurring Bin Cleaning">
                Recurring Bin Cleaning
              </option>

              <option value="Pressure Washing">
                Pressure Washing
              </option>

              <option value="Driveway Pressure Washing">
                Driveway Pressure Washing
              </option>

              <option value="Sidewalk Pressure Washing">
                Sidewalk Pressure Washing
              </option>

              <option value="Exterior Cleaning">
                Exterior Cleaning
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

              <option value="Commercial Property Cleaning">
                Commercial Property Cleaning
              </option>

              <option value="Multiple Services">
                Multiple Services
              </option>

              <option value="Other">Other</option>
            </select>
          </div>

          {/* Service Details */}
          <div>
            <label
              htmlFor="message"
              className="block font-semibold text-slate-900 mb-3"
            >
              Service Details
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us what you'd like cleaned, how many bins, the approximate size of the area, or anything else we should know."
              className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Water Availability */}
          <div>
            <label
              htmlFor="water_availability"
              className="block font-semibold text-slate-900 mb-3"
            >
              Water Availability
            </label>

            <select
              id="water_availability"
              name="water_availability"
              className="w-full border border-slate-300 rounded-xl p-4 bg-white focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="">Select an option</option>

              <option value="Outdoor water connection available">
                Outdoor water connection available
              </option>

              <option value="No outdoor water connection available">
                No outdoor water connection available
              </option>

              <option value="Not sure">Not sure</option>
            </select>

            <p className="text-sm text-slate-500 mt-2">
              If an outdoor water connection is available, we may use the
              customer's water supply when appropriate.
            </p>
          </div>

          {/* Pricing Notice */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900">
              Pricing Notice
            </h3>

            <p className="text-sm text-slate-600 mt-2 leading-6">
              Pricing is subject to change based on the size, condition,
              accessibility, quantity, and severity of cleaning required.
              Final pricing will be confirmed before service begins.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-slate-400 text-white py-5 rounded-xl font-bold text-lg transition shadow-lg"
          >
            {loading ? "Sending Request..." : "Request My Free Quote"}
          </button>

          {/* Phone CTA */}
          <p className="text-center text-sm text-slate-500">
            Prefer to talk with us directly? Call{" "}
            <a
              href="tel:9312130332"
              className="font-semibold text-red-600 hover:text-red-700"
            >
              (931) 213-0332
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
