"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import room from "@/public/CatImages/roomicon.webp";
import BK from "@/public//CatImages/BK.webp";
import BHK from "@/public//CatImages/BHK.webp";
import Hostel from "@/public/CatImages/hostel.webp";
import Hotel from "@/public/CatImages/Hotel.webp";
import Apartment from "@/public/CatImages/apartment.webp";
import Office from "@/public/CatImages/office.webp";
import House from "@/public/CatImages/house.webp";
import Flat from "@/public/CatImages/Flat.webp";
import Cottage from "@/public/CatImages/Cottage.webp";
import { IoMenuOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlineVerified } from "react-icons/md";
import React, { useEffect, useState } from "react";

const categories = [
  { src: room, label: "ROOM" },
  { src: BK, label: "BK" },
  { src: BHK, label: "BHK" },
  { src: Apartment, label: "APARTMENT" },
  { src: House, label: "HOUSE" },
  { src: Flat, label: "FLAT" },
  { src: Hostel, label: "HOSTEL" },
  { src: Hotel, label: "HOTEL" },
  { src: Cottage, label: "COTTAGE" },
  { src: Office, label: "OFFICE SPACE" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [btnOpen, setBtnOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("Nepal");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full text-black transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* 1. TOP ROW CONTAINER */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 md:px-12 py-3 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        
        {/* Logo and Mobile Toggle Header */}
        <div className="flex items-center justify-between lg:shrink-0">
          <Image src={Logo} alt="logo" width={130} height={35} priority />
          <span
            onClick={() => setIsOpen((prev) => !prev)}
            className="border border-black/10 h-9 w-9 rounded-full flex items-center justify-center lg:hidden cursor-pointer"
          >
            <IoMenuOutline size={24} />
          </span>
        </div>

        {/* Search Bar */}
        <div className="w-full lg:max-w-xl">
          <div className="flex items-center justify-between border border-black/8 rounded-full p-2.5 shadow-sm bg-white">
            <div className="flex items-center gap-2 w-full pl-2">
              <CiSearch size={20} className="text-neutral-500" />
              <input
                type="text"
                placeholder="Search places, rooms, flats..."
                className="w-full outline-none text-sm"
              />
            </div>
            <span className="h-8 w-8 bg-red-500 rounded-full text-white flex items-center justify-center font-bold shrink-0 cursor-pointer hover:bg-red-600 transition-colors">
              <CiSearch size={18} />
            </span>
          </div>
        </div>

        {/* Desktop Buttons Column */}
        <div className="hidden lg:flex items-center gap-4 shrink-0 relative">
          <button
            onClick={() => setBtnOpen((prev) => !prev)}
            className="px-4 py-2 text-sm rounded-full border border-black/10 hover:bg-neutral-50 transition-colors cursor-pointer flex items-center gap-1 font-medium text-neutral-800 bg-white"
          >
            {selectedButton === "Nepal" ? "🇳🇵 Nepal" : "🇺🇸 United States"}
          </button>

          {btnOpen && (
            <div className="absolute top-12 right-28 w-[230px] bg-white border border-black/10 rounded-xl p-1.5 flex flex-col gap-1 z-50 shadow-lg animate-fadeIn">
              <h3 className="text-neutral-400 font-semibold tracking-wider text-[9px] px-3 py-1.5 uppercase">
                Change Country
              </h3>

              {/* Nepal Dropdown Option */}
              <button
                onClick={() => {
                  setSelectedButton("Nepal");
                  setBtnOpen(false);
                }}
                className={`cursor-pointer w-full flex items-center py-2 px-3 justify-between rounded-full font-medium transition-colors duration-150 ${
                  selectedButton === "Nepal"
                    ? "bg-neutral-100 text-neutral-900"
                    : "bg-transparent text-neutral-600 hover:bg-neutral-50"
                }`}
              >
                <div className="flex items-center gap-2 text-sm">
                  <span>🇳🇵</span>
                  <span className={selectedButton === "Nepal" ? "text-red-500" : "text-neutral-700"}>
                    Nepal
                  </span>
                </div>
                {selectedButton === "Nepal" && <MdOutlineVerified size={18} className="text-red-500" />}
              </button>

              {/* United States Dropdown Option */}
              <button
                onClick={() => {
                  setSelectedButton("United States");
                  setBtnOpen(false);
                }}
                className={`cursor-pointer w-full flex items-center py-2 px-3 justify-between rounded-full font-medium transition-colors duration-150 ${
                  selectedButton === "United States"
                    ? "bg-neutral-100 text-neutral-900"
                    : "bg-transparent text-neutral-600 hover:bg-neutral-50"
                }`}
              >
                <div className="flex items-center gap-2 text-sm">
                  <span>🇺🇸</span>
                  <span className={selectedButton === "United States" ? "text-red-500" : "text-neutral-700"}>
                    United States
                  </span>
                </div>
                {selectedButton === "United States" && <MdOutlineVerified size={18} className="text-red-500" />}
              </button>
            </div>
          )}

          <button className="px-4 py-2 text-sm bg-black text-white rounded-full border border-black/8 hover:bg-neutral-800 transition-colors cursor-pointer">
            Add Property +
          </button>
          
          <button className="h-9 w-9 rounded-full border border-black/15 flex items-center justify-center bg-white hover:bg-neutral-50 transition-colors cursor-pointer shadow-sm">
            <span className="bg-blue-800 text-white flex items-center justify-center h-7 w-7 rounded-full font-bold text-xs">
              N
            </span>
          </button>
        </div>

      </div>

      {/* 2. CATEGORIES ROW CONTAINER */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 md:px-12 pb-4">
        <div className="flex gap-7 text-[7px] items-center overflow-x-auto shrink-0 border-b border-black/4 pb-2 lg:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col shrink-0 items-center gap-1 group cursor-pointer"
            >
              <Image
                src={cat.src}
                alt={cat.label}
                width={24}
                height={24}
                className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <p className="text-[10px] font-medium tracking-wide text-neutral-500 group-hover:text-black transition-colors">
                {cat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile-Only Drawer Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Mobile-Only Drawer Panel */}
      {isOpen && (
        <div className="fixed top-20 left-3 right-3 p-4 flex flex-col z-50 gap-3 border border-black/5 rounded-2xl bg-neutral-50 shadow-xl lg:hidden animate-fadeIn">
          <button className="w-full flex items-center py-2 justify-center bg-black text-white rounded-full border border-black/8 font-medium">
            Add Property +
          </button>
          <button className="w-full flex items-center py-2 justify-center rounded-full border border-black/15 bg-white">
            <span className="bg-blue-800 text-white flex items-center justify-center h-7 w-7 rounded-full font-bold text-xs">
              N
            </span>
          </button>

          <div className="flex flex-col gap-4 font-semibold p-2 text-[15px] border-b border-black/10">
            <Link href="#">About Us</Link>
            <Link href="#">Explore Properties</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Help & Support</Link>
          </div>

          {/* Mobile Country Toggles */}
          <div className="flex flex-col gap-1.5">
            <p className="text-neutral-400 font-semibold tracking-wider text-[9px] px-1 mt-3 uppercase">
              Change Country
            </p>

            {/* Mobile Nepal Trigger */}
            <button
              onClick={() => {
                setSelectedButton("Nepal");
                setIsOpen(false);
              }}
              className={`w-full flex items-center py-2.5 px-4 justify-between rounded-xl border border-black/5 font-medium transition-colors ${
                selectedButton === "Nepal" ? "bg-neutral-200/60 text-neutral-900" : "bg-white text-neutral-600"
              }`}
            >
              <div className="flex items-center gap-2 text-sm">
                <span>🇳🇵</span>
                <span className={selectedButton === "Nepal" ? "text-red-500" : "text-neutral-700"}>
                  Nepal
                </span>
              </div>
              {selectedButton === "Nepal" && <MdOutlineVerified size={18} className="text-red-500" />}
            </button>

            {/* Mobile United States Trigger */}
            <button
              onClick={() => {
                setSelectedButton("United States");
                setIsOpen(false);
              }}
              className={`w-full flex items-center py-2.5 px-4 justify-between rounded-xl border border-black/5 font-medium transition-colors ${
                selectedButton === "United States" ? "bg-neutral-200/60 text-neutral-900" : "bg-white text-neutral-600"
              }`}
            >
              <div className="flex items-center gap-2 text-sm">
                <span>🇺🇸</span>
                <span className={selectedButton === "United States" ? "text-red-500" : "text-neutral-700"}>
                  United States
                </span>
              </div>
              {selectedButton === "United States" && <MdOutlineVerified size={18} className="text-red-500" />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;