'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href={'/'} className='flex items-center gap-2'>
            <Image src={'/assets/logo.png'} alt='Hero-Kidz-Logo' width={50} height={50} />
            <h2 className='text-xl font-bold'>Hero <span className='text-secondary'>Kidz</span></h2>
        </Link>
    )
}

export default Logo