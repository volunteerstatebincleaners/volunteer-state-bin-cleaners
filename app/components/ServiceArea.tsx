export default function ServiceArea() {

  const cities = [

    "Nashville",

    "Gallatin",

    "Hendersonville",

    "Lebanon",

    "Mt. Juliet",

    "Cookeville",

    "Murfreesboro",

    "Smyrna",

    "Franklin",

    "Brentwood",

    "Goodlettsville",

    "Portland",

  ];

  return (

    <section

      id="service-area"

      className="bg-gray-100 py-20 px-6"

    >

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-slate-900">

            Proudly Serving Middle Tennessee

          </h2>

          <p className="mt-4 text-lg text-slate-800 max-w-2xl mx-auto">

            Volunteer State Bin Cleaners provides professional trash bin

            cleaning, sanitizing, and deodorizing for homeowners, HOAs,

            apartments, and businesses throughout Middle Tennessee.

          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>

            <h3 className="text-2xl font-semibold mb-6">

              Areas We Serve

            </h3>

            <div className="grid grid-cols-2 gap-4">

              {cities.map((city) => (

                <div

                  key={city}

                  className="bg-white shadow-xl border border-slate-200:shadow-lg transition"

                >

                  ✅ {city}

                </div>

              ))}

            </div>

          </div>

          <div className="flex justify-center">

            <img

              src="/TennesseeMap.png"

              alt="Middle Tennessee Service Area"

              className="rounded-xl shadow-xl max-h-[450px]"

            />

          </div>

        </div>

      </div>

    </section>

  );

}
