"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/heroSecImages/logo.svg";
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
import { FiPlus, FiChevronDown, FiUser, FiLogOut } from "react-icons/fi";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase";

const categories = [
  { src: room, label: "ROOM", link: "/exploreproperty" },
  { src: BK, label: "BK", link: "/exploreproperty" },
  { src: BHK, label: "BHK", link: "/exploreproperty" },
  { src: Apartment, label: "APARTMENT", link: "/exploreproperty" },
  { src: House, label: "HOUSE", link: "/exploreproperty" },
  { src: Flat, label: "FLAT", link: "/exploreproperty" },
  { src: Hostel, label: "HOSTEL", link: "/exploreproperty" },
  { src: Hotel, label: "HOTEL", link: "/exploreproperty" },
  { src: Cottage, label: "COTTAGE", link: "/exploreproperty" },
  { src: Office, label: "OFFICE SPACE", link: "/exploreproperty" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [btnOpen, setBtnOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("Nepal");
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
  const { user } = useAuth();

  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    setProfileOpen(false);
    router.push("/login");
  };

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
          ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-b border-black/[0.05]"
          : "bg-white/95 backdrop-blur-xl"
      }`}
    >
      {/* ================================================= */}
      {/* TOP NAVBAR */}
      {/* ================================================= */}

      <div className="max-w-[1450px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="h-[76px] flex items-center justify-between gap-5">
          
          {/* LOGO */}
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
          {/* DESKTOP SEARCH */}
          <div className="hidden md:flex flex-1 max-w-[560px]">
            <div
              className="
                group
                w-full
                h-[50px]
                flex items-center
                bg-white
                border border-black/[0.08]
                rounded-2xl
                shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                transition-all duration-300
                hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]
                focus-within:border-black/20
                focus-within:shadow-[0_8px_28px_rgba(0,0,0,0.09)]
              "
            >
              <div className="flex items-center gap-3 flex-1 pl-4">
                <div className="h-8 w-8 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 group-focus-within:bg-red-50 transition-colors">
                  <CiSearch
                    size={21}
                    className="text-neutral-500 group-focus-within:text-red-500 transition-colors"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Search rooms, flats, apartments..."
                  className="
                    w-full
                    h-full
                    outline-none
                    text-sm
                    text-neutral-800
                    placeholder:text-neutral-400
                    bg-transparent
                  "
                />
              </div>

              <button
                className="
                  mr-1.5
                  h-10
                  w-10
                  rounded-xl
                  bg-black
                  text-white
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:bg-red-500
                  hover:scale-105
                  active:scale-95
                "
              >
                <CiSearch size={19} />
              </button>
            </div>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            
            {/* COUNTRY */}
            <div className="relative">
              <button
                onClick={() => setBtnOpen((prev) => !prev)}
                className="
                  h-11
                  px-4
                  rounded-xl
                  border border-black/[0.08]
                  bg-white
                  hover:bg-neutral-50
                  transition-all
                  duration-200
                  cursor-pointer
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-neutral-700
                "
              >
                <span className="text-base">
                  {selectedButton === "Nepal" ? "🇳🇵" : "🇺🇸"}
                </span>

                <span>
                  {selectedButton === "Nepal"
                    ? "Nepal"
                    : "United States"}
                </span>

                <FiChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    btnOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {btnOpen && (
                <div
                  className="
                    absolute
                    top-[52px]
                    right-0
                    w-[240px]
                    bg-white
                    border border-black/[0.07]
                    rounded-2xl
                    p-2
                    shadow-[0_18px_50px_rgba(0,0,0,0.12)]
                    z-50
                  "
                >
                  <div className="px-3 pt-2 pb-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                      Location
                    </p>

                    <p className="text-xs text-neutral-500 mt-1">
                      Choose your country
                    </p>
                  </div>

                  {/* Nepal */}
                  <button
                    onClick={() => {
                      setSelectedButton("Nepal");
                      setBtnOpen(false);
                    }}
                    className={`
                      w-full
                      flex
                      items-center
                      justify-between
                      px-3
                      py-3
                      rounded-xl
                      cursor-pointer
                      transition-colors
                      ${
                        selectedButton === "Nepal"
                          ? "bg-red-50"
                          : "hover:bg-neutral-50"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-9 w-9 rounded-lg bg-neutral-100 flex items-center justify-center text-lg">
                        🇳🇵
                      </span>

                      <div className="text-left">
                        <p
                          className={`text-sm font-semibold ${
                            selectedButton === "Nepal"
                              ? "text-red-500"
                              : "text-neutral-700"
                          }`}
                        >
                          Nepal
                        </p>

                        <p className="text-[10px] text-neutral-400">
                          Kathmandu
                        </p>
                      </div>
                    </div>

                    {selectedButton === "Nepal" && (
                      <MdOutlineVerified
                        size={19}
                        className="text-red-500"
                      />
                    )}
                  </button>

                  {/* United States */}
                  <button
                    onClick={() => {
                      setSelectedButton("United States");
                      setBtnOpen(false);
                    }}
                    className={`
                      w-full
                      flex
                      items-center
                      justify-between
                      px-3
                      py-3
                      rounded-xl
                      cursor-pointer
                      transition-colors
                      ${
                        selectedButton === "United States"
                          ? "bg-red-50"
                          : "hover:bg-neutral-50"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-9 w-9 rounded-lg bg-neutral-100 flex items-center justify-center text-lg">
                        🇺🇸
                      </span>

                      <div className="text-left">
                        <p
                          className={`text-sm font-semibold ${
                            selectedButton === "United States"
                              ? "text-red-500"
                              : "text-neutral-700"
                          }`}
                        >
                          United States
                        </p>

                        <p className="text-[10px] text-neutral-400">
                          United States
                        </p>
                      </div>
                    </div>

                    {selectedButton === "United States" && (
                      <MdOutlineVerified
                        size={19}
                        className="text-red-500"
                      />
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* ADD PROPERTY */}
            <button
              onClick={() => router.push("/addProperty")}
              className="
                h-11
                px-5
                rounded-xl
                bg-black
                text-white
                text-sm
                font-semibold
                flex
                items-center
                gap-2
                cursor-pointer
                transition-all
                duration-300
                hover:bg-red-500
                hover:shadow-lg
                hover:shadow-red-500/20
                active:scale-95
              "
            >
              <FiPlus size={17} />
              Add Property
            </button>

            {/* PROFILE */}
            <div className="relative ml-1">
              {user ? (
                <>
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="
                      h-11
                      w-11
                      rounded-xl
                      overflow-hidden
                      border
                      border-black/[0.08]
                      bg-neutral-100
                      cursor-pointer
                      transition-all
                      duration-300
                      hover:border-black/20
                      hover:shadow-md
                      hover:scale-[1.03]
                    "
                  >
                    {user.photoURL ? (
                      <Image
                        src={user.photoURL}
                        alt="profile"
                        width={44}
                        height={44}
                        className="object-cover h-full w-full"
                      />
                    ) : (
                      <span className="bg-black text-white flex items-center justify-center h-full w-full font-bold">
                        {user.email?.charAt(0).toUpperCase() || "U"}
                      </span>
                    )}
                  </button>

                  {profileOpen && user && (
                    <div
                      className="
                        absolute
                        right-0
                        top-[54px]
                        w-[280px]
                        bg-white
                        border border-black/[0.07]
                        rounded-2xl
                        p-3
                        shadow-[0_20px_60px_rgba(0,0,0,0.14)]
                        z-50
                      "
                    >
                      {/* Profile info */}
                      <div className="p-3 rounded-xl bg-neutral-50 flex items-center gap-3">
                        {user.photoURL ? (
                          <Image
                            src={user.photoURL}
                            width={46}
                            height={46}
                            alt="profile"
                            className="rounded-xl object-cover"
                          />
                        ) : (
                          <div className="h-[46px] w-[46px] rounded-xl bg-black text-white flex items-center justify-center font-bold">
                            {user.email
                              ?.charAt(0)
                              .toUpperCase() || "U"}
                          </div>
                        )}

                        <div className="min-w-0">
                          <p className="font-semibold text-sm text-neutral-900 truncate">
                            {user.displayName || "User"}
                          </p>

                          <p className="text-xs text-neutral-500 truncate mt-0.5">
                            {user.email}
                          </p>
                        </div>
                      </div>

                      {/* Logout */}
                      <button
                        onClick={handleLogout}
                        className="
                          mt-2
                          w-full
                          flex
                          items-center
                          gap-3
                          px-3
                          py-3
                          rounded-xl
                          text-sm
                          font-medium
                          text-red-500
                          hover:bg-red-50
                          transition-colors
                          cursor-pointer
                        "
                      >
                        <FiLogOut size={17} />
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => router.push("/login")}
                  className="
                    h-11
                    px-5
                    rounded-xl
                    bg-black
                    text-white
                    text-sm
                    font-semibold
                    flex
                    items-center
                    gap-2
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:bg-red-500
                    active:scale-95
                  "
                >
                  <FiUser size={17} />
                  Login / Register
                </button>
              )}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              lg:hidden
              h-11
              w-11
              rounded-xl
              border border-black/[0.08]
              bg-white
              flex
              items-center
              justify-center
              cursor-pointer
              transition-all
              duration-200
              hover:bg-neutral-50
              active:scale-95
            "
          >
            <IoMenuOutline size={24} />
          </button>
        </div>

        {/* MOBILE SEARCH */}
        <div className="md:hidden pb-4">
          <div
            className="
              h-[48px]
              w-full
              flex
              items-center
              bg-neutral-50
              border border-black/[0.06]
              rounded-xl
              overflow-hidden
            "
          >
            <CiSearch
              size={20}
              className="text-neutral-400 ml-4"
            />

            <input
              type="text"
              placeholder="Search places, rooms..."
              className="
                flex-1
                h-full
                px-3
                outline-none
                bg-transparent
                text-sm
              "
            />

            <button
              className="
                h-9
                w-9
                mr-1.5
                rounded-lg
                bg-black
                text-white
                flex
                items-center
                justify-center
              "
            >
              <CiSearch size={17} />
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/* CATEGORY NAVIGATION */}
        {/* ================================================= */}

        <div className="pb-3">
          <div
            className="
              flex
              gap-7
              items-center
              overflow-x-auto
              border-t border-black/[0.04]
              pt-3
              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              lg:justify-center
            "
          >
            {categories.map((cat) => (
              <Link
                href={cat.link}
                key={cat.label}
                className="
                  flex
                  flex-col
                  shrink-0
                  items-center
                  gap-1.5
                  group
                  cursor-pointer
                  relative
                  pb-1
                "
              >
                <div
                  className="
                    h-9
                    w-9
                    rounded-xl
                    bg-neutral-50
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:bg-red-50
                    group-hover:-translate-y-0.5
                  "
                >
                  <Image
                    src={cat.src}
                    alt={cat.label}
                    width={25}
                    height={25}
                    className="
                      object-contain
                      opacity-60
                      group-hover:opacity-100
                      transition-all
                      duration-300
                    "
                  />
                </div>

                <p
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.08em]
                    text-neutral-400
                    group-hover:text-red-500
                    transition-colors
                    whitespace-nowrap
                  "
                >
                  {cat.label}
                </p>

                {/* Hover indicator */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    -translate-x-1/2
                    h-[2px]
                    w-0
                    rounded-full
                    bg-red-500
                    group-hover:w-5
                    transition-all
                    duration-300
                  "
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* MOBILE OVERLAY */}
      {/* ================================================= */}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
            fixed
            inset-0
            bg-black/30
            backdrop-blur-sm
            z-40
            lg:hidden
          "
        />
      )}

      {/* ================================================= */}
      {/* MOBILE DRAWER */}
      {/* ================================================= */}

      {isOpen && (
        <div
          className="
            fixed
            top-3
            left-3
            right-3
            max-h-[calc(100vh-24px)]
            overflow-y-auto
            p-4
            flex
            flex-col
            z-50
            gap-3
            border border-black/[0.06]
            rounded-3xl
            bg-white
            shadow-[0_25px_80px_rgba(0,0,0,0.18)]
            lg:hidden
          "
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-2 border-b border-black/[0.06]">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src={Logo}
                alt="logo"
                width={120}
                height={34}
              />
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="
                h-9
                w-9
                rounded-full
                bg-neutral-100
                flex
                items-center
                justify-center
                text-neutral-500
              "
            >
              ✕
            </button>
          </div>

          {/* Add Property */}
          <button
            onClick={() => {
              setIsOpen(false);
              router.push("/addProperty");
            }}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2
              py-3
              bg-black
              text-white
              rounded-xl
              font-semibold
              text-sm
              hover:bg-red-500
              transition-colors
            "
          >
            <FiPlus size={17} />
            Add Property
          </button>

          {/* Profile */}
          <div className="relative">
            {user ? (
              <div>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    p-3
                    rounded-xl
                    border border-black/[0.06]
                    bg-neutral-50
                    text-left
                  "
                >
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt="profile"
                      width={40}
                      height={40}
                      className="rounded-xl object-cover"
                    />
                  ) : (
                    <span className="bg-black text-white flex items-center justify-center h-10 w-10 rounded-xl font-bold text-sm">
                      {user.email?.charAt(0).toUpperCase() || "U"}
                    </span>
                  )}

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">
                      {user.displayName || "User"}
                    </p>

                    <p className="text-xs text-neutral-500 truncate">
                      {user.email}
                    </p>
                  </div>

                  <FiChevronDown
                    size={17}
                    className={`transition-transform ${
                      profileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {profileOpen && (
                  <div className="mt-2 p-2 rounded-xl bg-neutral-50 border border-black/[0.05]">
                    <button
                      onClick={handleLogout}
                      className="
                        w-full
                        flex
                        items-center
                        gap-3
                        px-3
                        py-3
                        rounded-lg
                        text-sm
                        text-red-500
                        hover:bg-red-50
                        transition-colors
                      "
                    >
                      <FiLogOut size={17} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => router.push("/login")}
                className="
                  w-full
                  py-3
                  bg-black
                  text-white
                  rounded-xl
                  font-semibold
                  text-sm
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <FiUser size={17} />
                Login / Register
              </button>
            )}
          </div>

          {/* Mobile Links */}
          <div className="rounded-xl border border-black/[0.06] overflow-hidden">
            <Link
              href="#"
              className="block px-4 py-3.5 text-sm font-medium hover:bg-neutral-50 border-b border-black/[0.05]"
            >
              About Us
            </Link>

            <Link
              href="/exploreproperty"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3.5 text-sm font-medium hover:bg-neutral-50 border-b border-black/[0.05]"
            >
              Explore Properties
            </Link>

            <Link
              href="#"
              className="block px-4 py-3.5 text-sm font-medium hover:bg-neutral-50 border-b border-black/[0.05]"
            >
              Blog
            </Link>

            <Link
              href="#"
              className="block px-4 py-3.5 text-sm font-medium hover:bg-neutral-50"
            >
              Help & Support
            </Link>
          </div>

          {/* Mobile Country */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400 px-1 mb-2">
              Location
            </p>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setSelectedButton("Nepal");
                  setIsOpen(false);
                }}
                className={`
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-3
                  rounded-xl
                  border
                  text-sm
                  font-medium
                  transition-colors
                  ${
                    selectedButton === "Nepal"
                      ? "bg-red-50 border-red-100 text-red-500"
                      : "bg-white border-black/[0.06] text-neutral-600"
                  }
                `}
              >
                🇳🇵 Nepal

                {selectedButton === "Nepal" && (
                  <MdOutlineVerified size={16} />
                )}
              </button>

              <button
                onClick={() => {
                  setSelectedButton("United States");
                  setIsOpen(false);
                }}
                className={`
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-3
                  rounded-xl
                  border
                  text-sm
                  font-medium
                  transition-colors
                  ${
                    selectedButton === "United States"
                      ? "bg-red-50 border-red-100 text-red-500"
                      : "bg-white border-black/[0.06] text-neutral-600"
                  }
                `}
              >
                🇺🇸 USA

                {selectedButton === "United States" && (
                  <MdOutlineVerified size={16} />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;