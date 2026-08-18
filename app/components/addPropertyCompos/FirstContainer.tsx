import React from 'react'
import bannerImg from "@/public/addPropertyImages/banner.webp"
import Image from 'next/image'
import { MdOutlineVerifiedUser } from 'react-icons/md'
import { FaRegClock } from 'react-icons/fa'
import { GoVerified } from 'react-icons/go'


const FirstContainer = () => {
  return (
     <div className='relative w-full rounded-3xl  bg-linear-to-r from-[#FF2865] via-[#D81B54] to-[#800C35] p-6 lg:p-10'>
          {/* Inner Content Wrapper  */}
          <div className='flex justify-between items-stretch'>
            <div className='flex flex-col gap-4 text-white max-w-xl'>

              <span className='rounded-full bg-[#F84F75] text-white flex w-fit py-1 px-3 text-[12px] items-center gap-2'> <GoVerified size={14} /> Free to list & publish </span>
              <h3 className='text-3xl font-bold'>List Your Property</h3>
              <p>Connect with verified tenants across Nepal. Fill in a few details, add clear photos, and start earning today.</p>
              <div className='flex gap-3 flex-wrap mt-2'>
                <span className='rounded-full bg-[#F84F75] text-white flex w-fit py-1 px-3 text-[12px] items-center gap-2 whitespace-nowrap'> <MdOutlineVerifiedUser size={16} /> Verified tenants </span>
                <span className='rounded-full bg-[#F84F75] text-white flex w-fit py-1 px-3 text-[12px] items-center gap-2 whitespace-nowrap'> <FaRegClock size={16} /> Live in minutes </span>
                <span className='rounded-full bg-[#F84F75] text-white flex w-fit py-1 px-3 text-[12px] items-center gap-2 whitespace-nowrap'> <GoVerified size={16} /> 24/7 support </span>
              </div>
            </div>

            <div className='hidden lg:block overflow-hidden relative shrink-0 w-80'>
              <Image src={bannerImg} alt='banner' fill className='object-cover w-full rounded-2xl' />
            </div>
          </div>
        </div>
  )
}

export default FirstContainer