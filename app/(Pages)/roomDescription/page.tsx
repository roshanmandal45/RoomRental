"use client"

import React, { useState } from 'react'
import img1 from "@/public/roomDescrImages/img1.avif"
import Image from 'next/image'
import { CiHeart, CiLocationOn, CiPhone, CiWifiOn } from 'react-icons/ci'
import Profile from "@/public/roomDescrImages/Profile.avif"
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation' 
import Img1_1 from "@/public/CheapestSecImges/Img1.avif"
import Img2 from "@/public/CheapestSecImges/Img2.avif"
import Img3 from "@/public/CheapestSecImges/Img3.avif"
import Img4 from "@/public/CheapestSecImges/Img4.avif"
import { FaShower } from 'react-icons/fa'
import { MdKeyboardArrowDown, MdOutlineEmail, MdOutlinePayment } from 'react-icons/md'
import { LuNewspaper } from 'react-icons/lu'
import Footer from '@/app/components/Footer'
import NavbarForPage from '@/app/components/NavbarForPage'

const Map = dynamic(() => import('@/app/components/Leaflet'), {
  ssr: false,
  loading: () => <div className="w-full h-87.5 bg-neutral-100 animate-pulse rounded-xl flex items-center justify-center text-neutral-400">Loading Map...</div>
})

const RoomDescription = () => {
  // FIXED: Defined the missing coordinate coordinates array
  const sampleCoordinates: [number, number] = [28.6476, 77.0501]
  const router = useRouter()

const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null)

