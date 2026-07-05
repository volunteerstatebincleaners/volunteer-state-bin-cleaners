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
    }

    setLoading(false);
  }

  if (submitted) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">

          <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center shadow-xl">

            <div className="text-6xl mb-6">
              🎉
            </div>

            <h2 className="text-5xl font-black text-slate-900">
              Quote Request Received!
            </h2>

            <p className="text-slate-600 text-xl mt-6">
              Thank you for contacting
              <strong> Volunteer State Bin Cleaners.</strong>
            </p>

            <p className="text-slate-600 mt-4">
              We'll review your request and contact you as soon as possible.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">

              <a
                href="tel:9312130332"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition"
              >
                📞 Call Now
              </a>

              <a
                href="/"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl font-bold transition"
              >
                Return Home
              </a>

            </div>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-24">

      <div className="max-w-3xl mx-auto px-6">

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-3xl p-10 space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full border rounded-xl p-4"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full border rounded-xl p-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            className="w-full border rounded-xl p-4"
          />

          <select
            name="service"
            required
            className="w-full border rounded-xl p-4"
          >
            <option value="">Select Service</option>
            <option>One-Time Cleaning</option>
            <option>Monthly Service</option>
            <option>Commercial Service</option>
            <option>HOA Community</option>
          </select>

          <textarea
            name="message"
            rows={5}
            placeholder="Tell us how we can help..."
            className="w-full border rounded-xl p-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-4 font-bold text-lg transition disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Request Free Quote"}
          </button>

        </form>

      </div>

    </section>
  );
}