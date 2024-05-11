"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { IoStarOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addProduct } from "@/providers/redux/slices/product-slice";


interface ImageItem {
  image: string;
  image_id: number;
}

interface Props {
  title: string;
  images: ImageItem[];
  price: string;

}

const RecentProductCard = ({
  title,
  images,
  price
}: Props) => {
  const img =  images[0].image;
  const dispatch = useDispatch()
  const handleAddProduct = ()=> {
    dispatch()
  }
  return (
    <div className="p-[4px] lg:w-[226px] lg:h-[348px] flex flex-col bg-white gap-3 hover:shadow-lg">
      <div className="flex items-center justify-center relative">
        <img src={img} alt="" className="w-[216px] h-[216px] object-contain" />
        <Button variant="secondary" className="rounded-full absolute top-0 right-0 px-3" onClick={handleAddProduct}>
            <IoStarOutline className="hover:text-primary text-xl" />
          </Button>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-primary text-sm">{title}</h2>
        <div className="flex items-center gap-1 justify-center">
        <IoStarOutline/>
        <IoStarOutline/>
        <IoStarOutline/>
        <IoStarOutline/>
        <IoStarOutline/>
        </div>
        <p className="text-bold text-xl">${price}</p>
      </div>
    </div>
  );
};

export default RecentProductCard;

