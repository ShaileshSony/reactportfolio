import React from 'react';
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800  py-20 md:pt-0  md:pb-9 lg:pt-24  '>
        <div className='max-w-screen-lg px-4 w-full h-full flex flex-col justify-center text-white mx-auto lg:px-0'>
            <div className='pb-5 mb-5'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-yellow-500 '>Contact</p>
                <p className='py-6 pb-2 text-xl'>Submit the form bellow to get in <span className='text-yellow-500'>Touch</span> with me</p>
            </div>

            {/* form structure */}
            <div className='w-full mx-auto bordr-[1px] shadow-white p-8 shadow-md rounded-md px-4 md:w-[500px] '>
                <form action="https://getform.io/f/16f10ec2-ee56-4526-ac6f-5f6cbb9c73e9" method="POST" className='flex flex-col justify-center gap-5'>
                    <input type="text" name='name' placeholder='Enter Your Name' className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ' required />
                    <input type="email" name='email' placeholder='Enter Your Email' className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '  required/>
                    <textarea name="message" cols="30" placeholder='Enter Message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' required></textarea>
                    <button className="group text-white bg-gradient-to-b from-cyan-500 to-blue-500 cursor-pointer flex justify-center items-center px-6 py-3 rounded-md hover:scale-95 duration-300 ">
                        Send
                        <span className='group-hover:rotate-45 duration-300 ml-1'>
                        <FaTelegramPlane size={20}/>
                        </span>
                    </button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Contact