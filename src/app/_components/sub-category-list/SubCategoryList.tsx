import GetSubCategories from '@/service/GetSubCategories'
import React from 'react'
import SubCategoryCard from './SubCategoryCard'

const SubCategoryList = async() => {
  const subcategories = await GetSubCategories()
  
  return (
    <div className="my-[50px]">
      <h1 className="text-3xl py-3">Sub Categories</h1>
      <div className='grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-2 bg-white'>
      {subcategories.results.map((item)=> (
        <SubCategoryCard key={item.id} {...item}/>
      ))}
    </div>
    </div>
  )
}

export default SubCategoryList
