"use client"

import React, { useRef } from "react";
import Image from 'next/image'
import { CiDeliveryTruck, CiDroplet, CiImageOn, CiLocationOn, CiWifiOn } from 'react-icons/ci'
import bannerImg from "@/public/addPropertyImages/banner.webp"
import { FaPhoneAlt, FaRegClock } from 'react-icons/fa'
import { MdChair, MdOutlineEmail, MdOutlineShower, MdOutlineVerifiedUser } from 'react-icons/md'
import Footer from '@/app/components/Footer'
import NavbarForPage from '@/app/components/NavbarForPage'
import { GoUpload, GoVerified } from 'react-icons/go'

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
import JoditEditor from '@/app/components/JoditEditor'
import { BsCash, BsCupHot } from 'react-icons/bs'
import { IoMdBus } from 'react-icons/io'
import { FaHouse } from 'react-icons/fa6'


const cats = [
  { id: 1, label: "Room", icon: room, alt: "room" },
  { id: 2, label: "BK", icon: BK, alt: "bk" },
  { id: 3, label: "BHK", icon: BHK, alt: "bhk" },
  { id: 4, label: "Apartment", icon: Apartment, alt: "apt" },
  { id: 5, label: "House", icon: House, alt: "house" },
  { id: 6, label: "Flat", icon: Flat, alt: "flat" },
  { id: 7, label: "Hostel", icon: Hostel, alt: "hostel" },
  { id: 8, label: "Hotel", icon: Hotel, alt: "hotel" },
  { id: 9, label: "Cottage", icon: Cottage, alt: "ctg" },
  { id: 10, label: "Office", icon: Office, alt: "office" },
];

const RoomDescription = () => {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log("Selected files:", files);
    }
  };
   


  return (
    <div className='min-h-screen bg-white'>
      <NavbarForPage />

      {/* Main Div ? */}
      <main className='max-w-345 mx-auto px-4 sm:px-8 md:px-12 py-8 flex flex-col gap-8'>
        <div className='relative w-full rounded-3xl  bg-linear-to-r from-[#FF2865] via-[#D81B54] to-[#800C35] p-6 lg:p-10'>
         {/* Inner Content Wrapper  */}
         <div className='flex justify-between items-stretch'>
            <div className='flex flex-col gap-4 text-white max-w-xl'>

            <span className='rounded-full bg-[#F84F75] text-white flex w-fit py-1 px-3 text-[12px] items-center gap-2'> <GoVerified  size={14}/> Free to list & publish </span>
            <h3 className='text-3xl font-bold'>List Your Property</h3>
            <p>Connect with verified tenants across Nepal. Fill in a few details, add clear photos, and start earning today.</p>
            <div className='flex gap-3 flex-wrap mt-2'>
            <span className='rounded-full bg-[#F84F75] text-white flex w-fit py-1 px-3 text-[12px] items-center gap-2 whitespace-nowrap'> <MdOutlineVerifiedUser size={16}/> Verified tenants </span>
            <span className='rounded-full bg-[#F84F75] text-white flex w-fit py-1 px-3 text-[12px] items-center gap-2 whitespace-nowrap'> <FaRegClock  size={16}/> Live in minutes </span>
            <span className='rounded-full bg-[#F84F75] text-white flex w-fit py-1 px-3 text-[12px] items-center gap-2 whitespace-nowrap'> <GoVerified  size={16}/> 24/7 support </span>
            </div>
            </div>

            <div className='hidden lg:block overflow-hidden relative shrink-0 w-80'>
                <Image src={bannerImg} alt='banner' fill className='object-cover w-full rounded-2xl' />
            </div>
         </div>
        </div>

        {/* Lower Content Main Wrapper (Parent) */}
        <div className='w-full flex flex-col gap-10 lg:flex-row'>
          {/* The Side Bar  */}
          <div className='lg:order-2 lg:h-full lg:w-1/2 lg:sticky top-40 flex flex-col gap-5 order-2'>

           <div className='w-full rounded-2xl border border-black/10'>
           <div className='flex flex-col gap-3 bg-[#FFFAFB] border-b border-gray-100 p-4 rounded-2xl'>
              <h3 className='font-semibold text-lg'>Review & Publish</h3>
              <span>0 of 7 items ready</span>
              <div className=' rounded-xl py-1 w-full bg-gray-300'></div>
            </div>
 
             {/* CheckLists  */}
             <div className='px-6 py-4 flex flex-col gap-4'>

            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2 text-gray-400'>
               <span className='h-4 w-4 shrink-0 rounded-full border border-gray-300'></span>
               <p>Property type selected</p>
                </div>

                <div className='flex items-center gap-2 text-gray-400'>
               <span className='h-3 w-3 shrink-0 rounded-full border border-gray-300'></span>
               <p>Title (min 10 characters)</p>
                </div>

                <div className='flex items-center gap-2 text-gray-400'>
               <span className='h-4 w-4 shrink-0 rounded-full border border-gray-300'></span>
               <p>Description added</p>
                </div>

                <div className='flex items-center gap-2 text-gray-400'>
               <span className='h-4 w-4 shrink-0 rounded-full border border-gray-300'></span>
               <p>Address & map location</p>
                </div>
 
                <div className='flex items-center gap-2 text-gray-400'>
               <span className='h-4 w-4 shrink-0 rounded-full border border-gray-300'></span>
               <p>Rent amount</p>
                </div>
 
                <div className='flex items-center gap-2 text-gray-400'>
               <span className='h-4 w-4 shrink-0 rounded-full border border-gray-300'></span>
               <p>Contact number</p>
                </div>

                <div className='flex items-center gap-2 text-gray-400'>
               <span className='h-4 w-4 shrink-0 rounded-full border border-gray-300'></span>
               <p>Atleast one photo</p>
                </div>

            </div>

           {/* Share to fb container  */}
            <div className='bg-[#EFF5FF] p-3 rounded-xl'>
                <div className='flex flex-col gap-2  text-sm'>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
           <input type="radio" />
           <p className='text-blue-700'>Share to Facebook Page</p>
                    </div>
           <GoVerified className='text-blue-700' size={16}/>
                </div>
                <p className='pl-5 text-blue-600 text-[12px] '>Automatically share to our Facebook page for maximum reach</p>
                </div>

               </div>
                <button className='text-white  bg-linear-to-r from-[#FF2865] via-[#D81B54] to-[#800C35] w-full rounded-xl flex items-center justify-center py-2 text-[15px]'>Publish Property</button>
                <div className='text-[12px] flex gap-1 items-center justify-center'>
                    <span className='text-gray-500 flex items-center gap-1'> <MdOutlineEmail size={14} /> Need help? </span>
                      <p className='text-red-500 font-semibold'>support@roomsewa.com.np</p>
                </div>

            </div>
           </div>

                     </div>


          {/* Left Content to the Sidebar  */}
          <div className='flex flex-col gap-6'>
          <div className='w-full rounded-2xl border border-black/10 p-6'>
            <div className='flex flex-col gap-5'>
                {/* Title Wrapper  */}
                <div className='flex gap-3'>
                    <span className='h-10 w-10 shrink-0 bg-[#F84F75] text-white flex items-center justify-center rounded-full'>1</span>
                    <div className='flex flex-col gap-1'>
              <h3 className='font-semibold text-lg'>Property Type</h3>
              <p className='text-gray-600 text-sm'>Choose the right kind of property you are listing</p>
                    </div>
                </div>

                {/* Category Wrapper  */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-4'>
      {cats.map((item, index) => (
        <div 
          key={index} 
          className='border border-black/10 flex items-center justify-center rounded-2xl px-4 py-6 transition-all cursor-pointer group hover:bg-gray-100 hover:border-red-300'
        >
          <div className='flex flex-col items-center gap-2'>
            <Image 
              src={item.icon} 
              alt={item.alt} 
              className='transition-transform group-hover:scale-[1.15] duration-300' 
            />
            <p className='text-[12px] font-medium text-neutral-800'>{item.label}</p>
          </div>
        </div>
      ))}
    </div>

              {/* Lower Div  */}
              <div className='p-6 bg-[#F9FAFB] rounded-2xl flex flex-col gap-1 lg:flex-row lg:gap-4 lg:items-center '>
                <div className=''>
                <p className='font-semibold text-lg'>How many units?</p>
                <span className='text-gray-600 text-[12px]'>Total numbers of rooms / units available</span>
                </div>
                {/* Buttons  */}
                <div className='border border-black/10 flex items-center rounded-xl w-fit mt-2 bg-white overflow-hidden'>
                    <button className='flex h-10 w-10 items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-200 transition-colors overflow-hidden'>-</button>
                    <input className='h-10 w-16 border-x border-gray-200 bg-transparent text-center text-sm font-semibold text-gray-900 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='1'/>
                    <button className='flex h-10 w-10 items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-200 transition-colors overflow-hidden'>+</button>
                </div> 
              </div>

            </div>
          </div>

          <div className='border border-black/10 p-6 rounded-2xl'>
            <div className='flex flex-col gap-4'>
             <div className='flex gap-3'>
                    <span className='h-10 w-10 shrink-0 bg-[#F84F75] text-white flex items-center justify-center rounded-full'>2</span>
                    <div className='flex flex-col gap-1'>
              <h3 className='font-semibold text-lg'>Title & Description</h3>
              <p className='text-gray-600 text-sm'>Make your listing stand out with a clear headline and details</p>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='flex text-sm items-center gap-1 font-semibold'>Title <span className='text-red-500'>*</span></p>
             <input type="text" placeholder='Search here...' className='py-2 px-3 rounded-xl border border-gray-300 w-full text-sm'/>
                </div>
                  
                  {/* Desciption Container  */}
                 <div className='flex flex-col gap-2'>
                     <p className='flex items-center gap-1 font-semibold text-sm'>Description <span className='text-red-500'>*</span></p>
                <JoditEditor/>
                <p className='text-[12px] text-gray-600'>Add details like room size, furniture, floor, surroundings and who it suits best.</p>
                </div>
            </div>
          </div>


          <div className='border border-black/10 p-6 rounded-2xl'>
            <div className='flex flex-col gap-8'>
             <div className='flex gap-3'>
                    <span className='h-10 w-10 shrink-0 bg-[#F84F75] text-white flex items-center justify-center rounded-full'>3</span>
                    <div className='flex flex-col gap-1'>
              <h3 className='font-semibold text-lg'>Location</h3>
              <p className='text-gray-600 text-sm'>Search and select the exact address of your property</p>
                    </div>
                </div>

             <div className='flex gap-2 items-center border border-gray-300 text-gray-500 text-sm rounded-xl py-2 px-3 w-full'>
                <CiLocationOn />
                <input type="text" placeholder='Search here...' className='outline-none' />
             </div>
            </div>
          </div>


          <div className='border border-black/10 p-6 rounded-2xl'>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3'>
                    <span className='h-10 w-10 shrink-0 bg-[#F84F75] text-white flex items-center justify-center rounded-full'>4</span>
                    <div className='flex flex-col gap-1'>
              <h3 className='font-semibold text-lg'>Rent & Contact</h3>
              <p className='text-gray-600 text-sm'>Set your monthly rent and the number tenants should call</p>
                    </div>
                </div>


              <div className='flex flex-col gap-3 lg:flex-row lg:items-center'>

            
                 <div className='flex flex-col gap-2 w-full'>
                    <p className='flex text-sm items-center gap-1 font-semibold'>Mobile Number <span className='text-red-500'>*</span></p>
              <div className='flex gap-2 items-center border border-gray-300 text-gray-500 text-sm rounded-xl py-2 px-3 w-full justify-between'>
                <div className='flex items-center gap-3'>
                    <span className='text-gray-500'>+977</span>
                <input type="text" placeholder='98XXXXXXXX' className='outline-none text-gray-600' />
                </div>
                <div>
                    <FaPhoneAlt />
                </div>
             </div>
                </div>

                 <div className='flex flex-col gap-2 w-full'>
                    <p className='flex text-sm items-center gap-1 font-semibold'>Monthly Rent <span className='text-red-500'>*</span></p>
              <div className='flex gap-2 items-center border border-gray-300 text-gray-500 text-sm rounded-xl py-2 px-3 w-full justify-between'>
                <div className='flex items-center gap-3'>
                    <span className='text-gray-500 text-lg'>रु</span>
                <input type="text" placeholder='Enter rent amount' className='outline-none text-gray-600' />
                </div>
                <div>
                    <BsCash />
                </div>
             </div>
                </div>
                  </div>
            </div>
          </div>


          {/* Facilities And Amenities  */}
          <div className='border border-black/10 p-6 rounded-2xl'>
            <div className='flex flex-col gap-8'>
             <div className='flex gap-3'>
                    <span className='h-10 w-10 shrink-0 bg-[#F84F75] text-white flex items-center justify-center rounded-full'>5</span>
                    <div className='flex flex-col gap-1'>
              <h3 className='font-semibold text-lg'>Facilities & Amenities</h3>
              <p className='text-gray-600 text-sm'>Select everything your property offers</p>
                    </div>
                </div>

            {/* Buttons Div  */}
                <div className='flex flex-wrap gap-3'>
                  <button className='flex items-center justify-center gap-1.5 border border-gray-300 rounded-3xl py-2 px-4 text-[12px] cursor-pointer hover:bg-gray-100 hover:border-red-300 transition-all'> <CiWifiOn size={16}/> WIFI </button>
                  <button className='flex items-center justify-center gap-1.5 border border-gray-300 rounded-3xl py-2 px-4 text-[12px] cursor-pointer hover:bg-gray-100 hover:border-red-300 transition-all'> <CiDroplet  size={16}/> WATER </button>
                  <button className='flex items-center justify-center gap-1.5 border border-gray-300 rounded-3xl py-2 px-4 text-[12px] cursor-pointer hover:bg-gray-100 hover:border-red-300 transition-all'> <CiDeliveryTruck  size={16}/> PARKING </button>
                  <button className='flex items-center justify-center gap-1.5 border border-gray-300 rounded-3xl py-2 px-4 text-[12px] cursor-pointer hover:bg-gray-100 hover:border-red-300 transition-all'> <IoMdBus   size={16}/> BUS STOP </button>
                  <button className='flex items-center justify-center gap-1.5 border border-gray-300 rounded-3xl py-2 px-4 text-[12px] cursor-pointer hover:bg-gray-100 hover:border-red-300 transition-all'> <BsCupHot    size={16}/> MODULAR KITCHEN </button>
                  <button className='flex items-center justify-center gap-1.5 border border-gray-300 rounded-3xl py-2 px-4 text-[12px] cursor-pointer hover:bg-gray-100 hover:border-red-300 transition-all'> <FaHouse size={16}/> ATTACHED BATHROOM </button>
                  <button className='flex items-center justify-center gap-1.5 border border-gray-300 rounded-3xl py-2 px-4 text-[12px] cursor-pointer hover:bg-gray-100 hover:border-red-300 transition-all'> <MdOutlineShower  size={16}/> SHOWER  </button>
                  <button className='flex items-center justify-center gap-1.5 border border-gray-300 rounded-3xl py-2 px-4 text-[12px] cursor-pointer hover:bg-gray-100 hover:border-red-300 transition-all'> <MdChair   size={16}/> Furniture  </button>

                </div>
            </div>
          </div>


          <div className='border border-black/10 p-6 rounded-2xl' onClick={handleContainerClick}>
          <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        multiple
        className="hidden"
      />
            <div className='flex flex-col gap-6 pb-8 border-b border-black/5'>
              <div className='flex gap-3'>
                    <span className='h-10 w-10 shrink-0 bg-[#F84F75] text-white flex items-center justify-center rounded-full'>6</span>
                    <div className='flex flex-col gap-1'>
              <h3 className='font-semibold text-lg'>Photos & Videos</h3>
              <p className='text-gray-600 text-sm'>High-quality photos attract more tenants. The first image becomes the cover photo.</p>
                    </div>
                </div>
                     <div className='flex flex-col gap-2'>
                        <div className='flex justify-between'>
                    <p className='flex items-center gap-1 font-semibold'> Property Images <span className='text-red-500'>*</span></p>
                    <span className=' text-gray-600 text-sm'>0/5</span>
                        </div>
             <p className='text-gray-600 text-sm'>Upload high-quality images to attract more tenants. First image will be the cover photo.</p>
                </div>

                {/* Upload Section  */}
                <div className='border-2 border-dashed border-gray-300 p-6 flex items-center justify-center bg-[#F6F7F8] rounded-2xl'>
                    <div className='flex flex-col gap-3 items-center'>
                       <span className='h-12 w-12 rounded-full bg-white text-red-500 shrink-0 flex items-center justify-center cursor-pointer'> <GoUpload size={25} className=''/> </span>
                       <div className='flex flex-col gap-1'>
                       <h3 className='font-semibold text-lg text-[16px]'>Click to upload property images</h3>
                       <span className='text-center text-gray-600 text-[12px]'>or drag and drop your images here</span>
                       </div>
                    </div>
                </div>

                    {/* Image Guideliens  */}
                      <div className='border-dotted p-6 bg-[#EFF4FF] rounded-2xl  '>
                   <div className='flex flex-col gap-3 text-blue-500'>
                    <div className='flex items-center gap-2'>
                  <CiImageOn size={18}/>
                  <p className='font-semibold text-[15px]'>Image Guidelines</p>
                    </div>
                  {/* Points  */}
                  <div className='flex flex-col gap-1 ml-6'>

                  <div className='flex items-center gap-1 text-[12px]'>
                   <span className='h-2 w-2 shrink-0 rounded-full border'></span>
                   <p>Formats: JPG, PNG, WebP</p>
                  </div>

                   <div className='flex items-center gap-1 text-[12px]'>
                   <span className='h-2 w-2 shrink-0 rounded-full border'></span>
                   <p>Max size: 5MB per image</p>
                  </div>

                   <div className='flex items-center gap-1 text-[12px]'>
                   <span className='h-2 w-2 shrink-0 rounded-full border'></span>
                   <p>Upload: 1-5 images</p>
                  </div>

                   <div className='flex items-center gap-1 text-[12px]'>
                   <span className='h-2 w-2 shrink-0 rounded-full border'></span>
                   <p>First image = Cover photo</p>
                  </div>
                  </div>

                  
                   </div>
                </div>


                {/* Yt Link COntainer  */}
                <div className='flex flex-col gap-2'>
                    <h3 className='font-semibold text-semibold'>YouTube Video Link <span className='text-gray-600 font-normal'>(optional)</span></h3>
                    <input type="text" placeholder='Enter your link here...' className='outline-none text-gray-600 py-1.5 px-4 border border-black/10 rounded-xl w-full' />
                    <p className='text-gray-500 text-[12px]'>Add a video walkthrough to build trust. Paste a YouTube link (e.g. https://youtu.be/XXXXXXXXXXX) or just the video ID.</p>
                </div>
            </div>
          </div>

                 {/* Review COntainer  */}
                 {/* <div className='border border-black/10 rounded-2xl flex flex-col gap-5'>
            
          </div>    */}

       




        </div>
        </div>
      </main>
        <Footer/>
    </div>
  )
}

export default RoomDescription