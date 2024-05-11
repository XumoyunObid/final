"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { IoStarOutline } from "react-icons/io5";

interface ImageItem {
  image: string;
  image_id: number;
}

interface Props {
  title: string;
  images: ImageItem[];
  price: string;
}

const RecentProductCardHover = ({ title, images }: Props) => {
  const img = images[1].image;
  return (
    <div className="p-[4px] lg:w-[226px] lg:h-[348px] flex flex-col bg-white gap-3 hover:shadow-lg">
      <div className="flex items-center justify-center relative">
        <img src={img} alt="" className="w-[216px] h-[216px] object-contain top-0 right-0" />
        <Button variant="secondary" className="rounded-full absolute">
            <IoStarOutline />
          </Button>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-primary text-sm">{title}</h2>
        <div className="flex items-center justify-center">
          <Button className="rounded-full bg-primary">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default RecentProductCardHover;
