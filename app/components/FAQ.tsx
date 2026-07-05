export default function FAQ() {
  const faqs = [
    {
      question: "How often should my trash bins be cleaned?",
      answer:
        "Most homeowners choose monthly service to keep odors, bacteria, and insects under control. We also offer one-time cleanings and commercial schedules.",
    },
    {
      question: "Do I need to be home during service?",
      answer:
        "No. As long as your trash bins are curbside or otherwise accessible, we'll complete the service and leave your bins clean, sanitized, and deodorized.",
    },
    {
      question: "Do you use eco-friendly cleaning methods?",
      answer:
        "Yes. We use high-pressure hot water and environmentally responsible cleaning products that are safe for your family, pets, and the environment.",
    },
    {
      question: "Do you clean commercial dumpsters?",
      answer:
        "Yes. We service HOAs, apartment communities, restaurants, offices, and other commercial properties. Contact us for a custom quote.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve Nashville, Murfreesboro, Franklin, Hendersonville, Gallatin, Mt. Juliet, Lebanon, Smyrna, Brentwood, Spring Hill, and surrounding Middle Tennessee communities.",
    },
  ];

  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="text-5xl font-black text-slate-900 mt-6">
            Have Questions?
          </h2>

          <p className="text-slate-600 text-xl mt-5">
            Here are answers to some of the most common questions we receive.
          </p>

        </div>

        <div className="space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-slate-100 rounded-2xl p-8 shadow"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {faq.question}
              </h3>

              <p className="text-slate-600 mt-4 leading-7">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}