import React from 'react'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import CheapestRoomSec from './components/CheapestRoomSec'
import FeaturedSec from './components/FeaturedSec'

export default function page() {
  return (
    <main>
      <Navbar/>
      <Homepage/>
      <CheapestRoomSec/>
      <FeaturedSec/>
    </main>
  )
}
