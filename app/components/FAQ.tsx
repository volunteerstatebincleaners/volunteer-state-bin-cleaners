export default function FAQ() {
  const faqs = [
    {
      question: "How often should my trash bins be cleaned?",
      answer:
        "Many homeowners choose monthly service to help control odors, buildup, and unwanted pests. We also offer one-time cleanings and customized recurring schedules.",
    },
    {
      question: "Do I need to be home during service?",
      answer:
        "No. As long as your bins or cleaning area are accessible, you generally do not need to be home. We'll complete the service and leave the area clean.",
    },
    {
      question: "Do you provide pressure washing?",
      answer:
        "Yes. We provide driveway and sidewalk pressure washing for residential and commercial properties. We can also discuss larger exterior cleaning projects.",
    },
    {
      question: "Do you clean commercial bins and dumpster areas?",
      answer:
        "Yes. We work with businesses, restaurants, apartment communities, HOAs, property managers, and other commercial properties. Contact us for a customized quote.",
    },
    {
      question: "Do you clean crates and totes?",
      answer:
        "Yes. We offer cleaning for reusable crates, plastic totes, shipping containers, industrial bins, and other commercial or agricultural containers.",
    },
    {
      question: "Can you use my outdoor water supply?",
      answer:
        "When an outdoor water connection is available, we may use the customer's water supply when appropriate. Let us know about water availability when requesting your quote.",
    },
    {
      question: "Does the condition of my bin affect the price?",
      answer:
        "It can. Pricing may vary depending on the size, condition, accessibility, and severity of cleaning required. Final pricing will be confirmed before service begins.",
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

          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-6">
            Questions? We've Got Answers.
          </h2>

          <p className="text-lg text-slate-600 mt-5 max-w-3xl mx-auto">
            Learn more about our bin cleaning, pressure washing, commercial
            services, pricing, and service area.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-7"
            >

              <h3 className="text-xl font-bold text-slate-900">
                {faq.question}
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                {faq.answer}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}