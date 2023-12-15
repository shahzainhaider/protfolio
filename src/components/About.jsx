'use client'
import Image from 'next/image'
import React from 'react'
import profile from '../assets/profile.jpg'

const About = () => {
  return (
    <>
    <div id='about' className="py-10 bg-slate-100">
        <h2 className='text-4xl font-semibold text-center'>About</h2>
        <div className="flex py-6 flex-col gap-4 items-center justify-center md:flex-row">
            <div className="w-72 h-72 md:w-full flex justify-center ">
                <Image className='rounded-full object-cover' width={300} height={300} src={profile} alt='profile' />
            </div>
            <div className="w-full px-4 md:px-16 lg:px-28 text-sm text-center md:text-left">
                <h2 className='text-3xl font-semibold mb-2'>Frontend Developer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad quo enim facere temporibus pariatur quam cupiditate earum, ut esse tempore ratione laudantium illum placeat id iusto saepe corporis excepturi.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetuta fugit libero tenetur odio aperiam voluptatibus hic, vero dolore laudantium deleniti? Odit deleniti dolorum, quas aliquam iste quidQui, quasi voluptates voluptate atque voluptas rem laboriosam saepe minus error? Assumenda, voluptatem, earum neque repellendus, magnam sint nihil a voluptate temporibus alias vero debitis quos sed cupiditate adipisci ut odio aliquam ipsa fugit ea molestiae! Placeat numquam impedit laborum sequi!</p>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default About
