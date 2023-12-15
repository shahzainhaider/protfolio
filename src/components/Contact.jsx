'use client'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const Contact = () => {
    const [data, setData] = useState({ name: '', email: '', message: '' })
    const [loading, setLoading] = useState(false)

    const serviceID = 'service_urdlb8c'
    const templateID = 'template_j4gsnbf'
    const publicKey = '0s1__LJHkl_Q1QGgc'

    const templateParams = {
        from_name: data.name,
        from_email: data.email,
        to_name: 'Shahzain Haider',
        message: data.message
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(data.name==='' || data.email==='' || data.message===''){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "field can't be empty!",
              });
            return
        }
        try {
            setLoading(true)
            await emailjs.send(serviceID, templateID, templateParams, publicKey)
            setLoading(false)
            Swal.fire({
                icon: "success",
                title: "Successfull !",
                text: "Email has been successfully sent.",
              });
            setData({ name: '', email: '', message: '' })
        } catch (error) {
            setLoading(false)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went worng!",
            });
            setData({ name: '', email: '', message: '' })
            console.log(error)

        }
    }
   


    return (
        <>
            <h2 id='contact' className='text-4xl font-semibold text-center pt-5'>Contact</h2>
            <div className="grid grid-cols-12 py-10">
                <div className="col-span-10 sm:col-span-6 md:col-span-4 col-start-2 sm:col-start-4 md:col-start-5 p-4">
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div className="h-10">
                    <input className='border w-full px-3 py-1 rounded-md outline-none border-pink-300 focus:py-2 focus:border-pink-700 focus:ring focus:ring-pink-200 ' placeholder='name' type="text" onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name} />
                    </div>
                    <div className="h-10">
                    <input className='border w-full px-3 py-1 rounded-md outline-none border-pink-300 focus:py-2 focus:border-pink-700 focus:ring focus:ring-pink-200 ' placeholder='email' type="email" onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email} />
                    </div>
                    <div className="h-10">
                    <input className='border w-full px-3 py-1 rounded-md outline-none border-pink-300 focus:py-2 focus:border-pink-700 focus:ring focus:ring-pink-200 ' placeholder='message' type="text" onChange={(e) => setData({ ...data, message: e.target.value })} value={data.message} />
                    </div>
                   <button className='w-full bg-purple-500 hover:bg-purple-700 text-white py-1 rounded-md'>{loading ?"wait..":"submit"}</button>
                </form>
                </div>
            </div>

        </>
    )
}

export default Contact
