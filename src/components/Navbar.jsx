import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const handleClick = () => {
    setNav(!nav)
  }

  const navItems = [
    { to: 'home', label: 'Home', icon: FaHome },
    { to: 'about', label: 'About', icon: FaUser },
    { to: 'skills', label: 'Skills', icon: FaCode },
    { to: 'work', label: 'Works', icon: FaBriefcase },
    { to: 'contact', label: 'Contact', icon: FaEnvelope }
  ]

  const socialLinks = [
    { 
      href: 'https://www.linkedin.com/in/muhammad-sadik-p-563a33245/', 
      label: 'LinkedIn', 
      icon: FaLinkedin, 
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    { 
      href: 'https://github.com/sadikalike', 
      label: 'GitHub', 
      icon: FaGithub, 
      color: 'bg-gray-800',
      hoverColor: 'hover:bg-gray-900'
    },
    { 
      href: 'mailto:sadikalike7@gmail.com', 
      label: 'Email', 
      icon: HiOutlineMail, 
      color: 'bg-teal-500',
      hoverColor: 'hover:bg-teal-600'
    },
    { 
      href: '/resume/sadik-resume.pdf', 
      label: 'Resume', 
      icon: BsFillPersonLinesFill, 
      color: 'bg-gray-600',
      hoverColor: 'hover:bg-gray-700',
      download: true
    }
  ]

  return (
    <>
      {/* Navbar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'h-[70px] bg-[#08192f]/95 backdrop-blur-md shadow-lg shadow-black/50' 
            : 'h-[80px] bg-[#08192f]'
        } flex justify-between items-center px-6 lg:px-12 text-gray-300`}
      >
        {/* Logo/Name */}
        {/* <motion.div 
          whileHover={{ scale: 1.05 }}
          className='text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'
        >
          Sadik
        </motion.div> */}<div></div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center space-x-8'>
          {navItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.li 
                key={index}
                whileHover={{ y: -2 }}
                className='relative group'
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass='text-pink-500'
                  className='flex items-center gap-2 cursor-pointer text-gray-300 hover:text-pink-500 transition-colors duration-300'
                >
                  <Icon className='text-sm' />
                  <span>{item.label}</span>
                </Link>
                {/* Active Indicator */}
                <motion.div 
                  className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300'
                  layoutId="activeNav"
                />
              </motion.li>
            )
          })}
        </ul>

        {/* Mobile Menu Button */}
        <motion.div 
          onClick={handleClick}
          whileTap={{ scale: 0.9 }}
          className='md:hidden z-50 cursor-pointer text-2xl hover:text-pink-500 transition-colors'
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className='fixed top-0 right-0 w-full h-screen bg-[#08192f]/95 backdrop-blur-md flex flex-col justify-center items-center md:hidden z-40'
            >
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='py-4'
                  >
                    <Link
                      onClick={handleClick}
                      to={item.to}
                      smooth={true}
                      duration={500}
                      spy={true}
                      activeClass='text-pink-500'
                      className='flex items-center gap-3 text-2xl text-gray-300 hover:text-pink-500 transition-colors duration-300 cursor-pointer'
                    >
                      <Icon />
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Social Sidebar */}
      <motion.div 
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block'
      >
        <ul className='flex flex-col gap-2'>
          {socialLinks.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className='relative group'
              >
                <a
                  href={item.href}
                  {...(item.download && { download: true })}
                  target={item.download ? '_self' : '_blank'}
                  rel='noopener noreferrer'
                  className={`flex items-center gap-3 ${item.color} ${item.hoverColor} text-white rounded-r-full py-3 px-4 w-[140px] group-hover:w-[160px] transition-all duration-300`}
                >
                  <Icon size={20} />
                  <span className='text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    {item.label}
                  </span>
                </a>
                {/* Tooltip */}
                <span className='absolute left-full ml-2 px-2 py-1 bg-pink-600 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
                  {item.label}
                </span>
              </motion.li>
            )
          })}
        </ul>
      </motion.div>

      {/* Mobile Social Icons */}
      <div className='fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-4 md:hidden'>
        {socialLinks.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.a
              key={index}
              href={item.href}
              {...(item.download && { download: true })}
              target={item.download ? '_self' : '_blank'}
              rel='noopener noreferrer'
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 ${item.color} ${item.hoverColor} text-white rounded-full shadow-lg shadow-black/50`}
            >
              <Icon size={18} />
            </motion.a>
          )
        })}
      </div>
    </>
  )
}

export default Navbar