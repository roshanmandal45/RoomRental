import React from 'react'
import { GoVerified } from 'react-icons/go'
import { MdOutlineEmail } from 'react-icons/md'

interface SidebarProps {
  handleSubmit: () => void; 
}

const Sidebar = ({handleSubmit}: SidebarProps) => {
  return (
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
                      <GoVerified className='text-blue-700' size={16} />
                    </div>
                    <p className='pl-5 text-blue-600 text-[12px] '>Automatically share to our Facebook page for maximum reach</p>
                  </div>

                </div>
                <button onClick={handleSubmit} className='text-white  bg-linear-to-r from-[#FF2865] via-[#D81B54] to-[#800C35] w-full rounded-xl flex items-center justify-center py-2 text-[15px]'>Publish Property</button>
                <div className='text-[12px] flex gap-1 items-center justify-center'>
                  <span className='text-gray-500 flex items-center gap-1'> <MdOutlineEmail size={14} /> Need help? </span>
                  <p className='text-red-500 font-semibold'>support@roomsewa.com.np</p>
                </div>

              </div>
            </div>

          </div>
  )
}

export default Sidebar