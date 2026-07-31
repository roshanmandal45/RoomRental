"use client"
import Image from 'next/image'
import Logo from "@/public/logo.svg"
import room from "@/public/roomicon.webp"
import BK from "@/public/BK.webp"
import BHK from "@/public/BHK.webp"
import Hostel from "@/public/hostel.webp"
import Hotel from "@/public/Hotel.webp"
import Apartment from "@/public/apartment.webp"
import Office from "@/public/office.webp"
import House from "@/public/house.webp"
import Flat from "@/public/Flat.webp"
import Cottage from "@/public/Cottage.webp"
import { IoMenuOutline } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'
import React, { useState } from 'react'

const categories = [
  { src: room, label: 'ROOM' },
  { src: BK, label: 'BK' },
  { src: BHK, label: 'BHK' },
  { src: Apartment, label: 'APARTMENT' },
  { src: House, label: 'HOUSE' },
  { src: Flat, label: 'FLAT' },
  { src: Hostel, label: 'HOSTEL' },
  { src: Hotel, label: 'HOTEL' },
  { src: Cottage, label: 'COTTAGE' },
  { src: Office, label: 'OFFICE SPACE' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    // Main Container
    <div className='p-3 flex flex-col gap-4 relative w-full bg-white text-black border-b border-black/5'>
      
      {/* TOP ROW CONTEXT: Mobile Stack vs Desktop Row */}
      <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8'>
        
        {/* Logo and Mobile Toggle Header */}
        <div className='flex items-center justify-between lg:shrink-0'>
          <Image src={Logo} alt='logo' width={130} height={35} priority />
          {/* Hamburger Menu Icon: Hidden on lg screens */}
          <span 
            onClick={() => setIsOpen(prev => !prev)} 
            className='border border-black/10 h-9 w-9 rounded-full flex items-center justify-center lg:hidden cursor-pointer'
          > 
            <IoMenuOutline size={24}/> 
          </span>
        </div>

        {/* Search Bar: Shifts to middle on desktop using max-width constraints */}
        <div className='w-full lg:max-w-xl'>
          <div className='flex items-center justify-between border border-black/8 rounded-full p-2.5 shadow-sm'>
            <div className='flex items-center gap-2 w-full pl-2'>
              <CiSearch size={20} className='text-neutral-500' />
              <input type="text" placeholder='Search places, rooms, flats...' className='w-full outline-none text-sm' />
            </div>
            <span className='h-8 w-8 bg-red-500 rounded-full text-white flex items-center justify-center font-bold shrink-0 cursor-pointer hover:bg-red-600 transition-colors'> 
              <CiSearch size={18} /> 
            </span>
          </div>
        </div> 

        {/* Desktop Buttons Column: Forced visible on lg screen rows, hidden on mobile default state */}
        <div className='hidden lg:flex items-center gap-4 shrink-0'>
          <button className='px-4 py-2 text-sm bg-black text-white rounded-full border border-black/8 hover:bg-neutral-800 transition-colors cursor-pointer'>
            Add Property +
          </button>
          <button className='h-9 w-9 rounded-full border border-black/15 flex items-center justify-center bg-white hover:bg-neutral-50 transition-colors cursor-pointer shadow-sm'> 
            <span className='bg-blue-800 text-white flex items-center justify-center h-7 w-7 rounded-full font-bold text-xs'>N</span> 
          </button>
        </div>

      </div>

      {/* Categories Row: Always sits cleanly underneath the top items */}
      <div className='flex gap-7 text-[7px] items-center overflow-x-auto shrink-0 border-b border-black/4 pb-4 lg:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        {categories.map((cat, i) => (
          <div key={i} className='flex flex-col shrink-0 items-center gap-1 group cursor-pointer'>
            <Image 
              src={cat.src} 
              alt={cat.label} 
              width={24} 
              height={24} 
              className='object-contain opacity-70 group-hover:opacity-100 transition-opacity'
            />
            <p className='text-[10px] font-medium tracking-wide text-neutral-500 group-hover:text-black transition-colors'>
              {cat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile-Only Drawers: Backdrops and floating drop menus */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className='fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden'
        />
      )}

      {isOpen && (
        <div className='fixed top-20 left-3 right-3 p-4 flex flex-col z-50 gap-3 border border-black/5 rounded-2xl bg-neutral-50 shadow-xl lg:hidden animate-fadeIn'>
           <button className='w-full flex items-center py-2 justify-center bg-black text-white rounded-full border border-black/8 font-medium'>
             Add Property +
           </button>
           <button className='w-full flex items-center py-2 justify-center rounded-full border border-black/15 bg-white'> 
             <span className='bg-blue-800 text-white flex items-center justify-center h-7 w-7 rounded-full font-bold text-xs'>N</span> 
           </button>
        </div>
      )}

    </div>
  )
}

export default Navbar