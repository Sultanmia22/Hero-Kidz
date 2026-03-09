'use client'
import Link from 'next/link';
import React from 'react'
import { MdErrorOutline } from "react-icons/md";
const error = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className=' text-center flex flex-col justify-center items-center gap-3'>
            <h2 className='text-4xl font-bold'>Page Not Found</h2>
            <p className='text-5xl text-secondary font-bold'><MdErrorOutline /></p>
            <Link className='btn btn-secondary' href={'/'}>Go Back Home</Link>
        </div>
    </div>
  )
}

export default error