import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Send, Mail, User, MessageSquare, CheckCircle, } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

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
      alert('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div name='contact' className='w-full min-h-screen bg-[#08192f] text-gray-300 py-12'>
      <div className='max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <p className='text-4xl sm:text-5xl font-bold inline border-b-4 border-pink-600 text-gray-300 pb-2'>
            Contact
          </p>
          <p className='text-gray-400 text-lg mt-4 max-w-lg mx-auto'>
            Looking for a MERN Stack Developer or have a project in mind? Let's connect.
          </p>
        </div>

        {/* Email Info */}
        <div className='text-center mb-8'>
          <a 
            href='mailto:sadikalike7@gmail.com'
            className='inline-flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors duration-300'
          >
            <Mail className='w-5 h-5' />
            <span className='text-lg'>sadikalike7@gmail.com</span>
          </a>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className='mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3 text-green-400 animate-fadeIn'>
            <CheckCircle className='w-5 h-5 flex-shrink-0' />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </div>
        )}

        {/* Form */}
        <form 
          onSubmit={handleSubmit} 
          className='max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-pink-500/30 transition-all duration-500'
        >
          {/* Name Field */}
          <div className='mb-6'>
            <label className='flex items-center gap-2 text-gray-400 mb-2 text-sm font-medium'>
              <User className={`w-4 h-4 ${focusedField === 'name' ? 'text-pink-500' : 'text-gray-500'}`} />
              Your Name
            </label>
            <input
              className='w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300'
              type="text"
              placeholder='John Doe'
              name='name'
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              required
            />
          </div>

          {/* Email Field */}
          <div className='mb-6'>
            <label className='flex items-center gap-2 text-gray-400 mb-2 text-sm font-medium'>
              <Mail className={`w-4 h-4 ${focusedField === 'email' ? 'text-pink-500' : 'text-gray-500'}`} />
              Email Address
            </label>
            <input
              className='w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300'
              type="email"
              placeholder='john@example.com'
              name='email'
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              required
            />
          </div>

          {/* Message Field */}
          <div className='mb-8'>
            <label className='flex items-center gap-2 text-gray-400 mb-2 text-sm font-medium'>
              <MessageSquare className={`w-4 h-4 ${focusedField === 'message' ? 'text-pink-500' : 'text-gray-500'}`} />
              Your Message
            </label>
            <textarea
              className='w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none'
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className='group relative w-full px-6 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-600/30 disabled:opacity-70 disabled:cursor-not-allowed'
          >
            <span className='relative z-10 flex items-center justify-center gap-2'>
              {isLoading ? (
                <>
                  <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className='w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300' />
                </>
              )}
            </span>
            <div className='absolute inset-0 bg-gradient-to-r from-pink-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </button>

          {/* Form Footer */}
          <p className='text-center text-gray-500 text-sm mt-6'>
            I'll get back to you within 24-48 hours
          </p>
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
