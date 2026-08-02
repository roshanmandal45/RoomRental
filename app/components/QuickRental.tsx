"use-client"


import { LuShieldCheck } from 'react-icons/lu'

const QuickRental = () => {
  // Structured data array keeps your component clean and scalable
  const tips = [
    {
      title: "Location Targeting",
      text: "Looking for a room near colleges, offices, or transport routes? Start with Kathmandu and Lalitpur."
    },
    {
      title: "Budget Optimization",
      text: "On a budget? Start with the cheaper room sections, then compare options in Pokhara and Bhaktapur."
    },
    {
      title: "Smart Shortlisting",
      text: "Shortlist by area first, then open full listings to compare price, room type, and location."
    }
  ]

  return (
    // Matches your max-w-[1380px] global architecture perfectly
    <div className='max-w-[1380px] mx-auto px-4 sm:px-8 md:px-12 py-10 border-b border-black/5'> 
      
      {/* Title Section */}
      <div className='mb-8'>
        <h2 className='text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mb-2'>
          Quick Rental Tips
        </h2>
      </div>

      {/* Responsive Grid Layout: 1 col on mobile, 3 cols on desktop */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {tips.map((tip, index) => (
          <div 
            key={index} 
            className='flex gap-4 p-4 rounded-2xl border border-black/5 bg-neutral-50/50 hover:bg-neutral-50 transition-colors duration-200'
          >
            {/* The modern outline shield check icon from react-icons */}
            <div className='text-rose-500 shrink-0 mt-0.5'>
              <LuShieldCheck size={22} className='stroke-[2]' />
            </div>
            
            {/* Context Text Box */}
            <div className='flex flex-col gap-1'>
              <h3 className='font-semibold text-neutral-800 text-sm sm:text-base'>
                {tip.title}
              </h3>
              <p className='text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal'>
                {tip.text}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default QuickRental