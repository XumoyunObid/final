import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GetBanners from "@/service/GetBanners";
import BannerSkeleton from "../Skeleton/BannerSkeleton";
import parse from "html-react-parser";
import Autoplay from "embla-carousel-autoplay";

export default async function Banner() {
  const data = await GetBanners()
  console.log(data);
 
  return (
    <div className="">
      {data ? (
        <Carousel
          // plugins={[plugin.current]}
          className="w-full h-[525px] relative border bg-white"
        >
          <CarouselContent className="">
            {data?.results?.map((banner) => (
              <CarouselItem key={banner.id}>
                <img
                  className="h-[525px] object-cover object-left sm:overflow-hidden lg:object-fill lg:w-full relative"
                  src={banner.image}
                  alt={banner.title}
                />
                <div className="absolute top-[30%] left-[15%] w-[450px]">
                  <h1
                    className="text-[36px]" data-aos="fade-up"
                  >
                    {banner.description && parse(banner.description)}
                  </h1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[10px] border-none text-4xl text-primary font-thin bg-transparent hover:bg-transparent hover:text-white" />
          <CarouselNext className="absolute right-[10px] border-none text-4xl text-primary font-thin bg-transparent hover:bg-transparent hover:text-white" />
        </Carousel>
      ) : (
        <BannerSkeleton />
      )}
    </div>
  );
};
