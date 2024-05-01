import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const BannerSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[525px] w-full rounded-xl" />
    </div>
  )
}

export default BannerSkeleton
