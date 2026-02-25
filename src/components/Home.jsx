import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

function Home() {
  return (
    <div name='home' className='relative w-full h-screen bg-[#08192f] overflow-hidden'>
      {/* Modern Gradient Background */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
        <div className='absolute top-0 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
        <div className='absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
      </div>

      {/* Main Content */}
      <div className='relative z-10 w-full h-full flex items-center lg:justify-center'>
        <div className='w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 lg:text-center'>
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight'>
  <span className='block sm:inline'>
    Muhammad
  </span>{' '}
  <span className='block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'>
    Sadik P
  </span>
</h1>
          </motion.div>

          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-xl sm:text-2xl lg:text-3xl text-gray-400 mt-3 font-light'
          >
            MERN Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl lg:mx-auto mt-4'
          >
            Self-taught MERN Stack Developer skilled in building responsive full-stack web applications 
            using React, Node.js, Express, and MongoDB. Experienced in developing real-world projects 
            with secure authentication, REST APIs, and modern UI practices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='flex flex-col sm:flex-row gap-4 mt-8 lg:justify-center'
          >
            <Link to='work' smooth={true} duration={500}>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium rounded-xl hover:from-pink-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-pink-600/25'
              >
                View My Work
                <HiArrowNarrowRight className='group-hover:translate-x-1 transition-transform duration-300' />
              </motion.button>
            </Link>

            <Link to='contact' smooth={true} duration={500}>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-gray-700 text-gray-300 font-medium rounded-xl hover:border-pink-600 hover:text-pink-500 transition-all duration-300'
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
     <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
  className='absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2'
>
  <Link to='about' smooth={true} duration={500}>
    <div className='flex flex-col items-center gap-1 sm:gap-2 cursor-pointer group'>
      <span className='text-[10px] sm:text-xs text-gray-500 group-hover:text-pink-500 transition-colors duration-300'>
        Scroll
      </span>
      <div className='w-4 sm:w-5 h-7 sm:h-8 border-2 border-gray-600 rounded-full flex justify-center group-hover:border-pink-500 transition-colors duration-300'>
        <div className='w-1 h-2 bg-gray-600 rounded-full mt-2 animate-bounce group-hover:bg-pink-500 transition-colors duration-300' />
      </div>
    </div>
  </Link>
</motion.div>
    </div>
  )
}

export default Home