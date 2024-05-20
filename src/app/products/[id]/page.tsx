import React from 'react'
import GetSingleProduct from '@/service/GetSingleProduct'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import parse from "html-react-parser";
import RelatedProducts from '../components/RelatedProducts';
import dynamic from "next/dynamic";

const ProductDetails = dynamic(()=> import('../components/ProductDetails'), {ssr: false})

const Details = async({params}:{params: {id:number}}) => {
  const id = params?.id
  const product = await GetSingleProduct(id)
  const imgs = product?.images
  console.log(product);
  
  
  return (
    <div className="container">
       <div className="flex items-start gap-2">
       <Carousel className="w-1/2">
      <CarouselContent>
        {imgs?.map((item)=> (
          <CarouselItem key={item?.image_id}>
            <div className="flex items-center justify-center"><img className="w-[500px] objext-contain" src={item?.image}/></div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-10 border-0 bg-transparent text-primary text-4xl" />
      <CarouselNext className="absolute right-0 border-0 bg-transparent text-primary text-4xl" />
    </Carousel>
    <ProductDetails product={product}/>
       </div>
       <div>
        <h1 className='text-center text-4xl underline font-semibold py-8'>Description</h1>
        {product?.other_detail && <div className="text-lg text-gray-600 pb-4">{parse(product?.other_detail)}</div>}
       </div>
       <RelatedProducts/>
    </div>
  )
}

export default Details
