import { detailsProduct } from '@/action/server/product';
import DetailsProducts from '@/Components/DetailsProduct/DetailsProducts';
import React from 'react'

const DetailsPage = async ({params}) => {

    const {id} = await params;

    const res = await detailsProduct(id);

    console.log(res)

  return (
    <div>
       <DetailsProducts key={JSON.stringify(res._id)} product={res} />
    </div>
  )
}

export default DetailsPage