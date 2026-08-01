import React from 'react'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import PopularRooms from './components/PopularRoom'
import FeaturedSec from './components/FeaturedSec'
import CheapestRoomSec from './components/CheapestRoomSec'

export default function page() {
  return (
    <main>
      <Navbar/>
      <Homepage/>
      <PopularRooms/>
      <CheapestRoomSec/>
      <FeaturedSec/>
    </main>
  )
}
