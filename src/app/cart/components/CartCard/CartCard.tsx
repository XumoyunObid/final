"use client"
import { FaHeart, FaRegHeart, FaRegTrashAlt } from "react-icons/fa";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import parse from "html-react-parser";
import { removeProduct, toggleAmount } from "@/redux/slices/product-slice";
import { addWishlist, removeWishlist } from "@/redux/slices/wishlist-slice";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
interface Props{
  id:number;
  title:string;
  price:string;
  is_available:boolean;
  images: {
    image: string;
    image_id: number;
  }[];
  other_detail: string
  userCount: number
  userPrice: string
}
const CartCard = (props: Props) => {
  const {wishlist} = useSelector((state:RootState)=> state.wishlist)
  const [wishBtn, setWishBtn] = useState(false);
  const dispatch = useDispatch()
  const id = props.id

  const img =  props.images[0].image;
  useEffect(() => {
    setWishBtn(wishlist.some((el) => el.id === id));
  }, [id, wishlist]);

  const handleDelete = () => {
    dispatch(removeProduct(id));
  };

  const handleInc = () => {
    dispatch(toggleAmount({ type: "ADD", id }));
  };
  const handleDec = () => {
    if (props.userCount > 1) {
      dispatch(toggleAmount({ type: "REMOVE", id }));
    }
  };

  const handleLike = () => {
    dispatch(addWishlist(props));
    setWishBtn(!wishBtn);
  };

  const handleDisLike = () => {
    dispatch(removeWishlist(id));
    setWishBtn(!wishBtn);
  };

  return (
    <div className="flex items-center border-b-2 py-6 justify-between bg-white">
      <div className="lg:w-1/4">
        <img src={img} alt="" className="w-[150px] lg:w-[250px]"/>
      </div>
      <div className="flex flex-col gap-5 lg:w-1/2">
        <h1 className="lg:text-2xl font-bold">{props.title}</h1>
        {props.other_detail && <div className="text-sm line-clamp-3 hidden lg:block">{parse(props.other_detail)}</div>}
        <div className="flex gap-9 items-center">
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
          <button
            className="text-gray-500 items-center flex gap-3"
            onClick={handleDelete}
          >
            <FaRegTrashAlt /> Delete
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:w-1/4 items-start">
        <h2 className="lg:text-2xl font-bold">{props.price} $</h2>
        <div className="bg-primary p-[2px] flex items-center gap-6 rounded-lg">
          <button
            className="flex items-center justify-center text-white hover:text-black"
            onClick={handleDec}
          >
            <CiCircleMinus className="text-4xl" />
          </button>
          <span className="text-lg text-white w-2">{props.userCount}</span>
          <button
            className="flex items-center justify-center text-white hover:text-black"
            onClick={handleInc}
          >
            <CiCirclePlus className="text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;