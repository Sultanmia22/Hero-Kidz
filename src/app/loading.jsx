import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const loading = () => {
  return (
    <div className='min-h-screen flex justify-center items-center '>
        <span className='text-secondary'><AiOutlineLoading3Quarters size={30} /></span>
    </div>
  )
}

export default loading