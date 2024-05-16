"use client"
import React, { useState } from "react";
import parse from "html-react-parser";

interface ImageItem {
  image: string;
  image_id: number;
}

interface Props {
  title: string;
  other_detail: string;
  price: string;
  images: ImageItem[];
  quantity: number;
  is_available: boolean;
}

const TopDealsCard = ({
  title,
  other_detail,
  price,
  images,
  quantity,
  is_available,
}: Props) => {
  const img = images[0].image;

  return (
    <div
      className="p-5 flex flex-col lg:h-[345px] lg:flex-row items-start bg-white gap-5 hover:shadow-lg"
    >
      <div className="flex items-center justify-center lg:w-1/2">
        <img src={img} alt="" className="w-[305px] h-[305px] object-contain" />
      </div>
      <div className="flex flex-col gap-6 lg:w-1/2">
        <h2 className="text-primary text-2xl">{title}</h2>
        <p className="font-bold text-xl">${price}</p>
        {other_detail && <div className="text-sm line-clamp-4">{parse(other_detail)}</div>}
        <span>Available: {quantity}</span>
        <p>{is_available ? "Product is available in the market" : "Product is not available for now"}</p>
      </div>
    </div>
  );
};

export default TopDealsCard;
