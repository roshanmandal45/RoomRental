"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation' 
import React from 'react'

import { CiHeart, CiLocationOn } from 'react-icons/ci'

import Img1 from "@/public/CheapestSecImges/Img1.avif"
import Img2 from "@/public/CheapestSecImges/Img2.avif"
import Img3 from "@/public/CheapestSecImges/Img3.avif"
import Img4 from "@/public/CheapestSecImges/Img4.avif"
import Img5 from "@/public/CheapestSecImges/Img5.avif"
import Img6 from "@/public/CheapestSecImges/Img6.avif"
import Img7 from "@/public/CheapestSecImges/Img7.avif"
import Img8 from "@/public/CheapestSecImges/Img8.avif"

// CRITICAL: Dynamically import the Map component with server-side rendering disabled


const categories = [
    { src: Img1, amount: 9000, address: "Safipur, Ranhola, New Delhi, India", room: "1 FLAT" },
    { src: Img2, amount: 9000, address: "Top floor , Street no 4, Lakeside", room: "1BK" },
    { src: Img3, amount: 1000, address: "Charghare, Kirtipur, Nepal", room: "2 ROOMS" },
    { src: Img4, amount: 1000, address: "Nhusa Marg, Kathmandu , Nepal", room: "1 ROOM" },
    { src: Img5, amount: 1000, address: "Tarkhagal bus park, F099,", room: "1 FLAT" },
    { src: Img6, amount: 1000, address: "Dakshinkali -1, Bosan DKT, Dakshinkal", room: "2 BK" },
    { src: Img7, amount: 1000, address: "New Baneshwor, Kathmandu, Nepal", room: "2 ROOMS" },
    { src: Img8, amount: 1000, address: "Bode, Madhyapur Thimi, Bhaktapur,", room: "2BHK" },
]

const CheapestRoomSec = () => {
  const router = useRouter()
  return (
    <div className='max-w-[1380px] mx-auto px-4 sm:px-8 md:px-12 py-8 border-b border-black/10'>
      
      {/* Header Section */}
      <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6'>
        <div className='flex flex-col gap-1.5'>
          <h2 className='text-xl sm:text-2xl lg:text-3xl  font-bold tracking-tight text-neutral-900'>
            Cheapest rooms for students and <br/> budget renters
          </h2>
          <p className='text-neutral-500 max-w-xl leading-relaxed'>
            Affordable rentals sorted by price, so budget-friendly options are always easy to find.
          </p>
        </div>
        
        <button className='bg-black text-white text-sm font-medium rounded-full px-5 py-2.5 w-full md:w-auto hover:bg-neutral-800 transition-colors cursor-pointer shrink-0'>
          View more low-budget rooms
        </button>
      </div>

      {/* Grid Wrapper: Houses each unified Card item */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8'>
        {categories.map((cat, index) => (
          
          // 1. The Unified Card Item (Replaces the broken fragment container)
          <div key={index} className='flex flex-col gap-3 group cursor-pointer'>
            
            {/* Image Wrapper */}
            <div onClick={() => router.push('/roomDescription')} className='relative w-full h-[240px] rounded-2xl overflow-hidden border border-black/5 bg-neutral-100 shadow-sm'>
              <Image  src={cat.src}  alt={`Affordable rental option ${index + 1}`}  fill sizes="(max-w-640px) 100vw, (max-w-768px) 50vw, (max-w-1024px) 33vw, 25vw" className='object-cover group-hover:scale-105 transition-transform duration-300' />
              <div className='flex w-full justify-between items-center absolute top-0 p-3 z-10 '>
                <span className='bg-neutral-900/80 backdrop-blur-xs rounded-full px-2.5 py-1 text-white text-[11px] font-medium tracking-wide'>
                  {cat.room}
                </span>
                <span className='h-8 w-8 rounded-full bg-white/90 backdrop-blur-xs text-neutral-700 hover:text-red-500 hover:scale-105 transition-all flex items-center justify-center shadow-xs'> 
                  <CiHeart size={20} className='stroke-[0.5]' /> 
                </span>
              </div>
            </div>

            <div className='flex flex-col gap-1 px-1'>
              <div className='flex items-center justify-between'>
                <p className='font-bold text-neutral-900 flex items-baseline gap-0.5'> 
                  <span className='text-lg font-semibold text-neutral-700'>रु</span>
                  <span className='text-lg'>{cat.amount.toLocaleString()}</span>
                </p>
                <span className='bg-neutral-100 font-medium rounded-md px-2 py-0.5 text-neutral-600 text-[11px]'>
                  {cat.room}
                </span>
              </div>
              
              <div className='text-neutral-500 flex items-start gap- mt-0.5'>  
                <CiLocationOn size={15} className='shrink-0 mt-0.5 text-neutral-400' /> 
                <span className='line-clamp-1 leading-tight text-sm'>{cat.address}</span> 
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default CheapestRoomSec