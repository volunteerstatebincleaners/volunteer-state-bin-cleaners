import Image from "next/image";

export default function BeforeAfter() {

  return (

    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">

          <span className="rounded-full bg-red-100 px-4 py-2 font-semibold text-red-700">

            Real Results

          </span>

          <h2 className="mt-6 text-5xl font-black text-[#0B2341]">

            See the Difference

          </h2>

          <p className="mt-4 text-lg text-gray-600">

            Professional cleaning that removes grime, bacteria and odors.

          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <Image

              src="/gallery/before.jpg"

              alt="Dirty Trash Bin"

              width={900}

              height={700}

              className="w-full object-cover"

            />

            <div className="bg-red-600 p-4 text-center text-xl font-bold text-white">

              BEFORE

            </div>

          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <Image

              src="/gallery/after.jpg"

              alt="Clean Trash Bin"

              width={900}

              height={700}

              className="w-full object-cover"

            />

            <div className="bg-green-600 p-4 text-center text-xl font-bold text-white">

              AFTER

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}
