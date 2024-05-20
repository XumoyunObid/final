import React from 'react'
import img from "/public/images/householdbanner.jpg"
import Image from 'next/image'
import HouseHoldList from './Components/HouseHoldList'

const HouseHold = () => {
  return (
    <div className="container py-4">
      <h1 className="text-3xl py-4">Household Appliences</h1>
      <div className="flex-col md:flex-row lg:flex-row flex items-center gap-3">
        <HouseHoldList/>
        <Image src={img} alt="image" className="md:hidden lg:block" />
      </div>
    </div>
  )
}

export default HouseHold
