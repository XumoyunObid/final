import React from 'react'
import ScrollToTopButton from '../ScrollToTop/ScrollToTop'

const Footer = () => {
  return (
    <div>
      <ScrollToTopButton/>
      <div className="bg-[#394150]">
      <div className="grid grid-cols-1 gap-3 pt-[70px] pb-[30px] md:grid-cols-3 lg:grid-cols-4 container">
        <ul className="flex flex-col gap-2">
          <h2 className="py-3 text-white">Company Info</h2>
          <li className="text-white hover:text-primary hover:underline text-sm">About us</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Contact us</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Careers</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Business with us</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Find a store</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Press & Talent</li>
        </ul>
        <ul className="flex flex-col gap-2">
          <h2 className="py-3 text-white">Let Us Help You</h2>
          <li className="text-white hover:text-primary hover:underline text-sm">Orders</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Downloads</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Addresses</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Account details</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Lost password</li>
        </ul>
        <ul className="flex flex-col gap-2">
          <h2 className="py-3 text-white">Quick Links</h2>
          <li className="text-white hover:text-primary hover:underline text-sm">Special Offers</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Gift Cards</li>
          <li className="text-white hover:text-primary hover:underline text-sm">F21 Red</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Privacy Policy</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Teams of Use</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Portfolio</li>
        </ul>
        <ul className="flex flex-col gap-2">
          <h2 className="py-3 text-white">Quick Links</h2>
          <li className="text-white hover:text-primary hover:underline text-sm">Special Offers</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Gift Cards</li>
          <li className="text-white hover:text-primary hover:underline text-sm">F21 Red</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Privacy Policy</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Teams of Use</li>
          <li className="text-white hover:text-primary hover:underline text-sm">Portfolio</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer