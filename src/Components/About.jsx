import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full bg-gradient-to-b from-gray-800 to-black text-white pt-32 md:pt-0 md:h-screen '>
       <div className='flex flex-col justify-center max-w-screen-lg mx-auto w-full h-full px-4 lg:px-0'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-yellow-500 '>
                About
            </p>
        </div>
        <p className='text-lg '>
        Hello, my name is Shailesh and I graduated in 2015 from <b>BCA in SHUATS University Prayagraj (Allahabad)</b> and I started working as a lab instructor in United Engineering College, after that, I came to IT industry where I started working as a website developer. And I have 3 years of experience as a website developer in IT industries.
        </p><br />
        <p className='text-lg' >I have created many websites till now and the technologies I used to create them are HTML, CSS, Bootstrap, jQuery, JavaScript, and Reactjs. some of the popular websites are www.nutraj.com, www.mumpa.in, www.infocomm-india.com.</p>
       </div> 
    </div>
  )
}

export default About