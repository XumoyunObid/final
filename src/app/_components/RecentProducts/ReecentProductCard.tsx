"use client"
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { IoStarOutline } from "react-icons/io5";
import { useDispatch} from "react-redux";
import { addProduct, removeProduct } from "@/providers/redux/slices/product-slice";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { RootState } from "@/providers/redux/store";
import { useSelector } from 'react-redux';


interface Props {
  id: number;
  title: string;
  images: {
    image: string;
    image_id: number;
  }[];
  price: string;
  other_detail:string;
  userPrice: string;
  userCount: number
}

const RecentProductCard = (
  props
: Props) => {
  const {products} = useSelector((state:RootState)=> state.products)
  
  const img =  props.images[0].image;
  const dispatch = useDispatch()
  const [showBtn, setShowBtn] = useState(false);
  const id = props.id;

  useEffect(() => {
    setShowBtn(products.some((el) => el.id === id));
  }, [products, id]);

  const handleAddProduct = ()=> {
    dispatch(addProduct(props))
    setShowBtn(!showBtn)
  }

  const handleRemoveProduct = ()=> {
    dispatch(removeProduct(props.id))
    setShowBtn(!showBtn)
  }
  return (
    <div className="p-[4px] lg:w-[226px] lg:h-[348px] flex flex-col bg-white gap-3 hover:shadow-lg relative">
      <Link href={`/products/${props.id}`}>
      <div className="flex items-center justify-center">
        <img src={img} alt="" className="w-[216px] h-[216px] object-contain" />
      </div>
      </Link>
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-primary text-sm">{props.title}</h2>
        <div className="flex items-center gap-1 justify-center">
        <IoStarOutline/>
        <IoStarOutline/>
        <IoStarOutline/>
        <IoStarOutline/>
        <IoStarOutline/>
        </div>
        <p className="text-bold text-xl">${props.price}</p>
        {!showBtn ? <Button variant="secondary" className="rounded-md absolute z-10 bottom-2 right-1 px-[10px] py-2 flex items-center justify-center bg-primary" onClick={handleAddProduct}>
            <FaShoppingCart className="hover:text-primary text-xl" />
          </Button> : <Button variant="secondary" className="rounded-md absolute z-10 bottom-2 right-1 px-[10px] py-2 flex items-center justify-center bg-black" onClick={handleRemoveProduct}>
            <FaShoppingCart className="text-primary font-bold text-xl" />
          </Button>}
      </div>
    </div>
  );
};

export default RecentProductCard;

