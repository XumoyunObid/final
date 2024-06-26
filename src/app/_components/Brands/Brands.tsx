import GetBrands from '@/service/GetBrands'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryCard from '../CategoryCard/CategoryCard';

const Brands = async() => {
  const brands = await GetBrands()
  console.log(brands);
  
  return (
    <div className="container">
      <h1 className="text-3xl py-4">Brands</h1>
      <Carousel
        className="flex py-6 gap-3"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {brands?.results?.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/3 lg:basis-1/5">
                <CategoryCard img={item.image} title={item.title} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-[-30px] left-[280px] md:left-[660px] lg:left-[1350px] border-0 bg-transparent text-primary text-2xl" />
        <CarouselNext className="absolute top-[-30px] right-2 border-0 bg-transparent text-primary text-2xl" />
      </Carousel>
    </div>
  )
}

export default Brands
