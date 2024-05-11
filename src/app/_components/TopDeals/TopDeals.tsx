import GetProducts from "@/service/GetProducts";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TopDealsCard from "./TopDealsCard";


const TopDeals = async () => {
  const products = await GetProducts();

  return (
    <div className="lg:w-1/2 py-[30px]">
      <h1 className="text-3xl py-3">Top Flash Deals</h1>
      <Carousel>
        <CarouselContent className="">
          {products?.results?.slice(0, 4).map((item) => (
            <CarouselItem key={item.id}>
              <TopDealsCard  {...item}/>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-[-30px] left-[300px] lg:left-[655px] border-none text-3xl text-gray-500 font-thin bg-transparent hover:bg-transparent hover:text-primary" />
        <CarouselNext className="absolute top-[-30px] right-[5px] border-none text-3xl text-gray-500 font-thin bg-transparent hover:bg-transparent hover:text-primary" />
      </Carousel>
    </div>
  );
};

export default TopDeals;
