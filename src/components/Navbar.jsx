'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [toggle,setToggle] = useState(false)

  return (
    <>
    <nav className='sticky top-0  px-5 md:px-10 bg-gray-100 py-3 md:py-5 z-50'>
      <div className="flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold">
          Shahzain Haider
        </div>
        <div className="md:flex gap-4 text-lg hidden">
          <Link className='underLine relative' href={'/'}>Home</Link>
          <Link className='underLine relative' href={'#about'}>About</Link>
          <Link className='underLine relative' href={'#services'}>Services</Link>
          <Link className='underLine relative' href={'#contact'}>Contact</Link>
        </div>
        <div className="md:hidden">
          <TiThMenu onClick={()=>setToggle(!toggle)} />
        </div>
      </div>
    </nav>
    <div className={`h-screen fixed ${toggle?'bottom-0':'bottom-[-100%]'} w-full z-20 ${toggle?'top-[52px]':''}  duration-300 bg-black/50`}>

    </div>
    <div className={` py-4 z-30  fixed ${toggle?'top-[52px]':'top-[-100%]'} duration-300 w-[100%] sm:w-[50%] bg-gray-200`}>
    <div className="flex flex-col px-4 gap-4 justify-center items-center mt-4 text-base">
          <Link onClick={()=>setToggle(!toggle)} className='underLine border-b border-black/30 text-center relative' href={'/'}>Home</Link>
          <Link onClick={()=>setToggle(!toggle)} className='underLine border-b border-black/30 text-center relative' href={'#about'}>About</Link>
          <Link onClick={()=>setToggle(!toggle)} className='underLine border-b border-black/30 text-center relative' href={'#services'}>Services</Link>
          <Link onClick={()=>setToggle(!toggle)} className='underLine border-b border-black/30 text-center relative' href={'#contact'}>Contact</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar
