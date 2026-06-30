export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-3xl font-black">
            Volunteer State
          </h3>
          <p className="text-red-500 font-bold">
            Bin Cleaners
          </p>
          <p className="mt-4 text-slate-700">
            Professional trash bin cleaning throughout
            Middle Tennessee.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-4">
            Contact
          </h4>
          <p>(931) 213-0332</p>
          <p>info@volunteerstatebincleaners.com</p>
          <p>Middle Tennessee</p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-4">
            Business Hours
          </h4>
          <p>Monday – Friday</p>
          <p>8:00 AM – 6:00 PM</p>
          <p>Saturday by Appointment</p>
          <p>Sunday Closed</p>
        </div>
      </div>
      <div className="text-center mt-12 text-slate-700">
        © 2026 Volunteer State Bin Cleaners. All Rights Reserved.
      </div>
    </footer>
  );
}
