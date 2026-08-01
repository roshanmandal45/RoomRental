import React from 'react'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import PopularRooms from './components/PopularRoom'

export default function page() {
  return (
    <main>
      <Navbar/>
      <Homepage/>
      <PopularRooms/>
    </main>
  )
}
