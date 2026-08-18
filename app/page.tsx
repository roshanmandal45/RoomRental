import React from 'react'
import Homepage from './components/Homepage'
import PopularRooms from './components/PopularRoom'
import FeaturedSec from './components/FeaturedSec'
import CheapestRoomSec from './components/CheapestRoomSec'
import Footer from './components/Footer'
import WhyRoomSewa from './components/WhyRoomSewa'
import QuickRental from './components/QuickRental'
import EarnWithRoomSewa from './components/EarnwithRent'
import QuestionSec from './components/Questions'
import Navbar from './components/Navbar'

export default function page() {
  return (
    <main>
      <Navbar/>
      <Homepage/>
      <PopularRooms/>
      <CheapestRoomSec/>
      <WhyRoomSewa/>
      <QuickRental/>
      <EarnWithRoomSewa/>
            <FeaturedSec/>

      <QuestionSec/>
      <Footer/>
    </main>
  )
}
