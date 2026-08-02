import React from 'react';
import { LuShieldCheck } from 'react-icons/lu';

const EarnWithRoomSewa = () => {
  // Structured data array matches the QuickRental architecture
  const steps = [
    {
      stepNumber: "Step 1",
      title: "List your property",
      text: "Add rooms, flats, hostels, or houses so renters can find your property on Room Sewa."
    },
    {
      stepNumber: "Step 2",
      title: "Get booking visits",
      text: "Interested renters reach out, visit the property, and move forward with a booking."
    },
    {
      stepNumber: "Step 3",
      title: "Complete the booking",
      text: "Finalize rentals through Room Sewa with clear service charges and a structured commission."
    }
  ];

  return (
    // Matches your max-w-[1380px] global architecture perfectly
    <div className='max-w-[1380px] mx-auto px-4 sm:px-8 md:px-12 py-10 border-b border-black/5'> 
      
      {/* Title Section */}
      <div className='mb-8 max-w-4xl'>
        <h2 className='text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mb-2'>
          Earn with Room Sewa
        </h2>
        <p className='text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal'>
          List your property and connect with renters actively searching for a place. 
          Earn through visits, bookings, and commissions with clear support at every step.
        </p>
      </div>

      {/* Responsive Grid Layout: 1 col on mobile, 3 cols on desktop */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {steps.map((step, index) => (
          <div 
            key={index} 
            className='flex gap-4 p-4 rounded-2xl border border-black/5 bg-neutral-50/50 hover:bg-neutral-50 transition-colors duration-200'
          >
            {/* The modern outline shield check icon matching QuickRental */}
            <div className='text-rose-500 shrink-0 mt-0.5'>
              <LuShieldCheck size={22} className='stroke-[2]' />
            </div>
            
            {/* Context Text Box */}
            <div className='flex flex-col gap-1'>
              <span className='text-[10px] uppercase tracking-wider font-bold text-rose-500'>
                {step.stepNumber}
              </span>
              <h3 className='font-semibold text-neutral-800 text-sm sm:text-base'>
                {step.title}
              </h3>
              <p className='text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal'>
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons styled cleanly underneath the grid */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button className="w-full sm:w-auto px-5 py-2 rounded-full bg-rose-500 text-white text-sm font-semibold hover:bg-rose-600 transition-colors duration-200 cursor-pointer">
          Start listing now
        </button>
        <button className="w-full sm:w-auto px-5 py-2 rounded-full border border-black/10 text-neutral-800 text-sm font-semibold hover:bg-neutral-50 transition-colors duration-200 cursor-pointer">
          Explore live demand
        </button>
      </div>

    </div>
  );
};

export default EarnWithRoomSewa;