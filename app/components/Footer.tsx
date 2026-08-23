"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const countries = [
  { code: "NP", name: "Nepal" },
  { code: "IN", name: "India" },
  { code: "BD", name: "Bangladesh" },
  { code: "PK", name: "Pakistan" },
];

export default function Footer() {
  const [selectedCountry, setSelectedCountry] = useState(
    countries[0].name
  );

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}

          <div>
            <div className="mb-8">
              <Link
                href="/"
                className="flex items-center tracking-tight"
              >
                <span className="text-2xl sm:text-3xl font-black text-black">
                  ROOM
                </span>

                <span className="text-2xl sm:text-3xl font-black text-red-500">
                  IFY
                </span>
              </Link>
            </div>

            <p className="text-gray-600 text-lg leading-6">
              Roomify Pvt. Ltd.
              <br />
              A simple marketplace to discover rooms,
              flats, hostels and rental listings across Nepal.
            </p>

            <h3 className="font-bold text-2xl mt-10 mb-5">
              Download the app
            </h3>

            <div className="flex flex-row-reverse gap-4">
              <Image
                src="/images/googleplay.avif"
                alt="Google Play"
                width={150}
                height={48}
                className="cursor-pointer"
              />

              <Image
                src="/images/appstore.svg"
                alt="App Store"
                width={150}
                height={48}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* COMPANY */}

          <div>
            <h3 className="font-bold text-xl mb-3">
              Company
            </h3>

            <ul className="space-y-2 text-gray-600 text-lg">

              <li>
                <Link
                  href="/aboutus"
                  className="hover:text-red-600 cursor-pointer"
                >
                  About Us
                </Link>
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                
                <Link
                  href="/blogs"
                  className="hover:text-red-600 cursor-pointer"
                >
                  Roomify Blogs
                </Link>
              </li>

              <li className="hover:text-red-600 cursor-pointer">
<Link
                  href="/exploreproperty"
                  className="hover:text-red-600 cursor-pointer"
                >
                  Explore Properties
                </Link>              </li>

              <li className="hover:text-red-600 cursor-pointer">
<Link
                  href="/addProperty"
                  className="hover:text-red-600 cursor-pointer"
                >
                  Add Property
                </Link>              </li>

            </ul>
          </div>

          {/* SUPPORT */}

          <div>
            <h3 className="font-bold text-xl mb-3">
              Support
            </h3>

            <ul className="space-y-2 text-gray-600 text-lg">

              <li className="hover:text-red-600 cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Terms and Conditions
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Help and Support
              </li>

            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="font-bold text-xl mb-3">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-600 text-lg">

              <p>
                Email:
                <br />
                support@roomify.com.np
              </p>

              <p>
                Kathmandu, Bagmati Province
              </p>

              <p>
                Office Hours: Mon–Fri, 9:00 AM – 5:00 PM
              </p>

            </div>
          </div>

        </div>

        {/* BOTTOM */}

        <div className="border-t border-black/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-600 text-lg text-center md:text-left">
            © 2026 Roomify Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">

            <span className="uppercase tracking-widest text-gray-500 text-sm font-semibold">
              Country
            </span>

            <div className="relative">

              <select
                value={selectedCountry}
                onChange={(e) =>
                  setSelectedCountry(e.target.value)
                }
                className="appearance-none border-2 border-red-200 rounded-full py-3 pl-5 pr-12 text-lg bg-white outline-none cursor-pointer hover:border-red-400 transition"
              >
                {countries.map((country) => (
                  <option
                    key={country.code}
                    value={country.name}
                  >
                    {country.code} {country.name}
                  </option>
                ))}
              </select>

              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                size={18}
              />

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}