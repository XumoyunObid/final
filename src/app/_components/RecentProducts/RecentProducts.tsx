import GetProducts from "@/service/GetProducts";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RecentProductCard from "./ReecentProductCard";
import RecentProductCardHover from "./RecentCardHover"


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
              <RecentProductCard {...item}/>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-[-30px] left-[300px] lg:left-[675px] border-none text-3xl text-gray-500 font-thin bg-transparent hover:bg-transparent hover:text-primary" />
        <CarouselNext className="absolute top-[-30px] right-[5px] border-none text-3xl text-gray-500 font-thin bg-transparent hover:bg-transparent hover:text-primary" />
      </Carousel>
    </div>
  );
};

export default RecentProducts;