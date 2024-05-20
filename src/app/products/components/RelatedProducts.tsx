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
const RecentProductCard = dynamic(() => import("@/app/_components/RecentProducts/ReecentProductCard"), { ssr: false });
import { Props } from "@/app/_components/RecentProducts/ReecentProductCard";

const RelatedProducts = async () => {
  const products = await GetProducts();

  return (
    <div className="w-full py-[30px]">
      <h1 className="text-3xl py-3">Related Products</h1>
      <Carousel className="flex" opts={{ align: "start" }}>
        <CarouselContent>
          {products?.results?.slice(8, 22).map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/6 lg:basis-1/6">
              <RecentProductCard {...item as Props} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-[-30px] left-[300px] lg:left-[1375px] border-none text-3xl text-primary font-thin bg-transparent hover:bg-transparent hover:text-black" />
        <CarouselNext className="absolute top-[-30px] right-[5px] border-none text-3xl text-primary font-thin bg-transparent hover:bg-transparent hover:text-black" />
      </Carousel>
    </div>
  );
};

export default RelatedProducts;