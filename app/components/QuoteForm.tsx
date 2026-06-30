export default function QuoteForm() {
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
          <p className="text-slate-200 mt-5 text-xl">
            Fill out the form below and we'll contact you with a free,
            no-obligation estimate.
          </p>
        </div>
        <form
          action="https://formspree.io/f/xdzlqobe"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 p-4"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 p-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 p-4"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 p-4"
          />
          <select
            name="service"
            required
            className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 p-4"
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
            className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 p-4"
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition"
          >
            Request Free Quote
          </button>
        </form>
      </div>
    </section>
  );
}
