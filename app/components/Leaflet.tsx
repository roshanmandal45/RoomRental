"use client"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'

const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

interface MapProps {
  center: [number, number]
}

const Map = ({ center }: MapProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    return () => {
      setIsMounted(false)
      // Completely clear Leaflet's global mapping container registry for this specific element ID
      const container = L.DomUtil.get('leaflet-map-instance')
      if (container) {
        // Force-clear the internal tracking properties directly
        delete (container as any)._leaflet_id
      }
    }
  }, [])

  if (!isMounted) return null

  return (
    <div className='w-full h-[350px] rounded-xl overflow-hidden border border-black/10 z-0'>
      <MapContainer 
        id="leaflet-map-instance"
        center={center} 
        zoom={13} 
        scrollWheelZoom={false} 
        className='w-full h-full'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={customIcon}>
          <Popup>Approximate room location.</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map