import React from 'react'
import products from '@/data/toys.json'
import ProductCard from '../Card/ProductCard'
const Products = () => {
  return (
    <div>
        <h2 className='text-4xl text-center font-bold text-gray-800 mb-10'>Our <span className='text-secondary'>Products</span></h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
            {
                products.map((product,index) => <ProductCard key={index} product={product}/>)
            }
        </div>
    </div>
  )
}

export default Products