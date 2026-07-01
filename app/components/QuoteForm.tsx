"use client";

import { useState } from "react";

export default function QuoteForm() {

  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    const data = new FormData(form);

    const response = await fetch(

      "https://formspree.io/f/xzdlaobe",

      {

        method: "POST",

        body: data,

        headers: {

          Accept: "application/json",

        },

      }

    );

    if (response.ok) {

      setSubmitted(true);

      form.reset();

    }

    setLoading(false);

  }

  if (submitted) {

    return (

      <section

        id="quote"

        className="bg-slate-900 py-24"

      >

        <div className="max-w-2xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-xl p-10 text-center">

            <div className="text-6xl mb-6">

              ✅

            </div>

            <h2 className="text-4xl font-bold text-slate-900 mb-4">

              Thank You!

            </h2>

            <p className="text-lg text-slate-600 mb-8">

              Your quote request has been sent successfully.

              <br />

              We'll contact you as soon as possible.

            </p>

            <a

              href="tel:9312130332"

              className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition"

            >

              📞 Call (931) 213-0332

            </a>

          </div>

        </div>

      </section>

    );

  }

  return (
<section id="quote" className="bg-slate-900 py-24">
  <div className="max-w-3xl mx-auto px-6">
    <div className="text-center mb-12">
      <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
        Free Quote
      </span>
      <h2 className="text-5xl font-extrabold text-white mt-4">
        Request Your Free Quote
      </h2>
      <p className="text-slate-300 mt-5 text-xl">
        Fill out the form below and we'll contact you as soon as possible.
      </p>
    </div>
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white rounded-2xl shadow-xl p-8"
    >
<input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        className="w-full rounded-lg border border-slate-300 p-4"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        className="w-full rounded-lg border border-slate-300 p-4"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="w-full rounded-lg border border-slate-300 p-4"
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        required
        className="w-full rounded-lg border border-slate-300 p-4"
      />
      <select
        name="service"
        required
        className="w-full rounded-lg border border-slate-300 p-4"
      >
        <option value="">Select Service</option>
        <option>Monthly Cleaning</option>
        <option>Every 2 Months</option>
        <option>One-Time Cleaning</option>
        <option>Commercial Service</option>
      </select>
      <textarea
        name="message"
        rows={5}
        placeholder="Tell us about your bins..."
        className="w-full rounded-lg border border-slate-300 p-4"
      />
      <button

        type="submit"

        disabled={loading}

        className={`w-full rounded-xl py-4 font-bold text-white transition ${

          loading

            ? "bg-gray-500 cursor-not-allowed"

            : "bg-red-600 hover:bg-red-700"

        }`}

      >

        {loading ? "Sending..." : "Request Free Quote"}

      </button>

    </form>

  </div>

</section>

);

}
