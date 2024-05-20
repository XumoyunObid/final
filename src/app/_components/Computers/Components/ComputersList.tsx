import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import GetSingleSubCategory from '@/service/GetSingleSubCategory';
import ComputersCard from './ComoutersCard';

const ComputersList = async() => {
  const products = await GetSingleSubCategory(2181);
  const chunkSize = 2; // Define the number of items per row

  const chunkedProducts = products?.results?.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // Start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <div className="container overflow-x-hidden">
      <Carousel
        className="flex"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {chunkedProducts?.map((chunk, chunkIndex) => (
            <CarouselItem key={chunkIndex} className="md:basis-1/2 lg:basis-1/3">
              <div className="flex flex-col gap-6">
                {chunk.map(item => (
                  <div key={item.id}>
                    <Link href={`/products/${item.id}`}>
                      <ComputersCard {...item} />
                    </Link>
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute hidden md:block  left-5 bg-gray-300 text-primary text-3xl bg-transparent border-0"/>
        <CarouselNext className="absolute hidden md:block md:right-3 lg:right-[10px] bg-gray-300 text-primary text-3xl bg-transparent border-0"/>
      </Carousel>
    </div>
  );
}

export default ComputersList;
