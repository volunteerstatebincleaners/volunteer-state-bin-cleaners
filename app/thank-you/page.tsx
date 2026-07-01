export default function ThankYouPage() {
  return (
    <section className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Thank You!
        </h1>
        <p className="text-slate-600 text-lg mb-8">
          Your quote request has been received.
          <br />
          We'll contact you as soon as possible.
        </p>
        <a
          href="tel:9312130332"
          className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition mb-4"
        >
          📞 Call 931-213-0332
        </a>
        <a
          href="/"
          className="block w-full border border-slate-300 py-4 rounded-xl font-semibold hover:bg-slate-100"
        >
          Return to Home
        </a>
      </div>
    </section>
  );
}
