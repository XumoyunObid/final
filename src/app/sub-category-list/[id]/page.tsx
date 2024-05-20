import CategoryCard from '@/app/_components/CategoryCard/CategoryCard'
import GetSingleCategory from '@/service/GetSingleCategory'
import Link from 'next/link'
import React from 'react'
const Categories = async({params}:{params: {id:number}}) => {
  const id = params?.id
  const category = await GetSingleCategory(id)
  console.log(category);
  
  return (
    <div>
      <h1 className="text-3xl py-4 container">Sub Categories of <span className="underline">{category.title}</span></h1>
      {category.children.length ? <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[300px] py-5">
        {category.children?.map((item)=>(
          <Link key={item.id} href={`/products/product-list/${item.id}`}><CategoryCard  img={item.image} title={item.title}/></Link>
        ))}
      </div> : <div className="container py-4"><h1 className="text-3xl text-center ">No Sub Categories yet</h1></div>}
    </div>
  )
}

export default Categories
