'use client'
import React, { useEffect, useRef } from 'react'
import profile from '../assets/bi1.png'
import Typed from "typed.js";
import { FaFacebook,FaGithub,FaLinkedin   } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link';

const Banner = () => {
    const el = useRef()

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Web Developer","Frontend Developer","Backend Developer"],
          startDelay: 300,
          typeSpeed: 50,
          backSpeed: 20,
          loop: true,
          backDelay: 100
        });
    
        return () => {
          typed.destroy();
        };
      }, []);

    return (
        <>
            <div id='a' className=" flex flex-col md:flex-row md:items-center bg-gradient-to-r from-pink-500 to-indigo-500 py-10 md:h-[450px] md:bg-[url('../assets/banner_wallpaper.svg')] bg-no-repeat ">
                {/* //left side */}
                <div className="w-full flex mb-5 md:mb-0 items-center md:items-start flex-col gap-2 px-5 md:pl-20 text-white">
                    <h3 className='text-xl font-semibold'>Hi, I am</h3>
                    <h1 className='text-3xl tracking-wider font-bold'>SHAHZAIN HAIDER</h1>
                    <h2 className='text-xl font-semibold'>And I am <span className='text-2xl' ref={el}></span></h2>
                    <p className='max-w-lg text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, culpa aspernatur! Perspiciatis, eveniet voluptates commodi quam possimus iusto praesentium corporis necessitatibus modi aliquid, veritatis iste eius rem enim repudiandae nisi eum autem douia assumenda doloremque sit debitis, modi mollitia ducimus ut id illum!</p>
                    <div className="flex gap-3 mt-2 md:mt-0 text-2xl">
                        <Link className='p-2 bg-blue-950 hover:bg-orange-600 rounded-full' href={'/'}><FaFacebook className='' /></Link>
                        <Link className='p-2 bg-blue-950 hover:bg-orange-600 rounded-full' href={'/'}><FaGithub className='' /></Link>
                        <Link className='p-2 bg-blue-950 hover:bg-orange-600 rounded-full' href={'/'}><FaLinkedin className='' /></Link>
                    </div>
                    <button className='bg-orange-600 duration-700 hover:bg-gradient-to-r from-pink-500 to-indigo-500 mt-4 w-fit text-white rounded-xl px-2 py-1'>Contact me</button>
                </div>

{/* ///////////////////right side */}
                <div className="w-full flex justify-center">
                    <div className="w-72">
                        <Image className='rounded-full' src={profile} alt='profile' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
