import React from 'react'

interface Props{
  image: string, 
  title: string
}

const SubCategoryCard = ({image, title}: Props) => {
  return (
      <div className='p-[10px] flex items-center justify-between border'>
      <div className="flex items-center justify-center">
        <h3>{title}</h3>
      </div>
      <div>
        <img src={image} alt="Sub Category image" className='object-contain w-[145px] h-[145px] lg:w-[105px] lg:h-[105px]'/>
      </div>
    </div>
  )
}

export default SubCategoryCard
