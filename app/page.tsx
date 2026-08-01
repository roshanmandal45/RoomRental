import React from 'react'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import PopularRooms from './components/PopularRoom'
import FeaturedSec from './components/FeaturedSec'
import CheapestRoomSec from './components/CheapestRoomSec'
import EarnwithRent from './components/EarnwithRent'
import Footer from './components/Footer'
import WhyRoomSewa from './components/WhyRoomSewa'
import QuickRental from './components/QuickRental'

export default function page() {
  return (
    <main>
      <Navbar/>
      <Homepage/>
      <PopularRooms/>
      <CheapestRoomSec/>
      <FeaturedSec/>
      <WhyRoomSewa/>
      <QuickRental/>
      <EarnwithRent/>
      <Footer/>
    </main>
  )
}
