"use client";

import React from "react";
import Image from "next/image";
import NavbarForPage from "@/app/components/NavbarForPage";
import Footer from "@/app/components/Footer";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white text-[#172033]">
      <NavbarForPage />

      <section className="w-full bg-white">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="min-h-[650px] flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

              {/* LEFT CONTENT */}

              <div className="flex flex-col justify-center">
                <h1 className="text-[42px] sm:text-[48px] lg:text-[52px] xl:text-[56px] leading-[1.02] font-extrabold tracking-[-1.5px] text-[#182033]">
                  Nepal&apos;s #1 Property Rental
                  <br />
                  &amp; Management Platform
                </h1>

                <p className="mt-7 text-[18px] sm:text-[19px] font-medium text-[#263852] leading-relaxed">
                  Rent Rooms, Flats &amp; Houses in Kathmandu,
                  Pokhara, Biratnagar
                </p>

                <p className="mt-2 max-w-[680px] text-[17px] sm:text-[18px] leading-[1.55] text-[#263852]">
                  Find your perfect{" "}
                  <span className="font-semibold text-[#E51E4F]">
                    कोठा
                  </span>{" "}
                  (room) or{" "}
                  <span className="font-semibold text-[#E51E4F]">
                    घर
                  </span>{" "}
                  (house) across Nepal&apos;s major cities.
                  Professional property rental management services
                  for landlords and tenants.
                </p>
              </div>

              {/* RIGHT IMAGE */}

              <div className="relative w-full h-[330px] sm:h-[390px] lg:h-[430px]">
                <Image
                  src={"/images/aboutus.svg"}
                  alt="Property rental illustration"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pb-20">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">

          <h2 className="text-center text-[34px] sm:text-[38px] lg:text-[40px] font-extrabold tracking-[-0.8px] text-[#172033]">
            Leading Property Rental Platform in Nepal Since 2020
          </h2>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT TEXT */}

            <div className="text-[17px] leading-[1.65] text-[#263852]">

              <p>
                <strong className="font-bold">
                  Roomify
                </strong>{" "}
                is Nepal&apos;s premier{" "}
                <em>property rental management platform</em>{" "}
                that revolutionizes how people find and rent
                properties across major cities including{" "}
                <strong>Kathmandu, Pokhara, Biratnagar</strong>.
              </p>

              <p className="mt-5">
                We connect tenants with verified property owners,
                making the rental process simple, transparent and
                convenient.
              </p>

              <p className="mt-5">
                Whether you are searching for a room, apartment,
                house, flat or commercial property, Roomify helps
                you discover the right place for your needs.
              </p>

            </div>

            {/* RIGHT CARD */}

            <div className="rounded-3xl bg-[#F4F7FF] p-7 sm:p-9">

              <div className="grid grid-cols-2 gap-5">

                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <p className="text-3xl font-extrabold text-[#E51E4F]">
                    2020
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    Founded
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <p className="text-3xl font-extrabold text-[#E51E4F]">
                    10K+
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    Properties
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <p className="text-3xl font-extrabold text-[#E51E4F]">
                    50K+
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    Users
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <p className="text-3xl font-extrabold text-[#E51E4F]">
                    24/7
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    Support
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="w-full bg-[#F9FAFB] py-20">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8">

          <div className="max-w-[750px] mx-auto text-center">

            <span className="inline-flex items-center rounded-full bg-[#FFE9EF] px-4 py-2 text-sm font-semibold text-[#D81B54]">
              Our Mission
            </span>

            <h2 className="mt-5 text-[34px] sm:text-[40px] font-extrabold text-[#172033]">
              Making Property Rental Simple
            </h2>

            <p className="mt-5 text-[17px] leading-[1.7] text-gray-600">
              Our mission is to make finding and renting property
              easier for everyone in Nepal. We believe that finding
              a home should be simple, transparent and stress-free.
            </p>

          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* CARD 1 */}

            <div className="bg-white rounded-3xl p-7 border border-gray-100">

              <div className="h-12 w-12 rounded-2xl bg-[#FFE8EF] flex items-center justify-center text-[#D81B54] text-xl font-bold">
                01
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Verified Properties
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                We help tenants discover genuine properties and
                reliable rental opportunities.
              </p>

            </div>

            {/* CARD 2 */}

            <div className="bg-white rounded-3xl p-7 border border-gray-100">

              <div className="h-12 w-12 rounded-2xl bg-[#FFE8EF] flex items-center justify-center text-[#D81B54] text-xl font-bold">
                02
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Easy Searching
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Search rooms, flats, houses and apartments based
                on your preferred location and requirements.
              </p>

            </div>

            {/* CARD 3 */}

            <div className="bg-white rounded-3xl p-7 border border-gray-100">

              <div className="h-12 w-12 rounded-2xl bg-[#FFE8EF] flex items-center justify-center text-[#D81B54] text-xl font-bold">
                03
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Trusted Experience
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                We provide a reliable platform for both tenants and
                property owners.
              </p>

            </div>

          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}

            <div>

              <p className="text-sm font-bold uppercase tracking-widest text-[#D81B54]">
                Why Roomify
              </p>

              <h2 className="mt-3 text-[36px] sm:text-[42px] font-extrabold leading-tight text-[#172033]">
                A Better Way to Find Your Next Home
              </h2>

              <p className="mt-5 text-gray-600 text-[17px] leading-7">
                From searching for your first room to managing
                multiple rental properties, Roomify is built to
                make the entire property rental experience easier.
              </p>

            </div>

            {/* RIGHT */}

            <div className="flex flex-col gap-4">

              <div className="flex gap-4 p-5 rounded-2xl bg-[#F9FAFB]">

                <div className="h-10 w-10 shrink-0 rounded-full bg-[#FFE8EF] flex items-center justify-center text-[#D81B54] font-bold">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold">
                    Easy Property Discovery
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    Quickly discover properties that match your
                    lifestyle and budget.
                  </p>
                </div>

              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-[#F9FAFB]">

                <div className="h-10 w-10 shrink-0 rounded-full bg-[#FFE8EF] flex items-center justify-center text-[#D81B54] font-bold">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold">
                    Property Management
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    Property owners can easily list and manage their
                    rental properties.
                  </p>
                </div>

              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-[#F9FAFB]">

                <div className="h-10 w-10 shrink-0 rounded-full bg-[#FFE8EF] flex items-center justify-center text-[#D81B54] font-bold">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold">
                    Trusted Connections
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    Connect tenants and property owners through a
                    trusted rental platform.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="px-6 sm:px-8 pb-20">

        <div className="max-w-[1100px] mx-auto rounded-[32px] overflow-hidden bg-gradient-to-r from-[#FF2865] via-[#D81B54] to-[#800C35]">

          <div className="px-7 py-14 sm:px-12 sm:py-16 text-center text-white">

            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Find Your Perfect Place
            </h2>

            <p className="mt-4 max-w-[650px] mx-auto text-white/90">
              Discover rooms, flats, houses and apartments across
              Nepal with Roomify.
            </p>

            <button
              type="button"
              className="mt-7 rounded-xl bg-white px-7 py-3 text-sm font-bold text-[#D81B54] hover:bg-gray-100 transition"
            >
              Explore Properties
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;