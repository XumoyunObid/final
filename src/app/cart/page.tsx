"use client"
import React from 'react'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import { Button } from '@/components/ui/button'
import Banner from './components/banner'
import Image from 'next/image'
import emptyCart from "/public/images/empty-cart.png"
import { useRouter } from 'next/navigation'
import dynamic from "next/dynamic"

const CartCard = dynamic(()=>import('./components/CartCard/CartCard'), {ssr: false});

const Cart = () => {
  const {products}=useSelector((state:RootState)=>state)
  console.log(products)
  const router = useRouter()
  const handleBuy =()=>{

  }
  const toHome =()=> {
    router.push("/")
  }
  return (
    <div className="bg-[#F5F6F9]">
      <Banner/>
      <div className="container py-6">
      {products.products.length ? (
        <div>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
            <div className="lg:w-4/5 w-full">
              {products?.products?.map((item) => (
                <CartCard images={[]} key={item.id} {...item} />
              ))}
            </div>
            <div className="bg-white w-full lg:w-1/5 rounded-md">
              <div className="p-6 flex flex-col gap-4 items-start">
                <h1 className="text-2xl font-medium">Cart Totals</h1>
                <p>Number of products: {products?.count}</p>
                <h2 className="text-2xl">Total: ${products?.totalPrice}</h2>
              </div>
              <Button className="w-full underline" onClick={handleBuy}>
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <span>
            <i className="fa-solid fa-cart-arrow-down text-5xl text-primary"></i>
          </span>
          <h1 className="text-4xl font-semibold">Cart is empty</h1>
          <Image src={emptyCart} width={200} height={200} alt="empty cart image"/>
          <p>However you can fill it</p>
          <Button onClick={toHome}>
            To home
          </Button>
        </div>
      )}
    </div>
    </div>

  )
}

export default Cart
