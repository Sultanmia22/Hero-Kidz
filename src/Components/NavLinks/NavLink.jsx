import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({href,children}) => {

    const pathName = usePathname()

    const isActive = pathName === href;



  return (
    <Link className={`${isActive && 'text-secondary'}`} href={href}>{children}</Link>
  )
}

export default NavLink