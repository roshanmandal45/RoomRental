import { CiLocationOn } from 'react-icons/ci'

interface FourthContainerProps {
  location: string
  setLocation: React.Dispatch<React.SetStateAction<string>>
}

const FourthContainer = ({location, setLocation}:FourthContainerProps) => {
  return (
     <div className='border border-black/10 p-6 rounded-2xl'>
              <div className='flex flex-col gap-8'>
                <div className='flex gap-3'>
                  <span className='h-10 w-10 shrink-0 bg-[#F84F75] text-white flex items-center justify-center rounded-full'>3</span>
                  <div className='flex flex-col gap-1'>
                    <h3 className='font-semibold text-lg'>Location</h3>
                    <p className='text-gray-600 text-sm'>Search and select the exact address of your property</p>
                  </div>
                </div>

                <div className='flex gap-2 items-center border border-gray-300 text-gray-500 text-sm rounded-xl py-2 px-3 w-full focus-within:outline-2 focus-within:outline-orange-400'>
                  <CiLocationOn />
                  <input type="location"  value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Search here...' className='w-full outline-none' />
                </div>
              </div>
            </div>
  )
}

export default FourthContainer