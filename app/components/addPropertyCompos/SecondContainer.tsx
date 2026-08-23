import Image from 'next/image'
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

interface SecondContainerProps {
  propertyType: string | null
  setPropertyType: React.Dispatch<React.SetStateAction<string | null>>
  unit: number 
  setUnit: React.Dispatch<React.SetStateAction<number>>
}

const SecondContainer = ({propertyType, setPropertyType, unit, setUnit}:SecondContainerProps) => {

    const cats = [
      { id: 1, label: "Room", value: "ROOM", icon: room, alt: "room" },
      { id: 2, label: "BK", value: "BK", icon: BK, alt: "bk" },
      { id: 3, label: "BHK", value: "BHK", icon: BHK, alt: "bhk" },
      { id: 4, label: "Apartment", value: "APARTMENT", icon: Apartment, alt: "apt" },
      { id: 5, label: "House", value: "HOUSE", icon: House, alt: "house" },
      { id: 6, label: "Flat", value: "FLAT", icon: Flat, alt: "flat" },
      { id: 7, label: "Hostel", value: "HOSTEL", icon: Hostel, alt: "hostel" },
      { id: 8, label: "Hotel", value: "HOTEL", icon: Hotel, alt: "hotel" },
      { id: 9, label: "Cottage", value: "COTTAGE", icon: Cottage, alt: "ctg" },
      { id: 10, label: "Office", value: "OFFICE_SPACE", icon: Office, alt: "office" },
    ];



  return (
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
                     {cats.map((item) => (
                       <div
                         key={item.id}
                         className={`relative border border-black/10 flex items-center justify-center rounded-2xl px-4 py-6 transition-all cursor-pointer group   ${propertyType === item.value
                             ? " border-2  border-red-500 bg-red-100"
                             : "border-black/10 border-2 hover:bg-gray-100 hover:border-red-300"
                           }`} onClick={() => setPropertyType(item.value)}
                       >
   
                         {/* Check mark */}
                         {propertyType === item.value && (
                           <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                             <span className="text-white text-xs font-bold">✓</span>
                           </div>
                         )}
   
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
                       <button className='flex h-10 w-10 items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-200 transition-colors overflow-hidden' onClick={() => setUnit(prev => Math.max(1, prev - 1))}>-</button>
                       <input className='h-10 w-16 border-x border-gray-200 bg-transparent text-center text-sm font-semibold text-gray-900 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='1' value={unit} onChange={()=>console.log("hi")}/>
                       <button className='flex h-10 w-10 items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-200 transition-colors overflow-hidden' onClick={() => setUnit(prev => prev + 1)}>+</button>
                     </div>
                   </div>
   
                 </div>
               </div>
  )
}

export default SecondContainer