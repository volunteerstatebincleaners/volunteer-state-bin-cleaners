export default function QuoteForm() {
  return (
    <section
      id="quote"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="bg-red-600 px-4 py-2 rounded-full font-semibold">
            Free Quote
          </span>
          <h2 className="text-5xl font-black mt-6">
            Request Your Free Quote
          </h2>
          <p className="mt-6 text-gray-300">
            Fill out the form below and we'll contact you with a free,
            no-obligation estimate.
          </p>
        </div>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl p-4 text-black"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-xl p-4 text-black"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl p-4 text-black"
          />
          <input
            type="text"
            placeholder="City"
            className="w-full rounded-xl p-4 text-black"
          />
          <select
            className="w-full rounded-xl p-4 text-black"
          >
            <option>Select Service</option>
            <option>Monthly Cleaning</option>
            <option>Every 2 Months</option>
            <option>One-Time Cleaning</option>
            <option>Commercial Service</option>
          </select>
          <textarea
            rows={5}
            placeholder="Tell us about your bins..."
            className="w-full rounded-xl p-4 text-black"
          />
          <button
            className="w-full bg-red-600 hover:bg-red-700 rounded-xl py-5 text-xl font-bold"
          >
            Request Free Quote
          </button>
        </form>
      </div>
    </section>
  );
}

