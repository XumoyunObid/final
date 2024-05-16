import React from 'react';
import bg from "/public/images/cartbanner.jpg"
import  Image  from 'next/image';
import CartBreadCrump from './CartBreadCrump';

const Banner = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <Image src={bg} alt="background-image" className="w-full"/>
      <div className="absolute flex flex-col gap-3 items-center">
        <h1 className="text-4xl lg:text-6xl text-white">My Cart</h1>
        <CartBreadCrump/>
      </div>
    </div>
  )
}

export default Banner
