"use client"
import React from 'react'
import { Badge } from "@/components/ui/badge";
import { FaRegStar, FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RootState } from '@/providers/redux/store';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
const Navbar = () => {
  const {products}=useSelector((state:RootState)=>state)
  console.log(products)
  const router = useRouter()

  const handleNavToCart = () => {
    router.push("/cart")
  }
  
  return (
    <div className="hidden lg:flex items-center gap-5">
      <button className="flex">
              <FaRegUser  className="text-3xl hover:text-primary"/>
            </button>
            <button className="flex">
              <FaRegStar className="text-4xl hover:text-primary" />
              <Badge className="text-black rounded-full py-1 px-2">0</Badge>
            </button>
            <button className="flex" onClick={handleNavToCart}>
              <HiOutlineShoppingBag className="text-4xl hover:text-primary" />
              <Badge className="text-black rounded-full py-1 px-2">{products.count}</Badge>
            </button>
    </div>
  )
}

export default Navbar
