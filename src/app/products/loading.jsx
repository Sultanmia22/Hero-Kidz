import ProductSkeleton from '@/Components/Skeleton/ProductSkeleton'
import React from 'react'

const loading = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
        {
            [...Array(6)].map((_,index) => <ProductSkeleton key={index} />)
        }
    </div>
  )
}

export default loading