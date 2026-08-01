import React from 'react'
import { GoShieldCheck } from 'react-icons/go'
import { IoMdTime } from 'react-icons/io'
import { PiLightning } from 'react-icons/pi'

const WhyRoomSewa = () => {
  // Hardcoded blocks moved to a clean data array for better maintainability
  const features = [
    {
      icon: <PiLightning size={22} className='stroke-[0.5]' />,
      title: "Fast Publishing",
      text: "Publish rooms and flats quickly so serious renters can find them right away."
    },
    {
      icon: <IoMdTime size={22} />,
      title: "Responsive Follow-up",
      text: "Clear replies and quicker scheduling between owners, agents, and tenants."
    },
    {
      icon: <GoShieldCheck size={22} />,
      title: "Better Tenant Matching",
      text: "Reliable listings and clearer discovery help renters find a place they can trust."
    }
  ]

  return (
    // Matches your max-w-[1380px] global architecture perfectly
    <div className='max-w-[1380px] mx-auto px-4 sm:px-8 md:px-12 py-10 border-b border-black/5'> 
      
      {/* Title Header Block */}
      <div className='mb-8'>
        <h2 className='text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mb-2'>
          Why Room Sewa
        </h2>
        <p className='text-xs sm:text-sm text-neutral-500 max-w-xl leading-relaxed mt-3'>
          Simple, fast, and reliable room discovery for renters and property owners across Nepal.
        </p>
      </div>

      {/* Responsive Grid Layout: Matching the 1 col mobile / 3 col desktop pattern */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {features.map((item, index) => (
          <div 
            key={index} 
            className='flex gap-4 p-4 rounded-2xl border border-black/5 bg-neutral-50/50 hover:bg-neutral-50 transition-colors duration-200'
          >
            {/* Standardized Rose Icon Accent Wrapper */}
            <div className='text-rose-500 shrink-0 mt-0.5'>
              {item.icon}
            </div>
            
            {/* Content Details Block */}
            <div className='flex flex-col gap-1'>
              <h3 className='font-semibold text-neutral-800 text-sm sm:text-base'>
                {item.title}
              </h3>
              <p className='text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal'>
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default WhyRoomSewa