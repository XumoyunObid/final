import React from 'react'
import img from "/public/images/clothingbanner.jpg"
import Image from 'next/image'
import ClothingList from './Components/ClothingList'


const Clothing = () => {
  return (
    <div className="container py-4">
      <h1 className="text-3xl py-4">Clothing & Bags Products</h1>
      <div className="flex-col md:flex-row lg:flex-row flex items-center gap-3">
        <Image src={img} alt="image" className="md:hidden lg:block" />
        <ClothingList/>
      </div>
    </div>
  )
}

export default Clothing
