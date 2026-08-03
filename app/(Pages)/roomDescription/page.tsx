import React from 'react'
import img1 from "@/public/roomDescrImages/img1.avif"
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'

const roomDescription = () => {
  return (
    <div className=''>
    <Navbar/>
    <div className='max-w-[1380px] mx-auto px-4 sm:px-8 md:px-12 py-8 border h-[100]'>
      {/* Top Image Container  */}
        <div className='w-full'> 
          <Image src={img1} width={60} height={60} alt='img' className='object-cover'/>
        </div>
    </div>
    </div>
  )
}

export default roomDescription