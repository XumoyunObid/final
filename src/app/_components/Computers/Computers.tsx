import React from 'react'
import img from "/public/images/compbanner.jpg"
import Image from 'next/image'
import ComputersList from "./Components/ComputersList"

const Computers = () => {
  return (
    <div className="container py-4">
      <h1 className="text-3xl py-4">TVs & Desktop Products</h1>
      <div className="flex-col md:flex-row lg:flex-row flex items-center gap-3">
        <Image src={img} alt="image" className="md:hidden lg:block" />
        <ComputersList/>
      </div>
    </div>
  )
}

export default Computers
