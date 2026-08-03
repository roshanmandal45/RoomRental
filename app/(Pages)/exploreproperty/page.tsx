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
    image: "/FeaturedImages/Img1.avif",
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
    <NavbarForPage/>
    <main className="max-w-7xl mx-auto  px-4 lg:px-0 py-4">
      <div className="bg-white lg:h-28 flex rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
            <div className="flex items-center gap-2 text-[#ff385c] font-semibold">
              <MapPin size={18} />
              <span>Location</span>
            </div>
            <input
              placeholder="Kathmandu"
              className="w-full mt-3 outline-none text-xl font-medium"
            />
          </div>

          <div className="p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
            <div className="flex items-center gap-2 text-[#ff385c] font-semibold">
              <Home size={18} />
              <span>Title</span>
            </div>
            <input
              placeholder="Apartment"
              className="w-full mt-3 outline-none text-xl font-medium"
            />
          </div>

          <div className="p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
            <div className="flex items-center gap-2 text-[#ff385c] font-semibold">
              <Tag size={18} />
              <span>Budget Range</span>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <input
                placeholder="Min"
                className="w-full outline-none text-lg"
              />
              <span>-</span>
              <input
                placeholder="Max"
                className="w-full outline-none text-lg"
              />
            </div>
          </div>

          <div className="flex items-center justify-center p-6">
            <button className="bg-[#ff385c] hover:bg-[#ff2953] text-white px-10 py-4 rounded-full flex items-center gap-3 font-semibold transition">
              <Search size={20} />
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-12 gap-5">
        <div>
          <h1 className="text-3xl font-bold">Explore Properties</h1>
          <p className="text-gray-500 mt-2">
            Showing {properties.length} properties
          </p>
        </div>

        <div className="flex gap-3">
          <button className="border rounded-full px-7 py-3 hover:bg-gray-100">
            Clear
          </button>
          <button className="bg-black text-white rounded-full px-7 py-3">
            Show Map
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-5">Property Types</h2>
        <div className="flex flex-wrap gap-3 text-[14px] ">
          {propertyTypes.map((item, index) => (
            <button
              key={index}
              className={`px-6 py-3 shadow-2xl rounded-full border border-gray-300 transition ${
                index === 0
                  ? "border-[#ff385c] text-[#ff385c]"
                  : "hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-10">
        <span className="font-semibold text-gray-500">ACTIVE FILTERS</span>
        <div className="border rounded-full px-5 py-2 flex items-center gap-2">
          <Search size={16} />
          Kathmandu
        </div>
        <div className="border rounded-full px-5 py-2 flex items-center gap-2">
          <MapPin size={16} />
          Kathmandu
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
        {properties.map((property) => (
          <div
            key={property.id}
            className="b rounded-3xl overflow-hidden  shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative h-68 overflow-hidden">
              <Image
                src={property.image}
                alt={property.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute top-4 left-4">
                <span className="bg-black/70 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-full">
                  {property.type}
                </span>
              </div>

              <button className="absolute top-4 right-4 h-11 w-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-[#ff385c] transition">
                <Heart size={20} className="text-white" />
              </button>

\              <button className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition">
                <ChevronLeft size={18} />
              </button>

              <button className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition">
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {property.title}
              </h2>

              <div className="flex items-center gap-2 text-gray-500 mt-3">
                <MapPin size={18} />
                <span>{property.location}</span>
              </div>

              <div className="flex justify-between items-center mt-2">

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
              </div>
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
    </main>
    <Footer/>
    </>
  );
}
