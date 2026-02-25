import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';
function Home() {
  return (
    <div name='home' className='pl-10 lg:pl-0 w-full h-screen bg-[#08192f]'>
      <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Muhammad Sadik P</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I am a Mern Stack Developer.</h2>
        <p className='text-[#8892b8] py-4  max-w-[700px]'>Self-taught MERN-stack developer with strong skills in JavaScript, Node.js,
         Express.js, React.js, and MongoDB. Proven ability to manage tasks efficiently,
         ensuring timely project completion and high-quality results.</p>
         <div>
         <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <Link to='work' smooth={true} duration={500}>Works</Link>
            <span className='hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
         </div>
      </div>
    </div>
  )
}

export default Home
