"use client"

import { CiHeart, CiLocationOn } from 'react-icons/ci'

import Image from 'next/image'
import { useRouter } from 'next/navigation' 
import { useEffect, useState } from 'react'
  import DefaultImg from "@/public/CheapestSecImges/Img8(NoImgSelected).webp"
    import gemai from "@/public/PopularSecImages/gemai.jpeg"


  interface Property {
    _id: string;
    title: string;
    propertyType: string;
    units: number;
    price: number;
    location: string;
    images: string[];
  }


const FeaturedSec = () => {
  const router = useRouter()
   const [properties, setProperties] = useState<Property[]>([]);
      const [loading, setLoading] = useState<boolean>(true);
      const [error, setError] = useState<any>("");

   useEffect(() => {
          const featuredRooms = async() =>{
            try {
              const response = await fetch("/api/properties?section=featured")
              if(!response.ok){
                throw new error("failed to fetch featured rooms")
              }
              const data = await response.json()
              setProperties(data)
            } catch (error) {
              console.log("Cheapest room section error: ",error)
              setError("Failed to load properties");
            }
            finally{
              setLoading(false)
            }
          }
          featuredRooms()
        }, [])
  
        if(loading) {
          return <p>Loading featured rooms...</p>
        }
  
        if(error){
        return  <p>{error}</p>
        }
  
  return (
    <div className='max-w-345 mx-auto px-4 sm:px-8 md:px-12 py-8 border-b border-black/10 '> 
       {/* Header Section */}
      <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6'>
        <div className='flex flex-col gap-1.5'>
          <h2 className='text-xl sm:text-2xl lg:text-3xl  font-bold tracking-tight text-neutral-900'>
            Featured rooms and apartments
          </h2>
          <p className='text-neutral-500 max-w-xl leading-relaxed'>
           Hand-picked listings from trusted owners and agents, ready for you to compare.
          </p>
        </div>
        
        <button className='bg-black text-white text-sm font-medium rounded-full px-5 py-2.5 w-full md:w-auto hover:bg-neutral-800 transition-colors cursor-pointer shrink-0'>
          View all
        </button>
      </div>

        {/* Grid Wrapper: Houses each unified Card item */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8'>
              {properties.map((property) => {
                  const hasImage = Array.isArray(property?.images) && property.images.length > 0 && property.images[0];
          const imageSrc = hasImage ? property.images[0] : gemai;
          return (
                <div key={property._id} className='flex flex-col gap-3 group cursor-pointer'>
                  
                  {/* Image Wrapper */}
                  <div onClick={() => router.push(`/roomDescription/${property._id}`)} className='relative w-full h-60 rounded-2xl overflow-hidden border border-black/5 bg-neutral-100 shadow-sm'>
                    <Image  src={imageSrc}  alt={`Affordable rental option`}  fill sizes="(max-w-640px) 100vw, (max-w-768px) 50vw, (max-w-1024px) 33vw, 25vw" className='object-cover group-hover:scale-105 transition-transform duration-300' />
                    <div className='flex w-full justify-between items-center absolute top-0 p-3 z-10 '>
                      <span className='bg-neutral-900/80 backdrop-blur-xs rounded-full px-2.5 py-1 text-white text-[11px] font-medium tracking-wide'>
                        {property.units} {property.propertyType}
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
                        <span className='text-lg'>{property.price.toLocaleString()}</span>
                      </p>
                      <span className='bg-neutral-100 font-medium rounded-md px-2 py-0.5 text-neutral-600 text-[11px]'>
                         {property.units} {property.propertyType}
                      </span>
                    </div>
                    
                    <div className='text-neutral-500 flex items-start gap- mt-0.5'>  
                      <CiLocationOn size={15} className='shrink-0 mt-0.5 text-neutral-400' /> 
                      <span className='line-clamp-1 leading-tight text-sm'>{property.location}</span> 
                    </div>
                  </div>
      
                </div>
              )})}
            </div>
    </div>
  )
}

export default FeaturedSec