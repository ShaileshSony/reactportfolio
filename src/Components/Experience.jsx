import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';


const Experience = () => {
   
  const technologies = [
    {
        id: 1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-600'
        
    },
    {
        id: 2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-600'
        
    },
    {
        id: 3,
        src: javascript,
        title: 'JAVASCRIPT',
        style: 'shadow-yellow-600'
        
    },
    {
        id: 4,
        src: react,
        title: 'REACTJS',
        style: 'shadow-cyan-600'
        
    },
    {
        id: 5,
        src: node,
        title: 'NODEJS',
        style: 'shadow-green-600'
        
    },
    {
        id: 6,
        src: github,
        title: 'GITHUB',
        style: 'shadow-white'
        
    },
    {
        id: 7,
        src: tailwind,
        title: 'TAILWIND',
        style: 'shadow-cyan-600'
        
    },
    
  ]
    
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full text-white pt-32 md:pb-0 lg:py-28'>
        <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full lg:px-0'>
            {/* structure of top heading */}
            <div className=' pb-5'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-yellow-500 '>Experience</p>
                <p className='py-6 pb-2 text-xl'>I am experties in these <span className='text-yellow-500 '>Technologies</span> </p>
            </div>
            {/* structure of top heading end */}
            
            {/* structure of card */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 sm:px-0 '>
            {
                technologies.map(({id, src, title, style })=>{
                    return(
                        <div key={id} className={'shadow-md rounded-lg flex flex-col justify-center items-center py-4 ' + " " + style}>
                            <img src={src} alt="image" className='rounded-md duration-300 hover:scale-110 w-[100px]'/>
                            <div className='flex justify-center items-center '>
                                <span className='w-full m-4 '>{title}</span>
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

export default Experience