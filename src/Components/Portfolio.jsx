import React from 'react'
import mumpa from '../assets/portfolio/mumpa.png'
import mercellus from '../assets/portfolio/mercellus.png'
import henkel from '../assets/portfolio/henkel.png'
import unacedemy from '../assets/portfolio/unacedemy.png'
import campus from '../assets/portfolio/campus.png'
import react from '../assets/portfolio/react.png'
import jackjohns from '../assets/portfolio/jackjohns.png'

const Portfolio = () => {
   
  const portfolio = [
    {
        id: 1,
        src: mumpa,
        // url1: www,
        url:'https://mumpa.in/',
    },
    {
        id: 2,
        src: mercellus,
        url: 'https://marcellus.in/'
    },
    {
        id: 3,
        src: henkel,
        url: 'https://www.henkel.in/'
    },
    {
        id: 4,
        src: unacedemy,
        url: 'https://unacademy.com/content/shikshodaya/'
    },
    {
        id: 5,
        src: campus,
        url: 'https://www.campusshoes.com/'
    },
    {
        id: 6,
        src: react,
        url: 'https://shaileshsony.github.io/reactportfolio/'
    },
    {
        id: 7,
        src: jackjohns,
        url: 'https://www.jackjones.in/'
    },
  ]
    
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white pt-32  md:pb-0 lg:py-28'>
        <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full lg:px-0'>
            {/* structure of top heading */}
            <div className='pb-5'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-yellow-500'>Portfolio</p>
                <p className='py-6 pb-2 text-xl'>Check out some of my <span className='text-yellow-500'>Work</span> here</p>
            </div>
            {/* structure of top heading end */}
            
            {/* structure of card */}
            <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-0 '>
            {
                portfolio.map(({id, src, url})=>{
                    return(
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg  '>
                            <img src={src} alt="pimage" className='rounded-md duration-300  hover:scale-105 w-full '/>
                            <div className='flex justify-center items-center '>
                                {/* <button className='w-1/2 px-6 py-1 m-2 '></button> */}
                                <a href={url} target='_blank' rel="noreferrer">
                                <button className='w-full px-6 py-1 m-2'>Show Project</button>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
                
            </div>
            {/* structure of card end */}
        </div>
    </div>
  )
}

export default Portfolio