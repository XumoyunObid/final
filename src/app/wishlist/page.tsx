import React from 'react'
import WishlistBreadCrump from './_components/WishistBreadCrumb'
import WishlistTable from './_components/WishlistTable'



const Wishlist = () => {
  return (
    <div className="container">
      <WishlistBreadCrump/>
      <h1 className="text-4xl font-semibold py-4">Wishlist</h1>
      <WishlistTable/>
    </div>
  )
}

export default Wishlist
