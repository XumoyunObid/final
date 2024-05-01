"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GetBanners from "@/service/GetBanners";
import { BannersType } from "@/service/GetBanners";
import BannerSkeleton from "../Skeleton/BannerSkeleton";
import parse from "html-react-parser";

interface Props {
  id: number;
  image: string;
  title: string;
  created_at: string;
  updated_at: string;
  description: string | null;
}

const Banner = () => {
  const [banners, setBanners] = useState<BannersType[]>([]);
  console.log(banners);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await GetBanners();
        setBanners(data);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };
    fetchBanners();
  }, []);

  console.log(banners);

  return (
    <div className="lg:w-3/4">
      {banners ? (
        <Carousel className="w-full h-[525px] relative border bg-white">
          <CarouselContent className="">
            {banners?.results?.map((banner: Props) => (
              <CarouselItem key={banner.id}>
                <img
                  className="h-[525px] object-cover object-left sm:overflow-hidden lg:object-fill lg:w-full relative"
                  src={banner.image}
                  alt={banner.title}
                />
                <div className="absolute top-[35%] left-10">
                  <h1 className="text-[36px]">{banner.description && parse(banner.description)}</h1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[10px] border-none text-xl text-gray-500 font-thin" />
          <CarouselNext className="absolute right-[10px] border-none text-xl text-gray-500 font-thin" />
        </Carousel>
      ) : (
        <BannerSkeleton />
      )}
    </div>
  );
};
export default Banner;
