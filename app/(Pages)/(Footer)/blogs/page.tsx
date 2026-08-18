"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarForPage from "@/app/components/NavbarForPage";
import Footer from "@/app/components/Footer";

interface Story {
  id: number;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
}

const storiesData: Story[] = [
  {
    id: 1,
    title: "Finding Rooms in Kathmandu: The Complete...",
    category: "RESEARCH",
    readTime: "4 min",
    excerpt: "Finding Rooms securely in Kathmandu for Students",
    author: "Dilip Babu Acharya",
    date: "July 30, 2026",
    imageUrl: "/images/blogs.avif",
  },
  {
    id: 2,
    title: "Find Safe and Affordable Rooms in New York",
    category: "RESEARCH",
    readTime: "4 min",
    excerpt: "Affordable Rooms in New York with Confidence today",
    author: "Dilip Babu Acharya",
    date: "July 28, 2026",
    imageUrl: "/images/blogs1.avif",
  },
  {
    id: 3,
    title: "Apartments for Rent in Dallas, Texas | Complete Rental...",
    category: "NEWS",
    readTime: "10 minutes",
    excerpt:
      "Looking for apartments for rent in Dallas, Texas? Explore the best...",
    author: "Dilip Babu Acharya",
    date: "July 28, 2026",
    imageUrl: "/images/blogs2.avif",
  },
  {
    id: 4,
    title: "घरजग्गा कारोबार गर्न ११३ कम्पनीले 'लाइसेन्स'...",
    category: "PROPERTY",
    readTime: "2 min",
    excerpt:
      "घरजग्गा कारोबार गर्न ११३ कम्पनीले 'लाइसेन्स' रोकिेला त रियल स्टेटमा...",
    author: "Dilip Babu Acharya",
    date: "July 28, 2026",
    imageUrl: "/images/blogs3.avif",
  },
  {
    id: 5,
    title: "Room Rent in Kathmandu (2026): How to Find Cheap...",
    category: "RESEARCH",
    readTime: "2 min",
    excerpt:
      "Find affordable room rent in Kathmandu, Lalitpur & Bhaktapur...",
    author: "Dilip Babu Acharya",
    date: "June 9, 2026",
    imageUrl: "/images/blogs4.avif",
  },
  {
    id: 6,
    title: "How to Find the Room, Flat... For Rent in Kathmandu",
    category: "ROOM SEWA GUIDE",
    readTime: "",
    excerpt:
      "Discover 10 expert tips for finding the ideal room in Kathmandu tha...",
    author: "John Doe",
    date: "October 15, 2023",
    imageUrl: "/images/blogs5.avif",
  },
];

const categories = [
  "All",
  "RESEARCH",
  "NEWS",
  "PROPERTY",
  "Room Sewa Guide",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStories =
    activeCategory === "All"
      ? storiesData
      : storiesData.filter(
          (story) =>
            story.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <NavbarForPage/ >
      <section className="mb-12">
        <span className="text-xs font-bold tracking-widest text-red-500 uppercase block mb-3">
          BLOGS & STORIES
        </span>
        <div className="relative inline-block mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
            Tips, stories & guides for
            <br className="hidden sm:block" /> renting in Nepal
          </h1>
          <div className="h-1 bg-gray-900 w-full mt-4" />
        </div>
        <p className="text-gray-500 text-base sm:text-lg max-w-2xl leading-relaxed">
          Discover expert rental tips, local market insights, and fresh posts
          about rooms, flats, and houses across Kathmandu, Pokhara, and
          beyond.
        </p>
      </section>

      <section className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[460px]">
            <Image
              src="/images/blogs.avif"
              alt="Kathmandu Stupa"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
            <div>
              <span className="text-xs font-bold tracking-widest text-red-500 uppercase block mb-4">
                FEATURED STORY
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 leading-snug hover:text-red-600 transition cursor-pointer">
                How to Find a Safe Room in Kathmandu Without Getting Scammed
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                How to Find a Safe Room in Kathmandu Without Getting Scammed
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-gray-500">
                <span className="font-semibold text-gray-900">
                  Dilip Babu Acharya
                </span>
                <span className="mx-2">•</span>
                <span>July 31, 2026</span>
                <span className="mx-2">•</span>
                <span>5 min</span>
              </div>

              <Link
                href="#"
                className="inline-flex items-center text-xs font-semibold text-red-500 border border-red-200 px-3 py-1.5 rounded hover:bg-red-50 transition"
              >
                Read story <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between text-xs text-gray-400 uppercase tracking-wider mb-6">
          <span>EXPLORE BY CATEGORY</span>
          <span>7 stories</span>
        </div>

        <div className="flex items-center gap-6 border-b border-gray-100 overflow-x-auto pb-3 text-xs sm:text-sm font-semibold tracking-wider">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap transition-colors pb-2 -mb-3 border-b-2 ${
                activeCategory === cat
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-2">
            Latest stories
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Fresh reads, hand-picked for easy browsing on any device.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <div className="relative h-48 w-full">
                  <Image
                    src={story.imageUrl}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold tracking-widest text-red-500 uppercase">
                      {story.category}
                    </span>
                    {story.readTime && (
                      <>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-400">
                          {story.readTime}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="font-serif font-bold text-base sm:text-lg text-gray-900 mb-2 line-clamp-2 hover:text-red-600 transition cursor-pointer">
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 text-xs text-gray-400 border-t border-gray-50 mt-auto">
                <p className="font-semibold text-gray-800">{story.author}</p>
                <p>{story.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-900 pt-12 pb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase block mb-2">
              LOOKING FOR A PLACE?
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-2">
              Ready to find your next home?
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl">
              Explore verified rooms, flats, and houses across Kathmandu,
              Pokhara, and beyond.
            </p>
          </div>

          <Link
            href="#"
            className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white font-medium text-sm px-6 py-3 rounded-lg transition shrink-0 self-start md:self-auto"
          >
            Browse properties <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
      <Footer/>
    </main>
  );
}