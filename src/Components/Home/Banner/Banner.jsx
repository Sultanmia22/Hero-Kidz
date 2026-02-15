import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex-1 space-y-3'>
            <h2 className='text-5xl font-bold'>Give your child the <span className='text-secondary'>bright future</span> they deserve.</h2>
            <p className='text-gray-600'>Discover a world of wonder and style at Hero Kids. We bring you premium quality products designed to keep your little ones happy, comfortable, and confident. From everyday essentials to special surprises, give your child the bright future and the best care they deserve</p>
            <div>
                <button className='btn btn-secondary'>Explore Product</button>
            </div>
        </div>
        <div className='flex-1'>
            <Image width={500} height={400} src={'/assets/hero.png'} alt='Hero-image' ></Image>
        </div>
    </div>
  )
}

export default Banner