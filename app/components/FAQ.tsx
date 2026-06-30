export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold">How often should bins be cleaned?</h3>
            <p>Most customers choose monthly service.</p>
          </div>
          <div>
            <h3 className="font-bold">Do you disinfect?</h3>
            <p>Yes. We sanitize using hot water and eco-friendly cleaners.</p>
          </div>
          <div>
            <h3 className="font-bold">Do I need to be home?</h3>
            <p>No. Simply leave your bins at the curb after trash pickup.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
