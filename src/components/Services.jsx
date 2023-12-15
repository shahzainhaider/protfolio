import React from 'react'

const Services = () => {
  return (
    <>
      <div id='services' className="main-container my-14">
        <h1 className="text-4xl font-bold mt-10 text-center">
          My Services
        </h1>
        <div className="services-container gap-4 px-4  flex flex-col md:flex-row mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 space-y-3 text-center shadow-lg rounded-xl">
            <i className=" text-5xl fa-brands fa-aws"></i>
            <h1 className="text-2xl">Web Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p>
            <button className="px-3 py-1 bg-orange-500 rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i className=" text-5xl fa-solid fa-mobile"></i>
            <h1 className="text-2xl">Android Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p>
            <button className="px-3 py-1 bg-orange-500 rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i className=" text-5xl fa-solid fa-server"></i>
            <h1 className="text-2xl">Backend Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p>
            <button className="px-3 py-1 bg-orange-500  rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
