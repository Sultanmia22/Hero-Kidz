import { getProducts } from '@/action/server/product'
import ProductCard from '@/Components/Card/ProductCard'
import React from 'react'

const ProductPage = async () => {

    const products = await getProducts() || [];

  return (
    <div>
        <h1 className='text-4xl font-bold text-center text-gray-800 mb-10'>Our All <span className='text-secondary'>Products</span></h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
            {
                products.map((product,index) => <ProductCard key={index} product={product}/>)
            }
        </div>
    </div>
  )
}

export default ProductPage