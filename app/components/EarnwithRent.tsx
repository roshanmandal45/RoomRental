const EarnWithRoomSewa = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-6 border-b border-black/10">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-14">
       
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Earn with Room Sewa
            </h2>

            <p className=" text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed">
              List your property and connect with renters actively searching
              for a place. Earn through visits, bookings, and commissions with
              clear support at every step.
            </p>
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mt-6">
           
            <div>
              <span className="text-[#FF385C] font-semibold text-lg">
                Step 1
              </span>

              <h3 className="mt-2 text-2xl lg:text-2xl font-bold text-gray-900 leading-snug">
                List your property
              </h3>

              <p className="mt-2 text-gray-600 text-base lg:text-xl leading-relaxed">
                Add rooms, flats, hostels, or houses so renters can find your
                property on Room Sewa.
              </p>
            </div>

            <div>
              <span className="text-[#FF385C] font-semibold text-lg">
                Step 2
              </span>

              <h3 className="mt-2 text-2xl lg:text-2xl font-bold text-gray-900 leading-snug">
                Get booking visits
              </h3>

              <p className="mt-2 text-gray-600 text-base lg:text-xl leading-relaxed">
                Interested renters reach out, visit the property, and move
                forward with a booking.
              </p>
            </div>

            <div>
              <span className="text-[#FF385C] font-semibold text-lg">
                Step 3
              </span>

              <h3 className="mt-2 text-2xl lg:text-2xl font-bold text-gray-900 leading-snug">
                Complete the booking
              </h3>

              <p className="mt-2 text-gray-600 text-base lg:text-xl leading-relaxed">
                Finalize rentals through Room Sewa with clear service charges
                and a structured commission.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#FF385C] text-white text-lg font-semibold hover:bg-[#e62e52] transition ">
              Start listing now
            </button>

            <button className="w-full sm:w-auto px-8 py-2 rounded-full border border-gray-300 text-gray-900 text-lg font-semibold hover:bg-gray-50 transition">
              Explore live demand
            </button>
          </div>
        </div>
      
    </section>
  );
};

export default EarnWithRoomSewa;