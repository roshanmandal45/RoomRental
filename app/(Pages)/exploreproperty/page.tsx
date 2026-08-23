"use client";

import Image from "next/image";
import {
  Search,
  MapPin,
  Tag,
  Home,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Footer from "@/app/components/Footer";
import NavbarForPage from "@/app/components/NavbarForPage";
import Link from "next/link";

const propertyTypes = [
  "All",
  "ROOM",
  "BK",
  "BHK",
  "APARTMENT",
  "HOUSE",
  "FLAT",
  "HOSTEL",
  "HOTEL",
  "COTTAGE",
  "OFFICE SPACE",
];

const properties = [
  {
    id: 1,
    type: "2 BHK",
    title: "Modern Family Apartment",
    location: "Kathmandu",
    image: "/FeaturedImages/Img1.webp",
    // price: "Rs. 18,000",
  },
  {
    id: 2,
    type: "ROOM",
    title: "Single Room",
    location: "Kathmandu",
    image: "/FeaturedImages/Img2.avif",
    price: "Rs. 12,000",
  },
  {
    id: 3,
    type: "OFFICE",
    title: "Office Space",
    location: "Kathmandu",
    image: "/FeaturedImages/Img3.avif",
    price: "Rs. 30,000",
  },
  {
    id: 4,
    type: "HOSTEL",
    title: "Student Hostel",
    location: "Kathmandu",
    image: "/FeaturedImages/Img4.avif",
    price: "Rs. 10,000",
  },
  {
    id: 5,
    type: "HOTEL",
    title: "Luxury Hotel",
    location: "Kathmandu",
    image: "/FeaturedImages/Img5.avif",
    price: "Rs. 35,000",
  },
  {
    id: 6,
    type: "FLAT",
    title: "Rental Flat",
    location: "Kathmandu",
    image: "/FeaturedImages/Img6.avif",
    price: "Rs. 22,000",
  },
];

export default function ExploreProperty() {
  return (
    <>
      <NavbarForPage />

      <main className="min-h-screen bg-white">
        {/* HERO / SEARCH AREA */}
        <section className="bg-[#f7f7f5] border-b border-black/[0.05]">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 md:px-12 py-10 lg:py-14">

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-red-500" />

                <span className="text-xs font-bold uppercase tracking-[2px] text-neutral-500">
                  Roomify · Explore
                </span>
              </div>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[58px] font-black leading-[1.02] tracking-[-2px] text-neutral-950">
                Find a place
                <br />
                <span className="text-red-500">
                  that fits your life.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-neutral-500">
                Search rooms, flats, apartments, hostels and more
                across Nepal. Find your next place without the hassle.
              </p>
            </div>

            {/* SEARCH BOX */}
            <div className="mt-10 rounded-[28px] border border-black/[0.07] bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                {/* LOCATION */}
                <div className="p-5 lg:border-r border-black/[0.07]">
                  <div className="flex items-center gap-2 text-red-500">
                    <MapPin size={17} />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Location
                    </span>
                  </div>

                  <input
                    placeholder="Kathmandu"
                    className="w-full mt-3 bg-transparent outline-none text-base font-semibold text-neutral-900 placeholder:text-neutral-400"
                  />
                </div>

                {/* TITLE */}
                <div className="p-5 lg:border-r border-black/[0.07]">
                  <div className="flex items-center gap-2 text-red-500">
                    <Home size={17} />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Property
                    </span>
                  </div>

                  <input
                    placeholder="Apartment, room..."
                    className="w-full mt-3 bg-transparent outline-none text-base font-semibold text-neutral-900 placeholder:text-neutral-400"
                  />
                </div>

                {/* BUDGET */}
                <div className="p-5 lg:border-r border-black/[0.07]">
                  <div className="flex items-center gap-2 text-red-500">
                    <Tag size={17} />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Budget
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mt-3">
                    <input
                      placeholder="Min"
                      className="w-full bg-transparent outline-none text-base font-semibold placeholder:text-neutral-400"
                    />

                    <span className="text-neutral-300">
                      —
                    </span>

                    <input
                      placeholder="Max"
                      className="w-full bg-transparent outline-none text-base font-semibold placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                {/* SEARCH BUTTON */}
                <div className="flex items-center p-3">
                  <button className="w-full h-full min-h-[58px] rounded-2xl bg-black hover:bg-red-500 text-white flex items-center justify-center gap-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/20">
                    <Search size={19} />
                    Search Properties
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="max-w-[1380px] mx-auto px-4 sm:px-8 md:px-12 py-12 lg:py-16">

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">

            <div>
              <p className="text-xs font-bold uppercase tracking-[2px] text-red-500">
                Discover
              </p>

              <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-[-1px] text-neutral-950">
                Explore Properties
              </h2>

              <p className="mt-2 text-sm text-neutral-500">
                Showing{" "}
                <span className="font-semibold text-neutral-800">
                  {properties.length}
                </span>{" "}
                properties available in Nepal
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-full border border-black/[0.1] bg-white px-6 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition">
                Clear Filters
              </button>

              <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-red-500 transition">
                Show Map
              </button>
            </div>
          </div>

          {/* PROPERTY TYPES */}
          <div className="mt-10">

            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold uppercase tracking-[1.5px] text-neutral-800">
                Property Types
              </h3>

              <span className="text-xs text-neutral-400">
                Choose a category
              </span>
            </div>

            <div className="flex gap-2.5 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {propertyTypes.map((item, index) => (
                <button
                  key={index}
                  className={`shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200 ${
                    index === 0
                      ? "bg-black border-black text-white shadow-sm"
                      : "bg-white border-black/[0.09] text-neutral-600 hover:border-black/20 hover:bg-neutral-50 hover:text-black"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* ACTIVE FILTERS */}
          <div className="mt-9 flex flex-wrap items-center gap-2.5">

            <span className="mr-1 text-[10px] font-bold uppercase tracking-[1.5px] text-neutral-400">
              Active filters
            </span>

            <div className="border border-black/[0.08] bg-[#f7f7f5] rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium text-neutral-700">
              <Search size={14} className="text-red-500" />
              Kathmandu
            </div>

            <div className="border border-black/[0.08] bg-[#f7f7f5] rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium text-neutral-700">
              <MapPin size={14} className="text-red-500" />
              Kathmandu
            </div>
          </div>

          {/* PROPERTY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7 mt-10">

            {properties.map((property) => (
              <div
                key={property.id}
                className="group overflow-hidden rounded-[28px] border border-black/[0.07] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.09)]"
              >

                {/* IMAGE */}
                <div className="relative h-[280px] sm:h-[300px] overflow-hidden bg-neutral-100">

                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* IMAGE GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />

                  {/* TYPE */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/95 backdrop-blur-md px-4 py-2 text-[11px] font-bold tracking-wider text-neutral-900 shadow-sm">
                      {property.type}
                    </span>
                  </div>

                  {/* HEART */}
                  <button className="absolute top-4 right-4 h-10 w-10 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 hover:bg-red-500 hover:border-red-500 hover:scale-105">
                    <Heart size={18} />
                  </button>

                  {/* IMAGE NAVIGATION */}
                  <button className="absolute left-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-neutral-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105">
                    <ChevronLeft size={17} />
                  </button>

                  <button className="absolute right-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-neutral-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105">
                    <ChevronRight size={17} />
                  </button>

                  {/* LOCATION ON IMAGE */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-sm font-medium">
                    <MapPin size={15} />
                    {property.location}
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="p-5">

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold tracking-[-0.3px] text-neutral-950 group-hover:text-red-500 transition-colors">
                        {property.title}
                      </h2>

                      <div className="flex items-center gap-1.5 text-neutral-400 mt-2 text-sm">
                        <MapPin size={14} />
                        <span>{property.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/[0.06] mt-5 pt-4 flex items-center justify-between">

                    <div>
                      <p className="text-[10px] uppercase tracking-[1.5px] font-bold text-neutral-400">
                        Property type
                      </p>

                      <p className="mt-1 text-sm font-semibold text-neutral-800">
                        {property.type}
                      </p>
                    </div>

                    <button className="h-10 px-5 rounded-full bg-black text-white text-xs font-semibold hover:bg-red-500 transition-all duration-300">
                     <li>
                      <Link href = "/roomDescription">
                      View Property
</Link>
                     </li>
                    </button>
                  </div>

                  {/* This is the extra section if needed for price and more details    */}
                  {/* <div>
                    <h3 className="text-3xl font-bold text-[#ff385c]">
                      {property.price}
                    </h3>
                    <p className="text-gray-500">Per Month</p>
                  </div> */}

                  {/* <button className="bg-[#ff385c] hover:bg-[#ff2b53] text-white px-6 py-3 rounded-full font-semibold transition">
                    View
                  </button> */}

                  {/* 
                  <div className="border-t mt-6 pt-5">
                    <div className="grid grid-cols-3 text-center">
                      <div>
                        <h4 className="font-bold text-lg">2</h4>
                        <p className="text-gray-500 text-sm">Beds</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg">1</h4>
                        <p className="text-gray-500 text-sm">Bath</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg">950</h4>
                        <p className="text-gray-500 text-sm">Sq.ft</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div className="mt-16 rounded-[30px] bg-[#f7f7f5] border border-black/[0.06] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">

            <div>
              <p className="text-xs font-bold uppercase tracking-[2px] text-red-500">
                Can't find what you need?
              </p>

              <h3 className="mt-2 text-2xl sm:text-3xl font-black tracking-[-1px]">
                Post a property on Roomify.
              </h3>

              <p className="mt-2 text-sm text-neutral-500">
                Help someone find their next place while reaching
                potential tenants.
              </p>
            </div>

            <button className="shrink-0 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white hover:bg-red-500 transition-all duration-300">
              Add Property +
            </button>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}