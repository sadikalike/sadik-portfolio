import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Send, Mail, User, MessageSquare, CheckCircle } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await emailjs.send(
        'service_g1ypg2b',
        'template_x83ua7l',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '3hhYTPcssbfZXSCcJ'
      )

      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)

    } catch (error) {
      console.error('Email failed:', error)
      alert('Failed to send message')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div name='contact' className='min-h-screen bg-gradient-to-br from-[#0a192f] via-[#0d2b4a] to-[#08192f] flex justify-center items-center p-4 sm:p-6 lg:p-8'>
      <div className='w-full max-w-2xl'>

        {/* Header */}
        <div className='text-center mb-10'>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-100 mb-4'>
            Get in <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'>Touch</span>
          </h2>
          <p className='text-gray-400 text-lg max-w-lg mx-auto'>
            Looking for a MERN Stack Developer or have a project in mind? Let’s connect.
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className='mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3 text-green-400'>
            <CheckCircle className='w-5 h-5 flex-shrink-0' />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 shadow-2xl'>

          {/* Name */}
          <input
            className='w-full mb-4 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-200'
            type="text"
            placeholder='Your Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <input
            className='w-full mb-4 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-200'
            type="email"
            placeholder='Your Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Message */}
          <textarea
            className='w-full mb-6 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-200'
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className='w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl'
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>

        </form>
      </div>
    </div>
  )
}

export default Contact

// import React,{useState} from 'react'

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     messages: ''
//   });
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Add your form submission logic here

//     // Clear form values
//     setFormData({
//       name: '',
//       email: '',
//       messages: ''
//     });
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   return (
//     <div name='contact' className='pl-16 lg:pl-0 w-full h-full bg-[#08192f]  flex justify-center items-center  p-4'>
//       <form method='POST' action="https://getform.io/f/9bd46f0b-958f-4b4f-b071-795d204ed44b" onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
//         <div className='pb-8'>
//            <p className='text-4xl font-bold inline border-b-4  border-pink-600 text-gray-300  '>Contact</p>
//            <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - <span className='text-pink-600'>irshadalike10@gmail.com</span> </p>
//         </div>
//         <input className='bg-[#ccd6f6] p-2 ' 
//         type="text"
//          placeholder='Name'
//           name='name'  
//          value={formData.name}
//           onChange={handleChange}  />
//         <input className='my-4 p-2 bg-[#ccd6f6]'
//          type="email"  
//          placeholder='Email' 
//          name='email'
//          value={formData.email}
//          onChange={handleChange}  />
//         <textarea className='bg-[#ccd6f6] p-2'
//          name="messages"   rows="10" 
//          placeholder='Messages'
//          value={formData.messages}
//          onChange={handleChange} ></textarea>
//         <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Lets collaborate</button>
//       </form>
//     </div>
//   )
// }

// export default Contact
