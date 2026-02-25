import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import Node from '../assets/node.png'
import FireBase from '../assets/firebase.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
import Bootsrap from '../assets/BOOT.png'
import Express from '../assets/expr.png'
import Redux from '../assets/redux.png'

function Skills() {
  const skills = [
    { name: 'JavaScript', icon: Javascript },
    { name: 'HTML', icon: HTML },
    { name: 'CSS', icon: CSS },
    { name: 'Bootstrap', icon: Bootsrap },
    { name: 'MongoDB', icon: Mongo },
    { name: 'React', icon: react },
    { name: 'Node.js', icon: Node },
    { name: 'Express', icon: Express },
    { name: 'Firebase', icon: FireBase },
    { name: 'GitHub', icon: GitHub },
    { name: 'Tailwind', icon: Tailwind },
    { name: 'Redux', icon: Redux }
  ]

  return (
    <div name='skills' className='w-full min-h-screen bg-[#08192f] text-gray-300 py-12'>
      <div className='max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-4 flex flex-col justify-center w-full h-full'>
        {/* Header - Centered */}
        <div className='pb-8 text-center'>
          <p className='text-4xl sm:text-5xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Experience
          </p>
          <p className='text-gray-400 text-lg mt-4'>
            Technologies I've worked with
          </p>
        </div>

        {/* Skills Grid - Simple Icons */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 py-8'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='group bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 hover:-translate-y-1'
            >
              <div className='flex flex-col items-center'>
                <div className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-3 flex items-center justify-center'>
                  <img 
                    className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300' 
                    src={skill.icon} 
                    alt={skill.name} 
                  />
                </div>
                <p className='text-xs sm:text-sm lg:text-base font-semibold text-gray-300 group-hover:text-pink-500 transition-colors duration-300 text-center'>
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills