import GetCategories from '@/service/GetCategories';
import CategoryCard from '../CategoryCard/CategoryCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const CategoryList = async() => {
  const categories = await GetCategories()
  

  return (
    <div className="py-[30px]">
      <h1 className="text-xl lg:text-3xl py-3">Top Categories Of The Month</h1>
      <Carousel className="flex" opts={{
        align: "start",
      }}>
      <CarouselContent>
      {categories?.results?.map((item)=>(
          <CarouselItem key={item.id} className="md:basis-1/3 lg:basis-1/5">
            <CategoryCard img={item.image} title={item.title}/>
            </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-[-30px] left-[310px] md:left-[660px] lg:left-[1350px] border-0 bg-transparent text-primary text-2xl" />
      <CarouselNext className="absolute top-[-30px] right-2 border-0 bg-transparent text-primary text-2xl" />
    </Carousel>
    </div>
  )
}

export default CategoryList
