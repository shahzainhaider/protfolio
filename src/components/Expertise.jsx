import React from 'react'

const Expertise = () => {
  return (
      <>
      <h2 className='text-4xl font-semibold text-center my-4'>Expertise</h2>
    <div id='a' className=" flex flex-col md:flex-row md:items-center bg-gradient-to-r from-pink-500 to-indigo-500 py-10 md:h-[350px] md:bg-[url('../assets/banner_wallpaper.svg')] bg-no-repeat ">
        {/* //left side */}
        <div className="w-full flex mb-5 md:mb-0 items-center md:items-start flex-col gap-2 px-5 md:pl-20 text-white">
            <h3 className='text-3xl font-semibold'>I love these technologies</h3>
            <p className='max-w-lg text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, culpa aspernatur! Perspiciatis, eveniet voluptates commodi quam possimus iusto praesentium corporis necessitatibus modi aliquid, veritatis iste eius rem enim repudiandae nisi eum autem douia assumenda doloremque sit debitis, modi mollitia ducimus ut id illum!</p>
            
            <button className='bg-orange-600 duration-700 hover:bg-gradient-to-r from-pink-500 to-indigo-500 mt-4 w-fit text-white rounded-xl px-2 py-1'>Hire me</button>
        </div>

{/* ///////////////////right side */}
        <div className="w-full flex justify-center">
            <div className="w-3/4 flex flex-wrap justify-center gap-1">
                <p className='bg-slate-200 px-4 py-1 rounded-2xl hover:bg-orange-600 hover:text-white duration-300'>HTML</p>
                <p className='bg-slate-200 px-4 py-1 rounded-2xl hover:bg-orange-600 hover:text-white duration-300'>CSS3</p>
                <p className='bg-slate-200 px-4 py-1 rounded-2xl hover:bg-orange-600 hover:text-white duration-300'>JAVASCRIPT</p>
                <p className='bg-slate-200 px-4 py-1 rounded-2xl hover:bg-orange-600 hover:text-white duration-300'>BOOTSTRAP 5</p>
                <p className='bg-slate-200 px-4 py-1 rounded-2xl hover:bg-orange-600 hover:text-white duration-300'>TAILWIND</p>
                <p className='bg-slate-200 px-4 py-1 rounded-2xl hover:bg-orange-600 hover:text-white duration-300'>REACT JS</p>
                <p className='bg-slate-200 px-4 py-1 rounded-2xl hover:bg-orange-600 hover:text-white duration-300'>NEXT JS</p>
                <p className='bg-slate-200 px-4 py-1 rounded-2xl hover:bg-orange-600 hover:text-white duration-300'>MONGO DB</p>
            </div>
        </div>
    </div>
</>
  )
}

export default Expertise
