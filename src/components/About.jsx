import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#08192f] text-gray-300'>
        <div className='flex flex-col justify-center w-full h-full'>
            <div className='max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-4 w-full'>
                {/* Header - Centered */}
                <div className='pb-8 text-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>

                {/* Content */}
                <div className='grid sm:grid-cols-2 gap-8'>
                    {/* Left Side */}
                    <div className='sm:text-right'>
                        <p className='text-2xl sm:text-3xl font-bold leading-tight'>
                            Building scalable and user-friendly web applications with the MERN stack.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div>
                        <p className='text-gray-400 leading-relaxed'>
                            I am Muhammad Sadik, a passionate MERN Stack Developer focused on building responsive and scalable web applications using React, Node.js, Express, and MongoDB.  
                        </p>
                        <p className='text-gray-400 leading-relaxed mt-4'>
                            I have hands-on experience developing real-world projects including full-stack applications with secure authentication, REST APIs, and modern UI design. I enjoy turning complex problems into simple, user-friendly solutions that deliver real value to users and businesses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About