const toggleFaq = (index: number) => {
  setActiveFaqIndex(prevIndex => (prevIndex === index ? null : index))
}

  const categories = [
    { src: Img1_1, amount: 9000, address: "Safipur, Ranhola, New Delhi, India", room: "1 FLAT" },
    { src: Img2, amount: 9000, address: "Top floor , Street no 4, Lakeside", room: "1BK" },
    { src: Img3, amount: 1000, address: "Charghare, Kirtipur, Nepal", room: "2 ROOMS" },
    { src: Img4, amount: 1000, address: "Nhusa Marg, Kathmandu , Nepal", room: "1 ROOM" },
  ]
  return (
    <div className='min-h-screen bg-white'>
      <NavbarForPage />

      {/* Main Div ? */}
      <main className='max-w-345 mx-auto px-4 sm:px-8 md:px-12 py-8 flex flex-col gap-8'>
        <div className='relative w-full h-50 lg:h-137.5 rounded-2xl overflow-hidden'>
          <Image
            src={img1}
            unoptimized
            alt='Room interior preview'
            fill
            className='object-cover'
          />
        </div>

        {/* Lower Content Main Wrapper (Parent) */}
        <div className='w-full flex flex-col gap-10 lg:flex-row'>
          {/* The Side Bar  */}
          <div className='lg:order-2 lg:h-full lg:w-1/2 lg:sticky top-40 flex flex-col gap-5 order-2'>

           <div className='w-full rounded-2xl border border-black/10 p-6 '>
           <div className='flex flex-col gap-4'>
             <div className=' flex flex-col items-center gap-1'>
                <h3 className='font-semibold text-lg'>Book this property</h3>
                <p className='text-gray-600 text-sm'>Contect the agent to reserve</p>
                <button className='bg-[#FFF5F6] p-3 mt-2 flex flex-col items-center justify-center rounded-xl w-full'>   <span className='text-xl font-semibold text-red-500'>रु 9000</span> <span className='text-gray-600 text-sm'>per month</span></button>
             </div>
 
            <div className='flex flex-col gap-3'>
              <p className='flex justify-between items-center border-b border-black/8 pb-3 text-gray-600 text-sm'> <span className='flex items-center gap-2'> <CiWifiOn size={20}/> Electricity & Water Included</span> <span className='font-semibold'>No</span></p>
              <p className='flex justify-between items-center border-b border-black/8 pb-3 text-gray-600 text-sm'> <span className='flex items-center gap-2'> <MdOutlinePayment size={20} /> Room Sewa Wallet (Rental Payment)</span> <span className='font-semibold'>Yes</span></p>
              <p className='flex justify-between items-center border-b border-black/8 pb-3 text-gray-600 text-sm'> <span className='flex items-center gap-2'> <LuNewspaper size={20} /> Require Rental Agreement</span> <span className='font-semibold'>-</span></p>
              <p className='flex justify-between items-center pb-3 text-gray-600 text-sm'> <span>Total / month</span><span className='text-xl font-semibold text-red-500'>रु 9000</span></p>
              <button className='bg-red-600 text-white rounded-lg flex items-center justify-center p-3 pb-3 font-semibold w-full cursor-pointer'>Request a Visit</button>
              <span className='text-gray-500 text-sm text-center'>No advance payment required</span>
            </div>
           </div>
           </div>

           <div className='w-full rounded-2xl border border-black/10 p-6'>
           <div className='flex flex-col gap-3'>
             <h3 className='text-lg font-semibold'>Need help?</h3>
             <div className='flex flex-col gap-2'>
              <p className='flex items-center text-gray-600 gap-2'> <span> <MdOutlineEmail /> </span> support@roomsewa.com.np  </p>
              <p className='flex items-center text-gray-600 gap-2'> <span> <CiPhone />  </span> support@roomsewa.com.np  </p>
           </div>
             </div>
           </div>
                     </div>


          {/* Left Content to the Sidebar  */}
          <div className='flex flex-col gap-6'>
          <div className='w-full rounded-2xl border border-black/10 p-6'>
            <div className='flex flex-col gap-5'>
              <div className='flex justify-between pb-4 border-b border-black/5'>
                <div className='flex flex-col gap-3'>
                  <h3 className='font-semibold text-lg'>This is my property <br /> and 1 to 4 floor by rent</h3>
                  <p className='text-gray-600 flex gap-1 items-center text-sm'> <CiLocationOn size={16} className='text-red-600' />, Safipur, Ranhola, New Delhi, I... </p>
                </div>
                <div className='flex flex-col'>
                  <span className='text-lg font-semibold text-red-500'>रु 9000</span>
                  <p className='text-gray-600 text-sm'> per month </p>
                </div>
              </div>
              <div className='flex gap-2 items-center '>
                <span className='bg-neutral-900/80 backdrop-blur-xs rounded-full px-2.5 py-1 text-white text-[11px] font-medium tracking-wide'>1 BHK</span>
                <span className='bg-neutral-900/80 backdrop-blur-xs rounded-full px-2.5 py-1 text-white text-[11px] font-medium tracking-wide'>FLAT</span>
              </div>
            </div>
          </div>

          <div className='border border-black/10 p-6 rounded-2xl'>
            <div className='flex flex-col gap-3'>
              <h3 className='font-semibold text-lg'>Listed by</h3>
              <div className='flex gap-4 items-center'>
                <Image src={Profile} alt='profile' height={50} width={50} className='rounded-full object-cover' />
                <div className='flex flex-col'>
                  <h3 className='font-semibold'>Aditya Sharma</h3>
                  <p className='text-gray-600'>Property Agent</p>
                </div>
              </div>
            </div>
          </div>


          <div className='border border-black/10 p-6 rounded-2xl'>
            <div className='flex flex-col gap-1'>
              <h3 className='font-semibold text-lg'>About this property</h3>
              <p className='text-gray-600 text-sm'>2 room, 1 kitchen, 1 bathroom and hall with one temple room</p>

            </div>
          </div>


          <div className='border border-black/10 p-6 rounded-2xl'>
            <div className='flex flex-col gap-1'>
              <h3 className='font-semibold text-lg'>Area guide for Safipur, Ranhola, New Delhi, India</h3>
              <p className="text-gray-600 text-left text-sm">Renters comparing Flat in , Safipur, Ranhola, New Delhi, India usually care about monthly budget, nearby transport, local convenience, and how quickly they can compare similar options in the same area.
                <br /> <br />
                Browse similar rooms in , Safipur, Ranhola, New Delhi, India below, or use the filters to narrow down by price and room type.

              </p>
            </div>
          </div>


          <div className='border border-black/10 p-6 rounded-2xl'>
            <div className='flex flex-col gap-1'>
              <h3 className='font-semibold text-lg'>Facilities & Amenties</h3>
              <p className='border p-4  rounded-xl border-black/10 bg-[#FBFCFD] flex items-center gap-4'><span className='border flex items-center justify-center border-white/10 h-7 w-7 rounded-full bg-[#FFF5F6] text-red-600'> <FaShower size={16} />  </span>Shower</p>
            </div>
          </div>


          <div className='border border-black/10 p-6 rounded-2xl'>
            <div className='flex flex-col gap-1'>
              <h3 className='font-semibold text-lg'>Location</h3>
              <p className='border p-4 rounded-xl border-black/10 bg-[#FFFBEB] text-amber-700 gap-2 flex text-sm'><CiLocationOn className='shrink-0 mt-1 text-lg' /> Location shownis approximate to protect privacy. Exact address will be shared after booking.</p>
             <Map center={sampleCoordinates} key={new Date().getTime()} />
            </div>
          </div>

                 <div className='border border-black/10 p-6 rounded-2xl'>
            <div className='flex flex-col gap-3'>
              <h3 className='font-semibold text-lg'>Exopore nearby rental</h3>
              <div className='flex flex-col gap-3 '>
              <p className='border py-2 px-4 rounded-full border-black/10 bg-[#FBFCFD] flex items-center gap-4 text-sm'>Rooms for rent in, Safipur, Ranhola, New Delhi, India</p>
               <p className='border py-2 px-4 rounded-full border-black/10 bg-[#FBFCFD] flex items-center gap-4 text-sm'>Flats in, Safipur, Ranhola, New Delhi, India</p>
                <p className='border py-2 px-4 rounded-full border-black/10 bg-[#FBFCFD] flex items-center gap-4 text-sm'>Hostels in, Safipur, Ranhola, New Delhi, India</p>
              </div>
            </div>
          </div>   

            <div className='border border-black/10 p-6 rounded-2xl'>
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


                 {/* 2. Replace the FAQ container section with this implementation */}
<div className='border border-black/10 p-6 rounded-2xl'>
  <div className='flex flex-col gap-3'>
    <div className='border-b border-black/10 pb-2'>
      <h3 className='font-semibold text-lg'>Frequently asked questions</h3>
    </div>

    {/* FAQ Item 1 */}
    <div className='border-b border-black/10 pb-4 pt-2'>
      <div 
        className='flex justify-between items-center cursor-pointer select-none'
        onClick={() => toggleFaq(0)}
      >
        <h3 className='font-semibold text-base md:text-lg text-neutral-800'>
          Is this Flat in, Safipur, Ranhola, New Delhi, India suitable for monthly rent?
        </h3>
        <span className={`transform transition-transform duration-200 ${activeFaqIndex === 0 ? 'rotate-180' : ''}`}>
          <MdKeyboardArrowDown size={24} />
        </span>
      </div>
      {activeFaqIndex === 0 && (
        <p className='text-gray-600 text-sm mt-2 transition-all duration-200'>
          This listing is presented as a rental option in, Safipur, Ranhola, New Delhi, India with pricing, images, facilities, and contact information to help renters compare monthly accommodation choices.
        </p>
      )}
    </div>

    {/* FAQ Item 2 */}
    <div className='border-b border-black/10 pb-4 pt-2'>
      <div 
        className='flex justify-between items-center cursor-pointer select-none'
        onClick={() => toggleFaq(1)}
      >
        <h3 className='font-semibold text-base md:text-lg text-neutral-800'>
          Are there similar rentals near, Safipur, Ranhola, New Delhi, India?
        </h3>
        <span className={`transform transition-transform duration-200 ${activeFaqIndex === 1 ? 'rotate-180' : ''}`}>
          <MdKeyboardArrowDown size={24} />
        </span>
      </div>
      {activeFaqIndex === 1 && (
        <p className='text-gray-600 text-sm mt-2 transition-all duration-200'>
          Yes. Room Sewa can show related listings in the same area so renters can compare price, room type, and facilities before contacting the agent.
        </p>
      )}
    </div>

    {/* FAQ Item 3 */}
    <div className='border-b border-black/10 pb-4 pt-2'>
      <div 
        className='flex justify-between items-center cursor-pointer select-none'
        onClick={() => toggleFaq(2)}
      >
        <h3 className='font-semibold text-base md:text-lg text-neutral-800'>
          Does Room Sewa show the exact address publicly?
        </h3>
        <span className={`transform transition-transform duration-200 ${activeFaqIndex === 2 ? 'rotate-180' : ''}`}>
          <MdKeyboardArrowDown size={24} />
        </span>
      </div>
      {activeFaqIndex === 2 && (
        <p className='text-gray-600 text-sm mt-2 transition-all duration-200'>
          No. The page keeps the public location approximate for privacy and safety, then guides the user to contact the agent for the next step.
        </p>
      )}
    </div>

  </div>
</div>


        </div>
        </div>
      </main>
        <Footer/>
    </div>
  )
}

export default RoomDescription