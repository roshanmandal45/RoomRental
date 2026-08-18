import { FaCheck } from 'react-icons/fa';

interface FifthCompoProps {
  facilities: string[]
  setFacilities: React.Dispatch<React.SetStateAction<string[]>>
}

const FifthContainer = ({facilities, setFacilities}:FifthCompoProps) => {
    const FACILITIES = [
      "Parking",
      "WiFi",
      "Water Supply",
      "Balcony",
      "Kitchen",
      "Security Guard",
      "Furnished",
      "Air Conditioner",
    ];


    
     const handleToggle = (facility: string) => {
    setFacilities((prev) =>
      prev.includes(facility)
        ? prev.filter((item) => item !== facility) // Deselect if already present
        : [...prev, facility] // Select if not present
    );
  };

  return (
    <div className='border border-black/10 p-6 rounded-2xl '>
                <div className='flex flex-col gap-8'>
                  <div className='flex gap-3'>
                    <span className='h-10 w-10 shrink-0 bg-[#F84F75] text-white flex items-center justify-center rounded-full'>5</span>
                    <div className='flex flex-col gap-1'>
                      <h3 className='font-semibold text-lg'>Facilities & Amenities</h3>
                      <p className='text-gray-600 text-sm'>Select everything your property offers</p>
                    </div>
                  </div>

                  {/* Buttons Div  */}
                  <div className="flex flex-wrap gap-2.5 w-full">
          {FACILITIES.map((facility) => {
            const isSelected = facilities.includes(facility);

            return (
              <button
                key={facility}
                type="button"
                onClick={() => handleToggle(facility)}
                className={`
                  flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-all border
                  ${
                    isSelected
                      ? "border-red-600 bg-red-50 text-red-600 shadow-sm ring-1 ring-[#F84F75]"
                      : "border-gray-300  bg-white text-gray-600 hover:border-gray-400 hover:bg-gray-50"
                  }
                `}
              >
                <span>{facility}</span>

                {/* Checkmark icon displayed on the right when selected */}
                <span
              className={`flex items-center justify-center transition-all duration-150 ${
                isSelected ? "w-3.5 opacity-100" : "w-0 opacity-0 overflow-hidden"
              }`}
            >
              <FaCheck className="text-xs text-red-600 shrink-0" />
            </span>
              </button>
            );
          })}
        </div>
                </div>
              </div>
  )
}

export default FifthContainer