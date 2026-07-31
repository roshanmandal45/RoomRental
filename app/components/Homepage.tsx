import Image from "next/image";

export default function Homepage() {
  return (
    <section className="w-full bg-gray-100 py-10 lg:py-16">
      <div className="mx-auto max-w-7xl rounded-3xl bg-white shadow-xl px-6 py-8 lg:px-12 lg:py-12"> {/* This is the right content  */}
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-16">  
         
          <div className="w-full lg:w-1/2">
           
            <span className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-medium uppercase tracking-[3px] text-gray-600">
              Across Nepal
            </span>

           
            <h1 className="mt-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Better rooms,
              stronger search,
              easier renting.
            </h1>

           
            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              Room Sewa helps renters discover rooms, flats, hostels,
              apartments, and family homes across Kathmandu, Pokhara,
              Lalitpur, Bhaktapur, and other cities in Nepal.
            </p>

            
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600">
                Explore Properties
              </button>

              <button className="rounded-full border border-gray-300 px-8 py-4 font-semibold text-gray-800 transition hover:bg-gray-100">
                Rooms in Kathmandu
              </button>
            </div>

            
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Kathmandu",
                "Pokhara",
                "Lalitpur",
                "Bhaktapur",
                "Student Rentals",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-gray-100 px-5 py-2 text-sm font-medium text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* This is the left content  */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[350px]  overflow-hidden rounded-3xl sm:h-[350px] lg:h-[300px] lg:w-[600px] ">
              <Image
                src="/images/heroimage.jpg"
                alt="Modern Room"
                fill
                priority
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />

              
              <div className="absolute inset-0 bg-black/40" />

              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h2 className="text-3xl font-bold leading-tight lg:text-5xl">
                  Discover your
                  <br />
                  perfect room
                  <br />
                  in Nepal.
                </h2>

                <p className="mt-5 max-w-md text-base text-gray-200">
                  Browse thousands of verified rooms, hostels, flats,
                  apartments, and family homes with an easier and faster
                  search experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}