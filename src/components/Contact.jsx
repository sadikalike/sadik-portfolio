import React, { useState } from 'react'
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <div name='contact' className='min-h-screen bg-gradient-to-br from-[#0a192f] via-[#0d2b4a] to-[#08192f] flex justify-center items-center p-4 sm:p-6 lg:p-8'>
      <div className='w-full max-w-2xl'>
        {/* Header Section */}
        <div className='text-center mb-10'>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-100 mb-4'>
            Get in <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'>Touch</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6'></div>
          <p className='text-gray-400 text-lg max-w-lg mx-auto'>
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>

        {/* Contact Info Card */}
        <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700/50'>
          <div className='flex items-center justify-center gap-3 text-gray-300'>
            <Mail className='w-5 h-5 text-pink-500' />
            <span className='text-lg'>sadikalike7@gmail.com</span>
          </div>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className='mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3 text-green-400 animate-fadeIn'>
            <CheckCircle className='w-5 h-5 flex-shrink-0' />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </div>
        )}

        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 shadow-2xl'
        >
          {/* Name Input */}
          <div className='mb-6'>
            <label className='flex items-center gap-2 text-gray-300 mb-2 text-sm font-medium'>
              <User className='w-4 h-4 text-pink-500' />
              Your Name
            </label>
            <input
              className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300'
              type="text"
              placeholder='John Doe'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Input */}
          <div className='mb-6'>
            <label className='flex items-center gap-2 text-gray-300 mb-2 text-sm font-medium'>
              <Mail className='w-4 h-4 text-pink-500' />
              Email Address
            </label>
            <input
              className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300'
              type="email"
              placeholder='john@example.com'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message Input */}
          <div className='mb-6'>
            <label className='flex items-center gap-2 text-gray-300 mb-2 text-sm font-medium'>
              <MessageSquare className='w-4 h-4 text-pink-500' />
              Your Message
            </label>
            <textarea
              className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none'
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`group relative w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
              isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-pink-500/25'
            }`}
          >
            <span className='flex items-center justify-center gap-2'>
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
          </button>

          {/* Form Footer */}
          <p className='text-center text-gray-500 text-sm mt-4'>
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
