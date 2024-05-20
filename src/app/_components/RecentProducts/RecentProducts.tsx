import GetProducts from "@/service/GetProducts";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import dynamic from "next/dynamic";
const RecentProductCard = dynamic(()=> import("./ReecentProductCard"), {ssr: false}) 
import { Props } from "./ReecentProductCard";


const RecentProducts = async () => {
  const products = await GetProducts();

  return (
    <div className="lg:w-1/2 py-[30px]">
      <h1 className="text-3xl py-3">Recent Products</h1>
      <Carousel className="flex" opts={{
        align: "start",
      }}>
        <CarouselContent >
          {products?.results?.slice(4, 12).map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/3 lg:basis-1/3">
              <RecentProductCard {...item as Props}/>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-[-30px] left-[300px] lg:left-[675px] border-none text-3xl text-primary font-thin bg-transparent hover:bg-transparent hover:text-black" />
        <CarouselNext className="absolute top-[-30px] right-[5px] border-none text-3xl text-primary font-thin bg-transparent hover:bg-transparent hover:text-black" />
      </Carousel>
    </div>
  );
};

export default RecentProducts;