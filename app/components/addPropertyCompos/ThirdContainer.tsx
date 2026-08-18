import React from 'react'
import JoditEditor from '@/app/components/JoditEditor'

interface ThirdCompoProps {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  descri: string
  setDescri : React.Dispatch<React.SetStateAction<string>>
}

const ThirdContainer = ({title, setTitle, descri, setDescri}:ThirdCompoProps) => {
  return (
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
                      <input type="text" placeholder='Search here...' value={title} onChange={(e) => setTitle(e.target.value)} className='py-2 px-3 rounded-xl border border-gray-300 w-full text-sm outline-orange-400 ' />
                    </div>
    
                    {/* Desciption Container  */}
                    <div className='flex flex-col gap-2'>
                      <p className='flex items-center gap-1 font-semibold text-sm'>Description <span className='text-red-500'>*</span></p>
                      <JoditEditor setContent={setDescri}/>
                      <p className='text-[12px] text-gray-600'>Add details like room size, furniture, floor, surroundings and who it suits best.</p>
                    </div>
                  </div>
                </div>
  )
}

export default ThirdContainer