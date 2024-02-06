import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import heroImg from '../assets/heroImage1.jpeg'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-full w-full bg-gradient-to-b from-black via-black to-gray-800 md:h-screen'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-3 pb-5 md:flex-row gap-5 md:pt-20 md:pb-0 '>
            <div className='flex flex-col justify-center h-full mt-24 md:mt-0'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Front End Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md text-yellow-500'>I'm a software engineer and website developer and I've worked on a variety of websites that are featured in my portfolio.</p>

                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300 ml-1'>
                            <MdKeyboardDoubleArrowRight size={20}/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className='mt-7 md:mt-0 font'>
                <img src={heroImg} alt="heroimage" className='rounded-2xl mx-auto w-3/4 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home