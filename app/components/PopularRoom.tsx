import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cities = [
  {
    name: "Kathmandu",
    link: "/exploreproperty",
    image: "/images/khathmandu.webp",
    description:
      "Rooms, flats, and family apartments close to study hubs, offices, and transport routes in Kathmandu.",
  },
  {
    name: "Pokhara",
    link: "/exploreproperty",
    image: "/images/pokhara.webp",
    description:
      "Affordable rentals and flexible rooms in Pokhara for students, workers, and long-stay renters.",
  },
  {
    name: "Lalitpur",
    link: "/exploreproperty",
    image: "/images/lalitpur.webp",
    description:
      "Popular rentals in Patan, Kupondole, Imadol, and the surrounding neighborhoods.",
  },
  {
    name: "Bhaktapur",
    link: "/exploreproperty",
    image: "/images/bhaktapur.jpg",
    description:
      "Budget-friendly rooms and flats across Bhaktapur for families, students, and first-time renters.",
  },
];

export default function PopularRooms() {
  return (
    <section className="max-w-345 mx-auto py-10 lg:py-8 border-b border-black/10 px-4 sm:px-8 md:px-12">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900">
          Popular room searches by city
        </h2>

        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          Browse rooms, flats, and apartments in the most popular rental cities.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        {cities.map((city) => (
          <Link
            href={city.link}
            key={city.name}
            className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl"
          >
            <div className="relative h-60 sm:h-50 lg:h-50 overflow-hidden">
              <Image
                src={city.image}
                alt={city.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/35 transition-all duration-300 group-hover:bg-black/50" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Rooms in {city.name}
                </h3>

                <p className="text-sm sm:text-base leading-6 text-white/90">
                  {city.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between px-5 lg:py-4 sm:px-6 py-2 sm:py-5">
              {/* Changed from <Link> to <span> to fix nested anchor hydration error */}
              <span className="text-lg sm:text-xl lg:text-[18px] font-semibold text-black transition-colors duration-300">
                Browse listings
              </span>

              {/* Changed from <Link> to <span> to fix nested anchor hydration error */}
              <span className="flex h-10 w-10 lg:h-8 lg:w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 group-hover:bg-red-700">
                <ArrowRight
                  size={18}
                  color="white"
                  className="transition transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}