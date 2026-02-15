'use client'
import Link from 'next/link'
import React, {useState } from 'react'
import { FaBars} from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import Logo from '../Logo/Logo'
import NavLink from '../NavLinks/NavLink'
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {



  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    
  ]

  // TOGGLE MENU FOR MOBILE VIEW
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }




  return (
    <div className='bg-base-100 py-5  w-full dark:bg-gray-700'>
      <nav className=' w-11/12 md:w-11/12 mx-auto flex justify-between items-center'>

        {/* Logo */}
        <div className=''>
          {/* Mobile Nav Link */}
          {
            isMenuOpen &&
            <div className=' w-full absolute top-19 left-0 md:hidden'>
              <ul className='flex flex-col gap-5 bg-base-100  py-4 px-5  z-20 shadow-xl text-center'>
                {
                  navLinks.map(link => <NavLink onClick={toggleMenu} key={link.path} href={link.path}> {link.name} </NavLink>)
                }
              </ul>
            </div>
          }
          <div className='flex items-center gap-3'>
            <div onClick={toggleMenu} className='md:hidden'>
              {
                isMenuOpen ? <RxCross1 className='text-primary' size={20} /> : <FaBars className='text-primary' size={20} />
              }

            </div>

            <Logo/>

          </div>
        </div>

        {/* Nav Links Desktop */}
        <ul className='space-x-5 text-gray-700 hidden md:flex'>
          {
            navLinks.map(link => <NavLink key={link.path} href={link.path}> {link.name} </NavLink>)
          }
        </ul>

        {/* PROFILE AND AUTH BUTTONS and theme controll */}
        <div className='flex items-center gap-5'>


          {/* Auth Buttons */}
          <div className='flex items-center gap-3'>
            <div>
              <IoCartOutline className='text-secondary' size={24} />
            </div>
            <div className='h-5 w-0.5 bg-secondary'></div>
            <Link href={'/sign-in'} className='text-secondary font-bold hover:text-primary'> Login </Link>
            
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar