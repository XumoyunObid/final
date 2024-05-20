"use client"
import React from 'react'
import { IoStarOutline } from "react-icons/io5";
import parse from "html-react-parser";
import { Button } from '@/components/ui/button';
import { FaRegHeart, FaFacebookF, FaTwitter, FaPinterestP, FaGooglePlusG, FaLinkedinIn, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { ProductType } from '@/service/GetSingleProduct';
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { addProduct, removeProduct } from '@/redux/slices/product-slice';
import { addWishlist, removeWishlist } from '@/redux/slices/wishlist-slice';

const ProductDetails = ({ product }: { product: ProductType }) => {
  const {products}= useSelector((state:RootState)=> state.products)
  const {wishlist} = useSelector((state:RootState)=>state.wishlist)
  // console.log(wishlist)
  const [wishBtn, setWishBtn] = useState(false);
  const [showBtn, setShowBtn] = useState(false)
  const dispatch = useDispatch()
  const id = product.id;

  useEffect(() => {
    setShowBtn(products.some((el) => el.id === id));
    setWishBtn(wishlist.some((el)=> el.id === id))
  }, [products, wishlist, id]);

  const handleAdd = ()=> {
    setShowBtn(!showBtn)
    dispatch(addProduct(product))
  }

  const handleRemove = ()=>{
    setShowBtn(!showBtn)
    dispatch(removeProduct(product.id))
  }

  const handleLike = () => {
    dispatch(addWishlist(product));
    setWishBtn(!wishBtn);
  };

  const handleDisLike = () => {
    dispatch(removeWishlist( product.id ));
    setWishBtn(!wishBtn);
  };
  return (
    <div className="w-1/2">
    <h1 className="text-4xl font-sembold">
      {product?.title}
    </h1>
    <div className="flex items-center gap-1 justify-satrt text-primary py-4">
        <IoStarOutline/>
        <IoStarOutline/>
        <IoStarOutline/>
        <IoStarOutline/>
        <IoStarOutline/>
        </div>
    <h2 className="text-3xl text-semibold pb-4">$ {product?.price}</h2>
    {product?.other_detail && <div className="text-sm line-clamp-4 pb-4">{parse(product?.other_detail)}</div>}

    <h2 className="pb-4">Available now: {product?.quantity}</h2>
    <div className="flex items-center gap-3 pb-4">
      {!showBtn ? (<Button className="bg-primary rounded-full text-black px-[50px] flex items-center gap-2" onClick={handleAdd}>Add to cart <FaShoppingCart/></Button>) : (<Button className="bg-black rounded-full text-primary px-[50px] flex items-center gap-2 hover:text-primary hover:bg-black" onClick={handleRemove}>Remove from cart <FaShoppingCart/></Button>)}
    {!wishBtn ? (
            <button
              className="text-gray-500 items-center hidden lg:flex gap-3"
              onClick={handleLike}
            >
              <FaRegHeart /> Add to wishlist
            </button>
          ) : (
            <button
              onClick={handleDisLike}
              className="text-gray-500 items-center hidden lg:flex gap-3"
            >
              <FaHeart className="text-primary" />Remove from wishlist
            </button>
          )}
    </div>
    <div className="flex items-center gap-4">
      <h2>Share this product</h2>
      <a className="p-4 rounded-full bg-gray-100 hover:text-primary text-gray-600"><FaFacebookF /></a>
      <a className="p-4 rounded-full bg-gray-100 hover:text-primary text-gray-600"><FaTwitter /></a>
      <a className="p-4 rounded-full bg-gray-100 hover:text-primary text-gray-600"><FaPinterestP /></a>
      <a className="p-4 rounded-full bg-gray-100 hover:text-primary text-gray-600"><FaGooglePlusG /></a>
      <a className="p-4 rounded-full bg-gray-100 hover:text-primary text-gray-600"><FaLinkedinIn /></a>
    </div>
        </div>
  )
}

export default ProductDetails
