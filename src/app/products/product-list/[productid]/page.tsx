import GetSingleSubCategory from '@/service/GetSingleSubCategory'
import React from 'react'
import RecentProductCard from '@/app/_components/RecentProducts/ReecentProductCard'
import { Props } from '@/app/_components/RecentProducts/ReecentProductCard'

const Product = async({params}:{params: {productid:number}}) => {
  const id = params?.productid
  const product = await GetSingleSubCategory(id)
  console.log(product.results);
  
  return (
    <div>
      {product.results.length ? <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 py-5">
        {product?.results?.map((item)=> (
          <RecentProductCard {...item as unknown as Props}/>
        ))}
      </div> : <div className="container py-4"> <h1 className="text-3xl text-center">No products left</h1></div>}
    </div>
  )
}

export default Product
