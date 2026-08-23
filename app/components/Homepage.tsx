import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
  return (
    <section className="max-w-[1380px] mx-auto px-4 sm:px-8 md:px-12 py-8 lg:py-12">
      <div className="relative overflow-hidden rounded-[32px] bg-[#f7f7f5] border border-black/[0.06]">
        
        <div className="flex flex-col lg:flex-row items-stretch min-h-[600px]">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[52%] flex items-center">
            <div className="px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
              
              {/* Brand badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />

                <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-neutral-600 uppercase">
                  Roomify · Across Nepal
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-7 max-w-[650px] text-4xl sm:text-5xl lg:text-[64px] font-black leading-[1.02] tracking-[-2px] text-neutral-950">
                Find a place
                <br />
                <span className="text-red-500">
                  that feels like home.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-[570px] text-base sm:text-lg leading-8 text-neutral-500">
                Discover rooms, flats, hostels, apartments, and homes
                across Nepal. Search smarter, compare easily, and find
                a space that fits your life.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/exploreproperty"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-black
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-red-500
                    hover:-translate-y-0.5
                    hover:shadow-xl
                    hover:shadow-red-500/20
                  "
                >
                  Explore Properties
                  <span className="ml-3 text-lg">→</span>
                </Link>

                <Link
                  href="/exploreproperty"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-black/[0.1]
                    bg-white
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-neutral-800
                    transition-all
                    duration-300
                    hover:bg-neutral-100
                    hover:-translate-y-0.5
                  "
                >
                  Browse Kathmandu
                </Link>
              </div>

              {/* Small stats */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <div>
                  <p className="text-xl font-bold text-neutral-900">
                    10+
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Property types
                  </p>
                </div>

                <div className="h-8 w-px bg-black/10 hidden sm:block" />

                <div>
                  <p className="text-xl font-bold text-neutral-900">
                    5+
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Cities to explore
                  </p>
                </div>

                <div className="h-8 w-px bg-black/10 hidden sm:block" />

                <div>
                  <p className="text-xl font-bold text-neutral-900">
                    01
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Simple platform
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[48%] p-3 sm:p-4 lg:p-5">
            <div className="relative h-[360px] sm:h-[450px] lg:h-full min-h-[520px] overflow-hidden rounded-[24px]">
              
              <Image
                src="/images/homepage.avif"
                alt="Modern room"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur-xl">
                  
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center">
                      <span className="text-red-500 font-black">
                        R
                      </span>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Your next place
                      </p>

                      <p className="text-xs text-white/70 mt-0.5">
                        Starts with Roomify
                      </p>
                    </div>
                  </div>

                  <div className="h-9 w-9 rounded-full bg-white/20 border border-white/20 flex items-center justify-center text-white">
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom statement */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-7 px-1">
        <p className="text-sm text-neutral-400">
          Rooms. Flats. Hostels. Homes.
        </p>

        <p className="text-sm font-medium text-neutral-500">
          One simpler way to find yours.
        </p>
      </div>
    </section>
  );
}