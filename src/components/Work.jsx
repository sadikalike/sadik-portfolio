import React from 'react'
import { Github } from 'lucide-react'
import club from '../assets/iclub.png'
import famms from '../assets/ecom.png'
import olxx from '../assets/olx.png'
import net from '../assets/netflix.png'
import todo from '../assets/todoss.png'
import chat from '../assets/chat.png'

function Work() {
  const projects = [
    {
      id: 1,
      title: 'Yeng Website',
      image: club,
      link: 'https://github.com/sadikalike',
    },
    {
      id: 2,
      title: 'Nexo Digital web',
      image: famms,
      link: 'https://github.com/sadikalike',
    },
    {
      id: 3,
      title: 'Skillon Academy',
      image: chat,
      link: 'https://github.com/sadikalike',
    },
    {
      id: 4,
      title: 'OLX Clone',
      image: olxx,
      link: 'https://github.com/sadikalike',
    },
    {
      id: 5,
      title: 'Netflix Clone',
      image: net,
      link: 'https://github.com/sadikalike',
    },
    {
      id: 6,
      title: 'Todo App',
      image: todo,
      link: 'https://github.com/sadikalike',
    }
  ]

  return (
    <div name='work' className='w-full min-h-screen bg-[#08192f] text-gray-300 py-12'>
      <div className='max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-4 flex flex-col justify-center w-full h-full'>
        {/* Header - Centered */}
        <div className='pb-8 text-center'>
          <p className='text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Work</p>
          <p className='text-sm sm:text-base py-4 sm:py-6'>Check out some of my recent work</p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='group relative rounded-xl overflow-hidden shadow-lg shadow-black/50'
              style={{
                height: '180px'
              }}
            >
              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
              />
              
              {/* Dark Overlay - appears on hover */}
              <div className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              
              {/* Border Animations - Simplified for mobile */}
              <div className='absolute inset-0 border-2 border-transparent group-hover:border-pink-500/50 rounded-xl transition-all duration-500' />
              
              {/* Simple Corner Accents */}
              <div className='absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-pink-500/0 group-hover:border-pink-500 rounded-tl-xl transition-all duration-500' />
              <div className='absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-500/0 group-hover:border-purple-500 rounded-tr-xl transition-all duration-500' />
              <div className='absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500 rounded-bl-xl transition-all duration-500' />
              <div className='absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-pink-500/0 group-hover:border-pink-500 rounded-br-xl transition-all duration-500' />
              
              {/* Content - appears on hover */}
              <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-2'>
                <h3 className='text-white font-bold text-sm sm:text-base mb-2 sm:mb-3 text-center px-2 drop-shadow-lg'>
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white text-xs sm:text-sm rounded-lg shadow-lg shadow-pink-600/30 transition-all duration-300 transform hover:scale-105'
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className='w-3 h-3 sm:w-4 sm:h-4' />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work