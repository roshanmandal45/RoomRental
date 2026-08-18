"use client"

import React, { useRef } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
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
  // First Container
  const [propertyType, setPropertyType] = useState<string | null>(null);
  const [unit, setUnit] = useState<number>(1);

  // Second Container
  const [title, setTitle] = useState<string>("");
  const [descri, setDescri] = useState<string>("");

  // Third Container
  const [location, setLocation] = useState<string>("");

  // Fourth Container
  const [rent, setRent] = useState<number | "">("");
  const [phone, setPhone] = useState<string>("");

  // Fifth Container
  const [facilities, setFacilities] = useState<string[]>([]);

  const { user, loading } = useAuth();
  const router = useRouter();

  const handlePublish = () => {
    if (loading) return;

    if (!user) {
      router.push("/login");
      return;
    }

    // User is logged in
    console.log("Publish property:", user.uid);

    // Add your property submit logic here
  };

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
  try {
    const user = auth.currentUser;

    if (!user) {
      console.log("No user is logged in");
      return;
    }

    const token = await user.getIdToken();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", descri);
    formData.append("propertyType", propertyType ?? "");
    formData.append("unit", unit.toString());
    formData.append("price", rent.toString());
    formData.append("location", location);
    formData.append("amenities", JSON.stringify(facilities));
    formData.append("youtubeVideo", youtubeVideo);

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
               <button
  onClick={handlePublish}
  disabled={loading}
  className='text-white bg-linear-to-r from-[#FF2865] via-[#D81B54] to-[#800C35] w-full rounded-xl flex items-center justify-center py-2 text-[15px] disabled:opacity-50'
>
  {loading ? "Checking..." : "Publish Property"}
</button>
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

    const response = await fetch("/api/properties", {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
      },

      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    console.log("Property created:", data);

  } catch (error) {
    console.error("Failed to create property:", error);
  }
};

  return (
    <div className="min-h-screen bg-white">
      <NavbarForPage />

      <main className="max-w-345 mx-auto px-4 sm:px-8 md:px-12 py-8 flex flex-col gap-8">
        <FirstContainer />

        <div className="w-full flex flex-col gap-10 lg:flex-row">
          <Sidebar handleSubmit={handleSubmit} />

          <div className="flex flex-col gap-6">
            <SecondContainer
              propertyType={propertyType}
              setPropertyType={setPropertyType}
              unit={unit}
              setUnit={setUnit}
            />

            <ThirdContainer
              title={title}
              setTitle={setTitle}
              descri={descri}
              setDescri={setDescri}
            />

            <FourthContainer
              location={location}
              setLocation={setLocation}
            />

            <RentContainer
              rent={rent}
              setRent={setRent}
              phone={phone}
              setPhone={setPhone}
            />

            <FifthContainer
              facilities={facilities}
              setFacilities={setFacilities}
            />

            <SixthContainer
              images={images}
              setImages={setImages}
              youtubeVideo={youtubeVideo}
              setYoutubeVideo={setYoutubeVideo}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RoomDescription;