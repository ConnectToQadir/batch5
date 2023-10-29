import React from 'react'
import Link from 'next/link'

const Navbar = () => {

  var navLinks = [
    {lable:"Home",href:"/"},
    {lable:"About",href:"/about"},
    {lable:"Blog",href:"/blog"},
    {lable:"Contact",href:"/contact"},
    {lable:"Admin",href:"/dashboard"},
  ]

  return (
    <div className='bg-slate-200'>
        <nav className='max-w-6xl mx-auto flex items-center justify-between py-2'>
            <img className='w-36' src="/images/mlogo.png" alt="" />
            <ul className='flex items-center'>
              {
                navLinks.map((v,i)=>{
                  return(
                    <li><Link className='py-1 px-2 mx-1' href={v.href}>{v.lable}</Link></li>
                  )
                })
              }
            </ul>
        </nav>

    </div>
  )
}

export default Navbar