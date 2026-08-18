import React from 'react'
import { BsCash } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'

interface RentCompoProps {
  rent: number | "",
  phone: string,
  setRent: React.Dispatch<React.SetStateAction<number | "">>
  setPhone: React.Dispatch<React.SetStateAction<string>>
}

const RentContainer = ({rent, setRent, phone, setPhone}:RentCompoProps) => {
  return (
     <div className='border border-black/10 p-6 rounded-2xl'>
              <div className='flex flex-col gap-4'>
                <div className='flex gap-3'>
                  <span className='h-10 w-10 shrink-0 bg-[#F84F75] text-white flex items-center justify-center rounded-full'>4</span>
                  <div className='flex flex-col gap-1'>
                    <h3 className='font-semibold text-lg'>Rent & Contact</h3>
                    <p className='text-gray-600 text-sm'>Set your monthly rent and the number tenants should call</p>
                  </div>
                </div>


                <div className='flex flex-col gap-3 lg:flex-row '>


                  <div className='flex flex-col gap-2 w-full  '>
                    <p className='flex text-sm items-center gap-1 font-semibold'>Mobile Number <span className='text-red-500'>*</span></p>
                    <div className='flex gap-2 items-center border border-gray-300 text-gray-500 text-sm rounded-xl py-2 px-3 w-full justify-between focus-within:outline-2 focus-within:outline-orange-400'>
                      <div className='flex items-center gap-3 w-full'>
                        <span className='text-gray-500 text-lg'>+977</span>
                        <input type="tel" placeholder='98XXXXXXXX' value={phone} onChange={(e) => setPhone(e.target.value)} className='text-gray-600 w-full outline-none' />
                      </div>
                      <div>
                        <FaPhoneAlt />
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col gap-2 w-full '>
                    <p className='flex text-sm items-center gap-1 font-semibold'>Monthly Rent <span className='text-red-500'>*</span></p>
                    <div className='flex gap-2 items-center border border-gray-300 text-gray-500 text-sm rounded-xl py-2 px-3 w-full justify-between focus-within:outline-2 focus-within:outline-orange-400'>
                      <div className='flex items-center gap-3 w-full'>
                        <span className='text-gray-500 text-lg'>रु</span>
                        <input type="text" placeholder='Enter rent amount' value={rent} onChange={(e) => setRent(e.target.value === "" ? "" : Number(e.target.value))} className='text-gray-600 w-full outline-none' />
                      </div>
                      <div>
                        <BsCash/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default RentContainer