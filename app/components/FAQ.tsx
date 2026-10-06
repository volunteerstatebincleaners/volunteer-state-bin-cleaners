export default function FAQ() {
  const faqs = [
    {
      question: "How often should my trash bins be cleaned?",
      answer:
        "Many homeowners choose monthly service to help control odors, buildup, and unwanted pests. We also offer one-time cleanings and customized recurring schedules based on your needs.",
    },
    {
      question: "Do I need to be home during service?",
      answer:
        "No. As long as your bins or cleaning area are accessible, you generally do not need to be home. We'll complete the service and leave the area clean.",
    },
    {
      question: "Do you provide pressure washing?",
      answer:
        "Yes. Volunteer State Cleaners provides pressure washing for driveways, sidewalks, walkways, and other appropriate exterior surfaces. We can also discuss larger residential and commercial exterior cleaning projects.",
    },
    {
      question: "Do you provide exterior cleaning services?",
      answer:
        "Yes. We provide exterior cleaning services for residential and commercial properties. Contact us with the details of your project so we can determine the best cleaning approach.",
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
      question: "Does the condition of my property or bin affect the price?",
      answer:
        "It can. Pricing may vary depending on the size, condition, accessibility, quantity, and severity of cleaning required. Final pricing will be confirmed before service begins.",
    },
    {
      question: "Do you offer recurring cleaning services?",
      answer:
        "Yes. We offer recurring service options for residential customers, businesses, HOAs, apartment communities, and commercial properties. Service frequency can be customized based on your needs.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve Nashville, Murfreesboro, Franklin, Hendersonville, Gallatin, Mt. Juliet, Lebanon, Smyrna, La Vergne, Brentwood, Spring Hill, Columbia, and surrounding Middle Tennessee communities.",
    },
    {
      question: "How do I request a quote?",
      answer:
        "Simply click the Book Now button on our website and submit your project information. We'll review your request and follow up with the next steps.",
    },
  ];

  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold shadow-sm">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-6">
            Questions? We've Got Answers.
          </h2>

          <p className="text-lg text-slate-600 mt-5 max-w-3xl mx-auto leading-8">
            Learn more about our bin cleaning, pressure washing, exterior
            cleaning, commercial services, pricing, and service area.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition duration-300"
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

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-lg text-slate-700 font-semibold">
            Still have questions about your project?
          </p>

          <a
            href="/quote"
            className="inline-block mt-5 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
